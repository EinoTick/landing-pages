import { motion } from "framer-motion";
import { Layers, Terminal } from "lucide-react";
import { itemVariants } from "./BentoGrid";

const techStack = [
  {
    label: "React",
    color: "from-blue-400 to-cyan-400",
    border: "border-blue-500/30",
    bg: "bg-blue-500/10",
  },
  {
    label: "Node.js",
    color: "from-green-400 to-emerald-400",
    border: "border-green-500/30",
    bg: "bg-green-500/10",
  },
  {
    label: "FastAPI",
    color: "from-teal-400 to-green-400",
    border: "border-teal-500/30",
    bg: "bg-teal-500/10",
  },
  {
    label: "Docker",
    color: "from-blue-400 to-indigo-400",
    border: "border-blue-500/30",
    bg: "bg-blue-500/10",
  },
  {
    label: "TypeScript",
    color: "from-blue-400 to-blue-500",
    border: "border-blue-500/30",
    bg: "bg-blue-500/10",
  },
  {
    label: "PostgreSQL",
    color: "from-indigo-400 to-violet-400",
    border: "border-indigo-500/30",
    bg: "bg-indigo-500/10",
  },
];

export default function ActionsCard() {
  return (
    <motion.div
      className="col-span-1 md:col-span-4 relative group"
      variants={itemVariants}
    >
      <div
        className="relative h-full rounded-2xl border-[0.5px] border-slate-800 bg-slate-900/40 backdrop-blur-sm p-6 overflow-hidden"
        style={{
          boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.05)",
        }}
      >
        {/* Accent glow */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500/20 rounded-lg blur-md" />
              <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500/30 to-violet-600/30 border border-indigo-500/30 flex items-center justify-center">
                <Layers className="w-4 h-4 text-indigo-400" />
              </div>
            </div>
            <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">
              Tech Stack
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.label}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${tech.border} ${tech.bg} text-xs font-medium`}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.15 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span
                  className={`bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}
                >
                  {tech.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Terminal prompt accent */}
          <div className="mt-5 flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/40">
            <Terminal className="w-3.5 h-3.5 text-green-400" />
            <span className="text-[11px] text-slate-500 font-mono">
              <span className="text-green-400">$</span> npm run deploy
              <motion.span
                className="inline-block w-1.5 h-3.5 bg-green-400/70 ml-0.5 align-middle"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
