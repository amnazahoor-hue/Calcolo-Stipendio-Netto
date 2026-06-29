import type { MetadataRoute } from "next";
import { HOME_SLUG, SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    HOME_SLUG,
    "/privacy-policy",
    "/terms-and-conditions",
    "/disclaimer",
    "/contact",
    "/about-us",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === HOME_SLUG ? "weekly" : "monthly",
    priority: route === HOME_SLUG ? 1 : 0.7,
  }));
}
