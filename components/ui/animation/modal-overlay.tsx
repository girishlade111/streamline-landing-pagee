"use client"

import { useEffect, ReactNode, useCallback } from "react"
import { motion, AnimatePresence, useEscape } from "framer-motion"
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
  useEscape(onClose)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

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

interface SlideModalProps {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
  direction?: "left" | "right" | "top" | "bottom"
  className?: string
}

export function SlideModal({
  children,
  isOpen,
  onClose,
  direction = "right",
  className,
}: SlideModalProps) {
  useEscape(onClose)

  const directionTransforms = {
    left: { x: "-100%", y: 0 },
    right: { x: "100%", y: 0 },
    top: { x: 0, y: "-100%" },
    bottom: { x: 0, y: "100%" },
  }

  const directionAnimate = {
    left: { x: 0 },
    right: { x: 0 },
    top: { y: 0 },
    bottom: { y: 0 },
  }

  const panelVariants = {
    hidden: { ...directionTransforms[direction], opacity: 0 },
    visible: { ...directionAnimate[direction], opacity: 1 },
    exit: { ...directionTransforms[direction], opacity: 0 },
  }

  const overlayVariantsSlide = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            variants={overlayVariantsSlide}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />
          <motion.div
            className={clsx(
              "absolute bg-background p-6 shadow-2xl",
              direction === "left" || direction === "right"
                ? "top-0 bottom-0 w-full max-w-md"
                : "left-0 right-0 h-full max-w-md",
              direction === "left" && "left-0",
              direction === "right" && "right-0",
              direction === "top" && "top-0",
              direction === "bottom" && "bottom-0",
              className
            )}
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={springTransition}
          >
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

interface DrawerProps {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
  title?: string
  side?: "left" | "right"
  width?: string
}

export function Drawer({
  children,
  isOpen,
  onClose,
  title,
  side = "right",
  width = "320px",
}: DrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className={`absolute top-0 bottom-0 bg-background shadow-2xl ${
              side === "left" ? "left-0" : "right-0"
            }`}
            style={{ width }}
            initial={{ x: side === "left" ? "-100%" : "100%" }}
            animate={{ x: 0 }}
            exit={{ x: side === "left" ? "-100%" : "100%" }}
            transition={springTransition}
          >
            <div className="flex items-center justify-between p-4 border-b">
              {title && <h3 className="text-lg font-semibold">{title}</h3>}
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full hover:bg-muted"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>
            <div className="p-4">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

function useEscape(onEscape: () => void) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onEscape()
      }
    }

    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onEscape])
}

export { modalVariants, overlayVariants, springTransition, performanceConfig }