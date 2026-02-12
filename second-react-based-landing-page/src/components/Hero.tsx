import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-28 md:py-40">
      {/* Grid pattern overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-3xl text-center"
      >
        <motion.div variants={fadeUp}>
          <Badge className="mb-6">
            Accepting New Clients for Q3
          </Badge>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl"
        >
          <span className="bg-gradient-to-b from-slate-100 to-indigo-400 bg-clip-text text-transparent">
            Ship Your MVP in{' '}
          </span>
          <br />
          <span className="bg-gradient-to-b from-slate-100 to-indigo-400 bg-clip-text text-transparent">
            Weeks, Not Months.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-400"
        >
          Enterprise-grade engineering for ambitious startups. We design, build,
          and ship world-class web applications using React, Vue, Node, and
          FastAPI.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button size="lg">
            Start Project
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="lg">
            Our Work
            <ExternalLink className="h-4 w-4" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
