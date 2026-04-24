"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Cpu, Zap, Globe, Layers, Database } from "lucide-react"

const partners = [
  { name: "Acme Corp", icon: ShieldCheck },
  { name: "GlobalTech", icon: Cpu },
  { name: "Quantum", icon: Zap },
  { name: "Nexus", icon: Globe },
  { name: "Pinnacle", icon: Layers },
  { name: "Horizon", icon: Database },
]

export default function TrustedBy() {
  return (
    <section className="py-16 bg-zinc-950 border-y border-zinc-900 overflow-hidden relative">
      <div className="container px-4">
        <p className="mb-12 text-center text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">
          Empowering the world's most innovative engineering teams
        </p>
        
        <div className="relative flex items-center">
          {/* Mask for smooth fading edges */}
          <div className="absolute left-0 top-0 z-10 w-32 h-full bg-gradient-to-r from-zinc-950 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 z-10 w-32 h-full bg-gradient-to-l from-zinc-950 to-transparent pointer-events-none" />
          
          <motion.div 
            className="flex min-w-full items-center gap-16 md:gap-32"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* Repeating for seamless loop */}
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div 
                key={`${partner.name}-${index}`} 
                className="flex items-center gap-3 grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-default"
              >
                <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
                    <partner.icon className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold text-white tracking-tight whitespace-nowrap">
                  {partner.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
