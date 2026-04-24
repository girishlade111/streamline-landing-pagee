"use client"

import { Brain, Cloud, Shield, Zap, Database, Globe, Lock, Cpu } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    name: "AI-Powered Analytics",
    description: "Harness the power of machine learning to derive actionable insights from your complex data sets in real-time.",
    icon: Brain,
    color: "from-purple-500/20 to-indigo-500/20",
    iconColor: "text-purple-500",
  },
  {
    name: "Cloud-Native Architecture",
    description: "Scalable, resilient, and efficient microservices built for the modern multi-cloud ecosystem using Kubernetes.",
    icon: Cloud,
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500",
  },
  {
    name: "Enterprise Security",
    description: "State-of-the-art security measures including zero-trust architecture and automated threat detection.",
    icon: Shield,
    color: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-500",
  },
  {
    name: "Real-time Processing",
    description: "Optimized for extreme low-latency and high-throughput data streams, delivering unparalleled performance.",
    icon: Zap,
    color: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-500",
  },
  {
    name: "Data Engineering",
    description: "Robust ETL pipelines and data lakehouse architectures designed for scale and data integrity.",
    icon: Database,
    color: "from-rose-500/20 to-pink-500/20",
    iconColor: "text-rose-500",
  },
  {
    name: "Edge Computing",
    description: "Deploy logic closer to your users with our globally distributed edge network for 99.9% availability.",
    icon: Globe,
    color: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-500",
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
    <section id="features" className="container space-y-16 py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <motion.div 
        className="mx-auto max-w-[58rem] text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-bold text-4xl leading-[1.1] sm:text-5xl md:text-6xl bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent tracking-tight font-sans">
          Cutting-Edge Solutions
        </h2>
        <p className="mt-4 text-zinc-400 sm:text-lg max-w-[42rem] mx-auto">
          Our technology stack is built for the future. Explore the innovations that drive Amane Soft's digital transformation initiatives.
        </p>
      </motion.div>
      
      <motion.div 
        className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {features.map((feature) => (
          <motion.div 
            key={feature.name} 
            variants={itemVariants}
            className="group relative overflow-hidden rounded-2xl border bg-zinc-950/50 p-8 transition-all hover:border-primary/50 hover:bg-zinc-900/50"
            whileHover={{ y: -5 }}
          >
            {/* Gradient background hover effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
            
            <div className="relative z-10">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 transition-all duration-300 group-hover:scale-110 group-hover:border-primary/50 ${feature.iconColor}`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-bold text-xl text-white font-syne uppercase tracking-tight">{feature.name}</h3>
              <p className="mt-3 text-zinc-400 leading-relaxed text-sm font-sans">
                {feature.description}
              </p>
            </div>
            
            {/* Subtle light effect at bottom */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
