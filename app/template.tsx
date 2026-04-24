"use client"

import { AnimatePresence } from "framer-motion"
import { ReactNode } from "react"

/**
 * Root Template
 *
 * Next.js 15 App Router renders `template.tsx` for each route navigation.
 * This is the canonical location to wrap children in AnimatePresence
 * for route-level exit animations.
 *
 * Note: The actual motion variants are applied inside PageTransition or
 * individual page components. This file only provides the AnimatePresence
 * boundary that persists across route changes.
 */
export default function Template({ children }: { children: ReactNode }) {
    return (
        <AnimatePresence mode="wait" initial={false}>
            {children}
        </AnimatePresence>
    )
}
