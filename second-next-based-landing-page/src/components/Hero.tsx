"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-40 pb-24">
      {/* Background radial glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-gradient-to-b from-indigo-500/20 via-violet-500/10 to-transparent blur-3xl" />
        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full bg-indigo-600/10 blur-3xl" />
      </div>

      {/* Grid pattern background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 flex max-w-4xl flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-slate-900/60 px-4 py-1.5 backdrop-blur-xl"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 glow-pulse" />
          <span className="text-sm text-slate-400">
            v2.0 — Now with AI-powered workflows
          </span>
          <ArrowRight className="h-3 w-3 text-slate-500" strokeWidth={1.5} />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 text-5xl font-bold leading-tight tracking-tight text-slate-50 sm:text-6xl md:text-7xl"
        >
          The notification
          <br />
          infrastructure for{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
            modern teams
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl"
        >
          Build, manage, and deliver notifications across every channel. One
          unified API for email, SMS, push, in-app, and chat.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#"
            className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-8 py-3.5 text-sm font-medium text-white transition-all hover:shadow-xl hover:shadow-indigo-500/25"
          >
            Start Building
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} />
          </a>
          <a
            href="#"
            className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-slate-900/50 px-8 py-3.5 text-sm font-medium text-slate-300 backdrop-blur-xl transition-all hover:border-white/[0.15] hover:text-white"
          >
            <Play className="h-4 w-4" strokeWidth={1.5} />
            Watch Demo
          </a>
        </motion.div>

        {/* Trusted by */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 flex flex-col items-center gap-6"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-slate-600">
            Trusted by forward-thinking teams
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {["Vercel", "Linear", "Raycast", "Resend", "Clerk"].map(
              (brand) => (
                <span
                  key={brand}
                  className="text-lg font-semibold text-slate-700 transition-colors hover:text-slate-500"
                >
                  {brand}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
