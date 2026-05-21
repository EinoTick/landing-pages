import type { ReactNode } from "react"
import { motion } from "framer-motion"

type StackItem = {
  name: string
  color: string
  icon: ReactNode
}

const ReactIcon = (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.4">
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" />
  </svg>
)

const NextIcon = (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="12" cy="12" r="10.5" />
    <path d="M7 7 v10 M7 7 l10 13 M16 7 v6" strokeLinecap="round" />
  </svg>
)

const NodeIcon = (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
    <path d="M12 2 L21 7 V17 L12 22 L3 17 V7 Z" />
    <path d="M9 9 v6 a2 2 0 0 0 4 0 v-6 M15 11 a2 2 0 0 1 2 -2 h1 a2 2 0 0 1 2 2 v0 a2 2 0 0 1 -2 2 h-1 a2 2 0 0 0 -2 2 v0 a2 2 0 0 0 2 2 h1 a2 2 0 0 0 2 -2" stroke="currentColor" strokeOpacity="0.0" />
  </svg>
)

const AngularIcon = (
  <svg
    viewBox="0 0 24 24"
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.25"
    strokeLinejoin="round"
    strokeLinecap="round"
    aria-hidden
  >
    <path d="M12 2.5 4 6.5v8.5l8 6.5 8-6.5V6.5l-8-4z" />
    <path d="M12 8.75 9 16.25M12 8.75 15 16.25M10.35 13.5h3.3" />
  </svg>
)

const VueIcon = (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor" aria-hidden>
    <path d="M12 2.25 3.75 20.5h5.1L12 12.1l3.15 8.4h5.1L12 2.25z" opacity="0.45" />
    <path d="M12 7.75 8.6 16.75h6.8L12 7.75z" />
  </svg>
)

const FastApiIcon = (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M13 5 L7.5 13 H12 L11 19 L16.5 11 H12 Z" fill="currentColor" stroke="none" />
  </svg>
)

const stack: StackItem[] = [
  { name: "React", color: "text-cyan-300", icon: ReactIcon },
  { name: "Next.js", color: "text-white", icon: NextIcon },
  { name: "Angular", color: "text-red-400", icon: AngularIcon },
  { name: "Vue", color: "text-emerald-400", icon: VueIcon },
  { name: "Node.js", color: "text-green-400", icon: NodeIcon },
  { name: "FastAPI", color: "text-teal-300", icon: FastApiIcon },
]

export function TechStack() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-3">
            The stack I ship with
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
            Modern, typed, and proven in production
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl px-4 py-8 sm:px-8"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-slate-950 to-transparent rounded-l-2xl" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-slate-950 to-transparent rounded-r-2xl" />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-8 items-center justify-items-center">
            {stack.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors group"
              >
                <div
                  className={`${item.color} transition-transform duration-300 group-hover:-translate-y-0.5`}
                >
                  {item.icon}
                </div>
                <span className="text-sm font-medium tracking-wide">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
