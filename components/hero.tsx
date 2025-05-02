"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Phone } from "lucide-react"
import { motion } from "framer-motion"
import { COMPANY } from "@/lib/constants"

export default function Hero() {
  const [viewportHeight, setViewportHeight] = useState("100vh")
  const [currentHighlight, setCurrentHighlight] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  // Handle viewport height for mobile browsers
  useEffect(() => {
    if (typeof window === "undefined") return

    const updateViewportHeight = () => {
      // Use a more reliable approach for mobile browsers
      const vh = window.innerHeight
      setViewportHeight(`${vh}px`)
    }

    // Initial update
    updateViewportHeight()

    // Update on resize
    window.addEventListener("resize", updateViewportHeight)

    // Update on orientation change for mobile
    window.addEventListener("orientationchange", updateViewportHeight)

    setIsVisible(true)

    return () => {
      window.removeEventListener("resize", updateViewportHeight)
      window.removeEventListener("orientationchange", updateViewportHeight)
    }
  }, [])

  // Rotating highlights instead of typing animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHighlight((prev) => (prev + 1) % highlights.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // Text variations for the rotating highlights
  const highlights = ["24h/24", "urgence", "7j/7", "rapide", "fiable"]

  // Fix for accessing window during SSR
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768

  return (
    <section
      className="relative flex flex-col items-start justify-center overflow-hidden bg-gray-900"
      style={{ height: viewportHeight }}
    >
      {/* Background with simple overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/MONTOITURE/mockup5.png')",
            backgroundSize: isMobile ? "270%" : "cover" // Adjusted to avoid SSR issues
          }}
        />

        {/* Simplified overlay with solid colors instead of gradients */}
        <div className="absolute inset-0 bg-black opacity-70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-3 sm:px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl text-left"
        >
          {/* Main heading with animated reveal */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="mb-3 sm:mb-6 text-3xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl"
            >
              Expert couvreur dans les <span className="text-primary">Alpes-Maritimes</span>
            </motion.h1>
          </div>

          {/* Subheading with rotating highlights instead of typing animation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-4 sm:mb-8 text-lg text-gray-300 md:text-2xl"
          >
            Pour un toit solide et durable. Problème de toiture ? Appelez notre service d'urgence{" "}
            <motion.span
              key={currentHighlight}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="font-bold text-primary inline-block min-w-[60px] sm:min-w-[80px]"
            >
              {highlights[currentHighlight]}
            </motion.span>
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-row items-center justify-start gap-3 mt-6 sm:gap-4"
          >
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap border border-primary rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-white hover:bg-primary-700 h-10 px-4 py-2 text-sm sm:text-lg hover:scale-105 sm:px-8 sm:py-5"
            >
              Demander un devis
              <ArrowRight className="ml-1 h-4 w-4 sm:ml-2 sm:h-5 sm:w-5" />
            </a>

            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-sm sm:text-lg text-primary border-white hover:bg-white/10 hover:text-white sm:px-8 sm:py-5"
            >
              <Phone className="mr-1 h-4 w-4 sm:mr-2 sm:h-5 sm:w-5" />
              Nous appeler
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
