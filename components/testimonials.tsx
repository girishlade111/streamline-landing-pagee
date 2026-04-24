"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CTO, TechFlow",
    content: "Amane Soft transformed our legacy systems into a modern, lightning-fast cloud architecture. The transition was seamless, and the performance gains are beyond our expectations.",
    rating: 5,
    image: "/placeholder-user.jpg"
  },
  {
    name: "David Chen",
    role: "VP Engineering, NexusCorp",
    content: "Their deep expertise in distributed systems and zero-trust security made Amane Soft the ideal partner for our infrastructure overhaul. Truly world-class engineering.",
    rating: 5,
    image: "/placeholder-user.jpg"
  },
  {
    name: "Elena Rodriguez",
    role: "Founder, DataSync",
    content: "The AI models developed by Amane Soft have significantly improved our predictive accuracy. They don't just write code; they solve complex business problems.",
    rating: 5,
    image: "/placeholder-user.jpg"
  },
  {
    name: "Marcus Thorne",
    role: "Director of IT, GlobalScale",
    content: "Working with their SRE team was a game-changer. We achieved 99.99% uptime during our highest traffic season thanks to their robust orchestration.",
    rating: 5,
    image: "/placeholder-user.jpg"
  },
  {
    name: "Aisha Patel",
    role: "Product Lead, InnovateHQ",
    content: "Their custom web applications are not only beautiful but also incredibly performant. The user engagement on our platform has increased by 40% since the update.",
    rating: 5,
    image: "/placeholder-user.jpg"
  },
  {
    name: "Tom Berenger",
    role: "Head of Infrastructure, CloudNet",
    content: "Amane Soft's cloud migration strategy was flawless. They handled millions of records with zero downtime. I couldn't recommend them more highly.",
    rating: 5,
    image: "/placeholder-user.jpg"
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-zinc-950 overflow-hidden">
      <div className="container px-4">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex -space-x-2 mb-6"
          >
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-10 w-10 rounded-full border-2 border-zinc-950 bg-zinc-800 overflow-hidden">
                <Image src="/placeholder-user.jpg" alt="User" width={40} height={40} className="object-cover" />
              </div>
            ))}
            <div className="h-10 w-10 rounded-full border-2 border-zinc-950 bg-zinc-900 flex items-center justify-center text-[10px] font-bold text-white">
              +2k
            </div>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 font-sans"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Trusted by Engineering Teams
          </motion.h2>
          <motion.p 
            className="text-zinc-400 text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Join hundreds of forward-thinking companies that have accelerated their growth with our engineering expertise.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="relative flex flex-col justify-between rounded-3xl bg-zinc-900/40 border border-zinc-800 p-8 hover:border-zinc-700 transition-all group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Quote className="absolute top-6 right-8 h-8 w-8 text-zinc-800 group-hover:text-zinc-700 transition-colors" />
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-6 text-amber-500/80">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-zinc-300 leading-relaxed mb-8 text-lg">
                  "{testimonial.content}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 border-t border-zinc-800/50 pt-6">
                <div className="h-12 w-12 rounded-full bg-zinc-800 overflow-hidden">
                  <Image src={testimonial.image} alt={testimonial.name} width={48} height={48} className="object-cover" />
                </div>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-xs text-zinc-500 font-medium uppercase tracking-wider">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
