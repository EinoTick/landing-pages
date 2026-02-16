import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Services", href: "#" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#contact" },
]

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
]

export function Footer() {
  return (
    <footer className="bg-slate-950/80 backdrop-blur-xl">
      {/* Pre-footer CTA */}
      <div className="max-w-4xl mx-auto px-4 pt-16 pb-20">
        <div
          className="relative rounded-2xl overflow-hidden py-16 px-8 text-center sm:py-20 sm:px-12"
          style={{
            background:
              "linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(139, 92, 246, 0.06) 50%, rgba(99, 102, 241, 0.04) 100%)",
            boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.06)",
          }}
        >
          <div className="absolute inset-0 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to start your project?
            </h2>
            <p className="mt-3 text-white/70 text-lg max-w-md mx-auto">
              Let's build something that scales. Get in touch and we'll respond within 24 hours.
            </p>
            <div className="mt-8">
              <Button size="lg" className="text-base px-8 py-6 h-auto font-semibold" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: nav + meta */}
      <div className="max-w-5xl mx-auto px-4 pb-12">
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center justify-items-center sm:justify-items-stretch text-center sm:text-left">
          <p className="text-xs text-white/50 sm:justify-self-start">
            © {new Date().getFullYear()} Full-Stack Dev Studio
          </p>
          <p className="text-xs text-white/40 order-last sm:order-none sm:justify-self-center">
            Custom React apps & landing pages for startups
          </p>
          <div className="flex items-center justify-center gap-2 sm:justify-self-end">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="flex items-center justify-center w-9 h-9 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-colors"
              >
                <item.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
