"use client"

import { motion, useReducedMotion, AnimatePresence, Variants } from "framer-motion"
import { createContext, useContext, ReactNode } from "react"
import {
  getAnimationPreset,
  springTransition,
  viewportConfig,
  type AnimationPreset,
} from "@/lib/animation/config"

interface AnimationWrapperProps {
  children: ReactNode
  className?: string
  preset?: AnimationPreset
  customVariants?: Variants
  transition?: Parameters<typeof motion.div>[0]["transition"]
  delay?: number
  enableViewport?: boolean
  once?: boolean
  amount?: number
  margin?: string
}

interface ReducedMotionContextValue {
  shouldReduceMotion: boolean
}

const ReducedMotionContext = createContext<ReducedMotionContextValue>({
  shouldReduceMotion: false,
})

export function useReducedMotionContext() {
  return useContext(ReducedMotionContext)
}

const animationWrapperVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0,
    },
  },
}

export function ReducedMotionProvider({ children }: { children: ReactNode }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <ReducedMotionContext.Provider value={{ shouldReducedMotion }}>
      {children}
    </ReducedMotionContext.Provider>
  )
}

export function AnimationWrapper({
  children,
  className,
  preset = "fadeInUp",
  customVariants,
  transition,
  delay = 0,
  enableViewport = false,
  once = true,
  amount = 0.3,
  margin = "0px 0px -100px 0px",
}: AnimationWrapperProps) {
  const shouldReduceMotion = useReducedMotion()

  const variants = customVariants || getAnimationPreset(preset)

  const resolvedVariants: Variants = shouldReduceMotion
    ? { visible: { opacity: 1 } }
    : variants

  let motionTransition = transition

  if (!shouldReduceMotion && !transition) {
    motionTransition = {
      ...springTransition,
      delay,
    } as Parameters<typeof motion.div>[0]["transition"]
  }

  if (shouldReduceMotion) {
    motionTransition = { duration: 0 }
  }

  const ViewportOptions = enableViewport
    ? {
        viewport: {
          once,
          amount: amount as 0.3,
          margin,
        },
      }
    : {}

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      variants={resolvedVariants}
      transition={motionTransition}
      {...ViewportOptions}
    >
      {children}
    </motion.div>
  )
}

interface StaggerWrapperProps {
  children: ReactNode
  className?: string
  delay?: number
  staggerDelay?: number
  reverse?: boolean
}

export function StaggerWrapper({
  children,
  className,
  delay = 0,
  staggerDelay = 0.1,
  reverse = false,
}: StaggerWrapperProps) {
  const shouldReduceMotion = useReducedMotion()

  const variants: Variants = reverse
    ? {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }
    : animationWrapperVariants

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      variants={shouldReduceMotion ? { visible: { opacity: 1 } } : variants}
      viewport={viewportConfig}
    >
      {children}
    </motion.div>
  )
}

interface FadeRevealProps {
  children: ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right" | "none"
  delay?: number
}

export function FadeReveal({
  children,
  className,
  direction = "up",
  delay = 0,
}: FadeRevealProps) {
  const shouldReduceMotion = useReducedMotion()

  const directionVariants: Record<string, Variants> = {
    up: { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } },
    none: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      variants={shouldReduceMotion ? { visible: { opacity: 1 } } : directionVariants[direction]}
      transition={{ ...springTransition, delay }}
      viewport={viewportConfig}
    >
      {children}
    </motion.div>
  )
}

interface ScaleRevealProps {
  children: ReactNode
  className?: string
  scale?: number
  delay?: number
}

export function ScaleReveal({
  children,
  className,
  scale = 0.9,
  delay = 0,
}: ScaleRevealProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ ...springTransition, delay }}
      viewport={viewportConfig}
    >
      {children}
    </motion.div>
  )
}

interface SlideRevealProps {
  children: ReactNode
  className?: string
  from?: "top" | "bottom" | "left" | "right"
}

export function SlideReveal({
  children,
  className,
  from = "bottom",
}: SlideRevealProps) {
  const shouldReduceMotion = useReducedMotion()

  const directionOffsets: Record<string, Record<string, string>> = {
    top: { y: "-100%" },
    bottom: { y: "100%" },
    left: { x: "-100%" },
    right: { x: "100%" },
  }

  return (
    <motion.div
      className={className}
      initial={{ ...directionOffsets[from], opacity: 1 }}
      whileInView={{ y: 0, x: 0, opacity: 1 }}
      transition={springTransition}
      viewport={viewportConfig}
    >
      {children}
    </motion.div>
  )
}

interface AnimatePresenceWrapperProps {
  children: ReactNode
  mode?: "wait" | "popLayout" | "sync"
  onExitComplete?: () => void
}

export function AnimatePresenceWrapper({
  children,
  mode = "wait",
  onExitComplete,
}: AnimatePresenceWrapperProps) {
  return (
    <AnimatePresence mode={mode} onExitComplete={onExitComplete}>
      {children}
    </AnimatePresence>
  )
}

interface PresenceProps {
  children: ReactNode
  show: boolean
  mode?: "wait" | "popLayout" | "sync"
  custom?: unknown
}

export function Presence({
  children,
  show,
  mode = "wait",
  custom,
}: PresenceProps) {
  return (
    <AnimatePresence mode={mode} custom={custom}>
      {show && children}
    </AnimatePresence>
  )
}

export {
  motion,
  AnimatePresence,
  Variants,
  springTransition,
  viewportConfig,
  getAnimationPreset,
}
export type { AnimationPreset }