"use client"

import { usePathname } from "next/navigation"
import { motion, AnimatePresence, LazyMotion, domAnimation } from "framer-motion"
import { useCallback, ReactNode, useEffect } from "react"
import { pageTransitionConfig } from "@/lib/animation/config"

interface PageTransitionProviderProps {
  children: ReactNode
}

export function PageTransitionProvider({ children }: PageTransitionProviderProps) {
  return (
    <LazyMotion features={domAnimation}>
      {children}
    </LazyMotion>
  )
}

interface PageTransitionProps {
  children: ReactNode
  className?: string
}

export function PageTransition({ children, className }: PageTransitionProps) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait" custom={pathname}>
      <motion.div
        key={pathname}
        className={className}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransitionVariants}
        transition={pageTransitionConfig.transition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

const pageTransitionVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
}

export function usePageTransition() {
  const pathname = usePathname()

  return {
    pathname,
    key: pathname,
  }
}

interface RouteTransitionConfig {
  enterDuration?: number
  exitDuration?: number
  easing?: [number, number, number, number]
}

export function useRouteTransition(config: RouteTransitionConfig = {}) {
  const { enterDuration = 0.4, exitDuration = 0.3 } = config

  return useCallback(
    (direction: "forward" | "backward") => {
      const variants = {
        initial: {
          opacity: 0,
          x: direction === "forward" ? 20 : -20,
        },
        animate: {
          opacity: 1,
          x: 0,
          transition: {
            duration: enterDuration,
            ease: "easeOut",
          },
        },
        exit: {
          opacity: 0,
          x: direction === "forward" ? -20 : 20,
          transition: {
            duration: exitDuration,
            ease: "easeIn",
          },
        },
      }
      return variants
    },
    [enterDuration, exitDuration]
  )
}

export function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      <PageTransition>{children}</PageTransition>
    </LazyMotion>
  )
}

export function useExitComplete() {
  const pathname = usePathname()

  useEffect(() => {}, [pathname])

  return pathname
}

export { LazyMotion, domAnimation }