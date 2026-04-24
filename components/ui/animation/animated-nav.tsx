"use client"

import { useState, HTMLAttributes } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { springTransition, staggerContainer, navItemVariants } from "@/lib/animation/config"
import { X } from "lucide-react"

interface NavItem {
  label: string
  href: string
  icon?: React.ReactNode
}

interface AnimatedNavProps extends HTMLAttributes<HTMLDivElement> {
  items: NavItem[]
  activeItem?: string
  onNavigate?: (href: string) => void
}

export function AnimatedNav({
  items,
  activeItem,
  onNavigate,
  className,
  ...props
}: AnimatedNavProps) {
  return (
    <motion.nav
      className={className}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      {...props}
    >
      <ul className="flex gap-2">
        {items.map((item, index) => (
          <motion.li key={item.href} variants={navItemVariants} custom={index}>
            <motion.a
              href={item.href}
              className={`relative px-4 py-2 text-sm font-medium transition-colors hover:text-foreground ${
                activeItem === item.href ? "text-primary" : "text-muted-foreground"
              }`}
              onClick={() => onNavigate?.(item.href)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={springTransition}
            >
              {item.icon && <span className="mr-2">{item.icon}</span>}
              {item.label}
              {activeItem === item.href && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  layoutId="navIndicator"
                  transition={springTransition}
                />
              )}
            </motion.a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  )
}

interface MobileNavProps {
  items: NavItem[]
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ items, isOpen, onClose }: MobileNavProps) {
  const sidebar = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 300, damping: 30 },
    },
    exit: {
      x: "-100%",
      opacity: 0,
      transition: { ease: "easeIn" as const, duration: 0.2 },
    },
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial="exit"
            animate={isOpen ? "visible" : "exit"}
            exit="exit"
            variants={{ visible: { opacity: 1 }, exit: { opacity: 0 } }}
            onClick={onClose}
          />
          <motion.div
            className="fixed left-0 top-0 bottom-0 w-64 bg-background z-50 p-4 shadow-xl"
            initial="exit"
            animate={isOpen ? "visible" : "exit"}
            exit="exit"
            variants={sidebar}
          >
            <ul className="flex flex-col gap-4 mt-16">
              {items.map((item, index) => (
                <motion.li key={item.href} variants={navItemVariants} custom={index}>
                  <a
                    href={item.href}
                    className="block py-2 text-lg font-medium"
                    onClick={onClose}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

interface HamburgerMenuProps {
  isOpen: boolean
  onToggle: () => void
  className?: string
}

export function HamburgerMenu({ isOpen, onToggle, className }: HamburgerMenuProps) {
  const barVariants = {
    top: { closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 6 } },
    middle: { closed: { opacity: 1 }, open: { opacity: 0 } },
    bottom: { closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -6 } },
  }

  return (
    <motion.button
      className={`relative w-6 h-6 ${className || ""}`}
      onClick={onToggle}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle menu"
    >
      <motion.span
        className="absolute left-0 w-6 h-0.5 bg-foreground"
        variants={barVariants.top}
        animate={isOpen ? "open" : "closed"}
        style={{ top: "20%" }}
      />
      <motion.span
        className="absolute left-0 w-6 h-0.5 bg-foreground"
        variants={barVariants.middle}
        animate={isOpen ? "open" : "closed"}
        style={{ top: "50%" }}
      />
      <motion.span
        className="absolute left-0 w-6 h-0.5 bg-foreground"
        variants={barVariants.bottom}
        animate={isOpen ? "open" : "closed"}
        style={{ top: "80%" }}
      />
    </motion.button>
  )
}

export { staggerContainer, navItemVariants, springTransition }