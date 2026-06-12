import { MouseSpotlight } from "@/components/landing/MouseSpotlight";
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

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <MouseSpotlight />

      <div className="relative z-10">
        <Hero />

        <TechStack />

        <div className="max-w-7xl mx-auto px-4 pb-20">
          <div className="grid grid-cols-12 gap-4">
            <FullStackCard />
            <DevOpsCard />
            <TestingCard />
            <PerformanceCard />
          </div>
        </div>

        <RecentWork />

        <WhyUs />

        <section id="pricing">
          <PricingCards />
        </section>

        <AboutMe />

        <ContactForm
          heading="Request a free demo"
          description="Tell me what you're building. If it's a good fit, I'll put together a free demo—no contract and no cost. Not the right match? I'll say so honestly."
        />

        <Footer />
      </div>
    </div>
  );
}
