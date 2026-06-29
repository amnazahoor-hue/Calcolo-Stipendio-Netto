/**
 * Mirrors Verde Trust CSS custom properties in src/app/globals.css.
 * Tailwind is not wired into the build yet; this config is the token reference
 * for when utility classes are adopted.
 */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FBFAF7",
        surface: {
          DEFAULT: "#FFFFFF",
          subtle: "#F3F1EB",
        },
        text: {
          DEFAULT: "#14201B",
          secondary: "#5A6862",
          muted: "#8A968F",
        },
        border: {
          DEFAULT: "#E6E3DB",
          strong: "#D4D0C6",
        },
        primary: {
          DEFAULT: "#0F1E1A",
          hover: "#1C3530",
        },
        net: {
          DEFAULT: "#0E9F6E",
          hover: "#0B8A5F",
          tint: "#E7F4EE",
        },
        irpef: "#0B7A5E",
        inps: "#5B8DEF",
        "local-tax": "#E0A93F",
      },
      boxShadow: {
        focus: "0 0 0 3px rgba(14, 159, 110, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
