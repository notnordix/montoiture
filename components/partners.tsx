"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

// Import Swiper styles
import "swiper/css"

export default function Partners() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  // Partner logos
  const partnerLogos = [
    {
      id: 1,
      image: "p1.webp",
      alt: "Partenaire 1",
    },
    {
      id: 2,
      image: "p2.webp",
      alt: "Partenaire 2",
    },
    {
      id: 3,
      image: "p3.webp",
      alt: "Partenaire 3",
    },
    {
      id: 4,
      image: "p4.webp",
      alt: "Partenaire 4",
    },
    {
      id: 5,
      image: "p5.webp",
      alt: "Partenaire 5",
    },
    {
      id: 6,
      image: "p6.webp",
      alt: "Partenaire 6",
    },
  ]

  // Duplicate logos for smoother infinite loop
  const allLogos = [...partnerLogos, ...partnerLogos]

  return (
    <section id="partners" ref={ref} className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium">Nos partenaires</span>
          <h2 className="text-3xl font-bold mt-2 mb-4">Ils nous font confiance</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </motion.div>

        {/* Partners Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          {mounted && (
            <div className="partners-container">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={2}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                speed={1000}
                loop={true}
                breakpoints={{
                  640: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                  },
                }}
                className="w-full"
              >
                {allLogos.map((partner, index) => (
                  <SwiperSlide key={`partner-${partner.id}-${index}`}>
                    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-4 h-32 flex items-center justify-center">
                      <div className="relative h-full w-full">
                        <Image
                          src={partner.image || "/placeholder.svg"}
                          alt={partner.alt}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                          className="object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.src = "/placeholder.svg?height=100&width=200"
                          }}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
