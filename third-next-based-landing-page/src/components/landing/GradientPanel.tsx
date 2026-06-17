import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const panelBackgroundStyle = {
  background:
    "radial-gradient(ellipse 80% 70% at 50% 0%, rgba(99, 102, 241, 0.18) 0%, rgba(139, 92, 246, 0.12) 35%, rgba(99, 102, 241, 0.06) 60%, transparent 100%), radial-gradient(ellipse 60% 50% at 50% 100%, rgba(59, 130, 246, 0.08) 0%, transparent 70%)",
  boxShadow:
    "0 4px 24px -4px rgba(0,0,0,0.4), 0 8px 32px -8px rgba(99, 102, 241, 0.15)",
};

const dotGridStyle = {
  backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 0)`,
  backgroundSize: "24px 24px",
};

const gradientHeadingStyle = {
  backgroundImage:
    "linear-gradient(135deg, rgb(165, 180, 252) 0%, rgb(196, 181, 253) 50%, rgb(129, 140, 248) 100%)",
};

type GradientPanelProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

export function GradientPanel({
  children,
  className,
  contentClassName,
}: GradientPanelProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl overflow-hidden border border-white/10",
        className
      )}
      style={panelBackgroundStyle}
    >
      <div
        aria-hidden
        className="absolute inset-3 rounded-xl opacity-[0.05] pointer-events-none z-[1]"
        style={dotGridStyle}
      />
      <div className="absolute inset-0 backdrop-blur-sm z-0" aria-hidden />
      <div className={cn("relative z-10", contentClassName)}>{children}</div>
    </div>
  );
}

type GradientHeadingProps = {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export function GradientHeading({
  children,
  className,
  as: Tag = "h2",
}: GradientHeadingProps) {
  return (
    <Tag
      className={cn(
        "bg-clip-text text-transparent font-bold tracking-tight leading-[1.2] pb-0.5",
        className
      )}
      style={gradientHeadingStyle}
    >
      {children}
    </Tag>
  );
}
