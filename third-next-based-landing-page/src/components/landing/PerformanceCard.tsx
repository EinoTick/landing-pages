"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gauge, Zap } from "lucide-react";
import { motion } from "framer-motion";
import type { HomeContent } from "@/content/home/types";

type PerformanceCardProps = {
  content: HomeContent["performanceCard"];
};

export function PerformanceCard({ content }: PerformanceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="col-span-12 md:col-span-6"
    >
      <Card className="relative h-full overflow-hidden border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl group">
        <CardHeader className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-blue-500/20 border border-blue-500/30">
              <Zap className="w-5 h-5 text-blue-400" />
            </div>
            <CardTitle className="text-xl">{content.title}</CardTitle>
          </div>
          <CardDescription className="text-sm text-white/70">
            {content.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="relative z-10 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/80">{content.loadTimeLabel}</span>
              <span className="text-blue-400 font-semibold">{content.loadTimeValue}</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500" initial={{ width: 0 }} animate={{ width: "95%" }} transition={{ duration: 1, delay: 0.5 }} />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/80">{content.lighthouseLabel}</span>
              <span className="text-blue-400 font-semibold">{content.lighthouseValue}</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500" initial={{ width: 0 }} animate={{ width: "98%" }} transition={{ duration: 1, delay: 0.7 }} />
            </div>
          </div>
          <div className="flex items-center gap-2 pt-2">
            <Gauge className="w-4 h-4 text-blue-400" />
            <span className="text-xs text-white/60">{content.footerNote}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
