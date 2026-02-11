"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/motion-wrapper";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="newsletter"
      className="border-hairline border-t bg-zinc-100/50 py-28"
    >
      <div className="mx-auto max-w-xl px-6 text-center lg:px-10">
        <FadeUp>
          <p className="mb-3 text-xs tracking-luxury uppercase text-slate-400">
            Stay Illuminated
          </p>
          <h2 className="mb-4 font-serif text-3xl font-normal text-slate-900 md:text-4xl">
            Join the Circle
          </h2>
          <p className="mb-10 text-sm leading-relaxed text-slate-400">
            Receive early access to new arrivals, private viewings, and notes on
            the art of living in white.
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="flex flex-col gap-3 sm:flex-row"
              >
                <Input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="h-12 flex-1 border-hairline bg-white text-sm tracking-wide placeholder:text-slate-300 focus-visible:ring-slate-300"
                />
                <Button
                  type="submit"
                  className="group h-12 gap-2 bg-slate-900 px-7 text-xs tracking-luxury uppercase text-white transition-all hover:bg-slate-800"
                >
                  Join
                  <ArrowRight
                    size={14}
                    strokeWidth={1.5}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Button>
              </motion.form>
            ) : (
              <motion.p
                key="thanks"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-sm text-slate-400"
              >
                Welcome to the circle. We&apos;ll be in touch.
              </motion.p>
            )}
          </AnimatePresence>
        </FadeUp>
      </div>
    </section>
  );
}
