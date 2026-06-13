import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();

  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          fi: `${base}/`,
          en: `${base}/en`,
        },
      },
    },
    {
      url: `${base}/en`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          fi: `${base}/`,
          en: `${base}/en`,
        },
      },
    },
    {
      url: `${base}/workflow`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/tietosuoja`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          fi: `${base}/tietosuoja`,
          en: `${base}/en/privacy`,
        },
      },
    },
    {
      url: `${base}/en/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          fi: `${base}/tietosuoja`,
          en: `${base}/en/privacy`,
        },
      },
    },
  ];
}
