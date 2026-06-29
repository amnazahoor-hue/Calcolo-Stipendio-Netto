import sharp from "sharp";
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const input = join(root, "public", "images", "logo.jpeg");
const logoWebp = join(root, "public", "images", "logo.webp");
const faviconWebp = join(root, "public", "favicon.webp");
const appleIcon = join(root, "public", "apple-icon.webp");

function removeLightBackground(data, info) {
  const pixels = Buffer.from(data);
  const { width, height, channels } = info;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * channels;
      const r = pixels[i];
      const g = pixels[i + 1];
      const b = pixels[i + 2];
      const avg = (r + g + b) / 3;
      const spread = Math.max(r, g, b) - Math.min(r, g, b);

      const isBackground =
        (avg > 185 && spread < 28) ||
        (r > 210 && g > 210 && b > 210) ||
        (avg > 170 && spread < 12);

      if (isBackground) {
        pixels[i + 3] = 0;
      }
    }
  }

  return pixels;
}

async function encodeWebpUnderLimit(pipeline, outputPath, maxBytes = 100 * 1024) {
  for (const quality of [88, 82, 76, 70, 64, 58]) {
    const buffer = await pipeline.clone().webp({ quality, effort: 6, alphaQuality: 100 }).toBuffer();
    if (buffer.length <= maxBytes) {
      writeFileSync(outputPath, buffer);
      return { quality, size: buffer.length };
    }
  }

  const buffer = await pipeline.webp({ quality: 52, effort: 6, alphaQuality: 90 }).toBuffer();
  writeFileSync(outputPath, buffer);
  return { quality: 52, size: buffer.length };
}

const resized = await sharp(input)
  .resize(512, 512, { fit: "inside", withoutEnlargement: true })
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const transparent = removeLightBackground(resized.data, resized.info);

const logoPipeline = sharp(transparent, {
  raw: {
    width: resized.info.width,
    height: resized.info.height,
    channels: 4,
  },
}).trim({ threshold: 10 });

const logoMeta = await logoPipeline.metadata();
const logoResult = await encodeWebpUnderLimit(logoPipeline, logoWebp);

const faviconPipeline = sharp(transparent, {
  raw: {
    width: resized.info.width,
    height: resized.info.height,
    channels: 4,
  },
})
  .trim({ threshold: 10 })
  .resize(64, 64, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } });

writeFileSync(
  faviconWebp,
  await faviconPipeline.webp({ quality: 85, effort: 6, alphaQuality: 100 }).toBuffer()
);

const applePipeline = sharp(transparent, {
  raw: {
    width: resized.info.width,
    height: resized.info.height,
    channels: 4,
  },
})
  .trim({ threshold: 10 })
  .resize(180, 180, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } });

writeFileSync(
  appleIcon,
  await applePipeline.webp({ quality: 85, effort: 6, alphaQuality: 100 }).toBuffer()
);

console.log(
  JSON.stringify(
    {
      logoWebp: logoResult,
      dimensions: { width: logoMeta.width, height: logoMeta.height },
      faviconBytes: readFileSync(faviconWebp).length,
      appleBytes: readFileSync(appleIcon).length,
    },
    null,
    2
  )
);
