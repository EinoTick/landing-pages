"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "For side projects and experimentation.",
    features: [
      "10,000 events/month",
      "3 workflows",
      "Email channel",
      "Community support",
      "7-day log retention",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/mo",
    description: "For growing teams shipping to production.",
    features: [
      "500,000 events/month",
      "Unlimited workflows",
      "All channels",
      "Priority support",
      "90-day log retention",
      "Custom branding",
      "Team collaboration",
    ],
    cta: "Start Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with advanced needs.",
    features: [
      "Unlimited events",
      "Unlimited everything",
      "Self-hosted option",
      "Dedicated support",
      "Unlimited retention",
      "SSO & RBAC",
      "SLA guarantee",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-600/6 blur-3xl" />
      </div>

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
            Pricing
          </span>
          <h2 className="mb-4 text-3xl font-bold text-slate-50 sm:text-4xl md:text-5xl">
            Simple,{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              transparent
            </span>{" "}
            pricing
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Start free. Scale as you grow. No hidden fees.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl border backdrop-blur-xl ${
                plan.popular
                  ? "border-indigo-500/30 bg-slate-900/60"
                  : "border-white/[0.08] bg-slate-900/40"
              }`}
              style={{
                boxShadow: plan.popular
                  ? "0 0 60px -12px rgba(99, 102, 241, 0.15), inset 0 1px 0 0 rgba(148, 163, 184, 0.05)"
                  : "inset 0 1px 0 0 rgba(148, 163, 184, 0.05)",
              }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-3 py-1 text-xs font-medium text-white shadow-lg shadow-indigo-500/25">
                    <Sparkles className="h-3 w-3" strokeWidth={1.5} />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <h3 className="mb-2 text-lg font-semibold text-slate-50">
                  {plan.name}
                </h3>
                <p className="mb-6 text-sm text-slate-500">
                  {plan.description}
                </p>

                <div className="mb-8">
                  <span className="text-4xl font-bold text-slate-50">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-slate-500">
                      {plan.period}
                    </span>
                  )}
                </div>

                <a
                  href="#"
                  className={`mb-8 block rounded-xl py-3 text-center text-sm font-medium transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white hover:shadow-lg hover:shadow-indigo-500/25"
                      : "border border-white/[0.08] text-slate-300 hover:border-white/[0.15] hover:text-white"
                  }`}
                >
                  {plan.cta}
                </a>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2.5 text-sm text-slate-400"
                    >
                      <Check
                        className={`h-4 w-4 ${
                          plan.popular ? "text-indigo-400" : "text-slate-600"
                        }`}
                        strokeWidth={1.5}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
