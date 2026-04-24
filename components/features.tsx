"use client"

import { Brain, Cloud, Shield, Zap } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    name: "AI-Powered Analytics",
    description: "Harness the power of machine learning to derive actionable insights from your data.",
    icon: Brain,
  },
  {
    name: "Cloud-Native Architecture",
    description: "Scalable, resilient, and efficient solutions built for the modern cloud ecosystem.",
    icon: Cloud,
  },
  {
    name: "Enterprise-Grade Security",
    description: "State-of-the-art security measures to protect your most valuable assets.",
    icon: Shield,
  },
  {
    name: "High-Performance Systems",
    description: "Optimized for speed and efficiency, our solutions deliver unparalleled performance.",
    icon: Zap,
  },
]

const containerVariants = {
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
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function Features() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <motion.div 
        className="mx-auto max-w-[58rem] text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Cutting-Edge Solutions</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Discover how Amane Soft can transform your business with our innovative technologies.
        </p>
      </motion.div>
      <motion.div 
        className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {features.map((feature) => (
          <motion.div 
            key={feature.name} 
            variants={itemVariants}
            className="group relative overflow-hidden rounded-xl border bg-background p-8 transition-all hover:shadow-lg hover:shadow-primary/5"
            whileHover={{ y: -5 }}
          >
            {/* Gradient border hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            
            <div className="relative z-10 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl">{feature.name}</h3>
            </div>
            <p className="relative z-10 mt-4 text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
