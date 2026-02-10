import { motion } from "framer-motion";
import { SectionWrapper } from "./shared/SectionWrapper";
import { GlassCard } from "./shared/GlassCard";
import { services } from "@/data/services";
import { fadeUp } from "@/lib/animations";

export function Services() {
  return (
    <SectionWrapper id="services">
      <motion.div variants={fadeUp} className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Everything You Need to{" "}
          <span className="gradient-text">Launch & Scale</span>
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          From initial concept to production deployment, we provide end-to-end
          development services tailored for startups.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <GlassCard key={service.title} className="group">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
              <service.icon className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {service.title}
            </h3>
            <p className="text-slate-400">{service.description}</p>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
