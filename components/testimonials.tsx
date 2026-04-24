"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CTO, TechFlow",
    content: "Amane Soft transformed our legacy systems into a modern, lightning-fast cloud architecture. The transition was seamless, and the performance gains are incredible.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "VP Engineering, NexusCorp",
    content: "The attention to detail and deep understanding of scalable systems made Amane Soft the perfect partner for our digital transformation journey.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Founder, DataSync",
    content: "Their AI and machine learning solutions helped us unlock insights from our data we didn't even know existed. Highly recommended.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="container py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center mb-16">
        <motion.h2 
          className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What Our Clients Say
        </motion.h2>
        <motion.p 
          className="mt-4 text-muted-foreground sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Don't just take our word for it. Hear from the teams we've partnered with.
        </motion.p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            className="flex flex-col justify-between rounded-2xl bg-muted/30 p-8 border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div>
              <div className="flex gap-1 mb-4 text-amber-500">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-foreground/90 italic leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
            </div>
            <div>
              <div className="font-bold">{testimonial.name}</div>
              <div className="text-sm text-muted-foreground">{testimonial.role}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
