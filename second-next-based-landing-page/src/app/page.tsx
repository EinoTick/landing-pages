import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import Integrations from "@/components/Integrations";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-y-24 md:gap-y-32">
          <Hero />
          <BentoGrid />
          <Integrations />
          <Pricing />
          <CTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
