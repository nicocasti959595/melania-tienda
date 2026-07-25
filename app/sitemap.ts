import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { productos } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...productos.map((p) => ({
      url: `${site.url}/p/${p.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    { url: `${site.url}/privacidad`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${site.url}/terminos`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
