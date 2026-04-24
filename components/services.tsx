"use client"

import { motion } from "framer-motion"
import { LayoutTemplate, Smartphone, Database, Lock, Cpu, Rocket } from "lucide-react"

const services = [
  {
    title: "Custom Web Applications",
    description: "We build scalable, high-performance web applications tailored to your enterprise workflows using modern frameworks like React and Next.js.",
    icon: LayoutTemplate,
  },
  {
    title: "Mobile App Development",
    description: "Reach your audience anywhere with cross-platform native experiences for iOS and Android, ensuring seamless user journeys.",
    icon: Smartphone,
  },
  {
    title: "Cloud Infrastructure",
    description: "Design and implement resilient cloud architectures on AWS, GCP, or Azure to ensure 99.99% uptime and auto-scaling capabilities.",
    icon: Database,
  },
  {
    title: "Cybersecurity Solutions",
    description: "Protect your infrastructure with our robust security auditing, penetration testing, and compliance-driven development.",
    icon: Lock,
  },
  {
    title: "AI & Machine Learning",
    description: "Integrate predictive analytics, natural language processing, and automation into your existing toolset to stay ahead of the curve.",
    icon: Cpu,
  },
  {
    title: "Digital Transformation",
    description: "Modernize legacy systems, automate manual processes, and migrate databases with zero downtime and risk-free strategies.",
    icon: Rocket,
  },
]

export default function Services() {
  return (
    <section className="border-t bg-muted/20 py-24 md:py-32">
      <div className="container space-y-16">
        <div className="mx-auto max-w-[58rem] text-center">
          <motion.h2 
            className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Comprehensive Services
          </motion.h2>
          <motion.p 
            className="mt-4 text-muted-foreground sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            End-to-end solutions combining engineering excellence, striking design, and robust infrastructure.
          </motion.p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl bg-background p-8 border shadow-sm transition-all hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute top-0 right-0 -mr-8 -mt-8 h-32 w-32 rounded-full bg-primary/5 transition-transform group-hover:scale-150" />
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="relative z-10 mt-6 font-bold text-xl">{service.title}</h3>
              <p className="relative z-10 mt-3 text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
