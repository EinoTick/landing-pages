import { motion } from 'framer-motion'
import { Check, X, DollarSign } from 'lucide-react'

const comparisonData = [
  {
    feature: "Ship-Ready Code",
    us: true,
    freelancers: false,
    agencies: true,
  },
  {
    feature: "Fast Turnaround",
    us: true,
    freelancers: true,
    agencies: false,
  },
  {
    feature: "Scalable Architecture",
    us: true,
    freelancers: false,
    agencies: true,
  },
  {
    feature: "Transparent Pricing",
    us: true,
    freelancers: true,
    agencies: false,
  },
  {
    feature: "Modern Tech Stack",
    us: true,
    freelancers: false,
    agencies: true,
  },
  {
    feature: "No Hidden Costs",
    us: true,
    freelancers: false,
    agencies: false,
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="max-w-7xl mx-auto px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="font-heading font-bold text-4xl md:text-6xl text-black uppercase mb-12 text-center"
      >
        Why Choose Us
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 400, damping: 10, delay: 0.2 }}
        className="bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
      >
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-black text-white">
              <th className="border-2 border-black p-4 text-left font-heading font-bold uppercase">
                Feature
              </th>
              <th className="border-2 border-black p-4 text-center font-heading font-bold uppercase bg-green-500">
                Us
              </th>
              <th className="border-2 border-black p-4 text-center font-heading font-bold uppercase bg-red-500">
                Freelancers
              </th>
              <th className="border-2 border-black p-4 text-center font-heading font-bold uppercase bg-yellow-400 text-black">
                Big Agencies
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, index) => (
              <motion.tr
                key={row.feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 10,
                  delay: index * 0.05 
                }}
                className="hover:bg-yellow-100 transition-colors"
              >
                <td className="border-2 border-black p-4 font-semibold text-black">
                  {row.feature}
                </td>
                <td className="border-2 border-black p-4 text-center">
                  {row.us ? (
                    <Check className="w-6 h-6 text-green-600 mx-auto" />
                  ) : (
                    <X className="w-6 h-6 text-red-600 mx-auto" />
                  )}
                </td>
                <td className="border-2 border-black p-4 text-center">
                  {row.freelancers ? (
                    <Check className="w-6 h-6 text-green-600 mx-auto" />
                  ) : (
                    <X className="w-6 h-6 text-red-600 mx-auto" />
                  )}
                </td>
                <td className="border-2 border-black p-4 text-center">
                  {row.agencies ? (
                    <DollarSign className="w-6 h-6 text-yellow-600 mx-auto" />
                  ) : (
                    <X className="w-6 h-6 text-red-600 mx-auto" />
                  )}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  )
}
