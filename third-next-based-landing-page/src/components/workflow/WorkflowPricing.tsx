"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const plans = [
  {
    name: "Free workflow demo",
    description:
      "A working demo of your core process—built before any contract or invoice.",
    price: "$0",
    features: [
      "Mapped to your key workflow steps",
      "Clickable prototype to evaluate",
      "Honest fit assessment afterward",
      "Walk away anytime — zero obligation",
    ],
    cta: "Request a free demo",
    featured: true,
  },
  {
    name: "Full workflow build",
    description:
      "After a successful demo: from process mapping to a deployed app your team uses daily.",
    price: "Custom",
    features: [
      "Process discovery & scoping",
      "Roles, states & notifications",
      "Admin views & reporting basics",
      "Deployment & handover docs",
    ],
    cta: "Discuss a full build",
    featured: false,
  },
  {
    name: "Extend existing flow",
    description:
      "Add steps, integrations, or automation to a workflow system you already run.",
    price: "From $3,000",
    features: [
      "New stages or approval paths",
      "Third-party integrations",
      "Bulk actions & imports",
      "Performance improvements",
    ],
    cta: "Discuss an extension",
    featured: false,
  },
  {
    name: "Workflow retainer",
    description:
      "Ongoing improvements, fixes, and small features as your process evolves.",
    price: "$1,500/mo",
    features: [
      "Guaranteed async availability",
      "Priority bug fixes",
      "Incremental workflow changes",
      "Monitoring & small enhancements",
    ],
    cta: "Check availability",
    note: "Limited ongoing slots.",
    featured: false,
  },
];

export function WorkflowPricing() {
  return (
    <section id="pricing" className="py-24 px-4 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight text-white mb-4">
            How engagements work
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Every engagement starts with a free demo. Only move to a paid build
            when you&apos;re confident the workflow fits.
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
                  <CardTitle className="text-xl text-white">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    {plan.description}
                  </CardDescription>
                  <p className="text-3xl font-semibold text-white pt-2">
                    {plan.price}
                  </p>
                </CardHeader>
                <CardContent className="flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2 text-[15px] text-white/85 leading-7"
                    >
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
