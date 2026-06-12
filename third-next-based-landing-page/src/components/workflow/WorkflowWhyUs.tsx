"use client";

import { motion } from "framer-motion";
import { Layers, Route, User, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reasons = [
  {
    icon: Route,
    title: "Process-first, not feature-first",
    description:
      "We map your real workflow before writing code—edge cases, exceptions, and hand-offs included—so the software matches how work actually happens.",
  },
  {
    icon: User,
    title: "One senior engineer, end to end",
    description:
      "No agency layers. You work directly with the person who designs the flow, builds the app, and deploys it.",
  },
  {
    icon: Layers,
    title: "Built to evolve",
    description:
      "Workflows change. I structure systems so you can add steps, roles, and integrations later without a full rewrite.",
  },
  {
    icon: Wrench,
    title: "Try before you commit",
    description:
      "I build a free workflow demo first—real screens, real flow. You decide if it's worth a full build before spending anything.",
  },
];

export function WorkflowWhyUs() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight text-white mb-4">
            Why teams hire me for workflow work
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Workflow software fails when it ignores reality. I prove the approach
            with a free demo before asking you to commit.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Card className="h-full border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/[0.07] transition-colors">
                <CardContent className="p-6">
                  <div className="p-2.5 rounded-lg bg-indigo-500/20 border border-indigo-500/30 w-fit mb-4">
                    <item.icon className="w-5 h-5 text-indigo-400" />
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
