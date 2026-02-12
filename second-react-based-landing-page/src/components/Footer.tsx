import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

const footerLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Twitter', href: '#' },
]

export function Footer() {
  return (
    <footer className="border-t border-slate-800/60">
      {/* Big CTA */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl px-6 py-28 text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
          Ready to build?
        </h2>
        <p className="mx-auto mt-5 max-w-md text-lg text-slate-400">
          Let's turn your idea into a product users love. Book a free 30-minute
          consultation to get started.
        </p>
        <div className="mt-10">
          <Button size="lg">
            Book Consultation
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>

      {/* Footer bottom */}
      <div className="border-t border-slate-800/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">
          <a href="#" className="flex items-center gap-2 text-sm font-bold text-white">
            <Zap className="h-4 w-4 text-indigo-400" />
            Velocity Labs
          </a>

          <div className="flex flex-wrap items-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-slate-500 transition-colors hover:text-slate-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Velocity Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
