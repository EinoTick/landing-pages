import { motion } from 'framer-motion'
import { Rocket, TrendingUp, LifeBuoy } from 'lucide-react'

const services = [
  {
    title: "The MVP",
    description: "From idea to launch in weeks. We build your minimum viable product with clean, scalable architecture.",
    icon: Rocket,
    color: "bg-purple-500",
  },
  {
    title: "The Scale-Up",
    description: "Your app is growing? We optimize, refactor, and scale your stack to handle millions of users.",
    icon: TrendingUp,
    color: "bg-green-500",
  },
  {
    title: "The Rescue",
    description: "Legacy code causing headaches? We untangle the mess and ship production-ready solutions.",
    icon: LifeBuoy,
    color: "bg-pink-500",
  },
]

export default function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="font-heading font-bold text-4xl md:text-6xl text-black uppercase mb-12 text-center"
      >
        What We Do
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring", 
              stiffness: 400, 
              damping: 10,
              delay: index * 0.1 
            }}
            whileHover={{ 
              x: 4, 
              y: 4,
              boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)"
            }}
            className="bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 cursor-pointer"
          >
            <div className={`${service.color} w-16 h-16 border-2 border-black flex items-center justify-center mb-6`}>
              <service.icon className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="font-heading font-bold text-2xl text-black uppercase mb-4">
              {service.title}
            </h3>
            
            <p className="text-black text-lg leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
