import type { Metadata } from "next";
import { HomePage } from "@/components/landing/HomePage";
import { buildHreflangAlternates, siteOgImage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Senior full-stack -insinööri — SaaS-MVP:t ja räätälöidyt alustat",
  description:
    "Tuotantovalmiit verkkosovellukset ja räätälöidyt alustat. Senior-tason ohjelmistokehitystä SaaS-MVP:ille—yksi insinööri, koko full stack. Ilmainen demo ensin.",
  openGraph: {
    title: "Senior full-stack -insinööri — SaaS-MVP:t ja räätälöidyt alustat",
    description:
      "Tuotantovalmiit verkkosovellukset ja räätälöidyt alustat. Ilmainen demo ennen sitoutumista.",
    type: "website",
    locale: "fi_FI",
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
    canonical: "/",
  }),
};

export default function Page() {
  return <HomePage locale="fi" />;
}
