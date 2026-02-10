export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "How long does it take to build an MVP?",
    answer: "Most MVPs take 4-8 weeks from kickoff to launch. The exact timeline depends on complexity, but we prioritize speed without sacrificing quality. We'll provide a detailed timeline during our discovery call.",
  },
  {
    question: "What technologies do you use?",
    answer: "We're tech-agnostic and choose the best tools for each project. Our core stack includes React/Next.js, Node.js, Python, and PostgreSQL, but we also work with Go, Rust, mobile frameworks, and various cloud platforms. We'll recommend the right stack based on your specific needs.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer: "Yes! All packages include post-launch support (30-90 days depending on the tier). After that, we offer flexible retainer agreements for ongoing development, maintenance, and feature additions. Many clients continue working with us for years.",
  },
  {
    question: "Can you help with product strategy, not just development?",
    answer: "Absolutely. Our team includes product strategists who can help refine your idea, define your MVP scope, and prioritize features. We've helped dozens of startups go from napkin sketch to funded company.",
  },
  {
    question: "What if I need to pivot or change requirements mid-project?",
    answer: "Pivots are part of startup life — we get it. We use agile methodology with 2-week sprints, so we can adapt to changes quickly. Major scope changes may affect timeline and budget, but we'll always be transparent about trade-offs.",
  },
  {
    question: "How do you handle intellectual property and confidentiality?",
    answer: "Your IP is 100% yours. We sign NDAs before any detailed discussions and our contracts clearly state that all code, designs, and documentation belong to you. We never reuse client work or share sensitive information.",
  },
  {
    question: "What's your payment structure?",
    answer: "We typically work with 40% upfront, 30% at midpoint, and 30% upon delivery. For larger projects, we can create custom payment schedules tied to milestones. We accept wire transfer, credit card, and ACH payments.",
  },
  {
    question: "Do you work with non-technical founders?",
    answer: "Yes, and we love it! Many of our best partnerships are with non-technical founders who have deep domain expertise. We'll translate your vision into technical reality and keep you informed without overwhelming you with jargon.",
  },
];
