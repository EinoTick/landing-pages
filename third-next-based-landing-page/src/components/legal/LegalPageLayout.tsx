import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import type { Locale } from "@/lib/site";

type LegalPageLayoutProps = {
  title: string;
  backHref: string;
  backLabel: string;
  locale: Locale;
  children: ReactNode;
};

export function LegalPageLayout({
  title,
  backHref,
  backLabel,
  locale,
  children,
}: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="max-w-3xl mx-auto px-4 py-12 sm:py-16">
        <div className="mb-10 space-y-4">
          <LanguageSwitcher locale={locale} page="privacy" />
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {backLabel}
          </Link>
        </div>

        <main>
          <header className="mb-10 pb-8 border-b border-white/10">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {title}
            </h1>
          </header>

          <article className="prose-legal space-y-8 text-white/80 leading-relaxed">
            {children}
          </article>
        </main>

        <footer className="mt-16 pt-8 border-t border-white/10 text-xs text-white/40">
          <p>
            &copy; {new Date().getFullYear()} Eino —{" "}
            {locale === "fi"
              ? "Senior full-stack -insinööri"
              : "Senior Full-Stack Engineer"}
          </p>
        </footer>
      </div>
    </div>
  );
}
