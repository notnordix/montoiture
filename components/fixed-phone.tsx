"use client"

import { Phone } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { COMPANY } from "@/lib/constants"

export default function FixedPhone() {
  const [bounce, setBounce] = useState(false)

  // Set up a timer to trigger the bounce animation periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setBounce(true)
      setTimeout(() => setBounce(false), 1000)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.a
      href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        y: bounce ? [0, -15, 0, -8, 0] : 0,
      }}
      transition={{
        delay: 1,
        type: "spring",
        stiffness: 260,
        damping: 20,
        y: { duration: 0.8, ease: "easeInOut" },
      }}
      className="fixed bottom-6 left-6 z-50 bg-green-600 hover:bg-green-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        animate={{
          scale: bounce ? [1, 1.2, 1, 1.1, 1] : 1,
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <Phone className="h-6 w-6" />
      </motion.div>
      <span className="sr-only">Appelez-nous</span>

      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-green-600"
        animate={{
          scale: [1, 1.5, 1.8],
          opacity: [1, 0.5, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "easeOut",
          times: [0, 0.5, 1],
        }}
      />

      {/* Second ripple with delay for continuous effect */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-green-600"
        animate={{
          scale: [1, 1.5, 1.8],
          opacity: [1, 0.5, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "easeOut",
          times: [0, 0.5, 1],
          delay: 0.75, // Half the duration for continuous effect
        }}
      />
    </motion.a>
  )
}
