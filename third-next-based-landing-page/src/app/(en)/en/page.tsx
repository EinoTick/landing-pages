import type { Metadata } from "next";
import { HomePage } from "@/components/landing/HomePage";
import {
  buildHreflangAlternates,
  buildPageOpenGraph,
  siteOgImage,
} from "@/lib/site";

const title = "Senior Full-Stack Engineer — SaaS MVPs & Custom Platforms";
const description =
  "Production-ready web applications and custom platforms. Senior-level development for SaaS MVPs—built by one engineer who owns the entire stack. Free demo first.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: buildPageOpenGraph({
    title,
    description:
      "Production-ready web applications and custom platforms. Free demo before you commit.",
    locale: "en_US",
    path: "/en",
  }),
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
