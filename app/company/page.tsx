import type { Metadata } from "next"
import Link from "next/link"
import { Zap, MapPin, Mail, Twitter, Linkedin, Github, ArrowRight, Users, Award, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Company - Amane Soft",
  description: "Learn about Amane Soft, our mission, team, and commitment to enterprise software excellence.",
}

const stats = [
  { value: "500+", label: "Enterprise Clients" },
  { value: "10M+", label: "Users Served" },
  { value: "99.99%", label: "Uptime Guaranteed" },
  { value: "24/7", label: "Support" },
]

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-founder",
    bio: "Former VP of Engineering at Google. 15+ years leading high-performance teams.",
    image: "",
  },
  {
    name: "Marcus Johnson",
    role: "CTO & Co-founder",
    bio: "Ex-Staff Engineer at AWS. Cloud architecture and AI/ML expert.",
    image: "",
  },
  {
    name: "Elena Rodriguez",
    role: "VP of Product",
    bio: "Led product at Stripe and Atlassian. Passionate about developer experience.",
    image: "",
  },
  {
    name: "David Kim",
    role: "VP of Security",
    bio: "Former CISO at Goldman Sachs. Cybersecurity veteran with 20+ years experience.",
    image: "",
  },
]

const locations = [
  { city: "San Francisco", address: "548 Market St, Suite 12345", country: "USA" },
  { city: "London", address: "25 Old Broad St, City", country: "UK" },
  { city: "Singapore", address: "1 Raffles Place, Tower 2", country: "Singapore" },
  { city: "Tokyo", address: "Roppongi Hills Mori Tower", country: "Japan" },
]

export default function CompanyPage() {
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
              <Link href="/solutions" className="px-3 py-1.5 rounded-full text-[12px] font-semibold text-zinc-400 hover:text-white transition-all hover:bg-white/5">Solutions</Link>
              <Link href="/resources" className="px-3 py-1.5 rounded-full text-[12px] font-semibold text-zinc-400 hover:text-white transition-all hover:bg-white/5">Resources</Link>
              <Link href="/pricing" className="px-3 py-1.5 rounded-full text-[12px] font-semibold text-zinc-400 hover:text-white transition-all hover:bg-white/5">Pricing</Link>
              <Link href="/company" className="px-3 py-1.5 rounded-full text-[12px] font-semibold text-white bg-white/10">Company</Link>
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
              About Amane Soft
            </h1>
            <p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto">
              We're on a mission to empower enterprises with cutting-edge technology. 
              From AI to cloud infrastructure, we build the foundations of tomorrow.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-zinc-900/50 border border-white/5">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-zinc-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5">
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-5 w-5 text-blue-400" />
                <h2 className="text-xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-zinc-300 text-lg leading-relaxed">
                To democratize enterprise-grade technology. We believe every business deserves 
                access to the same tools and infrastructure used by the world's largest companies. 
                Through innovation, simplicity, and relentless focus on customer success, we're making 
                that vision a reality.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center gap-2 mb-8">
              <Users className="h-5 w-5 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Leadership</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <div key={index} className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{member.name}</h3>
                  <p className="text-sm text-blue-400 mb-2">{member.role}</p>
                  <p className="text-xs text-zinc-500">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-2 mb-8">
              <Globe className="h-5 w-5 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Global Presence</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {locations.map((location, index) => (
                <div key={index} className="p-4 rounded-xl bg-zinc-900/50 border border-white/5 flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-zinc-500 shrink-0" />
                  <div>
                    <h3 className="font-bold text-white">{location.city}</h3>
                    <p className="text-sm text-zinc-500">{location.address}</p>
                    <p className="text-sm text-zinc-500">{location.country}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-zinc-400 mb-8">Have questions? We'd love to hear from you.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-black hover:bg-zinc-200 font-bold px-8">Contact Sales</Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 font-bold px-8">Careers</Button>
            </div>
            <div className="flex items-center justify-center gap-4 mt-8">
              <a href="#" className="p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}