import type { Metadata } from "next"
import Link from "next/link"
import { Zap, Brain, Cloud, Shield, Database, ArrowRight, Check, BarChart3, Cpu, Lock, Server, Network } from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Solutions - Amane Soft",
  description: "Explore our enterprise software solutions: AI Analytics, Cloud Mesh, Cyber Security, and Data Infrastructure.",
}

const solutions = [
  {
    id: "ai-analytics",
    icon: Brain,
    title: "AI Analytics",
    subtitle: "Intelligent Data Insights",
    description: "Transform your data into actionable insights with our cutting-edge AI and machine learning solutions. From predictive analytics to real-time pattern recognition, we help you make smarter decisions faster.",
    features: [
      "Predictive Modeling & Forecasting",
      "Natural Language Processing",
      "Computer Vision Integration",
      "Real-time Anomaly Detection",
      "Custom Model Training",
      "Vector Database Management",
    ],
    stats: [
      { value: "10x", label: "Faster Insights" },
      { value: "99.9%", label: "Accuracy" },
      { value: "50+", label: "AI Models" },
    ],
  },
  {
    id: "cloud-mesh",
    icon: Cloud,
    title: "Cloud Mesh",
    subtitle: "Unified Multi-Cloud Infrastructure",
    description: "Seamlessly deploy, manage, and scale across AWS, Azure, GCP, and beyond. Our cloud mesh architecture ensures high availability, disaster recovery, and optimal performance.",
    features: [
      "Multi-Cloud Orchestration",
      "Serverless Computing",
      "Kubernetes Management",
      "Infrastructure as Code",
      "Auto-Scaling Policies",
      "Global CDN Integration",
    ],
    stats: [
      { value: "99.99%", label: "Uptime SLA" },
      { value: "60%", label: "Cost Reduction" },
      { value: "3min", label: "Deployment" },
    ],
  },
  {
    id: "cyber-security",
    icon: Shield,
    title: "Cyber Security",
    subtitle: "Enterprise-Grade Protection",
    description: "Protect your business with zero-trust security, advanced threat detection, and compliance automation. Bank-level encryption meets modern DevSecOps practices.",
    features: [
      "Zero-Trust Architecture",
      "Threat Intelligence & SOC",
      "Identity & Access Management",
      "Compliance Automation",
      "Penetration Testing",
      "Security Auditing",
    ],
    stats: [
      { value: "24/7", label: "Monitoring" },
      { value: "0", label: "Breaches" },
      { value: "100%", label: "Compliance" },
    ],
  },
  {
    id: "data-infra",
    icon: Database,
    title: "Data Infrastructure",
    subtitle: "Scalable Data Architecture",
    description: "Build a robust data foundation with modern pipelines, warehouses, and lakes. From terabytes to petabytes, we ensure your data is always accessible and actionable.",
    features: [
      "Data Lake & Warehouse",
      "ETL/ELT Pipelines",
      "Real-time Streaming",
      "Data Governance",
      "Federated Queries",
      "Schema Management",
    ],
    stats: [
      { value: "1PB+", label: "Data Processed" },
      { value: "ms", label: "Query Latency" },
      { value: "10K+", label: "Data Sources" },
    ],
  },
]

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/90 to-zinc-950" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <header className="fixed top-0 z-50 w-full flex justify-center p-4 sm:p-6 pointer-events-none">
          <nav className="pointer-events-auto flex items-center gap-6 px-4 py-2 rounded-full border border-white/5 bg-zinc-950/50 backdrop-blur-xl shadow-2xl">
            <Link href="/" className="flex items-center gap-2 group relative z-50">
              <div className="h-7 w-7 rounded-lg bg-white flex items-center justify-center transition-all group-hover:rotate-12">
                <Zap className="h-4 w-4 text-black fill-current" />
              </div>
              <span className="text-sm font-bold text-white tracking-tighter">Amane Soft</span>
            </Link>
            <div className="hidden lg:flex items-center gap-1">
              <Link href="/solutions" className="px-3 py-1.5 rounded-full text-[12px] font-semibold text-white bg-white/10">Solutions</Link>
              <Link href="/resources" className="px-3 py-1.5 rounded-full text-[12px] font-semibold text-zinc-400 hover:text-white transition-all hover:bg-white/5">Resources</Link>
              <Link href="/pricing" className="px-3 py-1.5 rounded-full text-[12px] font-semibold text-zinc-400 hover:text-white transition-all hover:bg-white/5">Pricing</Link>
              <Link href="/company" className="px-3 py-1.5 rounded-full text-[12px] font-semibold text-zinc-400 hover:text-white transition-all hover:bg-white/5">Company</Link>
            </div>
            <div className="flex items-center gap-2">
              <Button className="hidden sm:flex bg-white hover:bg-zinc-200 text-black font-bold rounded-full px-4 h-8 text-[11px]">Get Started</Button>
            </div>
          </nav>
        </header>

        {/* Hero */}
        <section className="pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Enterprise Solutions
            </h1>
            <p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto">
              Cutting-edge technology solutions designed to scale with your business. 
              From AI analytics to cloud infrastructure, we've got you covered.
            </p>
          </div>
        </section>

        {/* Solution Cards */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-6xl">
            {solutions.map((solution, index) => (
              <div 
                key={solution.id}
                id={solution.id}
                className="py-16 border-t border-white/5 first:border-t-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                        <solution.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white">{solution.title}</h2>
                        <p className="text-sm text-zinc-400">{solution.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-zinc-400 mb-6">{solution.description}</p>
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {solution.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="text-center">
                          <div className="text-2xl font-bold text-white">{stat.value}</div>
                          <div className="text-xs text-zinc-500">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    <ul className="space-y-3 mb-8">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-zinc-300">
                          <Check className="h-4 w-4 text-emerald-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="bg-white text-black hover:bg-zinc-200 font-bold">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-[60px]" />
                    <div className="relative p-8 rounded-2xl bg-zinc-900/50 border border-white/10">
                      <div className="grid grid-cols-2 gap-4">
                        {solution.features.slice(0, 4).map((feature, featureIndex) => (
                          <div key={featureIndex} className="p-4 rounded-xl bg-white/5 border border-white/5">
                            {featureIndex === 0 && <BarChart3 className="h-8 w-8 text-blue-400 mb-2" />}
                            {featureIndex === 1 && <Cpu className="h-8 w-8 text-purple-400 mb-2" />}
                            {featureIndex === 2 && <Lock className="h-8 w-8 text-emerald-400 mb-2" />}
                            {featureIndex === 3 && <Server className="h-8 w-8 text-orange-400 mb-2" />}
                            <p className="text-sm text-white font-medium">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to transform your business?</h2>
            <p className="text-zinc-400 mb-8">Schedule a consultation with our experts and discover the right solution for you.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-black hover:bg-zinc-200 font-bold px-8">Get Started</Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 font-bold px-8">Contact Sales</Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}