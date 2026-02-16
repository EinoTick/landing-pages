import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

const plans = [
  {
    name: "Landing Page",
    description: "High-converting landing page for your product or campaign.",
    price: "From $2,500",
    features: ["Single page, fully responsive", "SEO & performance optimized", "Contact form & analytics", "2 revision rounds"],
    cta: "Get quote",
    featured: false,
  },
  {
    name: "React App",
    description: "Custom web application built for scale and maintainability.",
    price: "From $8,000",
    features: ["Full-stack React application", "API design & implementation", "Testing & CI/CD setup", "Documentation & handoff"],
    cta: "Get quote",
    featured: true,
  },
  {
    name: "Ongoing Partnership",
    description: "Retainer for ongoing feature work and support.",
    price: "Custom",
    features: ["Dedicated sprint capacity", "Priority support", "Architecture guidance", "No long-term lock-in"],
    cta: "Let's talk",
    featured: false,
  },
]

export function PricingCards() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            One-off projects or ongoing partnerships. No hidden fees.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card
                className={`relative h-full flex flex-col border-white/10 backdrop-blur-xl ${
                  plan.featured
                    ? "border-indigo-500/40 bg-indigo-500/5 ring-1 ring-indigo-500/20"
                    : "bg-white/5"
                }`}
              >
                <CardHeader>
                  <CardTitle className="text-xl text-white">{plan.name}</CardTitle>
                  <CardDescription className="text-white/70">
                    {plan.description}
                  </CardDescription>
                  <p className="text-2xl font-semibold text-white pt-2">{plan.price}</p>
                </CardHeader>
                <CardContent className="flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-white/80">
                      <Check className="w-4 h-4 shrink-0 text-green-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button
                    variant={plan.featured ? "default" : "outline"}
                    className="w-full"
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
