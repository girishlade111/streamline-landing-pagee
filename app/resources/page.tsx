import type { Metadata } from "next"
import Link from "next/link"
import { Zap, BookOpen, Code, FileText, PenTool, ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Resources - Amane Soft",
  description: "Explore our documentation, API references, case studies, and blog posts.",
}

const sections = [
  {
    id: "documentation",
    icon: BookOpen,
    title: "Documentation",
    description: "Comprehensive guides and tutorials to help you get started and make the most of our platform.",
    links: [
      { title: "Getting Started", href: "#" },
      { title: "Installation Guide", href: "#" },
      { title: "Configuration", href: "#" },
      { title: "Best Practices", href: "#" },
      { title: "Troubleshooting", href: "#" },
    ],
  },
  {
    id: "api-reference",
    icon: Code,
    title: "API Reference",
    description: "Complete API documentation with examples, endpoints, and authentication guides.",
    links: [
      { title: "Authentication", href: "#" },
      { title: "Endpoints", href: "#" },
      { title: "Rate Limits", href: "#" },
      { title: "Webhooks", href: "#" },
      { title: "Error Codes", href: "#" },
    ],
  },
  {
    id: "case-studies",
    icon: FileText,
    title: "Case Studies",
    description: "Learn how leading companies use Amane Soft to transform their business.",
    links: [
      { title: "TechCorp: 10x Productivity", href: "#" },
      { title: "GlobalBank Security", href: "#" },
      { title: "RetailAI Implementation", href: "#" },
      { title: "HealthTech Data Platform", href: "#" },
      { title: "Startup Growth Story", href: "#" },
    ],
  },
  {
    id: "blog",
    icon: PenTool,
    title: "Blog",
    description: "Latest insights, updates, and thought leadership from our team.",
    links: [
      { title: "AI in 2025: What's Next", href: "#" },
      { title: "Zero-Trust Security Guide", href: "#" },
      { title: "Cloud Cost Optimization", href: "#" },
      { title: "DevOps Best Practices", href: "#" },
      { title: "Data Architecture Trends", href: "#" },
    ],
  },
]

const featuredPosts = [
  {
    category: "AI & Machine Learning",
    title: "Building Production-Ready AI Systems: Lessons from the Field",
    excerpt: "After deploying hundreds of AI solutions, we've learned what separates experimental projects from production-grade systems that scale.",
    date: "April 15, 2025",
    readTime: "8 min read",
  },
  {
    category: "Cloud Architecture",
    title: "Multi-Cloud Strategy: When, Why, and How",
    excerpt: "A practical guide to implementing multi-cloud architectures that improve reliability without doubling your team.",
    date: "April 10, 2025",
    readTime: "6 min read",
  },
  {
    category: "Security",
    title: "Zero-Trust in Practice: A Complete Implementation Guide",
    excerpt: "Move beyond the buzzword. Here's how we helped a Fortune 500 company implement zero-trust in 6 months.",
    date: "April 5, 2025",
    readTime: "10 min read",
  },
]

export default function ResourcesPage() {
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
              <Link href="/resources" className="px-3 py-1.5 rounded-full text-[12px] font-semibold text-white bg-white/10">Resources</Link>
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
              Resources
            </h1>
            <p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto">
              Everything you need to build, deploy, and scale with Amane Soft. 
              From docs to blog posts, find it all here.
            </p>
          </div>
        </section>

        {/* Resource Sections */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sections.map((section) => (
                <div 
                  key={section.id}
                  className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-white/5">
                      <section.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{section.title}</h3>
                  </div>
                  <p className="text-sm text-zinc-400 mb-4">{section.description}</p>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link href={link.href} className="flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors">
                          <ChevronRight className="h-3 w-3" />
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Blog Posts */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white">Featured Articles</h2>
              <Link href="#blog" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredPosts.map((post, index) => (
                <article key={index} className="group p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-all cursor-pointer">
                  <div className="flex items-center gap-2 text-xs text-zinc-500 mb-3">
                    <span className="text-blue-400">{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{post.title}</h3>
                  <p className="text-sm text-zinc-400 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-zinc-500">
                    <span>{post.readTime}</span>
                    <ArrowRight className="h-4 w-4 -rotate-45 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-zinc-400 mb-6">Get the latest insights delivered to your inbox. No spam, ever.</p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/30"
                />
                <Button className="bg-white text-black hover:bg-zinc-200 font-bold px-6">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}