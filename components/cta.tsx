"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Zap, Star } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-24 md:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Immersive background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent -z-10" />
      
      <div className="container px-4">
        <div className="relative rounded-[3rem] border border-zinc-800 bg-zinc-900/40 p-12 md:p-20 overflow-hidden text-center backdrop-blur-xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <Zap className="h-64 w-64 text-white" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 flex flex-col items-center gap-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 text-sm font-bold">
              <Star className="h-4 w-4 text-amber-500 fill-current" />
              Trusted by 2000+ Enterprise Leaders
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-9xl font-bold tracking-tighter text-white max-w-4xl mx-auto font-syne uppercase">
              Transform your <span className="font-newsreader italic font-light tracking-normal lowercase text-zinc-500">Enterprise</span> <br />
              with Amane Soft today.
            </h2>
            
            <p className="text-zinc-400 text-xl max-w-2xl mx-auto leading-relaxed">
              Unlock the power of high-scale engineering and AI. Our specialists are ready to architect your next-generation digital ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" className="h-16 px-10 rounded-full bg-white hover:bg-zinc-200 text-black font-bold text-lg group shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                Start Your Transformation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="h-16 px-10 rounded-full border-zinc-700 hover:bg-zinc-800 text-white font-bold text-lg bg-transparent">
                Talk to an Architect
              </Button>
            </div>

            <p className="text-zinc-500 text-sm mt-4">
              No long-term commitments. Scale your team on-demand.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
