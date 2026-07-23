import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { PrivacyPolicyContent } from "@/components/legal/PrivacyPolicyContent";
import {
  buildHreflangAlternates,
  buildPageOpenGraph,
  siteOgImage,
} from "@/lib/site";

const title = "Tietosuojaseloste";
const description =
  "Tietosuojaseloste: miten yhteystietolomakkeen tiedot käsitellään ja mitä oikeuksia sinulla on.";

export const metadata: Metadata = {
  title,
  description,
  robots: { index: true, follow: true },
  openGraph: buildPageOpenGraph({
    title,
    description,
    locale: "fi_FI",
    path: "/tietosuoja",
  }),
  twitter: {
    card: "summary_large_image",
    images: [siteOgImage.url],
  },
  alternates: buildHreflangAlternates({
    fi: "/tietosuoja",
    en: "/en/privacy",
    xDefault: "/tietosuoja",
    canonical: "/tietosuoja",
  }),
};

export default function TietosuojaPage() {
  return (
    <LegalPageLayout
      title="Tietosuojaseloste"
      backHref="/"
      backLabel="Takaisin etusivulle"
      locale="fi"
    >
      <PrivacyPolicyContent locale="fi" />
    </LegalPageLayout>
  );
}
