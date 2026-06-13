export type HomeCaseStudy = {
  tag: string;
  title: string;
  description: string;
  stack: string[];
};

export type HomeReason = {
  title: string;
  description: string;
};

export type HomePricingPlan = {
  name: string;
  description: string;
  price: string;
  features: string[];
  cta: string;
  note?: string;
  featured?: boolean;
};

export type HomeFooterNavLink = {
  label: string;
  href: string;
};

export type HomeContent = {
  hero: {
    titleLine1: string;
    titleLine2: string;
    badge: string;
    subtitle: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  techStack: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  fullStackCard: {
    title: string;
    description: string;
    badges: string[];
    bullets: string[];
  };
  devOpsCard: {
    title: string;
    description: string;
    pipelineLabels: {
      gitCommit: string;
      docker: string;
      production: string;
    };
  };
  testingCard: {
    title: string;
    description: string;
    items: string[];
  };
  performanceCard: {
    title: string;
    description: string;
    loadTimeLabel: string;
    loadTimeValue: string;
    lighthouseLabel: string;
    lighthouseValue: string;
    footerNote: string;
  };
  recentWork: {
    title: string;
    subtitle: string;
    previewLabel: string;
    caseStudies: HomeCaseStudy[];
  };
  whyUs: {
    title: string;
    subtitle: string;
    reasons: HomeReason[];
  };
  pricing: {
    title: string;
    subtitle: string;
    featuredBadge: string;
    plans: HomePricingPlan[];
  };
  about: {
    eyebrow: string;
    introBeforeName: string;
    name: string;
    bioAfterName: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    description: string;
  };
  footer: {
    navLinks: HomeFooterNavLink[];
    tagline: string;
    privacyLabel: string;
    copyrightRole: string;
  };
};
