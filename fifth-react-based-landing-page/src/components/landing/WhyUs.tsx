import { motion } from "framer-motion"
import { Shield, Zap, Code2, MessageCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const reasons = [
  {
    icon: Code2,
    title: "Ship fast, ship right",
    description:
      "No agency overhead—you work directly with a senior engineer who writes production code. From idea to deploy in weeks, not months.",
  },
  {
    icon: Zap,
    title: "Built for performance",
    description:
      "Every project is optimized for Core Web Vitals and real-world load. Your users get a fast experience; you get better conversion and SEO.",
  },
  {
    icon: Shield,
    title: "Tested and maintainable",
    description:
      "Vitest, Cypress, and TypeScript are standard. You get a codebase that’s safe to change and easy to hand off or extend later.",
  },
  {
    icon: MessageCircle,
    title: "Clear communication",
    description:
      "No account managers or long email chains. Direct collaboration, realistic timelines, and honest estimates from day one.",
  },
]

export function WhyUs() {
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
            Why choose us
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            The best way to get a React app or landing page that actually performs—without the agency tax.
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
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
