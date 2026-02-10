import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { SectionWrapper } from "./shared/SectionWrapper";
import { GlowButton } from "./shared/GlowButton";
import { Badge } from "@/components/ui/badge";
import { pricingTiers } from "@/data/pricing";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <SectionWrapper id="pricing">
      <motion.div variants={fadeUp} className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Transparent <span className="gradient-text">Pricing</span>
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          No hidden fees, no surprises. Choose the package that fits your stage
          and scale as you grow.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {pricingTiers.map((tier) => (
          <motion.div
            key={tier.name}
            variants={fadeUp}
            className={cn(
              "relative rounded-2xl p-8 transition-all duration-300",
              tier.highlighted
                ? "bg-gradient-to-b from-indigo-500/10 to-slate-900/50 border-2 border-indigo-500/50 shadow-xl shadow-indigo-500/10"
                : "glass-card"
            )}
          >
            {tier.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-indigo-500 text-white border-0 shadow-lg">
                  {tier.badge}
                </Badge>
              </div>
            )}

            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-white mb-2">
                {tier.name}
              </h3>
              <div className="mb-2">
                {tier.priceNote && (
                  <span className="text-sm text-slate-500">{tier.priceNote} </span>
                )}
                <span className="text-4xl font-bold text-white">
                  {tier.price}
                </span>
              </div>
              <p className="text-sm text-slate-400">{tier.description}</p>
            </div>

            <ul className="space-y-4 mb-8">
              {tier.features.map((feature) => (
                <li key={feature.text} className="flex items-start gap-3">
                  {feature.included ? (
                    <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <X className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                  )}
                  <span
                    className={cn(
                      "text-sm",
                      feature.included ? "text-slate-300" : "text-slate-600"
                    )}
                  >
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            <GlowButton
              variant={tier.highlighted ? "primary" : "secondary"}
              className="w-full"
            >
              {tier.cta}
            </GlowButton>
          </motion.div>
        ))}
      </div>

      <motion.p
        variants={fadeUp}
        className="text-center text-sm text-slate-500 mt-10"
      >
        All packages include source code ownership, documentation, and
        deployment assistance.
      </motion.p>
    </SectionWrapper>
  );
}
