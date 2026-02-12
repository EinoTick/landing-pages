import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary'
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors',
        variant === 'default' &&
          'border-indigo-500/30 bg-indigo-500/10 text-indigo-300',
        variant === 'secondary' &&
          'border-slate-700 bg-slate-800 text-slate-300',
        className,
      )}
      {...props}
    />
  )
}
