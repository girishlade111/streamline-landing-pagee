"use client"

import { motion } from "framer-motion"

const companies = [
  { name: "Acme Corp", logo: "AC" },
  { name: "GlobalTech", logo: "GT" },
  { name: "Quantum", logo: "Q" },
  { name: "Nexus", logo: "NX" },
  { name: "Pinnacle", logo: "P" },
  { name: "Horizon", logo: "H" },
]

export default function TrustedBy() {
  return (
    <section className="border-t border-border/50 bg-muted/10 py-12 md:py-16">
      <div className="container overflow-hidden">
        <p className="mb-8 text-center text-sm font-medium text-muted-foreground">
          TRUSTED BY INNOVATIVE TEAMS WORLDWIDE
        </p>
        
        <div className="relative flex w-full">
          {/* Gradient fade on edges */}
          <div className="absolute left-0 top-0 z-10 w-20 h-full bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 z-10 w-20 h-full bg-gradient-to-l from-background to-transparent pointer-events-none" />
          
          <motion.div 
            className="flex min-w-full items-center justify-around gap-12 sm:gap-24 px-12"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* Double the list for seamless loop */}
            {[...companies, ...companies].map((company, index) => (
              <div 
                key={`${company.name}-${index}`} 
                className="flex items-center gap-2 grayscale transition-all hover:grayscale-0 opacity-50 hover:opacity-100"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold">
                  {company.logo}
                </div>
                <span className="text-xl font-bold text-foreground/80 tracking-tighter">
                  {company.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
