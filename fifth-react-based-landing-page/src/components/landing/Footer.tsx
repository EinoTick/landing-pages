import { Github, Linkedin, Mail } from "lucide-react"

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
      <div className="max-w-7xl mx-auto px-4">
        {/* Main footer content: single row, clear sections */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <p className="text-lg font-semibold text-white">
              Full-Stack Dev Studio
            </p>
            <p className="mt-2 text-sm text-white/60 max-w-xs">
              Custom React apps and high-performance landing pages for startups.
            </p>
          </div>

          {/* Nav */}
          <div className="lg:col-span-4">
            <p className="text-xs font-medium uppercase tracking-wider text-white/50 mb-4">
              Quick links
            </p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-white transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="lg:col-span-3">
            <p className="text-xs font-medium uppercase tracking-wider text-white/50 mb-4">
              Connect
            </p>
            <div className="flex gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-colors"
                >
                  <item.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-white/50 order-2 sm:order-1">
            © {new Date().getFullYear()} Full-Stack Dev Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
