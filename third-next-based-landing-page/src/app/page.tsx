import type { Metadata } from "next";
import { HomePage } from "@/components/landing/HomePage";
import { buildHreflangAlternates } from "@/lib/site";

export const metadata: Metadata = {
  title: "Senior Full-Stack Engineer — SaaS-MVP:t ja räätälöidyt alustat",
  description:
    "Tuotantovalmiit verkkosovellukset ja räätälöidyt alustat. Senior-tason kehitystä SaaS-MVP:ille—koko pinon haltuun ottava yksi insinööri. Ilmainen demo ensin.",
  openGraph: {
    title: "Senior Full-Stack Engineer — SaaS-MVP:t ja räätälöidyt alustat",
    description:
      "Tuotantovalmiit verkkosovellukset ja räätälöidyt alustat. Ilmainen demo ennen sitoutumista.",
    type: "website",
    locale: "fi_FI",
  },
  alternates: buildHreflangAlternates({
    fi: "/",
    en: "/en",
    xDefault: "/",
  }),
};

export default function Page() {
  return <HomePage locale="fi" />;
}
