"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { HomeContent } from "@/content/home/types";

type HeroProps = {
  content: HomeContent["hero"];
};

export function Hero({ content }: HeroProps) {
  return (
    <div className="relative z-10 text-center space-y-8 py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.2] max-w-5xl mx-auto">
          <span className="block bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent pb-1">
            {content.titleLine1}
          </span>
          <span className="block bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent pb-1">
            {content.titleLine2}
          </span>
        </h1>
        <p className="inline-flex items-center rounded-full border border-green-400/30 bg-green-400/10 px-4 py-1.5 text-sm font-medium text-green-300">
          {content.badge}
        </p>
        <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto">
          {content.subtitle}
        </p>
        <p className="text-base md:text-lg text-white/50 max-w-xl mx-auto">
          {content.description}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <Button size="lg" className="group w-full sm:w-auto" asChild>
          <a href="#contact">
            {content.primaryCta}
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
        <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
          <a href="#work">{content.secondaryCta}</a>
        </Button>
      </motion.div>
    </div>
  );
}
