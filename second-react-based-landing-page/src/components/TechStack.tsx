import { motion } from 'framer-motion'

interface TechItem {
  name: string
  icon: string
}

const techs: TechItem[] = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Vue', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
]

// Double the list for seamless loop
const marqueeItems = [...techs, ...techs]

export function TechStack() {
  return (
    <section className="border-y border-slate-800/60 py-14">
      <p className="mb-10 text-center text-sm font-medium uppercase tracking-widest text-slate-500">
        Built with the tools that scale
      </p>

      <div className="relative overflow-hidden">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-slate-950 to-transparent" />

        <motion.div
          className="flex w-max gap-16 px-8"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: { repeat: Infinity, repeatType: 'loop', duration: 30, ease: 'linear' },
          }}
        >
          {marqueeItems.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="group flex flex-col items-center gap-3"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="h-10 w-10 grayscale opacity-50 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
              />
              <span className="text-xs font-medium text-slate-600 transition-colors group-hover:text-slate-300">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
