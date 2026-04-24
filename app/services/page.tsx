"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Cpu, Activity, Shield, Database, BarChart3, Globe } from "lucide-react"
import AnimationWrapper from "@/components/animation-wrapper"

const services = [
    {
        icon: <BarChart3 className="h-6 w-6" />,
        title: "AI Analytics",
        description:
            "Transform raw data into actionable insights with our machine learning platform. Process millions of events in real-time with 99.4% prediction accuracy.",
        features: ["Real-time inference", "AutoML pipelines", "Custom model hosting"],
    },
    {
        icon: <Activity className="h-6 w-6" />,
        title: "Cloud Mesh",
        description:
            "Unified multi-cloud orchestration that seamlessly balances workloads across AWS, Azure, and GCP with automatic failover and cost optimization.",
        features: ["Cross-cloud sync", "Auto-scaling", "Cost analytics"],
    },
    {
        icon: <Shield className="h-6 w-6" />,
        title: "Cyber Shield",
        description:
            "Enterprise-grade security with zero-trust architecture, 256-bit encryption, and AI-powered threat detection that stops breaches before they happen.",
        features: ["Zero-trust SSO", "SIEM integration", "Compliance reporting"],
    },
    {
        icon: <Database className="h-6 w-6" />,
        title: "Data Infrastructure",
        description:
            "Distributed data pipelines built for sub-millisecond query performance. From ingestion to visualization, we handle the entire data lifecycle.",
        features: ["Stream processing", "Data lakehouse", "Query optimization"],
    },
    {
        icon: <Cpu className="h-6 w-6" />,
        title: "Edge Compute",
        description:
            "Deploy workloads to the edge with our global infrastructure. Reduce latency by 80% with intelligent request routing and cached execution.",
        features: ["Global CDN", "Edge functions", "Smart caching"],
    },
    {
        icon: <Globe className="h-6 w-6" />,
        title: "Digital Transformation",
        description:
            "End-to-end consulting and implementation to modernize legacy systems, adopt cloud-native practices, and accelerate product delivery.",
        features: ["Legacy migration", "DevOps enablement", "Agile coaching"],
    },
]

export default function ServicesPage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="min-h-screen bg-background text-foreground pt-32 pb-20"
        >
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Back link */}
                <AnimationWrapper type="fadeIn" delay={0}>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors mb-8"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to home
                    </Link>
                </AnimationWrapper>

                {/* Header */}
                <AnimationWrapper type="fadeInUp" delay={0.1}>
                    <div className="mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Our Services
                        </h1>
                        <p className="text-lg text-zinc-400 max-w-2xl">
                            Comprehensive software solutions designed to accelerate growth,
                            reduce risk, and future-proof your technology stack.
                        </p>
                    </div>
                </AnimationWrapper>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <AnimationWrapper
                            key={service.title}
                            type="scaleIn"
                            delay={0.1 + index * 0.08}
                            className="h-full"
                        >
                            <motion.div
                                className="h-full rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 hover:border-zinc-700 transition-colors group"
                                whileHover={{ y: -4 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                                    {service.icon}
                                </div>

                                <h3 className="text-lg font-bold text-white mb-2">
                                    {service.title}
                                </h3>

                                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                                    {service.description}
                                </p>

                                <ul className="space-y-2">
                                    {service.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-center gap-2 text-xs text-zinc-500"
                                        >
                                            <span className="w-1 h-1 rounded-full bg-purple-500" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </AnimationWrapper>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}
