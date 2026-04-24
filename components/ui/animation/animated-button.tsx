"use client"

import { motion } from "framer-motion"
import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react"
import { springTransition, buttonVariants, performanceConfig } from "@/lib/animation/config"
import { cva, type VariantProps } from "class-variance-authority"
import { clsx } from "clsx"

type AnimationButtonVariants = VariantProps<typeof buttonMotionVariants>

const buttonMotionVariants = {
  idle: { scale: 1 },
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
}

interface AnimatedButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    AnimationButtonVariants {
  children: ReactNode
  withMotion?: boolean
  springConfig?: typeof springTransition
  hoverScale?: number
  tapScale?: number
}

export const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  function AnimatedButton(
    {
      children,
      className,
      withMotion = true,
      hoverScale = 1.02,
      tapScale = 0.98,
      disabled,
      ...props
    },
    ref
  ) {
    if (withMotion) {
      return (
        <motion.button
          ref={ref}
          className={clsx(className)}
          disabled={disabled}
          whileHover={!disabled ? { scale: hoverScale } : undefined}
          whileTap={!disabled ? { scale: tapScale } : undefined}
          transition={springTransition}
          style={{
            ...performanceConfig,
            cursor: disabled ? "not-allowed" : "pointer",
          }}
          {...props}
        >
          {children}
        </motion.button>
      )
    }

    return (
      <button
        ref={ref}
        className={clsx(className)}
        disabled={disabled}
        style={{
          ...performanceConfig,
          cursor: disabled ? "not-allowed" : "pointer",
        }}
        {...props}
      >
        {children}
      </button>
    )
  }
)

AnimatedButton.displayName = "AnimatedButton"

interface PulseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  pulseColor?: string
}

export function PulseButton({
  children,
  className,
  pulseColor = "rgba(255,255,255,0.3)",
  ...props
}: PulseButtonProps) {
  return (
    <motion.button
      className={className}
      whileHover="hover"
      whileTap="tap"
      style={{ ...performanceConfig }}
      {...props}
    >
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: pulseColor }}
        initial={{ scale: 0.8, opacity: 0 }}
        whileHover={{ scale: 1.5, opacity: 0 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "loop" }}
      />
      {children}
    </motion.button>
  )
}

interface ShimmerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  shimmerColor?: string
}

export function ShimmerButton({
  children,
  className,
  shimmerColor = "rgba(255,255,255,0.3)",
  ...props
}: ShimmerButtonProps) {
  return (
    <motion.button
      className={className}
      whileHover="hover"
      whileTap="tap"
      style={{ overflow: "hidden", ...performanceConfig }}
      {...props}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
        }}
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "loop" }}
      />
      {children}
    </motion.button>
  )
}

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  glowColor?: string
}

export function GlowButton({
  children,
  className,
  glowColor = "rgba(100,150,255,0.5)",
  ...props
}: GlowButtonProps) {
  return (
    <motion.button
      className={className}
      whileHover="hover"
      whileTap="tap"
      {...props}
    >
      <motion.div
        style={{
          position: "absolute",
          inset: -2,
          borderRadius: "inherit",
          background: glowColor,
          filter: "blur(10px)",
          zIndex: -1,
        }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.5 }}
        transition={springTransition}
      />
      {children}
    </motion.button>
  )
}

export { buttonMotionVariants, springTransition, performanceConfig }
export type { AnimationButtonVariants }