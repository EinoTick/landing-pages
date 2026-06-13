"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, TestTube } from "lucide-react";
import { motion } from "framer-motion";
import type { HomeContent } from "@/content/home/types";

type TestingCardProps = {
  content: HomeContent["testingCard"];
};

export function TestingCard({ content }: TestingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="col-span-12 md:col-span-6"
    >
      <Card className="relative h-full overflow-hidden border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl group">
        <CardHeader className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-green-500/20 border border-green-500/30">
              <TestTube className="w-5 h-5 text-green-400" />
            </div>
            <CardTitle className="text-xl">{content.title}</CardTitle>
          </div>
          <CardDescription className="text-sm text-white/70">
            {content.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="relative z-10 space-y-3">
          {content.items.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="flex items-center gap-3"
            >
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span className="text-sm text-white/80">{item}</span>
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}
