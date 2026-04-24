"use client"

import { motion, useReducedMotion, HTMLMotionProps } from "framer-motion"
import { ReactNode, forwardRef } from "react"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps extends HTMLMotionProps<"button"> {
    children: ReactNode
    variant?: "primary" | "secondary" | "ghost" | "outline"
    size?: "sm" | "md" | "lg"
    icon?: ReactNode
    iconPosition?: "left" | "right"
    isLoading?: boolean
}

/**
 * AnimatedButton
 *
 * A drop-in replacement for standard buttons with rich micro-interactions:
 *   - Scale + brightness feedback on hover
 *   - Spring-physics press (tap) response
 *   - Optional icon with directional shift on hover
 *   - Reduced-motion safe
 *
 * Usage:
 *   <AnimatedButton variant="primary" icon={<ArrowRight />}>
 *     Get Started
 *   </AnimatedButton>
 */
const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
    (
        {
            children,
            variant = "primary",
            size = "md",
            icon,
            iconPosition = "right",
            isLoading = false,
            className,
            disabled,
            ...props
        },
        ref
    ) => {
        const shouldReduceMotion = useReducedMotion()

        const baseStyles =
            "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed"

        const variantStyles = {
            primary: "bg-purple-600 hover:bg-purple-700 text-white",
            secondary: "bg-zinc-800 hover:bg-zinc-700 text-white",
            ghost: "bg-transparent hover:bg-white/5 text-zinc-300 hover:text-white",
            outline:
                "bg-transparent border border-zinc-700 hover:border-zinc-500 text-white hover:bg-zinc-900/50",
        }

        const sizeStyles = {
            sm: "px-4 h-8 text-[11px]",
            md: "px-6 h-11 text-sm",
            lg: "px-8 h-14 text-base",
        }

        const motionProps = shouldReduceMotion
            ? {}
            : {
                whileHover: { scale: 1.03, filter: "brightness(1.1)" },
                whileTap: { scale: 0.97 },
                transition: { type: "spring" as const, stiffness: 400, damping: 25 },
            }

        return (
            <motion.button
                ref={ref}
                className={cn(
                    baseStyles,
                    variantStyles[variant],
                    sizeStyles[size],
                    className
                )}
                disabled={disabled || isLoading}
                {...motionProps}
                {...props}
            >
                {isLoading && (
                    <motion.span
                        className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                            repeat: Infinity,
                            duration: 0.8,
                            ease: "linear",
                        }}
                    />
                )}

                {icon && iconPosition === "left" && (
                    <motion.span
                        className="inline-flex"
                        whileHover={shouldReduceMotion ? undefined : { x: -2 }}
                    >
                        {icon}
                    </motion.span>
                )}

                <span>{children}</span>

                {icon && iconPosition === "right" && (
                    <motion.span
                        className="inline-flex"
                        whileHover={shouldReduceMotion ? undefined : { x: 2 }}
                    >
                        {icon}
                    </motion.span>
                )}
            </motion.button>
        )
    }
)

AnimatedButton.displayName = "AnimatedButton"

export default AnimatedButton
