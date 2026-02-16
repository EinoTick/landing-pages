import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Container, TestTube, Globe } from "lucide-react";
import { itemVariants } from "./BentoGrid";

const infrastructure = [
  {
    id: "docker",
    icon: Container,
    label: "Scalable Docker Containers",
    description: "Consistent dev/prod parity",
    defaultOn: true,
  },
  {
    id: "testing",
    icon: TestTube,
    label: "Automated Unit Tests",
    description: "Vitest & Cypress integration",
    defaultOn: true,
  },
  {
    id: "edge",
    icon: Globe,
    label: "Edge Deployment",
    description: "Global CDN distribution",
    defaultOn: false,
  },
];

function Toggle({ enabled, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors duration-300 flex-shrink-0 ${
        enabled
          ? "bg-gradient-to-r from-pink-500 to-purple-500"
          : "bg-slate-700"
      }`}
    >
      <motion.div
        className="inline-block h-3.5 w-3.5 rounded-full bg-white shadow-sm"
        animate={{ x: enabled ? 18 : 3 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
      {enabled && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/30 to-purple-500/30 blur-md" />
      )}
    </button>
  );
}

export default function PreferencesCard() {
  const [toggles, setToggles] = useState(() =>
    Object.fromEntries(infrastructure.map((p) => [p.id, p.defaultOn]))
  );

  const handleToggle = (id) => {
    setToggles((prev) => ({ ...prev, [id]: !prev[id] }));
  };

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
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-violet-500/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="relative">
              <div className="absolute inset-0 bg-violet-500/20 rounded-lg blur-md" />
              <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500/30 to-purple-600/30 border border-violet-500/30 flex items-center justify-center">
                <Zap className="w-4 h-4 text-violet-400" />
              </div>
            </div>
            <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">
              Infrastructure
            </h3>
          </div>

          <div className="space-y-3">
            {infrastructure.map((item, i) => (
              <motion.div
                key={item.id}
                className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-800/40 transition-colors"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.08 }}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <item.icon className="w-4 h-4 text-slate-500 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-slate-200 truncate">
                      {item.label}
                    </p>
                    <p className="text-[10px] text-slate-500 truncate">
                      {item.description}
                    </p>
                  </div>
                </div>
                <Toggle
                  enabled={toggles[item.id]}
                  onToggle={() => handleToggle(item.id)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
