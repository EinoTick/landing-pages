"use client";

import { motion } from "framer-motion";
import {
  Bell,
  Code2,
  GitBranch,
  Globe,
  Layers,
  MessageSquare,
  Shield,
  Sparkles,
  Timer,
  Workflow,
  Zap,
  BarChart3,
} from "lucide-react";
import GlassCard from "./GlassCard";
import BorderBeamCard from "./BorderBeamCard";

function Toggle({ active }: { active: boolean }) {
  return (
    <div
      className={`relative h-6 w-11 rounded-full transition-colors ${
        active
          ? "bg-gradient-to-r from-pink-500 to-purple-500"
          : "bg-slate-700"
      }`}
    >
      <div
        className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-md transition-transform ${
          active ? "translate-x-5" : "translate-x-0.5"
        }`}
      />
    </div>
  );
}

function MiniBarChart() {
  const bars = [40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 50];
  return (
    <div className="flex items-end gap-1 h-24">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="w-2 rounded-sm bg-gradient-to-t from-indigo-500/60 to-violet-400/80"
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
        />
      ))}
    </div>
  );
}

function WorkflowDiagram() {
  const nodes = [
    { label: "Trigger", color: "from-indigo-500 to-violet-500" },
    { label: "Digest", color: "from-violet-500 to-purple-500" },
    { label: "Filter", color: "from-purple-500 to-pink-500" },
    { label: "Send", color: "from-pink-500 to-rose-500" },
  ];
  return (
    <div className="flex items-center gap-2">
      {nodes.map((node, i) => (
        <div key={node.label} className="flex items-center gap-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className={`rounded-lg bg-gradient-to-r ${node.color} px-3 py-1.5 text-xs font-medium text-white`}
          >
            {node.label}
          </motion.div>
          {i < nodes.length - 1 && (
            <div className="h-px w-4 bg-slate-700" />
          )}
        </div>
      ))}
    </div>
  );
}

function ChannelIcons() {
  const channels = [
    { icon: MessageSquare, label: "Chat", active: true },
    { icon: Bell, label: "Push", active: true },
    { icon: Globe, label: "Email", active: true },
    { icon: Zap, label: "SMS", active: false },
  ];
  return (
    <div className="grid grid-cols-2 gap-3">
      {channels.map(({ icon: Icon, label, active }) => (
        <div
          key={label}
          className={`flex items-center gap-2.5 rounded-xl border px-3 py-2.5 transition-colors ${
            active
              ? "border-indigo-500/30 bg-indigo-500/10"
              : "border-white/[0.06] bg-slate-800/40"
          }`}
        >
          <Icon
            className={`h-4 w-4 ${
              active ? "text-indigo-400" : "text-slate-600"
            }`}
            strokeWidth={1.5}
          />
          <span
            className={`text-xs font-medium ${
              active ? "text-indigo-300" : "text-slate-600"
            }`}
          >
            {label}
          </span>
          <div className="ml-auto">
            <Toggle active={active} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function BentoGrid() {
  return (
    <section id="features" className="relative py-20">
      {/* Section background spotlight */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-indigo-600/8 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-violet-600/8 blur-3xl" />
      </div>

      <div className="relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400">
            Features
          </span>
          <h2 className="mb-4 text-3xl font-bold text-slate-50 sm:text-4xl md:text-5xl">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              ship faster
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            A complete toolkit for building, testing, and managing notification
            workflows at any scale.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Workflow Builder — Large, spans 2 cols */}
          <BorderBeamCard className="lg:col-span-2">
            <div className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 ring-1 ring-indigo-500/30">
                  <Workflow
                    className="h-5 w-5 text-indigo-400"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-50">
                    Visual Workflow Builder
                  </h3>
                  <p className="text-sm text-slate-500">
                    Drag & drop interface
                  </p>
                </div>
              </div>
              <p className="mb-6 text-sm leading-relaxed text-slate-400">
                Design complex notification workflows visually. Chain triggers,
                conditions, and delivery steps without writing code.
              </p>
              <WorkflowDiagram />
            </div>
          </BorderBeamCard>

          {/* Card 2: Analytics */}
          <GlassCard>
            <div className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 ring-1 ring-violet-500/30">
                  <BarChart3
                    className="h-5 w-5 text-violet-400"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-lg font-semibold text-slate-50">
                  Real-time Analytics
                </h3>
              </div>
              <MiniBarChart />
              <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                <span>Last 12 hours</span>
                <span className="text-emerald-400">+23% delivery rate</span>
              </div>
            </div>
          </GlassCard>

          {/* Card 3: Multi-channel */}
          <GlassCard>
            <div className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 ring-1 ring-pink-500/30">
                  <Layers
                    className="h-5 w-5 text-pink-400"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-lg font-semibold text-slate-50">
                  Multi-Channel
                </h3>
              </div>
              <p className="mb-6 text-sm leading-relaxed text-slate-400">
                Deliver across every channel with unified preferences and
                intelligent fallbacks.
              </p>
              <ChannelIcons />
            </div>
          </GlassCard>

          {/* Card 4: Code First — spans 2 cols */}
          <GlassCard
            className="lg:col-span-2"
            glowColor="rgba(139, 92, 246, 0.12)"
          >
            <div className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 ring-1 ring-emerald-500/30">
                  <Code2
                    className="h-5 w-5 text-emerald-400"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-50">
                    Code-First SDK
                  </h3>
                  <p className="text-sm text-slate-500">TypeScript native</p>
                </div>
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-slate-950/80 p-5 font-mono text-sm">
                <div className="text-slate-500">
                  {"// Send a notification in 3 lines"}
                </div>
                <div className="mt-1">
                  <span className="text-violet-400">await</span>{" "}
                  <span className="text-indigo-300">flux</span>
                  <span className="text-slate-50">.trigger(</span>
                  <span className="text-emerald-400">
                    &apos;welcome-flow&apos;
                  </span>
                  <span className="text-slate-50">, {"{"}</span>
                </div>
                <div className="ml-4">
                  <span className="text-slate-50">to: </span>
                  <span className="text-emerald-400">subscriber</span>
                  <span className="text-slate-50">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-slate-50">payload: {"{"}</span>
                  <span className="text-slate-50"> name, plan </span>
                  <span className="text-slate-50">{"}"}</span>
                </div>
                <span className="text-slate-50">{"})"}</span>
              </div>
            </div>
          </GlassCard>

          {/* Card 5: Digest Engine */}
          <GlassCard glowColor="rgba(236, 72, 153, 0.12)">
            <div className="p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 ring-1 ring-amber-500/30">
                  <Timer
                    className="h-5 w-5 text-amber-400"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-lg font-semibold text-slate-50">
                  Smart Digest
                </h3>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-slate-400">
                Batch notifications intelligently. Reduce noise without missing
                important updates.
              </p>
              <div className="space-y-2">
                {["3 new comments", "Deploy succeeded", "Review requested"].map(
                  (item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-slate-800/40 px-3 py-2 text-xs text-slate-400"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                      {item}
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </GlassCard>

          {/* Card 6: Integrations */}
          <GlassCard>
            <div className="p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 ring-1 ring-cyan-500/30">
                  <GitBranch
                    className="h-5 w-5 text-cyan-400"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-lg font-semibold text-slate-50">
                  Git-Native
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Version control your notification templates. Preview changes in
                PRs. Deploy with confidence.
              </p>
            </div>
          </GlassCard>

          {/* Card 7: AI Powered */}
          <GlassCard glowColor="rgba(168, 85, 247, 0.15)">
            <div className="p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 ring-1 ring-purple-500/30">
                  <Sparkles
                    className="h-5 w-5 text-purple-400"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-lg font-semibold text-slate-50">
                  AI Copilot
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Let AI optimize send times, personalize content, and predict
                engagement patterns automatically.
              </p>
            </div>
          </GlassCard>

          {/* Card 8: Security — spans full width */}
          <BorderBeamCard
            className="lg:col-span-3"
            beamColor="#8b5cf6"
            duration={8}
          >
            <div className="flex flex-col items-center gap-6 p-8 text-center md:flex-row md:text-left">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 ring-1 ring-indigo-500/30">
                <Shield
                  className="h-7 w-7 text-indigo-400"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold text-slate-50">
                  Enterprise-Grade Security
                </h3>
                <p className="text-sm text-slate-400">
                  SOC 2 Type II certified. GDPR compliant. End-to-end
                  encryption. Role-based access controls. Your data never leaves
                  your infrastructure with our self-hosted option.
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                {["SOC 2", "GDPR", "HIPAA"].map((badge) => (
                  <span
                    key={badge}
                    className="rounded-lg border border-white/[0.08] bg-slate-800/50 px-3 py-1.5 text-xs font-medium text-slate-400"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </BorderBeamCard>
        </div>
      </div>
    </section>
  );
}
