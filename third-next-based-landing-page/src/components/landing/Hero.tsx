"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <div className="relative z-10 text-center space-y-8 py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
          Production-Ready Web
          <br />
          Applications & Custom Platforms.
        </h1>
        <p className="inline-flex items-center rounded-full border border-green-400/30 bg-green-400/10 px-4 py-1.5 text-sm font-medium text-green-300">
          Free demo first — completely risk-free
        </p>
        <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto">
          Senior-level development for SaaS MVPs and complex internal tools—
          built and shipped by one engineer who owns the entire stack.
        </p>
        <p className="text-base md:text-lg text-white/50 max-w-xl mx-auto">
          I build you a free demo before any contract. See the approach, test
          the fit, and walk away if it&apos;s not right—zero cost, zero pressure.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-center justify-center gap-4"
      >
        <Button size="lg" className="group" asChild>
          <a href="#contact">
            Request a free demo
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="#work">See recent work</a>
        </Button>
      </motion.div>
    </div>
  );
}
