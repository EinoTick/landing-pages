import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { PrivacyPolicyContent } from "@/components/legal/PrivacyPolicyContent";
import {
  buildHreflangAlternates,
  buildPageOpenGraph,
  siteOgImage,
} from "@/lib/site";

const title = "Privacy Policy";
const description =
  "Privacy policy: how contact form data is processed and what rights you have.";

export const metadata: Metadata = {
  title,
  description,
  robots: { index: true, follow: true },
  openGraph: buildPageOpenGraph({
    title,
    description,
    locale: "en_US",
    path: "/en/privacy",
  }),
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
