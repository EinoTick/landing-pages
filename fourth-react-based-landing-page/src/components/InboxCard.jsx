import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Kanban,
  Search,
  Code2,
  Container,
  MoreHorizontal,
  ArrowRight,
  CheckCircle,
  Circle,
  Loader,
} from "lucide-react";
import { itemVariants } from "./BentoGrid";

const tabs = [
  { id: "timeline", label: "Timeline", icon: Kanban },
  { id: "active", label: "Active", icon: Loader },
  { id: "completed", label: "Completed", icon: CheckCircle },
];

const timelineStages = [
  {
    id: 1,
    phase: "Discovery",
    description: "Requirements gathering & technical feasibility",
    icon: Search,
    iconColor: "text-blue-400",
    avatarColor: "from-blue-500 to-cyan-500",
    status: "completed",
    duration: "Week 1-2",
  },
  {
    id: 2,
    phase: "Architecture",
    description: "System design, API contracts & database schema",
    icon: Code2,
    iconColor: "text-violet-400",
    avatarColor: "from-violet-500 to-purple-500",
    status: "completed",
    duration: "Week 3-4",
  },
  {
    id: 3,
    phase: "Development",
    description: "React UI, Node/FastAPI services & Vitest/Cypress integration",
    icon: Code2,
    iconColor: "text-indigo-400",
    avatarColor: "from-indigo-500 to-blue-500",
    status: "in-progress",
    duration: "Week 5-10",
  },
  {
    id: 4,
    phase: "Docker Orchestration",
    description: "Containerized environments for consistent dev/prod parity",
    icon: Container,
    iconColor: "text-green-400",
    avatarColor: "from-green-500 to-emerald-500",
    status: "upcoming",
    duration: "Week 11-12",
  },
];

const activeStages = timelineStages.filter((s) => s.status === "in-progress");
const completedStages = timelineStages.filter((s) => s.status === "completed");

function getStages(tab) {
  if (tab === "active") return activeStages;
  if (tab === "completed") return completedStages;
  return timelineStages;
}

function StatusIcon({ status }) {
  if (status === "completed")
    return <CheckCircle className="w-3.5 h-3.5 text-green-400" />;
  if (status === "in-progress")
    return (
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <Loader className="w-3.5 h-3.5 text-indigo-400" />
      </motion.div>
    );
  return <Circle className="w-3.5 h-3.5 text-slate-600" />;
}

export default function InboxCard() {
  const [activeTab, setActiveTab] = useState("timeline");

  const currentStages = getStages(activeTab);

  return (
    <motion.div
      className="col-span-1 md:col-span-8 relative group"
      variants={itemVariants}
    >
      <div
        className="relative h-full rounded-2xl border-[0.5px] border-slate-800 bg-slate-900/40 backdrop-blur-sm overflow-hidden"
        style={{
          boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.05)",
        }}
      >
        {/* Connection line glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-indigo-500/40 to-transparent" />

        {/* Header */}
        <div className="px-6 pt-6 pb-0">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-500/20 rounded-lg blur-md" />
                <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500/30 to-violet-600/30 border border-indigo-500/30 flex items-center justify-center">
                  <Kanban className="w-4 h-4 text-indigo-400" />
                </div>
              </div>
              <h3 className="text-sm font-semibold text-white">
                Project Console
              </h3>
              <span className="text-[10px] font-medium bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full border border-indigo-500/20">
                {timelineStages.filter((s) => s.status === "in-progress").length}{" "}
                active
              </span>
            </div>
            <button className="p-1.5 rounded-lg hover:bg-slate-800/60 transition-colors">
              <MoreHorizontal className="w-4 h-4 text-slate-500" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 border-b border-slate-800/60">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-1.5 px-3 py-2 text-xs font-medium transition-colors ${
                  activeTab === tab.id
                    ? "text-indigo-400"
                    : "text-slate-500 hover:text-slate-300"
                }`}
              >
                <tab.icon className="w-3.5 h-3.5" />
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 to-violet-500"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Stage list */}
        <div className="px-3 py-2 max-h-[300px] overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              {currentStages.map((stage, i) => (
                <motion.div
                  key={stage.id}
                  className="flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-slate-800/40 transition-colors cursor-pointer group/item"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {/* Phase icon with glow */}
                  <div className="relative flex-shrink-0 mt-0.5">
                    {stage.status === "in-progress" && (
                      <div className="absolute -inset-1 bg-indigo-500/15 rounded-full blur-sm" />
                    )}
                    <div
                      className={`relative w-8 h-8 rounded-full bg-gradient-to-br ${stage.avatarColor} flex items-center justify-center`}
                    >
                      <stage.icon className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-xs font-semibold text-white">
                        {stage.phase}
                      </p>
                      <span className="text-[10px] text-slate-600 font-mono">
                        {stage.duration}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                      {stage.description}
                    </p>
                  </div>

                  {/* Status + arrow */}
                  <div className="flex items-center gap-2 flex-shrink-0 mt-1">
                    <StatusIcon status={stage.status} />
                    <ArrowRight className="w-3.5 h-3.5 text-slate-700 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
