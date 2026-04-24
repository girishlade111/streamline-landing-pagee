"use client"

import { motion, AnimatePresence, Variants } from "framer-motion"
import { ReactNode } from "react"
import { usePathname } from "next/navigation"
import { pageTransition } from "@/lib/animations"

type TransitionType = "fadeSlide" | "fadeScale" | "slideLeft" | "slideRight"

const transitionVariants: Record<TransitionType, Variants> = {
    fadeSlide: pageTransition,
    fadeScale: {
        initial: { opacity: 0, scale: 0.96 },
        animate: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
        },
        exit: {
            opacity: 0,
            scale: 0.96,
            transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
        },
    },
    slideLeft: {
        initial: { opacity: 0, x: 60 },
        animate: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
        },
        exit: {
            opacity: 0,
            x: -60,
            transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
        },
    },
    slideRight: {
        initial: { opacity: 0, x: -60 },
        animate: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
        },
        exit: {
            opacity: 0,
            x: 60,
            transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
        },
    },
}

interface PageTransitionProps {
    children: ReactNode
    type?: TransitionType
    className?: string
    mode?: "wait" | "sync" | "popLayout"
}

/**
 * PageTransition
 *
 * Wraps page content to provide route-level enter/exit animations.
 * Must be used within an AnimatePresence wrapper (typically in app/template.tsx).
 *
 * Usage:
 *   <PageTransition>
 *     <YourPageContent />
 *   </PageTransition>
 */
export default function PageTransition({
    children,
    type = "fadeSlide",
    className,
    mode = "wait",
}: PageTransitionProps) {
    const pathname = usePathname()
    const variants = transitionVariants[type]

    return (
        <AnimatePresence mode={mode}>
            <motion.div
                key={pathname}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                className={className}
                style={{ willChange: "transform, opacity" }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}
