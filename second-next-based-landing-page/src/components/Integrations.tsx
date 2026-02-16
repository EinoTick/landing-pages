"use client";

import { motion } from "framer-motion";

const integrations = [
  { name: "React", color: "#61dafb" },
  { name: "Vue", color: "#42b883" },
  { name: "Angular", color: "#dd0031" },
  { name: "Svelte", color: "#ff3e00" },
  { name: "Node.js", color: "#68a063" },
  { name: "Python", color: "#3776ab" },
  { name: "Go", color: "#00add8" },
  { name: "Ruby", color: "#cc342d" },
];

const providers = [
  { name: "SendGrid", category: "Email" },
  { name: "Twilio", category: "SMS" },
  { name: "Firebase", category: "Push" },
  { name: "Slack", category: "Chat" },
  { name: "Discord", category: "Chat" },
  { name: "AWS SES", category: "Email" },
];

export default function Integrations() {
  return (
    <section id="integrations" className="relative py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/3 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-violet-600/6 blur-3xl" />
      </div>

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400">
            Integrations
          </span>
          <h2 className="mb-4 text-3xl font-bold text-slate-50 sm:text-4xl md:text-5xl">
            Works with your{" "}
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              entire stack
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Native SDKs for every framework. Pre-built connectors for every
            provider.
          </p>
        </motion.div>

        {/* Framework logos */}
        <div className="mb-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {integrations.map((int, i) => (
            <motion.div
              key={int.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group flex items-center gap-3 rounded-xl border border-white/[0.06] bg-slate-900/40 p-4 backdrop-blur-xl transition-all hover:border-white/[0.12] hover:bg-slate-900/60"
            >
              <div
                className="h-8 w-8 rounded-lg"
                style={{ backgroundColor: `${int.color}15` }}
              >
                <div
                  className="flex h-full w-full items-center justify-center rounded-lg text-xs font-bold"
                  style={{ color: int.color }}
                >
                  {int.name.charAt(0)}
                </div>
              </div>
              <span className="text-sm font-medium text-slate-300 group-hover:text-slate-100">
                {int.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Provider cards */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {providers.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex flex-col items-center gap-2 rounded-xl border border-white/[0.06] bg-slate-900/30 p-6 text-center backdrop-blur-xl transition-all hover:border-white/[0.12]"
            >
              <span className="text-sm font-medium text-slate-300">
                {p.name}
              </span>
              <span className="rounded-full bg-slate-800/60 px-2 py-0.5 text-[10px] font-medium text-slate-500">
                {p.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
