"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function WorkflowAbout() {
  return (
    <section id="about" className="px-4 pt-8 pb-4 scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 text-center sm:text-left"
        >
          <div className="relative shrink-0">
            <div
              aria-hidden
              className="absolute -inset-1 rounded-full bg-gradient-to-br from-green-400/30 to-indigo-500/20 blur-md"
            />
            <div className="relative w-20 h-20 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl overflow-hidden">
              <Image
                src="/images/about.jpg"
                alt="Eino"
                width={80}
                height={80}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              About
            </p>
            <p className="text-base md:text-[17px] text-white/80 leading-7 md:leading-8 max-w-xl">
              Hi, I&apos;m{" "}
              <span className="text-white font-semibold">Eino</span>. I build
              workflow software for teams stuck between spreadsheets and
              enterprise tools that don&apos;t fit. I prove it with a free demo
              first—then map the process, ship the system, and stay accountable
              through launch.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
