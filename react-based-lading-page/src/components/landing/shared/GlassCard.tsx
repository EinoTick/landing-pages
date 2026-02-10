import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/animations";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function GlassCard({
  children,
  className,
  hoverEffect = true,
}: GlassCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={cn(
        "glass-card rounded-2xl p-6 transition-all duration-300",
        hoverEffect && "hover:shadow-xl hover:shadow-indigo-500/10",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
