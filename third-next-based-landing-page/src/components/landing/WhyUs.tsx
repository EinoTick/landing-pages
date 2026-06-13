"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Code2, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { HomeContent } from "@/content/home/types";

const reasonIcons = [Code2, Zap, Shield, MessageCircle] as const;

type WhyUsProps = {
  content: HomeContent["whyUs"];
};

export function WhyUs({ content }: WhyUsProps) {
  return (
    <section className="relative isolate py-24 px-4">
      <div aria-hidden className="absolute inset-0 -z-10 bg-[#010411]" />
      <div aria-hidden className="absolute inset-0 -z-10" style={{ backgroundImage: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(99, 102, 241, 0.07) 0%, transparent 60%), radial-gradient(ellipse 80% 50% at 50% 100%, rgba(99, 102, 241, 0.05) 0%, transparent 60%)" }} />
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white mb-4">{content.title}</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">{content.subtitle}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.reasons.map((item, i) => {
            const Icon = reasonIcons[i] ?? Code2;
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Card className="h-full border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/[0.07] transition-colors">
                  <CardContent className="p-6">
                    <div className="p-2.5 rounded-lg bg-indigo-500/20 border border-indigo-500/30 w-fit mb-4">
                      <Icon className="w-5 h-5 text-indigo-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                    <p className="text-base md:text-[17px] text-white/80 leading-7 md:leading-8">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
