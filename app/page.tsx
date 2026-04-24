import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Features from "@/components/features"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Amane Soft - Cutting-Edge Software Solutions for Enterprise",
  description:
    "Empowering businesses with AI-driven analytics, cloud-native architecture, and enterprise-grade security. Discover how Amane Soft drives digital transformation.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "https://amanesoft.com",
    title: "Amane Soft - Cutting-Edge Software Solutions for Enterprise",
    description:
      "Empowering businesses with AI-driven analytics, cloud-native architecture, and enterprise-grade security. Discover how Amane Soft drives digital transformation.",
  },
}

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <header>
          <Navbar />
        </header>
        <main>
          <Hero />
          <Features />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  )
}
