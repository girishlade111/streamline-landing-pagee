"use client"

import { motion, useScroll, useSpring, useMotionValueEvent } from "framer-motion"
import { useState } from "react"

/**
 * ScrollProgress
 *
 * A global scroll progress indicator that sits at the top of the viewport.
 * Uses useScroll for scroll position, useSpring for smooth interpolation,
 * and useMotionValueEvent for threshold-based UI state changes.
 *
 * Features:
 *   - Linear progress bar mapped to scrollYProgress
 *   - Smooth spring physics for the bar movement
 *   - Scroll-direction aware header shadow/background
 */
export default function ScrollProgress() {
    const { scrollYProgress, scrollY } = useScroll()

    // Smooth the progress with a spring for a premium feel
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    // Track scroll direction for optional header effects
    const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null)

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0
        if (latest > previous && latest > 50) {
            setScrollDirection("down")
        } else if (latest < previous) {
            setScrollDirection("up")
        }
    })

    return (
        <>
            {/* Fixed progress bar at the very top */}
            <motion.div
                className="fixed top-0 left-0 right-0 z-[100] h-[2px] origin-left"
                style={{
                    scaleX: smoothProgress,
                    background: "linear-gradient(90deg, #a855f7, #06b6d4)",
                }}
            />

            {/* Optional: Scroll direction indicator (subtle dot) */}
            <motion.div
                className="fixed top-4 right-4 z-[100] w-2 h-2 rounded-full bg-purple-500"
                animate={{
                    opacity: scrollDirection === "down" ? 0.6 : 0,
                    scale: scrollDirection === "down" ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
            />
        </>
    )
}

/**
 * ScrollProgressCircle
 *
 * Alternative circular progress indicator for use in headers or sidebars.
 */
export function ScrollProgressCircle({ size = 40 }: { size?: number }) {
    const { scrollYProgress } = useScroll()
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    const radius = (size - 4) / 2
    const circumference = 2 * Math.PI * radius

    return (
        <div className="relative" style={{ width: size, height: size }}>
            {/* Background circle */}
            <svg
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                className="-rotate-90"
            >
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-zinc-800"
                />
                <motion.circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="text-purple-500"
                    strokeDasharray={circumference}
                    style={{
                        strokeDashoffset: smoothProgress.get() * circumference,
                    }}
                />
            </svg>
        </div>
    )
}
