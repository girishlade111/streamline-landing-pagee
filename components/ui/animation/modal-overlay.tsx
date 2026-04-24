"use client"

import { useEffect, ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { modalVariants, overlayVariants, springTransition, performanceConfig } from "@/lib/animation/config"
import { clsx } from "clsx"

interface ModalOverlayProps {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
  className?: string
}

export function ModalOverlay({
  children,
  isOpen,
  onClose,
  className,
}: ModalOverlayProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className={clsx("fixed inset-0 z-50 flex items-center justify-center", className)}>
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />
          <motion.div
            className="relative z-10 w-full max-w-lg p-6 bg-background rounded-lg shadow-2xl"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={springTransition}
            style={performanceConfig}
          >
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

interface ModalProps {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
  title?: string
  showCloseButton?: boolean
  className?: string
}

export function Modal({
  children,
  isOpen,
  onClose,
  title,
  showCloseButton = true,
  className,
}: ModalProps) {
  return (
    <ModalOverlay isOpen={isOpen} onClose={onClose}>
      <div className={clsx("relative", className)}>
        {title && (
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">{title}</h2>
            {showCloseButton && (
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-1 rounded-full hover:bg-muted"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </motion.button>
            )}
          </div>
        )}
        {children}
      </div>
    </ModalOverlay>
  )
}

export { modalVariants, overlayVariants, springTransition, performanceConfig }