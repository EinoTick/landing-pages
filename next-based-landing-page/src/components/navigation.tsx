"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Collection", href: "#collection" },
  { label: "Materials", href: "#materials" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Contact", href: "#newsletter" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-xl"
    >
      <div className="border-hairline border-b">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-xl tracking-luxury uppercase"
          >
            Niveus
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-1">
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.label}>
                  <NavigationMenuLink
                    href={link.href}
                    className="px-4 py-2 text-xs tracking-luxury uppercase text-slate-400 transition-colors duration-300 hover:text-slate-900"
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="md:hidden" aria-label="Open menu">
              <Menu size={20} strokeWidth={1} />
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white pt-20">
              <nav className="flex flex-col gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-sm tracking-luxury uppercase text-slate-400 transition-colors hover:text-slate-900"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </motion.header>
  );
}
