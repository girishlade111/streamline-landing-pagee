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

export const optimizeForHardwareAcceleration = (
  styles: CSSProperties
): CSSProperties => ({
  ...hardwareAcceleration,
  ...styles,
})

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
  reduceMotion?: boolean
}

export function PerformanceWrapper({
  children,
  enableHardwareAcceleration = true,
  reduceMotion = false,
}: PerformanceWrapperProps) {
  const shouldReduceMotion = useReduceMotion()
  const finalReduceMotion = reduceMotion || shouldReduceMotion

  const motionStyle: CSSProperties = finalReduceMotion
    ? {}
    : enableHardwareAcceleration
    ? hardwareAcceleration
    : {}

  return (
    <div style={motionStyle}>
      {children}
    </div>
  )
}

export const createOptimizedTransition = (
  isReduced: boolean,
  duration: number = 0.3
) => {
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

export const optimizeListRender = <T,>(
  items: T[],
  batchSize: number = 10,
  onBatch: (batch: T[]) => void
) => {
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize)
    setTimeout(() => onBatch(batch), i * 16)
  }
}

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null

  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      func(...args)
    }, wait)
  }
}

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle = false

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => {
        inThrottle = false
      }, limit)
    }
  }
}

export const rafThrottle = <T extends (...args: any[]) => any>(
  func: T
): ((...args: Parameters<T>) => void) => {
  let rafId: number | null = null

  return (...args: Parameters<T>) => {
    if (rafId) {
      cancelAnimationFrame(rafId)
    }

    rafId = requestAnimationFrame(() => {
      func(...args)
    })
  }
}

export const preloadImages = (srcs: string[]): void => {
  srcs.forEach((src) => {
    const img = new Image()
    img.src = src
  })
}

export const isHeavyAnimation = (elementCount: number, threshold: number = 20): boolean => {
  return elementCount > threshold
}

export const getOptimalAnimationConfig = (
  devicePixelRatio: number,
  isMobile: boolean
) => {
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

export const generateOptimizedKeyframes = (
  from: number,
  to: number,
  steps: number = 3
): number[] => {
  const keyframes: number[] = []
  const stepSize = (to - from) / steps

  for (let i = 0; i <= steps; i++) {
    keyframes.push(from + stepSize * i)
  }

  return keyframes
}

export const performanceMonitor = {
  marks: new Map<string, number>(),

  start(name: string) {
    this.marks.set(name, performance.now())
  },

  end(name: string): number {
    const start = this.marks.get(name)
    if (!start) return 0
    return performance.now() - start
  },

  log(name: string) {
    console.log(`${name}: ${this.end(name).toFixed(2)}ms`)
  },
}

export {
  useReduceMotion,
  useAnimation,
  willChangeProperties,
  hardwareAcceleration,
  gpuOptimizedStyles,
}