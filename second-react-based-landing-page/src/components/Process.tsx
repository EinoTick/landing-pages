import { motion } from 'framer-motion'
import { MessageSquare, PenTool, Code, Rocket } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Step {
  icon: LucideIcon
  title: string
  description: string
}

const steps: Step[] = [
  {
    icon: MessageSquare,
    title: 'Discovery',
    description:
      'We dig deep into your business goals, target users, and technical requirements to build a clear roadmap.',
  },
  {
    icon: PenTool,
    title: 'Design',
    description:
      'Interactive prototypes and polished UI designs reviewed with you before a single line of code is written.',
  },
  {
    icon: Code,
    title: 'Engineering',
    description:
      'Agile sprints with weekly demos. Production-quality code with full test coverage and CI/CD from day one.',
  },
  {
    icon: Rocket,
    title: 'Launch & Iterate',
    description:
      'We deploy, monitor, and iterate. Post-launch support ensures your product keeps growing with your users.',
  },
]

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-5xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">
          How we work
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          From idea to production in four steps
        </h2>
      </motion.div>

      <div className="relative grid gap-10 md:grid-cols-4">
        {/* Connector line (desktop) */}
        <div className="pointer-events-none absolute top-10 left-[calc(12.5%+16px)] right-[calc(12.5%+16px)] hidden h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent md:block" />

        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className="relative flex flex-col items-center text-center"
          >
            <div className="relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-900">
              <step.icon className="h-5 w-5 text-indigo-400" />
            </div>
            <h3 className="mb-2 text-base font-semibold text-white">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
