import type { Metadata } from "next";
import { MouseSpotlight } from "@/components/landing/MouseSpotlight";
import { ContactForm } from "@/components/landing/ContactForm";
import { Footer } from "@/components/landing/Footer";
import { WorkflowAbout } from "@/components/workflow/WorkflowAbout";
import { WorkflowCapabilities } from "@/components/workflow/WorkflowCapabilities";
import { WorkflowHero } from "@/components/workflow/WorkflowHero";
import { WorkflowPricing } from "@/components/workflow/WorkflowPricing";
import { WorkflowUseCases } from "@/components/workflow/WorkflowUseCases";
import { WorkflowWhyUs } from "@/components/workflow/WorkflowWhyUs";

export const metadata: Metadata = {
  title: "Workflow Software — ET Logic",
  description:
    "Custom workflow software for teams replacing spreadsheets and manual hand-offs. Process automation, approvals, integrations, and audit trails—built by a senior engineer.",
  openGraph: {
    title: "Workflow Software — ET Logic",
    description:
      "Custom workflow software built around how your team actually operates.",
    type: "website",
  },
};

const workflowNavLinks = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Use cases", href: "#use-cases" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function WorkflowPage() {
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <MouseSpotlight />

      <div className="relative z-10">
        <WorkflowHero />
        <WorkflowCapabilities />
        <WorkflowUseCases />
        <WorkflowWhyUs />
        <WorkflowPricing />
        <WorkflowAbout />
        <ContactForm
          eyebrow="Contact"
          heading="Describe your workflow"
          description="Share the process you're trying to fix—how it works today, who's involved, and what's breaking. I'll reply within 24 hours with an honest take on scope and approach."
        />
        <Footer
          logoHref="/workflow"
          navLinks={workflowNavLinks}
          tagline="Custom workflow software & process automation"
        />
      </div>
    </div>
  );
}
