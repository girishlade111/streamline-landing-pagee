"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[1px] bg-purple-500/30 blur-[60px] rotate-[10deg]" />
        <div className="absolute top-[50%] right-[-10%] w-[40%] h-[1px] bg-pink-500/20 blur-[60px] rotate-[-5deg]" />
        <div className="absolute bottom-[20%] left-[20%] w-[60%] h-[1px] bg-cyan-500/10 blur-[60px] rotate-[15deg]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Innovate Faster with
            <br />
            <span className="bg-gradient-to-r from-white via-white/80 to-white/50 bg-clip-text text-transparent">
              Amane Soft
            </span>
          </motion.h1>

          <motion.p 
            className="mx-auto max-w-2xl text-lg md:text-xl text-zinc-400 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering businesses with cutting-edge software solutions. From AI-driven analytics 
            to seamless cloud integrations, we're shaping the future of technology.
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 h-14 text-lg rounded-full group">
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="border-zinc-800 hover:bg-zinc-900 text-white px-8 h-14 text-lg rounded-full bg-transparent">
              <Play className="mr-2 h-4 w-4 fill-current" />
              Watch Demo
            </Button>
          </motion.div>
        </div>

        {/* Product Mockup Representation */}
        <motion.div 
          className="mt-20 relative max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 shadow-2xl overflow-hidden backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent pointer-events-none" />
            
            {/* Mockup Content - Simplified UI Shell */}
            <div className="aspect-[16/9] w-full rounded-xl bg-zinc-950 border border-zinc-800 flex flex-col overflow-hidden">
              <div className="h-12 border-b border-zinc-800 bg-zinc-900/50 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-zinc-800" />
                <div className="w-3 h-3 rounded-full bg-zinc-800" />
                <div className="w-3 h-3 rounded-full bg-zinc-800" />
              </div>
              <div className="flex-1 flex p-6 gap-6">
                <div className="w-64 flex flex-col gap-4">
                  <div className="h-32 rounded-lg bg-zinc-900/50 border border-zinc-800 animate-pulse" />
                  <div className="h-32 rounded-lg bg-zinc-900/50 border border-zinc-800 animate-pulse" />
                  <div className="flex-1 rounded-lg bg-zinc-900/50 border border-zinc-800 animate-pulse" />
                </div>
                <div className="flex-1 flex flex-col gap-6">
                  <div className="h-12 rounded-lg bg-zinc-900/50 border border-zinc-800 animate-pulse" />
                  <div className="grid grid-cols-2 gap-6 flex-1">
                    <div className="rounded-xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20" />
                    <div className="rounded-xl bg-gradient-to-br from-pink-500/10 to-transparent border border-pink-500/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Glow */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-purple-500/10 blur-[120px] rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}
