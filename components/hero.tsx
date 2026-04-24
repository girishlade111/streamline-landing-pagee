"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, BarChart3, Shield, Cpu, Zap, Activity, Globe } from "lucide-react"
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
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-2.5 py-0.5 text-xs font-medium text-purple-400"
          >
            <Zap className="mr-1.5 h-3.5 w-3.5" />
            <span>New: AI-Powered Analytics 2.0</span>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Innovate Faster with
            <br />
            <span className="bg-gradient-to-r from-white via-white/80 to-white/50 bg-clip-text text-transparent tracking-tight">
              Amane Soft
            </span>
          </motion.h1>

          <motion.p 
            className="mx-auto max-w-xl text-base md:text-lg text-zinc-400 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering businesses with cutting-edge software solutions. From AI-driven analytics 
            to seamless cloud integrations, we're shaping the future of technology.
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="default" className="bg-purple-600 hover:bg-purple-700 text-white px-6 h-11 text-sm font-semibold rounded-full group">
              Explore Solutions
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="default" className="border-zinc-800 hover:bg-zinc-900 text-white px-6 h-11 text-sm font-semibold rounded-full bg-transparent">
              <Play className="mr-2 h-3.5 w-3.5 fill-current" />
              Watch Demo
            </Button>
          </motion.div>
        </div>

        {/* Product Mockup Representation / Bento Grid Section */}
        <motion.div 
          className="mt-20 relative max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 shadow-2xl overflow-hidden backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent pointer-events-none" />
            
            {/* Mockup Content */}
            <div className="aspect-[16/10] w-full rounded-xl bg-zinc-950 border border-zinc-800 flex flex-col overflow-hidden text-left">
              {/* Toolbar */}
              <div className="h-12 border-b border-zinc-800 bg-zinc-900/50 flex items-center justify-between px-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-zinc-800" />
                  <div className="w-3 h-3 rounded-full bg-zinc-800" />
                  <div className="w-3 h-3 rounded-full bg-zinc-800" />
                </div>
                <div className="px-3 py-1 rounded bg-zinc-800/50 text-[10px] text-zinc-500 font-mono">
                  amanesoft-cloud-v1.0.4
                </div>
              </div>

              {/* Main Interface Content (Bento Style) */}
              <div className="flex-1 flex p-4 lg:p-6 gap-4 lg:gap-6 overflow-hidden">
                {/* Left Column */}
                <div className="w-1/3 flex flex-col gap-4 lg:gap-6">
                  {/* AI Metric Card */}
                  <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <BarChart3 className="h-4 w-4 text-purple-400" />
                      <span className="text-[10px] text-zinc-500 font-medium uppercase">Efficiency</span>
                    </div>
                    <div className="text-2xl font-bold text-white">+24.8%</div>
                    <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-purple-500 rounded-full" />
                    </div>
                  </div>

                  {/* Security Card */}
                  <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 space-y-3">
                    <div className="flex items-center gap-2 text-emerald-400">
                      <Shield className="h-4 w-4" />
                      <span className="text-[10px] font-medium uppercase tracking-wider">Secure</span>
                    </div>
                    <div className="text-sm font-medium text-white">System Shield Active</div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="h-6 w-1 bg-emerald-500/40 rounded-full" />
                      ))}
                    </div>
                  </div>

                  {/* Nodes Card */}
                  <div className="flex-1 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 overflow-hidden relative">
                    <div className="text-[10px] text-zinc-500 font-medium uppercase mb-3">Global Infrastructure</div>
                    <div className="space-y-2">
                      {[
                        { name: "US-East-1", status: "Active" },
                        { name: "EU-West-2", status: "Active" },
                        { name: "AP-South-1", status: "Syncing" }
                      ].map((node, i) => (
                        <div key={i} className="flex items-center justify-between text-[11px]">
                          <div className="flex items-center gap-2">
                            <Globe className="h-3 w-3 text-zinc-600" />
                            <span className="text-zinc-400">{node.name}</span>
                          </div>
                          <span className={node.status === "Active" ? "text-emerald-500" : "text-amber-500"}>
                            {node.status}
                          </span>
                        </div>
                      ))}
                    </div>
                    {/* Abstract Grid background */}
                    <div className="absolute bottom-0 right-0 w-24 h-24 opacity-5 pointer-events-none">
                      <div className="grid grid-cols-4 gap-2">
                        {Array.from({ length: 16 }).map((_, i) => (
                          <div key={i} className="w-1 h-1 bg-white rounded-full" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex-1 flex flex-col gap-4 lg:gap-6">
                  {/* Top Stats Bar */}
                  <div className="h-20 lg:h-24 p-4 lg:p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="text-[10px] text-zinc-500 font-medium uppercase">Neural Throughput</div>
                      <div className="text-xl lg:text-3xl font-bold text-white tracking-tight">842.1 GB/s</div>
                    </div>
                    <Activity className="h-8 w-8 text-purple-500 opacity-50" />
                  </div>

                  {/* Grid of Main Features */}
                  <div className="flex-1 grid grid-cols-2 gap-4 lg:gap-6">
                    {/* Feature 1: Predictive Engine */}
                    <div className="p-4 lg:p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 flex flex-col justify-between">
                      <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                        <Cpu className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white mb-1">Predictive Engine</div>
                        <div className="text-[11px] text-zinc-500 leading-relaxed">ML-driven forecasting with 99.4% accuracy rate.</div>
                      </div>
                    </div>

                    {/* Feature 2: Cloud Mesh */}
                    <div className="p-4 lg:p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 flex flex-col justify-between">
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4">
                        <Activity className="h-5 w-5 text-cyan-400" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white mb-1">Cloud Mesh</div>
                        <div className="text-[11px] text-zinc-500 leading-relaxed">Seamless multi-cloud orchestration and synchronization.</div>
                      </div>
                    </div>
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
