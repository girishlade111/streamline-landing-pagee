"use client"

import { useRef, ReactNode } from "react"
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate, MotionValue } from "framer-motion"
import { springTransition } from "@/lib/animation/config"

export function useParallaxScroll(range: [number, number] = [-100, 100], speed: number = 1) {
  const { scrollYProgress } = useScroll()
  
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${range[0] * speed}px`, `${range[1] * speed}px`]
  )
  
  return y
}

export function useRevealScroll(threshold: number = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  
  const opacity = useTransform(scrollYProgress, [0, threshold, 1], [0, 1, 1])
  const y = useTransform(scrollYProgress, [0, threshold, 1], [50, 0, 0])
  const scale = useTransform(scrollYProgress, [0, threshold, 1], [0.95, 1, 1])
  
  return { ref, opacity, y, scale, scrollYProgress }
}

export function useProgressBar(scrollTarget?: HTMLElement | null) {
  const { scrollYProgress } = useScroll({
    target: scrollTarget ?? undefined,
    offset: ["start start", "end end"],
  })
  
  const smoothProgress = useSpring(scrollYProgress, springTransition)
  
  return { scrollYProgress: smoothProgress, rawProgress: scrollYProgress }
}

export function useParallaxImage(speed: number = 0.3, range: [number, number] = [-30, 30]) {
  const { scrollYProgress } = useScroll()
  
  const y = useTransform(scrollYProgress, [0, 1], range)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1 + speed])
  
  return { y, scale, scrollYProgress }
}

export function useTextReveal() {
  const ref = useRef<HTMLHeadingElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  
  const clip = useTransform(scrollYProgress, [0, 1], [100, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1])
  
  return { ref, clip, opacity, scrollYProgress }
}

interface ScrollProgressProps {
  className?: string
  color?: string
  height?: number
  fixed?: boolean
  position?: "top" | "bottom"
}

export function ScrollProgress({
  className = "",
  color = "var(--primary)",
  height = 3,
  fixed = true,
  position = "top",
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll()
  
  const scaleX = useSpring(scrollYProgress, springTransition)
  
  const fixedStyles: React.CSSProperties = fixed
    ? {
        position: "fixed",
        [position]: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
      }
    : {}
  
  return (
    <motion.div
      style={{
        scaleX,
        backgroundColor: color,
        height,
        transformOrigin: "0%",
        ...fixedStyles,
      }}
      className={className}
    />
  )
}

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  speed?: number
  direction?: "vertical" | "horizontal"
}

export function ParallaxSection({
  children,
  className = "",
  speed = 0.5,
  direction = "vertical",
}: ParallaxSectionProps) {
  const { scrollYProgress } = useScroll()
  
  const y = useTransform(scrollYProgress, [0, 1], [
    -100 * speed,
    100 * speed,
  ])
  
  return (
    <motion.div
      className={className}
      style={{
        [direction === "vertical" ? "y" : "x"]: y,
      }}
    >
      {children}
    </motion.div>
  )
}

interface RevealOnScrollProps {
  children: ReactNode
  className?: string
  threshold?: number
  delay?: number
  direction?: "up" | "down" | "left" | "right"
}

export function RevealOnScroll({
  children,
  className = "",
  threshold = 0.1,
  delay = 0,
  direction = "up",
}: RevealOnScrollProps) {
  const { ref, opacity, y, scale } = useRevealScroll(threshold)
  
  const transforms = {
    up: { y, opacity, scale },
    down: {
      y: useTransform(scrollYProgress => 
        useTransform(scrollYProgress, [0, threshold, 1], [-50, 0, 0])
      ) as unknown as MotionValue<number>,
      opacity,
    },
    left: { x: useTransform(scrollYProgress => 
      useTransform(scrollYProgress, [0, threshold, 1], [-50, 0, 0])
    ), opacity, scale },
    right: { x: useTransform(scrollYProgress => 
      useTransform(scrollYProgress, [0, threshold, 1], [50, 0, 0])
    ), opacity, scale },
  }
  
  const directionTransforms = {
    up: { y },
    down: { y: useTransform(scrollYProgress => [0], [0]) },
    left: { x: useTransform(scrollYProgress => [0], [0]) },
    right: { x: useTransform(scrollYProgress => [0], [0]) },
  }
  
  let initialY = 50
  if (direction === "up") initialY = 50
  else if (direction === "down") initialY = -50
  else if (direction === "left") initialY = 50
  else if (direction === "right") initialY = -50
  
  let translateKey = "y"
  if (direction === "left" || direction === "right") translateKey = "x"
  
  const transformValue = useTransform(
    scrollYProgress,
    [0, threshold, 1],
    [initialY, 0, 0]
  )
  
  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        opacity,
        [translateKey === "y" ? "y" : "x"]: transformValue,
        scale,
      }}
      transition={{ ...springTransition, delay }}
    >
      {children}
    </motion.div>
  )
}

export function useHorizontalScroll(
  containerRef: React.RefObject<HTMLElement>,
  speed: number = 1
) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })
  
  const x = useTransform(scrollYProgress, [0, 1], [0, -100 * speed])
  
  return { x, scrollYProgress }
}

export function useScrollProgress() {
  const { scrollYProgress } = useScroll()
  
  const progressValue = useMotionTemplate`${scrollYProgress * 100}%`
  
  return {
    progress: scrollYProgress,
    percentage: progressValue,
  }
}

export function useRevealDirection(
  direction: "up" | "down" | "left" | "right" = "up",
  distance: number = 50,
  threshold: number = 0.1
) {
  const ref = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  
  let transform: MotionValue<number>
  let initialOffset: number
  
  switch (direction) {
    case "up":
      initialOffset = distance
      break
    case "down":
      initialOffset = -distance
      break
    case "left":
      initialOffset = distance
      break
    case "right":
      initialOffset = -distance
      break
  }
  
  transform = useTransform(scrollYProgress, [0, threshold, 1], [initialOffset, 0, 0])
  
  const opacity = useTransform(scrollYProgress, [0, threshold, 1], [0, 1, 1])
  const scale = useTransform(scrollYProgress, [0, threshold, 1], [0.9, 1, 1])
  
  return { ref, opacity, transform, scale, scrollYProgress }
}

export {
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useMotionTemplate,
  MotionValue,
}