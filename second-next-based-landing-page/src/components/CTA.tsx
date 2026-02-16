"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-20">
      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-slate-900/50 p-12 text-center backdrop-blur-xl md:p-16"
          style={{
            boxShadow:
              "inset 0 1px 0 0 rgba(148, 163, 184, 0.05), 0 0 80px -20px rgba(99, 102, 241, 0.12)",
          }}
        >
          {/* Background glows */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/4 top-0 h-[300px] w-[300px] rounded-full bg-indigo-500/15 blur-3xl" />
            <div className="absolute right-1/4 bottom-0 h-[300px] w-[300px] rounded-full bg-violet-500/15 blur-3xl" />
          </div>

          <div className="relative z-10">
            <h2 className="mb-4 text-3xl font-bold text-slate-50 sm:text-4xl md:text-5xl">
              Ready to ship{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                notifications
              </span>
              <br />
              that actually work?
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-lg text-slate-400">
              Join thousands of developers who trust Flux to deliver critical
              notifications at scale.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#"
                className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-8 py-3.5 text-sm font-medium text-white transition-all hover:shadow-xl hover:shadow-indigo-500/25"
              >
                Get Started for Free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="rounded-xl border border-white/[0.08] px-8 py-3.5 text-sm font-medium text-slate-300 transition-all hover:border-white/[0.15] hover:text-white"
              >
                Talk to Sales
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
