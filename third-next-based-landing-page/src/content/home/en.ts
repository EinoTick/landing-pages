import type { HomeContent } from "./types";

export const enHomeContent: HomeContent = {
  hero: {
    titleLine1: "Production-Ready Web",
    titleLine2: "Applications & Custom Platforms.",
    badge: "Free demo first — completely risk-free",
    subtitle:
      "Senior-level development for SaaS MVPs and complex internal tools—built and shipped by one engineer who owns the entire stack.",
    description:
      "I build you a free demo before any contract. See the approach, test the fit, and walk away if it's not right—zero cost, zero pressure.",
    primaryCta: "Request a free demo",
    secondaryCta: "See recent work",
  },
  techStack: {
    eyebrow: "The stack I ship with",
    title: "Modern, typed, and proven in production",
    items: ["React", "Next.js", "Angular", "Vue", "Node.js", "FastAPI"],
  },
  fullStackCard: {
    title: "Full-Stack Capabilities",
    description: "I own the entire stack—frontend, API, database, and deploy.",
    badges: ["React", "Node.js", "FastAPI"],
    bullets: [
      "SaaS MVPs built to ship—not to demo",
      "Custom internal tools and complex workflow platforms",
      "Typed APIs and clean, scalable backend architecture",
    ],
  },
  devOpsCard: {
    title: "DevOps & Pipelines",
    description: "Automated CI/CD workflows",
    pipelineLabels: {
      gitCommit: "Git Commit",
      docker: "Docker",
      production: "Production",
    },
  },
  testingCard: {
    title: "Testing & Reliability",
    description: "Comprehensive test coverage",
    items: [
      "Vitest Unit Tests",
      "Cypress E2E Tests",
      "Type Safety with TypeScript",
    ],
  },
  performanceCard: {
    title: "Performance",
    description: "Optimized for speed and scale",
    loadTimeLabel: "Load Time",
    loadTimeValue: "< 1s",
    lighthouseLabel: "Lighthouse Score",
    lighthouseValue: "98+",
    footerNote: "Code splitting & lazy loading",
  },
  recentWork: {
    title: "Recent Work",
    subtitle:
      "A selection of complex projects and open-source contributions. Full case studies coming soon.",
    previewLabel: "Preview coming soon",
    caseStudies: [
      {
        tag: "SaaS MVP",
        title: "Project coming soon",
        description:
          "A recent end-to-end build—from auth and billing to background jobs. Detailed write-up landing here shortly.",
        stack: ["Next.js", "FastAPI", "Postgres"],
      },
      {
        tag: "Internal Tool",
        title: "Project coming soon",
        description:
          "Custom internal platform replacing a tangle of spreadsheets. Case study with metrics on the way.",
        stack: ["React", "Vue", "Celery"],
      },
      {
        tag: "Open Source",
        title: "Project coming soon",
        description:
          "Selected open-source contributions and tooling I maintain. Repo links and highlights coming soon.",
        stack: ["TypeScript", "Node.js"],
      },
    ],
  },
  whyUs: {
    title: "Why work with me",
    subtitle:
      "A focused, senior alternative to agencies—with a free demo upfront so you can judge the fit before spending anything.",
    reasons: [
      {
        title: "You work with me, directly",
        description:
          "No account managers, no junior hand-offs. You get a senior engineer who writes the architecture, the code, and the deploy scripts—same person from kickoff to launch.",
      },
      {
        title: "Start with a free demo",
        description:
          "No vague proposals or big upfront commitments—I build a real demo of your core idea first. Like it? We scope the full build. Don't? You walk away owing nothing.",
      },
      {
        title: "Tested, typed, maintainable",
        description:
          "TypeScript, Vitest, and Playwright are standard. You inherit a codebase that's safe to change, easy to extend, and ready to hand off to your future team.",
      },
      {
        title: "Honest, async communication",
        description:
          "Clear scopes, realistic timelines, and weekly written updates. No status meetings, no vague estimates—just steady progress you can actually see.",
      },
    ],
  },
  pricing: {
    title: "Engagement options",
    subtitle:
      "Every engagement starts with a free demo. Only move to a paid build when you're confident it's the right fit.",
    featuredBadge: "Start here",
    plans: [
      {
        name: "Free demo",
        description:
          "A focused, working demo of your idea—built before any contract or invoice.",
        price: "$0",
        features: [
          "Scoped to your core use case",
          "Clickable prototype you can evaluate",
          "Honest fit assessment afterward",
          "Walk away anytime — zero obligation",
        ],
        cta: "Request a free demo",
        featured: true,
      },
      {
        name: "SaaS MVP Build",
        description:
          "After a successful demo: take your product from spec to a launched, paying-customer-ready SaaS in 6–10 weeks.",
        price: "$8,000+",
        features: [
          "Architecture planning",
          "Database design",
          "Authentication",
          "API integrations",
          "4 weeks of post-launch bug fixes",
        ],
        cta: "Discuss a full build",
      },
      {
        name: "Custom Platform",
        description:
          "Heavier engineering work after we've proven the approach: complex products, internal tools, and migrations.",
        price: "Custom",
        features: [
          "Complex workflows",
          "Internal tools",
          "Legacy codebase refactoring",
          "Headless commerce migrations",
        ],
        cta: "Discuss scope",
      },
      {
        name: "Monthly Maintenance & Retainer",
        description:
          "An always-on senior engineer on your team—without the full-time hire.",
        price: "$1,500/mo",
        features: [
          "Guaranteed async availability",
          "Security patches",
          "Performance monitoring",
          "Continuous feature development",
        ],
        cta: "Check Availability",
        note: "Limited to 3 ongoing clients.",
      },
    ],
  },
  about: {
    eyebrow: "About",
    introBeforeName: "Hi, I'm",
    name: "Eino",
    bioAfterName:
      ". I'm a senior engineer who left the agency world to build high-performance software directly for founders. I start with a free demo so you can see my work before committing—I handle the architecture, the code, and the deployments.",
  },
  contact: {
    eyebrow: "Contact",
    heading: "Request a free demo",
    description:
      "Tell me what you're building. If it's a good fit, I'll put together a free demo—no contract and no cost. Not the right match? I'll say so honestly.",
  },
  footer: {
    navLinks: [
      { label: "Services", href: "#" },
      { label: "Work", href: "#work" },
      { label: "Pricing", href: "#pricing" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
    tagline: "SaaS MVPs, custom platforms & ongoing engineering",
    privacyLabel: "Privacy",
    copyrightRole: "Senior Full-Stack Engineer",
  },
};
