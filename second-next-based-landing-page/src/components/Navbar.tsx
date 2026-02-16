"use client";

import { motion } from "framer-motion";
import { Zap, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#docs" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/[0.08] bg-slate-900/60 px-6 py-3 backdrop-blur-xl">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600">
              <Zap className="h-4 w-4 text-white" strokeWidth={1.5} />
            </div>
            <span className="text-lg font-semibold text-slate-50">Flux</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-slate-400 transition-colors hover:text-slate-50"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#"
              className="text-sm text-slate-400 transition-colors hover:text-slate-50"
            >
              Sign in
            </a>
            <a
              href="#"
              className="rounded-lg bg-gradient-to-r from-indigo-500 to-violet-600 px-4 py-2 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-indigo-500/25"
            >
              Get Started
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-slate-400 md:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" strokeWidth={1.5} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 rounded-2xl border border-white/[0.08] bg-slate-900/90 p-6 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-slate-400 transition-colors hover:text-slate-50"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-white/[0.08]" />
              <a
                href="#"
                className="text-sm text-slate-400 transition-colors hover:text-slate-50"
              >
                Sign in
              </a>
              <a
                href="#"
                className="rounded-lg bg-gradient-to-r from-indigo-500 to-violet-600 px-4 py-2 text-center text-sm font-medium text-white"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
