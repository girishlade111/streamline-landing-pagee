"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Zap, Star } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-24 md:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Immersive background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent -z-10" />

      <div className="container">
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 text-[10px] font-bold">
              <Star className="h-3 w-3 text-amber-500 fill-current" />
              Trusted by 2000+ Enterprise Leaders
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto font-sans leading-tight">
              Transform your enterprise <br />
              <span className="text-zinc-500">with Amane Soft today.</span>
            </h2>

            <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Unlock the power of high-scale engineering and AI. Our specialists are ready to architect your next-generation digital ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 mt-2">
              <Button size="default" className="h-12 px-8 rounded-full bg-white hover:bg-zinc-200 text-black font-bold text-base group shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                Start Your Transformation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="default" className="h-12 px-8 rounded-full border-zinc-700 hover:bg-zinc-800 text-white font-bold text-base bg-transparent">
                Talk to an Architect
              </Button>
            </div>

            <p className="text-zinc-500 text-[11px] mt-2 font-medium">
              No long-term commitments. Scale your team on-demand.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
