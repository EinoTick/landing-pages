"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const useCases = [
  {
    tag: "Operations",
    title: "Request & intake pipelines",
    description:
      "Vendor onboarding, purchase requests, or internal service desks—structured intake, triage, and resolution without lost tickets.",
  },
  {
    tag: "Professional services",
    title: "Client delivery workflows",
    description:
      "Project kickoff checklists, deliverable reviews, and hand-offs between sales, delivery, and finance in one tracked flow.",
  },
  {
    tag: "Compliance",
    title: "Review & sign-off chains",
    description:
      "Policy approvals, document reviews, and exception handling with enforced steps and a defensible audit log.",
  },
  {
    tag: "HR & admin",
    title: "People & onboarding flows",
    description:
      "New hire setup, equipment requests, and offboarding tasks assigned automatically to the right owners.",
  },
  {
    tag: "Field & logistics",
    title: "Job lifecycle tracking",
    description:
      "Work orders moving from quote to schedule to completion—with status visible to office and field teams alike.",
  },
  {
    tag: "Replace spreadsheets",
    title: "Spreadsheet escape hatches",
    description:
      "When a shared Excel file became the system of record. I turn fragile manual trackers into reliable software.",
  },
];

export function WorkflowUseCases() {
  return (
    <section id="use-cases" className="relative isolate py-24 px-4 scroll-mt-20">
      <div aria-hidden className="absolute inset-0 -z-10 bg-[#010411]" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(34, 197, 94, 0.06) 0%, transparent 60%), radial-gradient(ellipse 80% 50% at 50% 100%, rgba(99, 102, 241, 0.05) 0%, transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight text-white mb-4">
            Common workflow projects
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            If your team repeats the same steps across people, tools, or
            departments, it&apos;s probably a workflow problem—and a good fit
            for custom software.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Card className="h-full border-white/10 bg-white/5 backdrop-blur-xl">
                <CardContent className="p-6">
                  <span className="text-xs uppercase tracking-wider text-green-400/90 font-medium">
                    {item.tag}
                  </span>
                  <h3 className="text-xl font-semibold text-white mt-2 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-base text-white/75 leading-7">
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
