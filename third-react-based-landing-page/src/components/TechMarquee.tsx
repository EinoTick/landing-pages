import { motion } from 'framer-motion'

export default function TechMarquee() {
  const techStack = "REACT • VUE • NODE • FASTAPI • AWS • DOCKER • POSTGRESQL • TYPESCRIPT • "

  return (
    <div className="bg-yellow-400 border-y-2 border-black overflow-hidden">
      <motion.div
        animate={{
          x: [0, -50 * 10], // Adjust based on content length
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
        className="flex whitespace-nowrap py-4"
      >
        {/* Repeat content multiple times for seamless loop */}
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className="font-heading font-bold text-xl md:text-2xl text-black uppercase tracking-wider px-8"
          >
            {techStack}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
