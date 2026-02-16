import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <div className="relative z-10 text-center space-y-8 py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
          Engineered for Growth.
          <br />
          Built for Scale.
        </h1>
        <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto">
          Custom React applications and high-performance landing pages
          <br />
          designed to accelerate your startup's growth
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-center justify-center gap-4"
      >
        <Button size="lg" className="group">
          Get Started
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
        <Button size="lg" variant="outline">
          View Portfolio
        </Button>
      </motion.div>
    </div>
  )
}
