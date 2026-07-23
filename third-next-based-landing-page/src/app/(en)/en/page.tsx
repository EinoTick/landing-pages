import type { Metadata } from "next";
import { HomePage } from "@/components/landing/HomePage";
import { buildHreflangAlternates, siteOgImage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Senior Full-Stack Engineer — SaaS MVPs & Custom Platforms",
  description:
    "Production-ready web applications and custom platforms. Senior-level development for SaaS MVPs—built by one engineer who owns the entire stack. Free demo first.",
  openGraph: {
    title: "Senior Full-Stack Engineer — SaaS MVPs & Custom Platforms",
    description:
      "Production-ready web applications and custom platforms. Free demo before you commit.",
    type: "website",
    locale: "en_US",
    images: [siteOgImage],
  },
  twitter: {
    card: "summary_large_image",
    images: [siteOgImage.url],
  },
  alternates: buildHreflangAlternates({
    fi: "/",
    en: "/en",
    xDefault: "/",
    canonical: "/en",
  }),
};

export default function EnHomePage() {
  return <HomePage locale="en" />;
}
