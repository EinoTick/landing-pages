"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GitBranch, Container, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import type { HomeContent } from "@/content/home/types";

type DevOpsCardProps = {
  content: HomeContent["devOpsCard"];
};

export function DevOpsCard({ content }: DevOpsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="col-span-12 md:col-span-4"
    >
      <Card className="relative h-full overflow-hidden border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl group">
        <motion.div
          className="absolute inset-0 rounded-lg"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(139, 92, 246, 0.2) 50%, transparent 100%)",
            backgroundSize: "200% 100%",
          }}
          animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-indigo-500/10 opacity-50" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-violet-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <CardHeader className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-violet-500/20 border border-violet-500/30">
              <GitBranch className="w-5 h-5 text-violet-400" />
            </div>
            <CardTitle className="text-xl">{content.title}</CardTitle>
          </div>
          <CardDescription className="text-sm text-white/70">
            {content.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="relative z-10 space-y-4">
          <div className="py-6">
            <div className="flex items-center justify-center">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }} className="p-2 rounded-lg bg-violet-500/20 border border-violet-500/30">
                <GitBranch className="w-4 h-4 text-violet-400" />
              </motion.div>
              <motion.div className="h-[2px] flex-grow mx-4 bg-violet-500/30" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5, delay: 0.45, ease: "easeInOut" }} style={{ transformOrigin: "left center" }} />
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6 }} className="relative p-3 rounded-lg bg-indigo-500/20 border border-indigo-500/30">
                <Container className="relative w-5 h-5 text-indigo-300" />
              </motion.div>
              <motion.div className="h-[2px] flex-grow mx-4 bg-violet-500/30" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5, delay: 0.75, ease: "easeInOut" }} style={{ transformOrigin: "left center" }} />
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.9 }} className="p-2 rounded-lg bg-green-500/20 border border-green-500/30">
                <Rocket className="w-4 h-4 text-green-400" />
              </motion.div>
            </div>
            <div className="mt-3 grid grid-cols-3 text-xs text-white/60">
              <span className="text-left">{content.pipelineLabels.gitCommit}</span>
              <span className="text-center">{content.pipelineLabels.docker}</span>
              <span className="text-right">{content.pipelineLabels.production}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
