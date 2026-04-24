import type { Variant, Transition } from "framer-motion"

export const springTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  mass: 1,
}

export const gentleSpring = {
  type: "spring",
  stiffness: 200,
  damping: 25,
  mass: 1,
}

export const bouncySpring = {
  type: "spring",
  stiffness: 400,
  damping: 20,
  mass: 1,
}

export const slowSpring = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  mass: 1,
}

export const tweenTransition = {
  type: "tween",
  ease: "easeOut",
  duration: 0.3,
}

export const easeInOut = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.3,
}

export const instant = {
  duration: 0,
}

export const pageTransitionConfig = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: {
    duration: 0.4,
    ease: "easeOut",
  },
}

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0 },
}

export const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
}

export const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
}

export const scaleInFull = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
}

export const slideInUp = {
  hidden: { y: "100%" },
  visible: { y: 0 },
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0,
    },
  },
}

export const staggerContainerReverse = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
}

export const viewportConfig = {
  once: true,
  amount: 0.3,
  margin: "0px 0px -100px 0px",
}

export const buttonHover = {
  scale: 1.02,
  transition: springTransition,
}

export const buttonTap = {
  scale: 0.98,
  transition: instant,
}

export const buttonVariants = {
  idle: { scale: 1 },
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
}

export const navItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
}

export const progressBarVariants = {
  initial: { scaleX: 0 },
  animate: { scaleX: 1 },
}

export const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
}

export const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
}

export const willChangeProperties = [
  "transform",
  "opacity",
  "filter",
] as const

export const hardwareAccelerate = {
  backfaceVisibility: "hidden" as const,
  perspective: 1000,
  transform: "translateZ(0)",
}

export const performanceConfig = {
  willChange: "transform, opacity",
  transform: "translateZ(0)",
  backfaceVisibility: "hidden" as const,
  perspective: 1000,
}

export const scrollRevealConfig = {
  viewport: { once: true, margin: "-100px" },
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: springTransition,
}

export const parallaxConfig = {
  y: [-50, 50],
  opacity: [0.3, 1],
}

export type AnimationPreset =
  | "fadeInUp"
  | "fadeInDown"
  | "fadeInLeft"
  | "fadeInRight"
  | "fadeIn"
  | "scaleIn"
  | "scaleInFull"
  | "slideInUp"

export function getAnimationPreset(preset: AnimationPreset) {
  const presets = {
    fadeInUp,
    fadeInDown,
    fadeInLeft,
    fadeInRight,
    fadeIn,
    scaleIn,
    scaleInFull,
    slideInUp,
  }
  return presets[preset]
}

export const transitionPresets = {
  default: springTransition,
  gentle: gentleSpring,
  bouncy: bouncySpring,
  slow: slowSpring,
  tween: tweenTransition,
  easeInOut,
}