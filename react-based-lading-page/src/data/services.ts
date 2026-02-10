import {
  Rocket,
  Code2,
  Smartphone,
  Cloud,
  Shield,
  Zap,
  LucideIcon
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Rocket,
    title: "MVP Development",
    description: "Launch your product in weeks, not months. We build lean, scalable MVPs that validate your idea and attract investors.",
  },
  {
    icon: Code2,
    title: "Full-Stack Engineering",
    description: "React, Node, Python, Go — we speak them all. Modern tech stack tailored to your specific requirements.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native iOS and Android or cross-platform with React Native. Beautiful, performant apps your users will love.",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "AWS, GCP, Azure — we design and deploy infrastructure that scales with your growth and optimizes costs.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "SOC2, HIPAA, GDPR ready from day one. We build security into your product, not bolt it on later.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Slow apps lose users. We optimize every millisecond to ensure your product is lightning fast.",
  },
];
