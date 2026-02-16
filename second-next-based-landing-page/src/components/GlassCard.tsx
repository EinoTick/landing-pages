"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef, type MouseEvent, type ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export default function GlassCard({
  children,
  className = "",
  glowColor = "rgba(99, 102, 241, 0.15)",
}: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 200, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 25 });

  const glowBackground = useMotionTemplate`radial-gradient(400px circle at ${springX}px ${springY}px, ${glowColor}, transparent 60%)`;

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-900/50 backdrop-blur-xl ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        boxShadow:
          "inset 0 1px 0 0 rgba(148, 163, 184, 0.05), 0 0 40px -12px rgba(99, 102, 241, 0.08)",
      }}
    >
      {/* Cursor-following glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: glowBackground }}
      />

      <div className="relative z-20">{children}</div>
    </motion.div>
  );
}
