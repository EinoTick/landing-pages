import { MouseSpotlight } from "./components/landing/MouseSpotlight"
import { Hero } from "./components/landing/Hero"
import { FullStackCard } from "./components/landing/FullStackCard"
import { DevOpsCard } from "./components/landing/DevOpsCard"
import { TestingCard } from "./components/landing/TestingCard"
import { PerformanceCard } from "./components/landing/PerformanceCard"
import { PricingCards } from "./components/landing/PricingCards"
import { WhyUs } from "./components/landing/WhyUs"
import { Footer } from "./components/landing/Footer"

function App() {
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <MouseSpotlight />

      <div className="relative z-10">
        <Hero />

        <div className="max-w-7xl mx-auto px-4 pb-20">
          <div className="grid grid-cols-12 gap-4">
            <FullStackCard />
            <DevOpsCard />
            <TestingCard />
            <PerformanceCard />
          </div>
        </div>

        <WhyUs />

        <section id="pricing">
          <PricingCards />
        </section>

        <Footer />
      </div>
    </div>
  )
}

export default App
