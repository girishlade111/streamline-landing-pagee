"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Clock, Zap } from "lucide-react"
import SocialLinks from "@/components/social-links"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function ContactSection() {
    return (
        <section className="container space-y-16 py-24 md:py-32">
            {/* Section Header */}
            <motion.div 
                className="mx-auto max-w-[58rem] text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
                    Let's Build Something Amazing
                </h2>
                <p className="mt-4 text-muted-foreground sm:text-lg">
                    Have a project in mind or want to collaborate? Reach out through any channel below.
                </p>
            </motion.div>

            {/* Contact Cards */}
            <motion.div 
                className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {/* Quick Response */}
                <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-2xl border bg-background/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Zap className="h-6 w-6 text-primary group-hover:text-primary-foreground" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-semibold text-lg">Quick Response</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        I typically respond to all inquiries within 24 hours during business days.
                    </p>
                </motion.div>

                {/* Global Reach */}
                <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-2xl border bg-background/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <MapPin className="h-6 w-6 text-primary group-hover:text-primary-foreground" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-semibold text-lg">Global Reach</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        Available for remote collaboration and consulting worldwide.
                    </p>
                </motion.div>

                {/* Flexible Hours */}
                <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-2xl border bg-background/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Clock className="h-6 w-6 text-primary group-hover:text-primary-foreground" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-semibold text-lg">Flexible Hours</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        Willing to accommodate different time zones for meetings and calls.
                    </p>
                </motion.div>
            </motion.div>

            {/* Social & Contact Hub */}
            <motion.div 
                className="mx-auto max-w-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-background via-background to-muted/30 p-8 md:p-12 shadow-sm">
                    {/* Decorative gradient blobs */}
                    <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-[80px]" />
                    <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-purple-500/10 blur-[80px]" />

                    <div className="relative z-10 flex flex-col items-center text-center">
                        <h3 className="font-bold text-2xl md:text-3xl">Connect With Me</h3>
                        <p className="mt-3 max-w-md text-muted-foreground">
                            Follow my work, explore my projects, or send a direct message. I'm always open to interesting conversations.
                        </p>

                        {/* Social Icons */}
                        <div className="mt-8">
                            <SocialLinks />
                        </div>

                        {/* Direct Email CTA */}
                        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
                            <a
                                href="mailto:admin@ladestack.in"
                                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                            >
                                <span className="h-px w-8 bg-border" />
                                admin@ladestack.in
                                <span className="h-px w-8 bg-border" />
                            </a>
                        </div>

                        {/* Website CTA */}
                        <div className="mt-8">
                            <a
                                href="https://ladestack.in"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button size="lg" className="group gap-2 rounded-full px-8">
                                    Visit ladestack.in
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
