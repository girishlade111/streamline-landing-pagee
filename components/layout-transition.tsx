"use client"

import { motion, LayoutGroup, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface LayoutItem {
    id: string
    label: string
    color: string
    content: string
}

const items: LayoutItem[] = [
    {
        id: "ai",
        label: "AI Analytics",
        color: "bg-purple-500/20 border-purple-500/30 text-purple-400",
        content: "Machine learning models that process millions of data points in real-time.",
    },
    {
        id: "cloud",
        label: "Cloud Mesh",
        color: "bg-cyan-500/20 border-cyan-500/30 text-cyan-400",
        content: "Seamless multi-cloud orchestration with automatic failover and scaling.",
    },
    {
        id: "security",
        label: "Cyber Shield",
        color: "bg-emerald-500/20 border-emerald-500/30 text-emerald-400",
        content: "Zero-trust architecture with 256-bit encryption and threat detection.",
    },
    {
        id: "data",
        label: "Data Infra",
        color: "bg-amber-500/20 border-amber-500/30 text-amber-400",
        content: "Distributed data pipelines with sub-millisecond query performance.",
    },
]

/**
 * LayoutTransition
 *
 * Demonstrates Framer Motion's `layoutId` for shared element transitions.
 * Clicking a card expands it into a detailed view with smooth morphing
 * between the two states — no manual coordinate calculations needed.
 *
 * This showcases the power of layout animations for:
 *   - Expanding cards
 *   - Image galleries
 *   - List-to-detail transitions
 */
export default function LayoutTransition() {
    const [selectedId, setSelectedId] = useState<string | null>(null)
    const selectedItem = items.find((item) => item.id === selectedId)

    return (
        <LayoutGroup>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {items.map((item) => (
                    <motion.div
                        key={item.id}
                        layoutId={item.id}
                        onClick={() => setSelectedId(item.id)}
                        className={cn(
                            "cursor-pointer rounded-xl border p-5 transition-shadow hover:shadow-lg",
                            item.color,
                            selectedId === item.id ? "opacity-0 pointer-events-none" : "opacity-100"
                        )}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        style={{ willChange: "transform" }}
                    >
                        <motion.h3
                            layoutId={`title-${item.id}`}
                            className="text-sm font-bold mb-1"
                        >
                            {item.label}
                        </motion.h3>
                        <motion.p
                            layoutId={`desc-${item.id}`}
                            className="text-xs opacity-70 leading-relaxed"
                        >
                            {item.content}
                        </motion.p>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedId && selectedItem && (
                    <motion.div
                        className="fixed inset-0 z-[70] flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Backdrop */}
                        <motion.div
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            onClick={() => setSelectedId(null)}
                        />

                        {/* Expanded Card */}
                        <motion.div
                            layoutId={selectedId}
                            className={cn(
                                "relative z-10 w-full max-w-md rounded-2xl border p-8 shadow-2xl",
                                selectedItem.color
                            )}
                            style={{ willChange: "transform, width, height" }}
                        >
                            <button
                                onClick={() => setSelectedId(null)}
                                className="absolute top-4 right-4 p-1 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
                            >
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                >
                                    <path
                                        d="M12 4L4 12M4 4L12 12"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </button>

                            <motion.h3
                                layoutId={`title-${selectedId}`}
                                className="text-xl font-bold mb-3"
                            >
                                {selectedItem.label}
                            </motion.h3>

                            <motion.p
                                layoutId={`desc-${selectedId}`}
                                className="text-sm opacity-80 leading-relaxed mb-4"
                            >
                                {selectedItem.content}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.15 }}
                                className="text-xs opacity-60"
                            >
                                Click outside or the X to close. This transition uses
                                Framer Motion's <code>layoutId</code> for automatic
                                shared element morphing.
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </LayoutGroup>
    )
}
