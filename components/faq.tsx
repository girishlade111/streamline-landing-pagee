"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What industries do you specialize in?",
    answer: "We work across a variety of industries, including Finance, Healthcare, E-commerce, and SaaS. Our solutions are adaptable and tailor-made to fit the unique compliance and scaling needs of your sector.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. A standard web application MVP might take 6-8 weeks, while large-scale enterprise cloud migrations can span 3-6 months. We provide detailed timelines during the discovery phase.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes! We offer dedicated SLAs (Service Level Agreements) to ensure your infrastructure remains secure, updated, and performant long after the initial launch.",
  },
  {
    question: "What is your tech stack?",
    answer: "We specialize in modern, robust technologies. On the frontend, we use React, Next.js, and Tailwind CSS. For backend and cloud, we leverage Node.js, Python, AWS, GCP, and Docker/Kubernetes.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-muted/10 py-24 md:py-32 border-t border-b">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            className="mt-4 text-muted-foreground sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Everything you need to know about our process and services.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="border rounded-2xl bg-background overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <button
                className="flex w-full items-center justify-between p-6 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
