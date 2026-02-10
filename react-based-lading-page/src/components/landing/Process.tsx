import { motion } from "framer-motion";
import { Search, FileText, Code2, Rocket } from "lucide-react";
import { SectionWrapper } from "./shared/SectionWrapper";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "We dive deep into your vision, market, and users. Understanding your goals is the foundation of everything we build.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FileText,
    title: "Planning",
    description:
      "Detailed technical specs, timeline, and milestones. You'll know exactly what we're building and when it'll be ready.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Code2,
    title: "Development",
    description:
      "Agile sprints with weekly demos. Watch your product come to life with transparent progress updates.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Rocket,
    title: "Launch",
    description:
      "Smooth deployment with monitoring and support. We don't just ship — we ensure your product thrives.",
    color: "from-pink-500 to-rose-500",
  },
];

export function Process() {
  return (
    <SectionWrapper id="process" className="relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/5 rounded-full blur-3xl" />

      <motion.div variants={fadeUp} className="relative text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          How We <span className="gradient-text">Bring Ideas to Life</span>
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Our battle-tested process ensures quality delivery on time, every
          time.
        </p>
      </motion.div>

      <div className="relative">
        {/* Connection line */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-800 to-transparent -translate-y-1/2" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={fadeUp}
              className="relative text-center"
            >
              {/* Step number badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-sm font-bold text-slate-400 z-10">
                {index + 1}
              </div>

              {/* Icon container */}
              <div
                className={cn(
                  "w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-lg",
                  step.color
                )}
              >
                <step.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
