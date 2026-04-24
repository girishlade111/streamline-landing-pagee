"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()

  const links = [
    { href: "/solutions", label: "Solutions" },
    { href: "/industries", label: "Industries" },
    { href: "/about", label: "About Us" },
  ]

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur-md supports-[backdrop-filter]:bg-background/40">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-transform group-hover:scale-110">
            <span className="font-bold text-lg">A</span>
          </div>
          <span className="font-bold tracking-tight text-lg hidden sm:inline-block">Amane Soft</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="relative py-2 text-foreground/80 hover:text-foreground transition-colors"
            >
              {link.label}
              {pathname === link.href && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center space-x-3">
          <Link href="https://github.com/amanesoft" target="_blank" rel="noreferrer" className="hidden sm:block">
            <Button variant="ghost" size="icon" className="hover:bg-accent/50">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Contact
          </Button>
          <Button size="sm" className="rounded-full">Get a Demo</Button>
        </div>
      </div>
    </header>
  )
}
