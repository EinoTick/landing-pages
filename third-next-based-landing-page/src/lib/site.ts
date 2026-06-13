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
};

export function buildHreflangAlternates(
  paths: HreflangPaths
): NonNullable<Metadata["alternates"]> {
  const languages: Record<string, string> = {};

  if (paths.fi) languages.fi = absoluteUrl(paths.fi);
  if (paths.en) languages.en = absoluteUrl(paths.en);

  const xDefault = paths.xDefault ?? paths.fi ?? paths.en;
  if (xDefault) languages["x-default"] = absoluteUrl(xDefault);

  return { languages };
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
