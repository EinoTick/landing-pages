"use client";

import { Zap } from "lucide-react";

const footerLinks = [
  {
    title: "Product",
    links: ["Features", "Integrations", "Pricing", "Changelog", "Docs"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Press", "Partners"],
  },
  {
    title: "Resources",
    links: ["Community", "Contact", "Support", "Status", "Terms"],
  },
  {
    title: "Developers",
    links: ["API Reference", "SDKs", "Examples", "Guides", "Open Source"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="mb-4 flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600">
                <Zap className="h-4 w-4 text-white" strokeWidth={1.5} />
              </div>
              <span className="text-lg font-semibold text-slate-50">Flux</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              The modern notification infrastructure for developers.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="mb-4 text-sm font-semibold text-slate-300">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-500 transition-colors hover:text-slate-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 md:flex-row">
          <span className="text-sm text-slate-600">
            &copy; 2026 Flux. All rights reserved.
          </span>
          <div className="flex gap-6">
            {["Twitter", "GitHub", "Discord"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-slate-600 transition-colors hover:text-slate-400"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
