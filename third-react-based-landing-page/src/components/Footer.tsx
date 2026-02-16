import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white border-t-2 border-black">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="text-center space-y-8"
        >
          <h2 className="font-heading font-bold text-5xl md:text-7xl uppercase tracking-tight">
            Let's Code
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Ready to ship your next app? Drop us a line.
          </p>

          <motion.a
            href="mailto:hello@shipready.dev"
            whileHover={{ 
              x: 4, 
              y: 4,
              boxShadow: "0px 0px 0px 0px rgba(255,255,255,1)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="inline-block bg-white text-black font-heading font-bold px-8 py-4 text-lg border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] uppercase tracking-tight"
          >
            hello@shipready.dev
          </motion.a>

          <div className="pt-8 border-t-2 border-gray-800">
            <p className="text-gray-400 font-mono text-sm">
              © 2026 SHIP-READY APPS. ALL RIGHTS RESERVED.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
