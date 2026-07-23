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

/** Shared layout metadata for (fi)/(en) route groups. Canonicals stay page-level. */
export function buildLocaleLayoutMetadata(locale: Locale): Metadata {
  const ogLocale = locale === "fi" ? "fi_FI" : "en_US";

  return {
    metadataBase: new URL(getSiteUrl()),
    applicationName: "ET Logic",
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "48x48" },
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: [
        {
          url: "/apple-touch-icon.png",
          sizes: "180x180",
          type: "image/png",
        },
      ],
    },
    openGraph: {
      type: "website",
      siteName: "ET Logic",
      locale: ogLocale,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "ET Logic",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: ["/og-image.png"],
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
