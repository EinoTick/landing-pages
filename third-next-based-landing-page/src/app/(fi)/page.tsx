import type { Metadata } from "next";
import { HomePage } from "@/components/landing/HomePage";
import {
  buildHreflangAlternates,
  buildPageOpenGraph,
  siteOgImage,
} from "@/lib/site";

const title =
  "Senior full-stack -insinööri — SaaS-MVP:t ja räätälöidyt alustat";
const description =
  "Tuotantovalmiit verkkosovellukset ja räätälöidyt alustat. Senior-tason ohjelmistokehitystä SaaS-MVP:ille—yksi insinööri, koko full stack. Ilmainen demo ensin.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: buildPageOpenGraph({
    title,
    description:
      "Tuotantovalmiit verkkosovellukset ja räätälöidyt alustat. Ilmainen demo ennen sitoutumista.",
    locale: "fi_FI",
    path: "/",
  }),
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
