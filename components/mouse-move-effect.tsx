"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function MouseMoveEffect() {
  const [isVisible, setIsVisible] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setIsVisible(true)
      cursorX.set(event.clientX - 16)
      cursorY.set(event.clientY - 16)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [cursorX, cursorY])

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-30 w-8 h-8 rounded-full border-2 border-purple-500/50"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.1 }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-30 w-1 h-1 rounded-full bg-purple-500"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.05 }}
      />
    </>
  )
}
