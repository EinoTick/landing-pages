import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { PrivacyPolicyContent } from "@/components/legal/PrivacyPolicyContent";
import { buildHreflangAlternates, siteOgImage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy: how contact form data is processed and what rights you have.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Privacy Policy",
    description:
      "Privacy policy: how contact form data is processed and what rights you have.",
    type: "website",
    locale: "en_US",
    images: [siteOgImage],
  },
  twitter: {
    card: "summary_large_image",
    images: [siteOgImage.url],
  },
  alternates: buildHreflangAlternates({
    fi: "/tietosuoja",
    en: "/en/privacy",
    xDefault: "/tietosuoja",
    canonical: "/en/privacy",
  }),
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      backHref="/en"
      backLabel="Back to home"
      locale="en"
    >
      <PrivacyPolicyContent locale="en" />
    </LegalPageLayout>
  );
}
