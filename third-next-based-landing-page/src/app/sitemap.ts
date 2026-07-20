import type { MetadataRoute } from "next";
import {
  absoluteUrl,
  buildSitemapLanguageAlternates,
  sitePaths,
} from "@/lib/site";

export const dynamic = "force-static";

type SitemapEntry = MetadataRoute.Sitemap[number];

function sitemapEntry(
  path: string,
  options: {
    changeFrequency: NonNullable<SitemapEntry["changeFrequency"]>;
    priority: number;
    hreflang?: Parameters<typeof buildSitemapLanguageAlternates>[0];
  }
): SitemapEntry {
  const { hreflang, ...rest } = options;

  return {
    url: absoluteUrl(path),
    lastModified: new Date(),
    ...rest,
    ...(hreflang ? { alternates: buildSitemapLanguageAlternates(hreflang) } : {}),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    sitemapEntry(sitePaths.home.fi, {
      changeFrequency: "monthly",
      priority: 1,
      hreflang: {
        fi: sitePaths.home.fi,
        en: sitePaths.home.en,
        xDefault: sitePaths.home.fi,
      },
    }),
    sitemapEntry(sitePaths.home.en, {
      changeFrequency: "monthly",
      priority: 1,
      hreflang: {
        fi: sitePaths.home.fi,
        en: sitePaths.home.en,
        xDefault: sitePaths.home.fi,
      },
    }),
    sitemapEntry(sitePaths.workflow.en, {
      changeFrequency: "monthly",
      priority: 0.8,
      hreflang: {
        en: sitePaths.workflow.en,
        xDefault: sitePaths.workflow.en,
      },
    }),
    sitemapEntry(sitePaths.privacy.fi, {
      changeFrequency: "yearly",
      priority: 0.3,
      hreflang: {
        fi: sitePaths.privacy.fi,
        en: sitePaths.privacy.en,
        xDefault: sitePaths.privacy.fi,
      },
    }),
    sitemapEntry(sitePaths.privacy.en, {
      changeFrequency: "yearly",
      priority: 0.3,
      hreflang: {
        fi: sitePaths.privacy.fi,
        en: sitePaths.privacy.en,
        xDefault: sitePaths.privacy.fi,
      },
    }),
  ];
}
