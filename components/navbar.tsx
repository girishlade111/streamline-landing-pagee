"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Zap, Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { navItem, staggerContainer, accessibleTransition } from "@/lib/animations"

const navStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: accessibleTransition({
      staggerChildren: 0.05,
      delayChildren: 0.1,
    }),
  },
}

const mobileNavStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: accessibleTransition({
      staggerChildren: 0.06,
      delayChildren: 0.15,
    }),
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.15 },
  },
}

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
      href: "/solutions",
      hasDropdown: true,
      items: [
        { label: "AI Analytics", href: "/solutions#ai-analytics" },
        { label: "Cloud Mesh", href: "/solutions#cloud-mesh" },
        { label: "Cyber Security", href: "/solutions#cyber-security" },
        { label: "Data Infra", href: "/solutions#data-infra" },
      ]
    },
    {
      label: "Resources",
      href: "/resources",
      hasDropdown: true,
      items: [
        { label: "Documentation", href: "/resources#documentation" },
        { label: "API Reference", href: "/resources#api-reference" },
        { label: "Case Studies", href: "/resources#case-studies" },
        { label: "Blog", href: "/resources#blog" },
      ]
    },
    { label: "Pricing", href: "/pricing" },
    { label: "Company", href: "/company" },
  ]

  return (
    <div className="fixed top-0 z-50 w-full flex justify-center p-4 sm:p-6 pointer-events-none">
      <header className={`pointer-events-auto transition-all duration-500 ease-in-out flex items-center gap-6 px-4 py-2 rounded-full border border-white/5 bg-zinc-950/50 backdrop-blur-xl shadow-2xl ${isScrolled ? "scale-95 sm:scale-100" : "w-full max-w-7xl sm:px-6"
        }`}>
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group relative z-50 shrink-0">
          <div className="h-7 w-7 rounded-lg bg-white flex items-center justify-center transition-all group-hover:rotate-12">
            <Zap className="h-4 w-4 text-black fill-current" />
          </div>
          <span className="text-sm font-bold text-white tracking-tighter hidden sm:block">Amane Soft</span>
        </Link>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden lg:flex items-center gap-1"
          variants={navStagger}
          initial="hidden"
          animate="visible"
        >
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <motion.div variants={navItem}>
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-full text-[12px] font-semibold text-zinc-400 hover:text-white transition-all hover:bg-white/5"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className={`h-2.5 w-2.5 transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180" : ""}`} />}
                </Link>
              </motion.div>

              <AnimatePresence>
                {item.hasDropdown && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-40 p-1.5 rounded-xl bg-zinc-900 border border-white/10 backdrop-blur-2xl shadow-2xl"
                  >
                    {item.items?.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-3 py-1.5 rounded-lg text-[11px] font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.nav>

        {/* Spacer for floating layout */}
        <div className="flex-1" />

        {/* Action Section */}
        <div className="flex items-center gap-2 relative z-50 shrink-0">
          <Button className="hidden sm:flex bg-white hover:bg-zinc-200 text-black font-bold rounded-full px-4 h-8 text-[11px] transition-all">
            Get Started
          </Button>

          <button
            className="lg:hidden p-1.5 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              variants={mobileNavStagger}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-24 inset-x-4 max-w-sm mx-auto bg-zinc-900 border border-white/10 p-6 rounded-[2rem] z-40 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col gap-5">
                {navItems.map((item) => (
                  <motion.div key={item.label} variants={navItem}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-2xl font-bold text-white hover:text-zinc-500 transition-colors flex items-center justify-between"
                    >
                      {item.label}
                      <ChevronDown className="h-5 w-5 -rotate-90 text-zinc-800" />
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={navItem}>
                  <div className="h-px bg-white/5 my-2" />
                  <Button size="lg" className="w-full bg-white text-black font-bold rounded-2xl py-6 text-base">
                    Get Started
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
