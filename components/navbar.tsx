"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Zap, Menu, X, ChevronDown, Search, Command } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { 
      label: "Solutions", 
      href: "#services",
      hasDropdown: true,
      items: ["AI Analytics", "Cloud Mesh", "Cyber Security", "Data Infra"]
    },
    { 
      label: "Resources", 
      href: "#features",
      hasDropdown: true,
      items: ["Documentation", "API Reference", "Case Studies", "Blog"]
    },
    { label: "Pricing", href: "#pricing" },
    { label: "Company", href: "#testimonials" },
  ]

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-500 ${
      isScrolled 
        ? "bg-zinc-950/70 backdrop-blur-xl border-b border-white/5 py-2" 
        : "bg-transparent py-4"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2.5 group relative z-50">
              <div className="h-8 w-8 rounded-lg bg-white flex items-center justify-center transition-all group-hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                <Zap className="h-4.5 w-4.5 text-black fill-current" />
              </div>
              <span className="text-lg font-bold text-white tracking-tighter">Amane Soft</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div 
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link 
                    href={item.href} 
                    className="flex items-center gap-1 px-4 py-2 rounded-full text-[13px] font-semibold text-zinc-400 hover:text-white transition-colors"
                  >
                    {item.label}
                    {item.hasDropdown && <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180" : ""}`} />}
                  </Link>

                  <AnimatePresence>
                    {item.hasDropdown && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-48 p-2 rounded-2xl bg-zinc-900/90 border border-white/10 backdrop-blur-2xl shadow-2xl"
                      >
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem}
                            href="#"
                            className="block px-4 py-2 rounded-xl text-[12px] font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
                          >
                            {subItem}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>
          </div>

          {/* Action Section */}
          <div className="flex items-center gap-3 relative z-50">
            {/* Search Shortcut */}
            <button className="hidden md:flex items-center gap-2 px-3 h-9 rounded-full bg-zinc-900/50 border border-white/5 text-zinc-500 hover:text-zinc-300 hover:border-white/10 transition-all group">
              <Search className="h-3.5 w-3.5" />
              <span className="text-[11px] font-medium">Search documentation...</span>
              <div className="flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-zinc-800 border border-white/5 text-[9px]">
                <Command className="h-2 w-2" />
                <span>K</span>
              </div>
            </button>

            <div className="h-4 w-px bg-white/10 hidden sm:block mx-1" />

            <Link href="https://github.com/amanesoft" target="_blank" rel="noreferrer" className="hidden sm:block">
              <div className="p-2 rounded-full text-zinc-400 hover:text-white transition-all">
                <Github className="h-4.5 w-4.5" />
              </div>
            </Link>

            <Button className="hidden sm:flex bg-white hover:bg-zinc-200 text-black font-bold rounded-full px-5 h-9 text-[13px] transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              Get Started
            </Button>

            <button 
              className="lg:hidden p-1.5 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5.5 w-5.5" /> : <Menu className="h-5.5 w-5.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 left-0 w-full bg-zinc-950 z-40 lg:hidden overflow-hidden"
          >
            <div className="container mx-auto px-6 pt-24 pb-12 flex flex-col h-full">
              <div className="flex flex-col gap-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link 
                      href={item.href} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-4xl font-bold text-white hover:text-zinc-500 transition-colors flex items-center justify-between group"
                    >
                      {item.label}
                      <ChevronDown className="h-6 w-6 -rotate-90 text-zinc-800 group-hover:text-zinc-500" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto space-y-6">
                <div className="h-px bg-white/5" />
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500 text-sm">System Status</span>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-white text-xs font-semibold uppercase tracking-wider">All Systems Operational</span>
                  </div>
                </div>
                <Button size="lg" className="w-full bg-white text-black font-bold rounded-2xl py-7 text-lg">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
