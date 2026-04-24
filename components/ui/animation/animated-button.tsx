"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react"
import { springTransition, performanceConfig } from "@/lib/animation/config"
import { clsx } from "clsx"

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  withMotion?: boolean
}

export const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  function AnimatedButton(
    { children, className, withMotion = true, disabled, ...props },
    ref
  ) {
    if (withMotion) {
      return (
        <motion.button
          ref={ref}
          className={clsx(className)}
          disabled={disabled}
          whileHover={!disabled ? { scale: 1.02 } : undefined}
          whileTap={!disabled ? { scale: 0.98 } : undefined}
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

export { springTransition, performanceConfig }