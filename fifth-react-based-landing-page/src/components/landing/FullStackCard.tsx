import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Database, Server } from "lucide-react"
import { motion } from "framer-motion"

export function FullStackCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="col-span-12 md:col-span-8"
    >
      <Card className="relative h-full overflow-hidden border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl group">
        <motion.div
          className="absolute inset-0 rounded-lg"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(99, 102, 241, 0.2) 50%, transparent 100%)",
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
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-violet-500/10 opacity-50" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <CardHeader className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-indigo-500/20 border border-indigo-500/30">
              <Code2 className="w-6 h-6 text-indigo-400" />
            </div>
            <CardTitle className="text-3xl">Full-Stack Capabilities</CardTitle>
          </div>
          <CardDescription className="text-base text-white/70">
            End-to-end development from frontend to backend infrastructure
          </CardDescription>
        </CardHeader>
        
        <CardContent className="relative z-10 space-y-6">
          <div className="flex flex-wrap gap-3">
            <Badge variant="default" className="text-sm px-4 py-2">
              <Server className="w-4 h-4 mr-2" />
              React
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Database className="w-4 h-4 mr-2" />
              Node.js
            </Badge>
            <Badge variant="default" className="text-sm px-4 py-2">
              <Code2 className="w-4 h-4 mr-2" />
              FastAPI
            </Badge>
          </div>
          
          <div className="space-y-3 pt-4">
            <div className="flex items-center gap-3 text-sm text-white/80">
              <div className="w-2 h-2 rounded-full bg-indigo-400" />
              <span>Custom React applications tailored to your needs</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-white/80">
              <div className="w-2 h-2 rounded-full bg-violet-400" />
              <span>High-performance landing pages optimized for conversion</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-white/80">
              <div className="w-2 h-2 rounded-full bg-indigo-400" />
              <span>Scalable backend architecture ready for growth</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
