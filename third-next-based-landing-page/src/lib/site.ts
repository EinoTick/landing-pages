import type { Metadata } from "next";

export const LOCALES = ["fi", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://etlogic.fi"
  );
}

export const sitePaths = {
  home: { fi: "/", en: "/en" } as const,
  privacy: { fi: "/tietosuoja", en: "/en/privacy" } as const,
  workflow: { en: "/workflow" } as const,
};

export function absoluteUrl(path: string): string {
  return `${getSiteUrl()}${path}`;
}

type HreflangPaths = {
  fi?: string;
  en?: string;
  xDefault?: string;
  /** Path for this page's canonical URL, e.g. "/" or "/en/privacy". */
  canonical?: string;
};

function buildLanguageMap(paths: HreflangPaths): Record<string, string> {
  const languages: Record<string, string> = {};

  if (paths.fi) languages.fi = absoluteUrl(paths.fi);
  if (paths.en) languages.en = absoluteUrl(paths.en);

  const xDefault = paths.xDefault ?? paths.fi ?? paths.en;
  if (xDefault) languages["x-default"] = absoluteUrl(xDefault);

  return languages;
}

export function buildHreflangAlternates(
  paths: HreflangPaths
): NonNullable<Metadata["alternates"]> {
  return {
    ...(paths.canonical ? { canonical: absoluteUrl(paths.canonical) } : {}),
    languages: buildLanguageMap(paths),
  };
}

export function buildSitemapLanguageAlternates(
  paths: HreflangPaths
): { languages: Record<string, string> } {
  return { languages: buildLanguageMap(paths) };
}

/** Open Graph / Twitter image — keep this on page-level openGraph too (page OG replaces layout OG). */
export const siteOgImage = {
  url: "/images/og-image.png",
  width: 1200,
  height: 630,
  alt: "ET Logic",
} as const;

export function buildPageOpenGraph(options: {
  title: string;
  description: string;
  locale: "fi_FI" | "en_US";
  path: string;
}): NonNullable<Metadata["openGraph"]> {
  return {
    title: options.title,
    description: options.description,
    type: "website",
    locale: options.locale,
    siteName: "ET Logic",
    url: absoluteUrl(options.path),
    images: [siteOgImage],
  };
}

/** Shared layout metadata for (fi)/(en) route groups. Canonicals stay page-level. */
export function buildLocaleLayoutMetadata(locale: Locale): Metadata {
  const ogLocale = locale === "fi" ? "fi_FI" : "en_US";

  return {
    metadataBase: new URL(getSiteUrl()),
    applicationName: "ET Logic",
    manifest: "/images/site.webmanifest",
    icons: {
      icon: [
        { url: "/images/favicon.ico", sizes: "48x48" },
        { url: "/images/favicon.svg", type: "image/svg+xml" },
        {
          url: "/images/favicon-96x96.png",
          sizes: "96x96",
          type: "image/png",
        },
        {
          url: "/images/web-app-manifest-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          url: "/images/web-app-manifest-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
      apple: [
        {
          url: "/images/apple-touch-icon.png",
          sizes: "180x180",
          type: "image/png",
        },
      ],
    },
    openGraph: {
      type: "website",
      siteName: "ET Logic",
      locale: ogLocale,
      images: [siteOgImage],
    },
    twitter: {
      card: "summary_large_image",
      images: [siteOgImage.url],
    },
  };
}

export function alternateLocale(locale: Locale): Locale {
  return locale === "fi" ? "en" : "fi";
}

export function homePath(locale: Locale): string {
  return sitePaths.home[locale];
}

export function privacyPath(locale: Locale): string {
  return sitePaths.privacy[locale];
}
