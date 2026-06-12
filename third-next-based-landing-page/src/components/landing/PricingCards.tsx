"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Free demo",
    description:
      "A focused, working demo of your idea—built before any contract or invoice.",
    price: "$0",
    features: [
      "Scoped to your core use case",
      "Clickable prototype you can evaluate",
      "Honest fit assessment afterward",
      "Walk away anytime — zero obligation",
    ],
    cta: "Request a free demo",
    featured: true,
  },
  {
    name: "SaaS MVP Build",
    description:
      "After a successful demo: take your product from spec to a launched, paying-customer-ready SaaS in 6–10 weeks.",
    price: "$8,000+",
    features: [
      "Architecture planning",
      "Database design",
      "Authentication",
      "API integrations",
      "4 weeks of post-launch bug fixes",
    ],
    cta: "Discuss a full build",
    featured: false,
  },
  {
    name: "Custom Platform",
    description:
      "Heavier engineering work after we've proven the approach: complex products, internal tools, and migrations.",
    price: "Custom",
    features: [
      "Complex workflows",
      "Internal tools",
      "Legacy codebase refactoring",
      "Headless commerce migrations",
    ],
    cta: "Discuss scope",
    featured: false,
  },
  {
    name: "Monthly Maintenance & Retainer",
    description:
      "An always-on senior engineer on your team—without the full-time hire.",
    price: "$1,500/mo",
    features: [
      "Guaranteed async availability",
      "Security patches",
      "Performance monitoring",
      "Continuous feature development",
    ],
    cta: "Check Availability",
    note: "Limited to 3 ongoing clients.",
    featured: false,
  },
];

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
            Engagement options
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Every engagement starts with a free demo. Only move to a paid build
            when you&apos;re confident it&apos;s the right fit.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
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
                    ? "border-green-400/40 bg-green-400/[0.04] ring-1 ring-green-400/30"
                    : "bg-white/5"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-green-400 text-slate-950 shadow-lg shadow-green-400/20">
                    Start here
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl text-white">{plan.name}</CardTitle>
                  <CardDescription className="text-white/70">
                    {plan.description}
                  </CardDescription>
                  <p className="text-3xl font-semibold text-white pt-2">{plan.price}</p>
                </CardHeader>
                <CardContent className="flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2 text-[15px] text-white/85 leading-7">
                      <Check className="w-4 h-4 mt-1 shrink-0 text-green-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </CardContent>
                <CardFooter className="flex flex-col items-stretch gap-2">
                  <Button
                    variant={plan.featured ? "default" : "outline"}
                    className="w-full"
                    size="lg"
                    asChild
                  >
                    <a href="#contact">{plan.cta}</a>
                  </Button>
                  {"note" in plan && plan.note ? (
                    <p className="text-[11px] text-white/45 text-center tracking-wide">
                      {plan.note}
                    </p>
                  ) : null}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
