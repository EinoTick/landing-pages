import type { MetadataRoute } from "next";
import { getSiteUrl, sitePaths } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const homeFi = `${base}${sitePaths.home.fi}`;
  const homeEn = `${base}${sitePaths.home.en}`;
  const privacyFi = `${base}${sitePaths.privacy.fi}`;
  const privacyEn = `${base}${sitePaths.privacy.en}`;
  const workflowEn = `${base}${sitePaths.workflow.en}`;

  return [
    {
      url: homeFi,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          fi: homeFi,
          en: homeEn,
          "x-default": homeFi,
        },
      },
    },
    {
      url: homeEn,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          fi: homeFi,
          en: homeEn,
          "x-default": homeFi,
        },
      },
    },
    {
      url: workflowEn,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: workflowEn,
          "x-default": workflowEn,
        },
      },
    },
    {
      url: privacyFi,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          fi: privacyFi,
          en: privacyEn,
          "x-default": privacyFi,
        },
      },
    },
    {
      url: privacyEn,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          fi: privacyFi,
          en: privacyEn,
          "x-default": privacyFi,
        },
      },
    },
  ];
}
