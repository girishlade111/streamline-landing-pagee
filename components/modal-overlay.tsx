"use client"

import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { ReactNode, useEffect } from "react"
import { modalOverlay, modalContent } from "@/lib/animations"

interface ModalOverlayProps {
    isOpen: boolean
    onClose: () => void
    children: ReactNode
    title?: string
    description?: string
    showCloseButton?: boolean
}

/**
 * ModalOverlay
 *
 * Accessible modal dialog with Framer Motion enter/exit animations.
 * Features:
 *   - AnimatePresence for mount/unmount animations
 *   - Backdrop blur + fade
 *   - Content scale + slide entrance
 *   - Escape key to close
 *   - Body scroll lock when open
 *   - Focus trap ready (extend with Radix Dialog if needed)
 *
 * Usage:
 *   const [open, setOpen] = useState(false)
 *   <ModalOverlay isOpen={open} onClose={() => setOpen(false)}>
 *     <YourModalContent />
 *   </ModalOverlay>
 */
export default function ModalOverlay({
    isOpen,
    onClose,
    children,
    title,
    description,
    showCloseButton = true,
}: ModalOverlayProps) {
    const shouldReduceMotion = useReducedMotion()

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            const originalOverflow = document.body.style.overflow
            document.body.style.overflow = "hidden"
            return () => {
                document.body.style.overflow = originalOverflow
            }
        }
    }, [isOpen])

    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose()
        }
        if (isOpen) {
            window.addEventListener("keydown", handleKeyDown)
            return () => window.removeEventListener("keydown", handleKeyDown)
        }
    }, [isOpen, onClose])

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[80] flex items-center justify-center p-4"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={shouldReduceMotion ? {} : undefined}
                >
                    {/* Backdrop */}
                    <motion.div
                        variants={modalOverlay}
                        className="absolute inset-0 bg-black/70 backdrop-blur-md"
                        onClick={onClose}
                    />

                    {/* Modal Content */}
                    <motion.div
                        variants={modalContent}
                        className="relative z-10 w-full max-w-lg rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby={title ? "modal-title" : undefined}
                        aria-describedby={description ? "modal-desc" : undefined}
                    >
                        {showCloseButton && (
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-1 rounded-full text-zinc-500 hover:text-white hover:bg-white/5 transition-colors"
                                aria-label="Close modal"
                            >
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 4L4 12M4 4L12 12"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </button>
                        )}

                        {title && (
                            <h2
                                id="modal-title"
                                className="text-lg font-bold text-white mb-1"
                            >
                                {title}
                            </h2>
                        )}

                        {description && (
                            <p
                                id="modal-desc"
                                className="text-sm text-zinc-400 mb-4"
                            >
                                {description}
                            </p>
                        )}

                        <div className="mt-2">{children}</div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
