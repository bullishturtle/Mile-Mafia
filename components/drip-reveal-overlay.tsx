"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function DripRevealOverlay() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 1500) // Duration of the animation

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-luxury-darkest via-luxury-crimson to-luxury-darkest pointer-events-none"
      style={{
        // Subtle texture for a refined feel
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234A0000' fillOpacity='0.1' fillRule='evenodd'%3E%3Cpath d='M0 0h3v1H0V0zm0 2h3v1H0V2zm0 4h3v1H0V4zm3 0h3v1H3V4zm3 2h3v1H3V6zm0-2h3v1H3V2zm0-4h3v1H3V0z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: "6px 6px",
      }}
    >
      {/* Elegant vertical reveal/shimmer */}
      <motion.div
        initial={{ height: "0%", opacity: 0 }}
        animate={{ height: "100%", opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-0 left-1/2 w-1 bg-primary" // Using primary for the reveal line
        style={{
          transform: "translateX(-50%)",
        }}
      />
    </motion.div>
  )
}
