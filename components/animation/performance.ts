"use client"

import { useReduceMotion, useAnimation } from "framer-motion"
import { useEffect, CSSProperties, ReactNode } from "react"

export const willChangeProperties = {
  transform: "transform",
  opacity: "opacity",
  filter: "filter",
}

export const hardwareAcceleration = {
  transform: "translateZ(0)",
  backfaceVisibility: "hidden" as const,
  perspective: "1000",
}

export const gpuOptimizedStyles: CSSProperties = {
  ...hardwareAcceleration,
  willChange: "transform, opacity",
}

export const willChangeTransform: CSSProperties = {
  willChange: "transform",
}

export const willChangeOpacity: CSSProperties = {
  willChange: "opacity",
}

export function usePerformanceOptimizer() {
  const shouldReduceMotion = useReduceMotion()
  const controls = useAnimation()

  useEffect(() => {
    controls.set({ opacity: 1 })
  }, [controls])

  return {
    shouldReduceMotion,
    controls,
    isOptimized: !shouldReduceMotion,
  }
}

interface PerformanceWrapperProps {
  children: ReactNode
  enableHardwareAcceleration?: boolean
}

export function PerformanceWrapper({
  children,
  enableHardwareAcceleration = true,
}: PerformanceWrapperProps) {
  const shouldReduceMotion = useReduceMotion()

  const motionStyle: CSSProperties = shouldReduceMotion
    ? {}
    : enableHardwareAcceleration
    ? hardwareAcceleration
    : {}

  return <div style={motionStyle}>{children}</div>
}

export const createOptimizedTransition = (isReduced: boolean) => {
  if (isReduced) {
    return { duration: 0 }
  }

  return {
    type: "spring" as const,
    stiffness: 300,
    damping: 30,
    mass: 1,
  }
}

export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null

  return (...args: Parameters<T>) => {
    if (timeoutId) clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), wait)
  }
}

export const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle = false

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => { inThrottle = false }, limit)
    }
  }
}

export const preloadImages = (srcs: string[]): void => {
  srcs.forEach((src) => {
    const img = new Image()
    img.src = src
  })
}

export const getOptimalAnimationConfig = (devicePixelRatio: number, isMobile: boolean) => {
  if (isMobile || devicePixelRatio > 2) {
    return {
      type: "tween" as const,
      ease: "easeOut" as const,
      duration: 0.3,
    }
  }

  return {
    type: "spring" as const,
    stiffness: 300,
    damping: 30,
    mass: 1,
  }
}

export {
  useReduceMotion,
  useAnimation,
  willChangeProperties,
  hardwareAcceleration,
  gpuOptimizedStyles,
}