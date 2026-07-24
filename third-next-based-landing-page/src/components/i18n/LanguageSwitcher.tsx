import Link from "next/link";
import { cn } from "@/lib/utils";
import { homePath, privacyPath, type Locale } from "@/lib/site";

type LanguageSwitcherProps = {
  locale: Locale;
  /** Which page pair to switch between. Defaults to home. */
  page?: "home" | "privacy";
  className?: string;
};

function pathForPage(page: LanguageSwitcherProps["page"], locale: Locale) {
  if (page === "privacy") return privacyPath(locale);
  return homePath(locale);
}

export function LanguageSwitcher({
  locale,
  page = "home",
  className,
}: LanguageSwitcherProps) {
  const fiPath = pathForPage(page, "fi");
  const enPath = pathForPage(page, "en");

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md border border-white/10 bg-white/5 p-0.5 text-xs font-medium",
        className
      )}
      role="group"
      aria-label={locale === "fi" ? "Valitse kieli" : "Select language"}
    >
      <Link
        href={fiPath}
        hrefLang="fi"
        className={cn(
          "rounded px-2.5 py-1 transition-colors",
          locale === "fi"
            ? "bg-white/10 text-white"
            : "text-white/70 hover:text-white"
        )}
        aria-current={locale === "fi" ? "page" : undefined}
      >
        FI
      </Link>
      <Link
        href={enPath}
        hrefLang="en"
        className={cn(
          "rounded px-2.5 py-1 transition-colors",
          locale === "en"
            ? "bg-white/10 text-white"
            : "text-white/70 hover:text-white"
        )}
        aria-current={locale === "en" ? "page" : undefined}
      >
        EN
      </Link>
    </div>
  );
}
