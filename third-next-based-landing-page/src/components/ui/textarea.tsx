import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      className={cn(
        "flex min-h-[140px] w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-slate-500 backdrop-blur-xl transition-colors resize-y",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400/40 focus-visible:border-green-400/35",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";

export { Textarea };
