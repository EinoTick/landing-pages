import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <nav className="bg-white border-t-2 border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="bg-black text-white px-4 py-2 font-heading font-bold text-xl uppercase tracking-tight"
          >
            SHIP-READY
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-0">
            <a
              href="#services"
              className="px-6 py-2 font-heading font-semibold text-black hover:bg-yellow-200 transition-colors"
            >
              Services
            </a>
            <div className="h-6 w-0.5 bg-black"></div>
            <a
              href="#why-us"
              className="px-6 py-2 font-heading font-semibold text-black hover:bg-yellow-200 transition-colors"
            >
              Why Us
            </a>
            <div className="h-6 w-0.5 bg-black"></div>
            <a
              href="#contact"
              className="px-6 py-2 font-heading font-semibold text-black hover:bg-yellow-200 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ 
              x: 4, 
              y: 4,
              boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="bg-yellow-400 text-black font-heading font-bold px-6 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-tight"
          >
            Hire Us
          </motion.button>
        </div>
      </div>
    </nav>
  )
}
