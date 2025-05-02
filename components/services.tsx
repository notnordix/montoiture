"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useAnimation, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

// Import Swiper styles
import "swiper/css"

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  // Update the services array to include links to all service pages
  const services = [
    {
      title: "Couverture",
      description: "Solutions complètes pour tous types de couvertures",
      image: "/s1.webp",
      color: "from-blue-500/70",
      link: "/services/installations-de-toiture",
    },
    {
      title: "Charpente",
      description: "Construction et rénovation de charpentes traditionnelles et modernes",
      image: "/s5.webp",
      color: "from-green-500/70",
      link: "/services/charpente",
    },
    {
      title: "Étanchéité de toiture",
      description: "Solutions d'étanchéité pour tous types de toitures",
      image: "/s6.webp",
      color: "from-red-500/70",
      link: "/services/etancheite-de-toiture",
    },
    {
      title: "L'entretien et le nettoyage de la toiture",
      description: "Services d'entretien et de nettoyage pour prolonger la durée de vie de votre toiture",
      image: "/s4.webp",
      color: "from-yellow-500/70",
      link: "/services/l-entretien-et-le-nettoyage-de-la-toiture",
    },
    {
      title: "Réparation de fuites",
      description: "Services de réparation de fuites pour assurer la sécurité de votre habitation",
      image: "/s3.webp",
      color: "from-purple-500/70",
      link: "/services/reparation-de-fuites",
    },
    {
      title: "Ravalement de façade",
      description: "Rénovation et embellissement de vos façades",
      image: "/s12.webp",
      color: "from-indigo-500/70",
      link: "/services/ravalement-de-facade",
    },
  ]

  const services2 = [
    {
      title: "Pose de Vélux et fenêtres de toit",
      description: "Installation professionnelle de fenêtres de toit",
      image: "/s11.webp",
      color: "from-pink-500/70",
      link: "/services/pose-de-velux-et-fenetres-de-toit",
    },
    {
      title: "Peinture intérieur et extérieure",
      description: "Services de peinture pour tous vos projets",
      image: "/s10.webp",
      color: "from-orange-500/70",
      link: "/services/peinture-interieur-et-exterieure",
    },
    {
      title: "Pose de Gouttière",
      description: "Installation et réparation de gouttières",
      image: "/s9.webp",
      color: "from-teal-500/70",
      link: "/services/pose-de-gouttiere",
    },
    {
      title: "Zinguerie",
      description: "Travaux de zinguerie pour gouttières et descentes pluviales",
      image: "/s8.webp",
      color: "from-cyan-500/70",
      link: "/services/zinguerie",
    },
    {
      title: "Réparation de toiture",
      description: "Réparation complète de toitures pour tous types de bâtiments",
      image: "/s2.webp",
      color: "from-lime-500/70",
      link: "/services/reparation-de-toiture",
    },
    {
      title: "Recherche de fuite toiture",
      description: "Détection et localisation précise des fuites sur votre toiture",
      image: "/s7.webp",
      color: "from-emerald-500/70",
      link: "/services/recherche-de-fuite-toiture",
    },
  ]

  return (
    <section id="services" ref={ref} className="py-12 sm:py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <span className="text-primary font-medium">Nos services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Nous fournissons des services de toiture de qualité supérieure
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des solutions de toiture adaptées à tous vos besoins, qu'il s'agisse d'une nouvelle installation, d'une
            rénovation ou d'une réparation d'urgence.
          </p>
        </motion.div>

        {/* First row - Left to Right */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-4 sm:mb-6"
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            speed={1000}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="services-swiper !pb-12"
          >
            {services.map((service, index) => (
              <SwiperSlide key={`row1-${index}`}>
                <Link href={service.link} className="block h-full">
                  <div className="relative h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden group">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${service.color} to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300`}
                    ></div>
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-white/90 mb-4">{service.description}</p>
                      <div className="flex items-center text-sm font-medium group-hover:underline">
                        En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Second row - Right to Left */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            speed={1000}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="services-swiper !pb-12"
          >
            {services2.map((service, index) => (
              <SwiperSlide key={`row2-${index}`}>
                <Link href={service.link} className="block h-full">
                  <div className="relative h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden group">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${service.color} to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300`}
                    ></div>
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-white/90 mb-4">{service.description}</p>
                      <div className="flex items-center text-sm font-medium group-hover:underline">
                        En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <div className="mt-12 text-center">
          <a
            href="/services"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-white hover:bg-primary-700 h-10 px-4 py-2"
          >
            Voir tous nos services
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
