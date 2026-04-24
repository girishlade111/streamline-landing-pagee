"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Zap, Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { href: "#features", label: "Features" },
    { href: "#services", label: "Services" },
    { href: "#testimonials", label: "Clients" },
    { href: "#faq", label: "FAQ" },
  ]

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? "bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50 py-3" 
        : "bg-transparent py-5"
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group relative z-50">
          <div className="h-9 w-9 rounded-xl bg-white flex items-center justify-center transition-transform group-hover:rotate-6 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            <Zap className="h-5 w-5 text-black fill-current" />
          </div>
          <span className="text-xl font-bold text-white tracking-tighter">Amane Soft</span>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-md">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                pathname === link.href 
                  ? "bg-white text-black" 
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-4 relative z-50">
          <Link href="https://github.com/amanesoft" target="_blank" rel="noreferrer" className="hidden sm:block">
            <div className="p-2 rounded-full border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all">
              <Github className="h-5 w-5" />
            </div>
          </Link>
          <Button className="hidden sm:flex bg-white hover:bg-zinc-200 text-black font-bold rounded-full px-6 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]">
            Get Started
          </Button>
          <button 
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        className={`absolute top-0 left-0 w-full h-screen bg-zinc-950 p-8 pt-24 z-40 lg:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-6">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-bold text-white hover:text-zinc-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="h-px bg-zinc-900 my-4" />
          <Button size="lg" className="w-full bg-white text-black font-bold rounded-full py-8 text-xl">
            Get Started
          </Button>
        </div>
      </motion.div>
    </header>
  )
}
