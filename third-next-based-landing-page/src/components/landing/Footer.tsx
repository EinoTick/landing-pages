import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import type { HomeContent } from "@/content/home/types";
import { homePath, privacyPath, type Locale } from "@/lib/site";

type FooterProps = {
  locale: Locale;
  content: HomeContent["footer"];
  logoHref?: string;
  showLanguageSwitcher?: boolean;
};

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/EinoTick",
    label: "GitHub",
    external: true,
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/eino-tick/",
    label: "LinkedIn",
    external: true,
  },
  {
    icon: Mail,
    href: "mailto:eino.developer@gmail.com",
    label: "Email",
    external: false,
  },
];

export function Footer({
  locale,
  content,
  logoHref,
  showLanguageSwitcher = true,
}: FooterProps) {
  const home = logoHref ?? homePath(locale);

  return (
    <footer className="bg-slate-950/80 backdrop-blur-xl border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 pt-12 pb-12">
        <div className="flex flex-col items-center gap-4 pb-6">
          {showLanguageSwitcher ? (
            <LanguageSwitcher locale={locale} page="home" />
          ) : null}
          <Link
            href={home}
            className="inline-flex opacity-90 transition-opacity hover:opacity-100"
            aria-label="ET Logic — home"
          >
            <Image
              src="/images/et-logic-logo-svg.svg"
              alt="ET Logic"
              width={148}
              height={99}
              className="h-10 w-auto"
            />
          </Link>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-8">
          {content.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center justify-items-center sm:justify-items-stretch text-center sm:text-left">
          <div className="sm:justify-self-start space-y-1">
            <p className="text-xs text-white/50">
              &copy; {new Date().getFullYear()} {content.copyrightRole}
            </p>
            <a
              href={privacyPath(locale)}
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              {content.privacyLabel}
            </a>
          </div>
          <p className="text-xs text-white/40 order-last sm:order-none sm:justify-self-center">
            {content.tagline}
          </p>
          <div className="flex items-center justify-center gap-2 sm:justify-self-end">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                {...(item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="flex items-center justify-center w-9 h-9 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-colors"
              >
                <item.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
