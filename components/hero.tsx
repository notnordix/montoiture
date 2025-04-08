"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { COMPANY } from "@/lib/constants"

export default function Hero() {
  const [viewportHeight, setViewportHeight] = useState("100vh")
  const [currentHighlight, setCurrentHighlight] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  // Handle viewport height for mobile browsers
  useEffect(() => {
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

  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden bg-gray-900"
      style={{ height: viewportHeight }}
    >
      {/* Background with simple overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/s7.webp')",
          }}
        />

        {/* Simplified overlay with solid colors instead of gradients */}
        <div className="absolute inset-0 bg-black opacity-70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main heading with animated reveal */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl"
            >
              Expert couvreur dans les <span className="text-primary">Alpes-Maritimes</span>
            </motion.h1>
          </div>

          {/* Subheading with rotating highlights instead of typing animation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-2xl mx-auto mb-8 text-xl text-gray-300 md:text-2xl"
          >
            Pour un toit solide et durable. Problème de toiture ? Appelez notre service d'urgence{" "}
            <motion.span
              key={currentHighlight}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="font-bold text-primary inline-block min-w-[80px]"
            >
              {highlights[currentHighlight]}
            </motion.span>
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col items-center justify-center gap-4 mt-8 sm:flex-row"
          >
            <Button
              size="lg"
              className="px-8 py-6 text-lg font-medium transition-all duration-300 bg-primary hover:bg-primary-600 hover:scale-105"
              asChild
            >
              <Link href="/contact">
                <motion.span className="flex items-center">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.span>
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg font-medium text-primary border-white hover:bg-white/10 hover:text-white transition-all duration-300"
              asChild
            >
              <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}>
                <Phone className="mr-2 h-5 w-5" />
                Nous appeler
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
