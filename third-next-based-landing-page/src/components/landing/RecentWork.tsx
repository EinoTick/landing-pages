"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, ImageIcon } from "lucide-react";
import type { HomeContent } from "@/content/home/types";

type RecentWorkProps = {
  content: HomeContent["recentWork"];
};

export function RecentWork({ content }: RecentWorkProps) {
  return (
    <section id="work" className="py-24 px-4 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white mb-4">{content.title}</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">{content.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.caseStudies.map((item, i) => (
            <motion.div key={`${item.tag}-${i}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <Card className="group relative h-full overflow-hidden border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/[0.07] transition-colors">
                <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex items-center gap-2 text-white/40">
                      <ImageIcon className="w-5 h-5" />
                      <span className="text-xs uppercase tracking-[0.18em]">{content.previewLabel}</span>
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center rounded-full border border-green-400/30 bg-green-400/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-green-300">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-green-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <p className="text-[15px] text-white/75 leading-7">{item.description}</p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {item.stack.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 rounded-md border border-white/10 bg-white/[0.04] text-white/70">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
