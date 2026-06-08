"use client";

import { motion } from "framer-motion";
import {
  ArrowRightLeft,
  Bell,
  ClipboardCheck,
  Network,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const capabilities = [
  {
    icon: ArrowRightLeft,
    title: "Process automation",
    description:
      "Multi-step workflows with clear states, assignments, and deadlines—so work moves forward without someone chasing status in Slack.",
  },
  {
    icon: ClipboardCheck,
    title: "Approvals & routing",
    description:
      "Review queues, sign-off chains, and conditional paths when a request needs finance, legal, or a manager before it proceeds.",
  },
  {
    icon: Bell,
    title: "Notifications & audit trails",
    description:
      "Email or in-app alerts when action is needed, plus a full history of who did what and when—essential for compliance and trust.",
  },
  {
    icon: Network,
    title: "System integrations",
    description:
      "Connect your workflow to CRMs, accounting tools, databases, and internal APIs so data flows once instead of being retyped.",
  },
];

export function WorkflowCapabilities() {
  return (
    <section id="capabilities" className="py-24 px-4 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight text-white mb-4">
            What I build
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Focused workflow software—not generic apps with a Kanban board
            bolted on. Systems shaped around your actual process.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Card className="h-full border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/[0.07] transition-colors">
                <CardContent className="p-6">
                  <div className="p-2.5 rounded-lg bg-green-400/10 border border-green-400/25 w-fit mb-4">
                    <item.icon className="w-5 h-5 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-base md:text-[17px] text-white/80 leading-7 md:leading-8">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
