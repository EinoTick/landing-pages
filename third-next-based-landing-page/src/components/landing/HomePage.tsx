import { MouseSpotlight } from "@/components/landing/MouseSpotlight";
import { HomeTopBar } from "@/components/landing/HomeTopBar";
import { Hero } from "@/components/landing/Hero";
import { TechStack } from "@/components/landing/TechStack";
import { FullStackCard } from "@/components/landing/FullStackCard";
import { DevOpsCard } from "@/components/landing/DevOpsCard";
import { TestingCard } from "@/components/landing/TestingCard";
import { PerformanceCard } from "@/components/landing/PerformanceCard";
import { PricingCards } from "@/components/landing/PricingCards";
import { WhyUs } from "@/components/landing/WhyUs";
import { RecentWork } from "@/components/landing/RecentWork";
import { AboutMe } from "@/components/landing/AboutMe";
import { ContactForm } from "@/components/landing/ContactForm";
import { Footer } from "@/components/landing/Footer";
import { getHomeContent } from "@/content/home";
import type { Locale } from "@/lib/site";

type HomePageProps = {
  locale: Locale;
};

export function HomePage({ locale }: HomePageProps) {
  const content = getHomeContent(locale);

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <MouseSpotlight />
      <HomeTopBar locale={locale} />

      <main className="relative z-10">
        <Hero content={content.hero} />
        <TechStack content={content.techStack} />
        <div id="services" className="max-w-7xl mx-auto px-4 pb-20 scroll-mt-20">
          <div className="grid grid-cols-12 gap-4">
            <FullStackCard content={content.fullStackCard} />
            <DevOpsCard content={content.devOpsCard} />
            <TestingCard content={content.testingCard} />
            <PerformanceCard content={content.performanceCard} />
          </div>
        </div>
        <RecentWork content={content.recentWork} />
        <WhyUs content={content.whyUs} />
        <PricingCards content={content.pricing} />
        <AboutMe content={content.about} />
        <ContactForm locale={locale} content={content.contact} />
      </main>
      <Footer locale={locale} content={content.footer} />
    </div>
  );
}
