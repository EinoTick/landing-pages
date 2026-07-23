"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WorkflowHero() {
  return (
    <div className="relative z-10 text-center space-y-8 py-16 sm:py-20 px-4">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 flex justify-center"
      >
        <div className="mt-8 h-[61.6rem] w-[56rem] max-w-[92vw] -translate-y-[300px] rounded-[50%] bg-[radial-gradient(ellipse_100%_110%_at_50%_45%,rgba(147,197,253,0.14)_0%,rgba(125,211,252,0.10)_28%,rgba(96,165,250,0.06)_50%,rgba(59,130,246,0.03)_68%,transparent_85%)] blur-3xl opacity-75" />
      </div>
      <div className="flex justify-center">
        <Link
          href="/workflow"
          className="inline-flex opacity-90 transition-opacity hover:opacity-100"
          aria-label="ET Logic"
        >
          <Image
            src="/images/et-logic-logo-svg.svg"
            alt="ET Logic"
            width={148}
            height={99}
            className="h-9 w-auto"
            priority
          />
        </Link>
      </div>

      <div className="space-y-5">
        <p className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-400/10 px-4 py-1.5 text-sm font-medium text-green-300">
          <GitBranch className="w-4 h-4 text-green-400" />
          Free workflow demo — zero risk
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.2] max-w-4xl mx-auto break-words">
          <span className="block bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent pb-1">
            Custom workflow software
          </span>
          <span className="block bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent pb-1">
            built around how you operate.
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto">
          I design and ship workflow systems that replace spreadsheets,
          email chains, and manual hand-offs—with clear states, ownership,
          and audit trails your team can trust.
        </p>
        <p className="text-base md:text-lg text-white/50 max-w-xl mx-auto">
          I build a free demo of your workflow first. See it working, test the
          fit, and walk away if it&apos;s not right—no contract, no invoice.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <Button size="lg" className="group w-full sm:w-auto" asChild>
          <a href="#contact">
            Request a free demo
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
        <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
          <a href="#capabilities">What I build</a>
        </Button>
      </motion.div>
    </div>
  );
}
