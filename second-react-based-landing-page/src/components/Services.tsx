import { motion } from 'framer-motion'
import { Code2, Palette, Cloud, Rocket } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface ServiceCard {
  icon: LucideIcon
  title: string
  description: string
  span?: string
}

const services: ServiceCard[] = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description:
      'End-to-end product engineering with React, Vue, Node.js, and FastAPI. We architect systems that scale from day one.',
    span: 'md:col-span-2',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'Pixel-perfect interfaces designed for conversion. We combine user research with design systems that delight.',
  },
  {
    icon: Cloud,
    title: 'Cloud Architecture',
    description:
      'AWS & GCP infrastructure designed for reliability and cost efficiency. CI/CD, containers, and serverless done right.',
  },
  {
    icon: Rocket,
    title: 'Rapid Prototyping',
    description:
      'Go from idea to interactive prototype in days. Validate fast, iterate faster, and ship with confidence.',
    span: 'md:col-span-2',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14 text-center"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">
          What we do
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Services built for speed &amp; scale
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
        className="grid gap-4 md:grid-cols-3"
      >
        {services.map((s) => (
          <motion.div
            key={s.title}
            variants={cardVariants}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            whileHover={{ scale: 1.02 }}
            className={`group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-sm transition-colors hover:border-indigo-500/30 ${s.span ?? ''}`}
          >
            {/* Hover glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-indigo-500/[0.07] opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />

            <s.icon className="mb-5 h-8 w-8 text-indigo-400" />
            <h3 className="mb-2 text-lg font-semibold text-white">{s.title}</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              {s.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
