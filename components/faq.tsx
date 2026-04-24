"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, MessageCircleQuestion } from "lucide-react"

const faqs = [
  {
    question: "What industries do you specialize in?",
    answer: "We work across a variety of industries, including Fintech, Healthtech, E-commerce, and high-scale SaaS platforms. Our solutions are adaptable and tailor-made to fit the unique compliance (HIPAA, GDPR, SOC2) and scaling needs of your specific sector.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. A standard enterprise web application MVP might take 8-12 weeks, while large-scale legacy modernization or cloud migrations can span 4-8 months. We provide detailed milestones and transparent reporting throughout the lifecycle.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Absolutely. we offer comprehensive Service Level Agreements (SLAs) including 24/7 monitoring, automated patching, security updates, and performance optimization to ensure your infrastructure remains resilient long after launch.",
  },
  {
    question: "What is your typical technology stack?",
    answer: "We leverage industry-leading technologies: React/Next.js and Tailwind for frontends; Node.js, Go, and Python for backends; and AWS, GCP, or Azure for cloud infrastructure. We are experts in Kubernetes, Terraform, and various distributed database systems.",
  },
  {
    question: "Can you help with legacy system modernization?",
    answer: "Yes, this is one of our core strengths. We specialize in risk-free migration strategies, moving monolithic legacy applications to modern microservices architectures with zero downtime using strangler patterns and robust data synchronization.",
  },
  {
    question: "How do you handle project security and data privacy?",
    answer: "Security is baked into our development lifecycle (DevSecOps). We implement zero-trust networking, end-to-end encryption, and automated security scanning. All our developers are trained in OWASP best practices and secure coding standards.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 md:py-32 bg-zinc-950">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-[10px] font-mono mb-5"
          >
            <MessageCircleQuestion className="h-3 w-3" />
            <span>Support Center</span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-5 font-sans"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Common Inquiries
          </motion.h2>
          <motion.p
            className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Expert answers to the most common questions about our engineering process and enterprise solutions.
          </motion.p>
        </div>

        <div className="grid gap-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl border transition-all duration-300 ${openIndex === index
                  ? "bg-zinc-900/50 border-zinc-700 shadow-xl"
                  : "bg-zinc-900/20 border-zinc-800 hover:border-zinc-700"
                }`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                className="flex w-full items-center justify-between p-5 lg:p-6 text-left outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`text-base font-bold transition-colors ${openIndex === index ? "text-white" : "text-zinc-300"
                  }`}>
                  {faq.question}
                </span>
                <div className={`flex h-7 w-7 items-center justify-center rounded-full border transition-all duration-300 ${openIndex === index
                    ? "bg-white border-white text-black rotate-180"
                    : "bg-zinc-800 border-zinc-700 text-zinc-400"
                  }`}>
                  <ChevronDown className="h-3.5 w-3.5" />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-5 lg:px-6 pb-6 text-zinc-400 text-sm leading-relaxed max-w-3xl">
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
