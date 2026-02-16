import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Gauge, Zap } from "lucide-react"
import { motion } from "framer-motion"

export function PerformanceCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="col-span-12 md:col-span-6"
    >
      <Card className="relative h-full overflow-hidden border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl group">
        <motion.div
          className="absolute inset-0 rounded-lg"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)",
            backgroundSize: "200% 100%",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "200% 0%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 opacity-50" />
        
        <CardHeader className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-blue-500/20 border border-blue-500/30">
              <Zap className="w-5 h-5 text-blue-400" />
            </div>
            <CardTitle className="text-xl">Performance</CardTitle>
          </div>
          <CardDescription className="text-sm text-white/70">
            Optimized for speed and scale
          </CardDescription>
        </CardHeader>
        
        <CardContent className="relative z-10 space-y-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/80">Load Time</span>
                <span className="text-blue-400 font-semibold">&lt; 1s</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                  initial={{ width: 0 }}
                  animate={{ width: "95%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/80">Lighthouse Score</span>
                <span className="text-blue-400 font-semibold">98+</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                  initial={{ width: 0 }}
                  animate={{ width: "98%" }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
              </div>
            </div>
            
            <div className="flex items-center gap-2 pt-2">
              <Gauge className="w-4 h-4 text-blue-400" />
              <span className="text-xs text-white/60">Code splitting & lazy loading</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
