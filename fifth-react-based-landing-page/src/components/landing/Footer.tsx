import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const links = [
  { label: "Services", href: "#" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#contact" },
]

const social = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="text-xl font-semibold text-white">Full-Stack Dev Studio</p>
            <p className="text-sm text-white/60 mt-1">
              Custom React apps & high-performance landing pages for startups.
            </p>
          </div>

          <nav className="flex flex-wrap gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Full-Stack Dev Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {social.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                size="icon"
                className="text-white/60 hover:text-white"
                asChild
              >
                <a href={item.href} aria-label={item.label}>
                  <item.icon className="w-4 h-4" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
