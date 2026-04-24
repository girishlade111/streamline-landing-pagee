"use client"

import { useState, ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { springTransition } from "@/lib/animation/config"

interface SharedElementProps {
  children: ReactNode
  layoutId: string
  className?: string
}

export function SharedElement({ children, layoutId, className }: SharedElementProps) {
  return (
    <motion.div
      layoutId={layoutId}
      className={className}
      transition={springTransition}
    >
      {children}
    </motion.div>
  )
}

interface ExpandableImageProps {
  src: string
  alt: string
  layoutId: string
  className?: string
  onClose?: () => void
}

export function ExpandableImage({
  src,
  alt,
  layoutId,
  className,
  onClose,
}: ExpandableImageProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleClick = () => setIsExpanded(true)
  const handleClose = () => {
    setIsExpanded(false)
    onClose?.()
  }

  return (
    <>
      <motion.img
        src={src}
        alt={alt}
        layoutId={layoutId}
        className={className}
        onClick={handleClick}
        whileHover={{ scale: 1.02 }}
        transition={springTransition}
        style={{ cursor: "pointer" }}
      />

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <motion.img
              src={src}
              alt={alt}
              layoutId={layoutId}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={springTransition}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

interface ImageGridItemProps {
  src: string
  alt: string
  layoutId: string
  title: string
  description?: string
  className?: string
}

export function ImageGridItem({
  src,
  alt,
  layoutId,
  title,
  description,
  className,
}: ImageGridItemProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      <motion.div
        layoutId={layoutId}
        className={className}
        onClick={() => setIsExpanded(true)}
        whileHover={{ scale: 1.03 }}
        transition={springTransition}
        style={{ cursor: "pointer" }}
      >
        <motion.img src={src} alt={alt} className="w-full h-48 object-cover rounded-lg" />
        <div className="mt-2">
          <h3 className="font-semibold">{title}</h3>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              layoutId={layoutId}
              className="max-w-4xl w-full p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={src}
                alt={alt}
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
              />
              <div className="mt-4 text-center">
                <h2 className="text-2xl font-bold text-white">{title}</h2>
                {description && (
                  <p className="mt-2 text-muted-foreground">{description}</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

interface ListItemProps {
  children: ReactNode
  layoutId: string
  onClick?: () => void
  className?: string
}

export function ListItem({ children, layoutId, onClick, className }: ListItemProps) {
  return (
    <motion.div
      layoutId={layoutId}
      className={className}
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      transition={springTransition}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      {children}
    </motion.div>
  )
}

export { springTransition }