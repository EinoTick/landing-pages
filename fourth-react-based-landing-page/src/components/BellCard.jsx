import { motion } from "framer-motion";
import { Rocket, GitBranch, CheckCircle } from "lucide-react";
import { itemVariants } from "./BentoGrid";

export default function BellCard() {
  return (
    <motion.div
      className="col-span-1 md:col-span-8 relative group"
      variants={itemVariants}
    >
      <div
        className="relative h-full rounded-2xl border-[0.5px] border-slate-800 bg-slate-900/40 backdrop-blur-sm p-6 overflow-hidden flex flex-col items-center justify-center min-h-[280px]"
        style={{
          boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.05)",
        }}
      >
        {/* Radial accent glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.12) 0%, rgba(124, 58, 237, 0.06) 40%, transparent 70%)",
          }}
        />

        {/* Shimmer ring animation */}
        <div className="relative">
          {/* Outer pulsing ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, transparent, rgba(34, 197, 94, 0.3), transparent, rgba(99, 102, 241, 0.3), transparent)",
              padding: "2px",
              margin: "-20px",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-full h-full rounded-full bg-slate-900/80" />
          </motion.div>

          {/* Glow behind icon */}
          <motion.div
            className="absolute inset-0 bg-green-500/20 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Main icon */}
          <motion.div
            className="relative w-24 h-24 rounded-full bg-gradient-to-br from-green-500/20 to-indigo-600/20 border border-green-500/30 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Rocket className="w-10 h-10 text-green-400" />

            {/* Success dot */}
            <motion.div
              className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 border-2 border-slate-900 flex items-center justify-center"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <CheckCircle className="w-2.5 h-2.5 text-white" />
            </motion.div>
          </motion.div>
        </div>

        <div className="relative mt-6 text-center">
          <h3 className="text-lg font-semibold text-white mb-1">
            Deployment Pulse
          </h3>
          <p className="text-sm text-slate-400 max-w-sm">
            Automated Git Pipelines & Testing. GitHub Actions and GitLab CI as
            the backbone of every delivery.
          </p>
        </div>

        {/* Pipeline status badges */}
        <div className="relative mt-4 flex items-center gap-3">
          {[
            { label: "Build", status: "passed" },
            { label: "Tests", status: "passed" },
            { label: "Deploy", status: "live" },
          ].map((step) => (
            <div
              key={step.label}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="text-[10px] font-medium text-green-300">
                {step.label}: {step.status}
              </span>
            </div>
          ))}
        </div>

        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-green-400/40"
            style={{
              left: `${20 + i * 15}%`,
              top: `${15 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}

        {/* Git branch decoration */}
        <div className="absolute bottom-4 right-6 flex items-center gap-1.5 text-slate-600">
          <GitBranch className="w-3.5 h-3.5" />
          <span className="text-[10px] font-mono">main</span>
        </div>
      </div>
    </motion.div>
  );
}
