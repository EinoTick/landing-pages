"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Server } from "lucide-react";
import { motion } from "framer-motion";
import type { HomeContent } from "@/content/home/types";

const badgeIcons = [Server, Database, Code2] as const;

type FullStackCardProps = {
  content: HomeContent["fullStackCard"];
};

export function FullStackCard({ content }: FullStackCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="col-span-12 md:col-span-8"
    >
      <Card className="relative h-full overflow-hidden border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl group">
        <motion.div
          className="absolute inset-0 rounded-lg"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(99, 102, 241, 0.2) 50%, transparent 100%)",
            backgroundSize: "200% 100%",
          }}
          animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-violet-500/10 opacity-50" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <CardHeader className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-indigo-500/20 border border-indigo-500/30">
              <Code2 className="w-6 h-6 text-indigo-400" />
            </div>
            <CardTitle className="text-3xl">{content.title}</CardTitle>
          </div>
          <CardDescription className="text-base text-white/70">
            {content.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="relative z-10 space-y-6">
          <div className="flex flex-wrap gap-3">
            {content.badges.map((label, i) => {
              const Icon = badgeIcons[i] ?? Code2;
              return (
                <Badge key={label} variant={i === 0 ? "default" : "secondary"} className="text-sm px-4 py-2">
                  <Icon className="w-4 h-4 mr-2" />
                  {label}
                </Badge>
              );
            })}
          </div>
          <div className="space-y-3 pt-4">
            {content.bullets.map((text, i) => (
              <div key={text} className="flex items-center gap-3 text-sm text-white/80">
                <div className={`w-2 h-2 rounded-full ${i % 2 === 0 ? "bg-indigo-400" : "bg-violet-400"}`} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
