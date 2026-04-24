"use client"

import { motion, useReducedMotion, Variants } from "framer-motion"
import { ReactNode } from "react"
import {
    fadeInUp,
    fadeIn,
    scaleIn,
    slideInLeft,
    slideInRight,
    staggerContainer,
    staggerItem,
    accessibleTransition,
} from "@/lib/animations"

type AnimationType =
    | "fadeInUp"
    | "fadeIn"
    | "scaleIn"
    | "slideInLeft"
    | "slideInRight"
    | "staggerContainer"
    | "staggerItem"
    | "none"

interface AnimationWrapperProps {
    children: ReactNode
    type?: AnimationType
    delay?: number
    duration?: number
    className?: string
    once?: boolean
    amount?: number
    customVariants?: Variants
    as?: "div" | "section" | "article" | "span" | "ul" | "li" | "header" | "footer"
    layout?: boolean
    layoutId?: string
}

const variantMap: Record<AnimationType, Variants> = {
    fadeInUp,
    fadeIn,
    scaleIn,
    slideInLeft,
    slideInRight,
    staggerContainer,
    staggerItem,
    none: {},
}

/**
 * AnimationWrapper
 *
 * A reusable, declarative wrapper for Framer Motion animations.
 * Handles viewport-triggered entrance animations, reduced motion
 * preferences, and custom variant injection.
 *
 * Usage:
 *   <AnimationWrapper type="fadeInUp" delay={0.2}>
 *     <YourComponent />
 *   </AnimationWrapper>
 */
export default function AnimationWrapper({
    children,
    type = "fadeInUp",
    delay = 0,
    duration,
    className,
    once = true,
    amount = 0.2,
    customVariants,
    as: Tag = "div",
    layout = false,
    layoutId,
}: AnimationWrapperProps) {
    const shouldReduceMotion = useReducedMotion()

    const baseVariants = customVariants ?? variantMap[type]

    // Merge delay and duration into variants if provided
    const mergedVariants: Variants = {
        hidden: baseVariants.hidden,
        visible: {
            ...(baseVariants.visible as object),
            transition: accessibleTransition({
                ...(baseVariants.visible && typeof baseVariants.visible === "object" && "transition" in baseVariants.visible
                    ? (baseVariants.visible as any).transition
                    : {}),
                delay: shouldReduceMotion ? 0 : delay,
                ...(duration && { duration: shouldReduceMotion ? 0 : duration }),
            }),
        },
    }

    const MotionComponent = motion[Tag]

    return (
        <MotionComponent
            variants={mergedVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount }}
            className={className}
            layout={layout}
            layoutId={layoutId}
            style={shouldReduceMotion ? undefined : { willChange: "transform, opacity" }}
        >
            {children}
        </MotionComponent>
    )
}

/**
 * StaggerContainer
 *
 * Specialized wrapper for parent elements that contain staggered children.
 * Children should use AnimationWrapper with type="staggerItem".
 */
export function StaggerContainer({
    children,
    className,
    delay = 0,
    staggerDelay = 0.08,
    once = true,
    amount = 0.2,
    as: Tag = "div",
}: {
    children: ReactNode
    className?: string
    delay?: number
    staggerDelay?: number
    once?: boolean
    amount?: number
    as?: "div" | "section" | "article" | "ul"
}) {
    const shouldReduceMotion = useReducedMotion()

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: accessibleTransition({
                staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
                delayChildren: shouldReduceMotion ? 0 : delay,
            }),
        },
    }

    const MotionComponent = motion[Tag]

    return (
        <MotionComponent
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount }}
            className={className}
        >
            {children}
        </MotionComponent>
    )
}
