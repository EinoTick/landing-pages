import { motion } from 'framer-motion'
import { Accordion } from '@/components/ui/accordion'

const faqItems = [
  {
    trigger: 'What are your pricing models?',
    content:
      'We offer both fixed-price and time-and-materials engagements depending on the scope and maturity of your project. Fixed pricing works best for well-defined MVPs, while T&M gives you maximum flexibility for evolving requirements. Every engagement starts with a free scoping call.',
  },
  {
    trigger: 'Do you sign NDAs before discussing projects?',
    content:
      "Absolutely. We're happy to execute a mutual NDA before any technical discussions begin. Confidentiality is a baseline expectation in every engagement \u2014 your ideas and data are always protected.",
  },
  {
    trigger: 'What does post-launch support look like?',
    content:
      'We offer ongoing retainer packages for maintenance, monitoring, and feature iteration. This includes bug fixes, performance optimization, infrastructure management, and priority Slack-based support. Most clients keep us on for at least 3 months post-launch.',
  },
  {
    trigger: 'What is your typical project timeline?',
    content:
      'Most MVPs ship in 6–10 weeks from kickoff. Larger projects with complex integrations or custom infrastructure typically take 12–16 weeks. We provide detailed timelines during our scoping phase so there are no surprises.',
  },
  {
    trigger: 'Which technologies do you specialize in?',
    content:
      'Our core stack includes React, Next.js, Vue/Nuxt, Node.js, and FastAPI (Python). For infrastructure, we work primarily with AWS and GCP, using Docker and Kubernetes for containerized deployments. We pick the right tool for each job — not one-size-fits-all.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-2xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">
          FAQ
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Frequently asked questions
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Accordion items={faqItems} />
      </motion.div>
    </section>
  )
}
