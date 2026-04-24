"use client"

import { motion } from "framer-motion"
import { Users, Globe2, Trophy, Code2, CheckCircle2, Server, Timer, ShieldCheck } from "lucide-react"

const stats = [
  {
    name: "Enterprise Clients",
    value: "500+",
    icon: Users,
    description: "Fortune 500 companies trusting our systems.",
    color: "text-blue-500",
  },
  {
    name: "Uptime SLA",
    value: "99.99%",
    icon: Timer,
    description: "Unmatched reliability for mission-critical apps.",
    color: "text-emerald-500",
  },
  {
    name: "Countries Served",
    value: "40+",
    icon: Globe2,
    description: "Global delivery with localized compliance.",
    color: "text-purple-500",
  },
  {
    name: "Security Audits",
    value: "200+",
    icon: ShieldCheck,
    description: "Rigorous third-party security validations.",
    color: "text-amber-500",
  },
]

export default function Stats() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-zinc-950">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full -z-10" />
      
      <div className="container px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Proven Excellence in <br />
              <span className="text-zinc-500">Global Scale Engineering</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-lg">
              We don't just build software; we architect resilient digital ecosystems that empower the world's leading enterprises.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                <span className="text-zinc-300 font-medium">SOC2 Type II Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                <span className="text-zinc-300 font-medium">ISO 27001 Compliant</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                <span className="text-zinc-300 font-medium">GDPR Ready</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                <span className="text-zinc-300 font-medium">24/7 Global Support</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.name}
                className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-800 border border-zinc-700 group-hover:scale-110 transition-transform ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-4xl font-bold tracking-tighter text-white">{stat.value}</h3>
                  <p className="font-semibold text-zinc-300">{stat.name}</p>
                  <p className="text-sm text-zinc-500">{stat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
