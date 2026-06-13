import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { PrivacyPolicyContent } from "@/components/legal/PrivacyPolicyContent";
import { buildHreflangAlternates } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tietosuojaseloste",
  description:
    "Tietosuojaseloste: miten yhteystietolomakkeen tiedot käsitellään ja mitä oikeuksia sinulla on.",
  robots: { index: true, follow: true },
  alternates: buildHreflangAlternates({
    fi: "/tietosuoja",
    en: "/en/privacy",
    xDefault: "/tietosuoja",
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
