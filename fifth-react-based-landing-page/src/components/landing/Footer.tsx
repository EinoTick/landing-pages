import { Github, Linkedin, Mail, ArrowRight } from "lucide-react"
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
          className="relative rounded-2xl overflow-hidden py-16 px-8 text-center sm:py-20 sm:px-12 border border-white/10"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 0%, rgba(99, 102, 241, 0.18) 0%, rgba(139, 92, 246, 0.12) 35%, rgba(99, 102, 241, 0.06) 60%, transparent 100%), radial-gradient(ellipse 60% 50% at 50% 100%, rgba(59, 130, 246, 0.08) 0%, transparent 70%)",
            boxShadow:
              "0 4px 24px -4px rgba(0,0,0,0.4), 0 8px 32px -8px rgba(99, 102, 241, 0.15)",
          }}
        >
          {/* Dot grid texture */}
          <div
            className="absolute inset-0 rounded-2xl opacity-[0.05] pointer-events-none z-[1]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          />
          <div className="absolute inset-0 backdrop-blur-sm z-0" aria-hidden />
          <div className="relative z-10">
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgb(165, 180, 252) 0%, rgb(196, 181, 253) 50%, rgb(129, 140, 248) 100%)",
              }}
            >
              Ready to start your project?
            </h2>
            <p className="mt-3 text-slate-400 text-lg max-w-md mx-auto">
              Let's build something that scales. Get in touch and we'll respond within 24 hours.
            </p>
            <div className="mt-8">
              <Button
                size="lg"
                className="group text-base px-8 py-6 h-auto font-semibold transition-transform duration-200 hover:scale-105 focus:scale-105 active:scale-[1.02]"
                asChild
              >
                <a href="#contact" className="inline-flex items-center gap-2">
                  Get in Touch
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
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
