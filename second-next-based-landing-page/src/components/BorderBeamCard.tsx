"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface BorderBeamCardProps {
  children: ReactNode;
  className?: string;
  beamColor?: string;
  duration?: number;
}

export default function BorderBeamCard({
  children,
  className = "",
  beamColor = "#6366f1",
  duration = 6,
}: BorderBeamCardProps) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl bg-slate-900/50 backdrop-blur-xl ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        boxShadow:
          "inset 0 1px 0 0 rgba(148, 163, 184, 0.05), 0 0 40px -12px rgba(99, 102, 241, 0.08)",
      }}
    >
      {/* Animated border beam */}
      <div className="absolute inset-0 rounded-2xl">
        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            className="h-full w-full"
            rx="16"
            ry="16"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />
        </svg>
        <div
          className="border-beam absolute h-5 w-5 rounded-full"
          style={{
            background: `radial-gradient(circle, ${beamColor}, transparent)`,
            boxShadow: `0 0 20px 5px ${beamColor}40`,
            offsetPath: `rect(0 auto auto 0 round 16px)`,
            animationDuration: `${duration}s`,
          }}
        />
      </div>

      <div className="relative z-10 border border-white/[0.08] rounded-2xl">
        {children}
      </div>
    </motion.div>
  );
}
