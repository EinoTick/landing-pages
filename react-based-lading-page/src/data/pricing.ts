export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingTier {
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: PricingFeature[];
  cta: string;
  highlighted?: boolean;
  badge?: string;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "MVP",
    price: "$15,000",
    priceNote: "starting at",
    description: "Perfect for validating your startup idea with a functional product.",
    features: [
      { text: "4-6 week delivery", included: true },
      { text: "Core feature set", included: true },
      { text: "Responsive web app", included: true },
      { text: "Basic analytics", included: true },
      { text: "30 days post-launch support", included: true },
      { text: "Mobile app", included: false },
      { text: "Advanced integrations", included: false },
    ],
    cta: "Start Your MVP",
  },
  {
    name: "Scale",
    price: "$35,000",
    priceNote: "starting at",
    description: "For startups ready to build a complete, investor-ready product.",
    features: [
      { text: "8-12 week delivery", included: true },
      { text: "Full feature set", included: true },
      { text: "Web + mobile apps", included: true },
      { text: "Advanced analytics", included: true },
      { text: "90 days post-launch support", included: true },
      { text: "Third-party integrations", included: true },
      { text: "Performance optimization", included: true },
    ],
    cta: "Build to Scale",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for complex requirements and established companies.",
    features: [
      { text: "Custom timeline", included: true },
      { text: "Unlimited features", included: true },
      { text: "All platforms", included: true },
      { text: "Custom analytics", included: true },
      { text: "Dedicated support team", included: true },
      { text: "SLA guarantees", included: true },
      { text: "On-site consulting", included: true },
    ],
    cta: "Contact Sales",
  },
];
