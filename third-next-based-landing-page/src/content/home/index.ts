import type { Locale } from "@/lib/site";
import { enHomeContent } from "./en";
import { fiHomeContent } from "./fi";
import type { HomeContent } from "./types";

export type { HomeContent } from "./types";

export function getHomeContent(locale: Locale): HomeContent {
  return locale === "fi" ? fiHomeContent : enHomeContent;
}
