import { forwardRef, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowButtonProps {
  variant?: "primary" | "secondary";
  size?: "default" | "lg";
  className?: string;
  children?: ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

export const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, variant = "primary", size = "default", children, type = "button", disabled, onClick }, ref) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      primary:
        "bg-indigo-500 text-white hover:bg-indigo-600 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50",
      secondary:
        "border border-slate-700 bg-slate-900/50 text-white hover:bg-slate-800 hover:border-slate-600",
    };

    const sizes = {
      default: "h-11 px-6 text-sm",
      lg: "h-14 px-8 text-base",
    };

    return (
      <motion.button
        ref={ref}
        type={type}
        disabled={disabled}
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
      >
        {variant === "primary" && (
          <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-50" />
        )}
        <span className="relative">{children}</span>
      </motion.button>
    );
  }
);
GlowButton.displayName = "GlowButton";
