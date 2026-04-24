"use client"

import { motion } from "framer-motion"
import { LayoutTemplate, Smartphone, Database, Lock, Cpu, Rocket, LineChart, ShieldAlert, Workflow } from "lucide-react"

const services = [
  {
    title: "Custom Web Applications",
    description: "Enterprise-grade web platforms built with React, Next.js, and Node.js. Focused on performance, accessibility, and high availability.",
    icon: LayoutTemplate,
    features: ["Micro-frontend Architecture", "Real-time Sync", "PWA Support"]
  },
  {
    title: "Cloud Engineering",
    description: "Designing resilient, auto-scaling multi-cloud infrastructures on AWS, Azure, and GCP with Infrastructure as Code (Terraform).",
    icon: Database,
    features: ["Serverless Computing", "Kubernetes Management", "CI/CD Pipelines"]
  },
  {
    title: "AI & Machine Learning",
    description: "Integrating LLMs, computer vision, and predictive modeling into business workflows to automate decision-making.",
    icon: Cpu,
    features: ["Custom Model Training", "Vector Databases", "NLP Integration"]
  },
  {
    title: "Cybersecurity Systems",
    description: "Advanced protection through zero-trust architectures, automated penetration testing, and real-time threat intelligence.",
    icon: Lock,
    features: ["Zero-Trust Security", "Identity Management", "Compliance Monitoring"]
  },
  {
    title: "DevOps & SRE",
    description: "Bridging development and operations to ensure 99.99% uptime, rapid deployment cycles, and robust system monitoring.",
    icon: Workflow,
    features: ["Site Reliability Engineering", "Automated Testing", "Observability"]
  },
  {
    title: "Data Analytics & BI",
    description: "Transforming raw data into strategic assets through advanced visualization and distributed processing frameworks.",
    icon: LineChart,
    features: ["Big Data Processing", "Tableau/PowerBI", "Predictive BI"]
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-5 font-sans"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Enterprise Engineering <br />
              <span className="text-zinc-500">at any scale.</span>
            </motion.h2>
            <motion.p
              className="text-zinc-400 text-sm sm:text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We provide comprehensive engineering services that help the world's most innovative companies build, scale, and secure their digital future.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="hidden md:block"
          >
            <div className="px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 text-white text-xs font-semibold backdrop-blur-sm">
              Our Capabilities
            </div>
          </motion.div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group flex flex-col justify-between p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div>
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-white group-hover:border-zinc-500 transition-all duration-300">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed mb-5 text-[13px]">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-2 mt-auto pt-5 border-t border-zinc-800/50">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-[11px] font-medium text-zinc-500 group-hover:text-zinc-300 transition-colors">
                    <div className="h-1 w-1 rounded-full bg-zinc-700 group-hover:bg-zinc-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
