"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Mail, Phone, Globe, ShieldCheck, Headphones } from "lucide-react"
import SocialLinks from "@/components/social-links"
import { motion } from "framer-motion"

const contactInfo = [
  {
    title: "Enterprise Support",
    description: "24/7 dedicated support for mission-critical systems and global infrastructure.",
    icon: Headphones,
    contact: "support@amanesoft.com",
    label: "Email Support"
  },
  {
    title: "Sales Inquiry",
    description: "Discuss your digital transformation goals with our expert solution architects.",
    icon: Globe,
    contact: "sales@amanesoft.com",
    label: "Contact Sales"
  },
  {
    title: "Security & Compliance",
    description: "Inquiries regarding SOC2, GDPR, HIPAA, or specialized security audits.",
    icon: ShieldCheck,
    contact: "security@amanesoft.com",
    label: "Security Desk"
  }
]

export default function ContactSection() {
    return (
        <section id="contact" className="py-24 md:py-32 bg-zinc-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-500/5 blur-[120px] rounded-full -z-10" />
            
            <div className="container px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8">
                            Let's Architect <br />
                            <span className="text-zinc-500">Your Digital Future.</span>
                        </h2>
                        <p className="text-zinc-400 text-lg mb-10 max-w-lg">
                            Ready to scale your enterprise with cutting-edge engineering? Our team of specialists is ready to help you navigate the complex tech landscape.
                        </p>

                        <div className="space-y-8 mb-12">
                            <div className="flex items-start gap-4">
                                <div className="h-10 w-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <div>
                                    <div className="text-white font-bold">Global Headquarters</div>
                                    <div className="text-zinc-500 text-sm">Tech District, San Francisco, CA 94105</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="h-10 w-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <div>
                                    <div className="text-white font-bold">Priority Support</div>
                                    <div className="text-zinc-500 text-sm">+1 (555) 000-0000</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <h3 className="text-white font-bold uppercase tracking-widest text-xs">Follow Our Innovation</h3>
                            <SocialLinks />
                        </div>
                    </motion.div>

                    <div className="grid gap-6">
                        {contactInfo.map((item, index) => (
                            <motion.div
                                key={item.title}
                                className="group p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-all hover:bg-zinc-900/60"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="flex items-start gap-6">
                                    <div className="h-14 w-14 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-zinc-500 transition-all">
                                        <item.icon className="h-7 w-7" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
                                            {item.description}
                                        </p>
                                        <a href={`mailto:${item.contact}`} className="inline-flex items-center gap-2 text-white font-bold text-sm group/link">
                                            {item.label}
                                            <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        <motion.div
                            className="mt-6 p-1 rounded-3xl bg-gradient-to-r from-purple-500 to-blue-500"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <Button className="w-full h-16 rounded-[22px] bg-zinc-950 hover:bg-zinc-900 text-white text-lg font-bold border-none transition-colors">
                                Schedule a Strategy Call
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
