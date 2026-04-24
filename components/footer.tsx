"use client"

import Link from "next/link"
import SocialLinks from "@/components/social-links"
import { Zap } from "lucide-react"
import { motion } from "framer-motion"

const footerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 overflow-hidden">
      <div className="container py-16 md:py-24">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="space-y-4" variants={itemVariants}>
            <Link href="/" className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg bg-white flex items-center justify-center">
                <Zap className="h-4 w-4 text-black fill-current" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">Amane Soft</span>
            </Link>
            <p className="text-zinc-500 text-xs leading-relaxed max-w-[200px]">
              Pioneering enterprise software solutions with a focus on AI, cloud resilience, and high-scale engineering.
            </p>
            <div className="flex gap-3">
              <SocialLinks />
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-white font-bold text-[10px] mb-4 uppercase tracking-widest">Solutions</h3>
            <ul className="space-y-2.5 text-[13px]">
              <li>
                <Link href="#features" className="text-zinc-500 transition-colors hover:text-white">
                  AI-Powered Analytics
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-zinc-500 transition-colors hover:text-white">
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-zinc-500 transition-colors hover:text-white">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-zinc-500 transition-colors hover:text-white">
                  Data Engineering
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-white font-bold text-[10px] mb-4 uppercase tracking-widest">Company</h3>
            <ul className="space-y-2.5 text-[13px]">
              <li>
                <Link href="/about" className="text-zinc-500 transition-colors hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-zinc-500 transition-colors hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-zinc-500 transition-colors hover:text-white">
                  Engineering Blog
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-zinc-500 transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-white font-bold text-[10px] mb-4 uppercase tracking-widest">Newsletter</h3>
            <p className="text-zinc-500 text-xs mb-4 leading-relaxed">
              Subscribe to our engineering updates and industry insights.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white text-xs focus:outline-none focus:border-zinc-700 transition-colors"
              />
              <button className="px-3 py-1.5 rounded-lg bg-white text-black text-xs font-bold hover:bg-zinc-200 transition-colors">
                Join
              </button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-zinc-500 text-xs">
            &copy; {currentYear} Amane Soft, Inc. All rights reserved. Built with precision for the modern enterprise.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-zinc-500 text-xs hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-zinc-500 text-xs hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="text-zinc-500 text-xs hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
