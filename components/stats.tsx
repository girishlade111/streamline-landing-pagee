"use client"

import { motion } from "framer-motion"
import { Users, Globe2, Trophy, Code2 } from "lucide-react"

const stats = [
  {
    name: "Enterprise Clients",
    value: "500+",
    icon: Users,
    description: "Trusting our platform globally.",
  },
  {
    name: "Countries Served",
    value: "40+",
    icon: Globe2,
    description: "Expanding digital boundaries.",
  },
  {
    name: "Awards Won",
    value: "15+",
    icon: Trophy,
    description: "Recognized for excellence.",
  },
  {
    name: "Lines of Code",
    value: "10M+",
    icon: Code2,
    description: "Deployed in production.",
  },
]

export default function Stats() {
  return (
    <section className="container py-24 md:py-32 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      
      <div className="mx-auto max-w-[58rem] text-center mb-16">
        <motion.h2 
          className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          By the Numbers
        </motion.h2>
        <motion.p 
          className="mt-4 text-muted-foreground sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Our impact and footprint across the software engineering landscape.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            className="flex flex-col items-center justify-center p-8 text-center bg-background/50 border rounded-2xl backdrop-blur-sm hover:border-primary/50 transition-colors"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <stat.icon className="h-6 w-6" />
            </div>
            <h3 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-2">{stat.value}</h3>
            <p className="font-semibold text-foreground/90">{stat.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">{stat.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
