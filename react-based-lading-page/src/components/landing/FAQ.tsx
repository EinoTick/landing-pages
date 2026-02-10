import { motion } from "framer-motion";
import { SectionWrapper } from "./shared/SectionWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";
import { fadeUp } from "@/lib/animations";

export function FAQ() {
  return (
    <SectionWrapper id="faq">
      <motion.div variants={fadeUp} className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Frequently Asked <span className="gradient-text">Questions</span>
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Everything you need to know about working with us.
        </p>
      </motion.div>

      <motion.div variants={fadeUp} className="max-w-3xl mx-auto">
        <Accordion type="single" defaultValue={["faq-0"]}>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </SectionWrapper>
  );
}
