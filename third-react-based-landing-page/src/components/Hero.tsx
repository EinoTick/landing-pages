import { motion } from 'framer-motion'
import { Code2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="space-y-8"
        >
          <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl leading-tight text-black uppercase tracking-tight">
            WE BUILD<br />
            <span className="text-purple-600">SHIP-READY</span><br />
            APPS.
          </h1>
          
          <p className="text-xl md:text-2xl text-black font-medium leading-relaxed max-w-2xl">
            Stop struggling with spaghetti code. We deploy React & Node stacks that scale.
          </p>

          <motion.button
            whileHover={{ 
              x: 6, 
              y: 6,
              boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="bg-black text-white font-heading font-bold px-8 py-4 text-lg border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] uppercase tracking-tight"
          >
            Get Started →
          </motion.button>
        </motion.div>

        {/* Right: Code Snippet Mockup */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10, delay: 0.2 }}
          className="relative"
        >
          {/* Mac OS Window Frame */}
          <div className="bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            {/* Window Header */}
            <div className="bg-gray-200 border-b-2 border-black px-4 py-2 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 bg-red-500 border border-black"></div>
                <div className="w-3 h-3 bg-yellow-500 border border-black"></div>
                <div className="w-3 h-3 bg-green-500 border border-black"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="font-mono text-xs font-semibold text-black">App.tsx</span>
              </div>
            </div>

            {/* Code Content */}
            <div className="bg-gray-900 p-6 font-mono text-sm text-green-400">
              <div className="space-y-2">
                <div>
                  <span className="text-purple-400">import</span>{' '}
                  <span className="text-yellow-400">{'{'}</span>{' '}
                  <span className="text-blue-400">useState</span>{' '}
                  <span className="text-yellow-400">{'}'}</span>{' '}
                  <span className="text-purple-400">from</span>{' '}
                  <span className="text-green-400">'react'</span>
                </div>
                <div className="pt-2">
                  <span className="text-purple-400">export default</span>{' '}
                  <span className="text-yellow-400">function</span>{' '}
                  <span className="text-blue-400">App</span>
                  <span className="text-white">()</span>{' '}
                  <span className="text-yellow-400">{'{'}</span>
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-blue-400">[count, setCount]</span>{' '}
                  <span className="text-yellow-400">=</span>{' '}
                  <span className="text-blue-400">useState</span>
                  <span className="text-white">(</span>
                  <span className="text-orange-400">0</span>
                  <span className="text-white">)</span>
                </div>
                <div className="pl-4 pt-2">
                  <span className="text-purple-400">return</span>{' '}
                  <span className="text-yellow-400">(</span>
                </div>
                <div className="pl-8">
                  <span className="text-blue-400">&lt;div&gt;</span>
                </div>
                <div className="pl-12">
                  <span className="text-blue-400">&lt;h1&gt;</span>
                  <span className="text-white">Ship-Ready Code</span>
                  <span className="text-blue-400">&lt;/h1&gt;</span>
                </div>
                <div className="pl-8">
                  <span className="text-blue-400">&lt;/div&gt;</span>
                </div>
                <div className="pl-4">
                  <span className="text-yellow-400">)</span>
                </div>
                <div>
                  <span className="text-yellow-400">{'}'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Icon */}
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="absolute -top-6 -right-6 bg-purple-500 p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <Code2 className="w-8 h-8 text-white" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
