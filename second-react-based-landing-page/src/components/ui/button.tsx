import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'default' | 'ghost' | 'outline'
type Size = 'default' | 'sm' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
}

const variantStyles: Record<Variant, string> = {
  default:
    'bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-500/20',
  ghost:
    'text-slate-300 hover:text-white hover:bg-white/5',
  outline:
    'border border-slate-700 text-slate-300 hover:bg-white/5 hover:text-white',
}

const sizeStyles: Record<Size, string> = {
  default: 'h-10 px-5 text-sm',
  sm: 'h-9 px-4 text-sm',
  lg: 'h-12 px-8 text-base',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
          variantStyles[variant],
          sizeStyles[size],
          className,
        )}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, type ButtonProps }
