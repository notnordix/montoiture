"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"
import { ArrowRight, Award, Clock, Shield, Users } from "lucide-react"
import CountUp from "react-countup"

export default function About() {
  const ref = useRef(null)
  const statsRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [statsInView, setStatsInView] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  // Use a different approach for stats to reset animation when scrolling back
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStatsInView(true)
        } else {
          setStatsInView(false)
        }
      },
      { threshold: 0.1 },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [statsRef])

  const stats = [
    {
      value: 10,
      suffix: "+",
      label: "Années d'expérience",
      bgColor: "bg-primary",
      icon: <Clock className="h-8 w-8 text-white/80" />,
    },
    {
      value: 60,
      suffix: "",
      label: "Clients satisfaits",
      bgColor: "bg-primary-600",
      icon: <Users className="h-8 w-8 text-white/80" />,
    },
    {
      value: 60,
      suffix: "",
      label: "Projets réalisés",
      bgColor: "bg-primary-700",
      icon: <Award className="h-8 w-8 text-white/80" />,
    },
    {
      value: 45,
      suffix: "+",
      label: "Personnel formé",
      bgColor: "bg-primary-800",
      icon: <Shield className="h-8 w-8 text-white/80" />,
    },
  ]

  return (
    <>
      <section id="about" ref={ref} className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
            {/* Left side - Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 flex flex-col justify-center"
            >
              <span className="text-primary font-medium">À propos de l'entreprise</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Entrepreneurs en toiture professionnels</h2>
              <div className="w-20 h-1 bg-primary mb-6"></div>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-2 mr-4 mt-1">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Expertise reconnue</h3>
                    <p className="text-gray-600">
                      Plus de 10 ans d'expérience dans le domaine de la toiture avec une équipe hautement qualifiée.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-2 mr-4 mt-1">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Qualité garantie</h3>
                    <p className="text-gray-600">
                      Nous utilisons uniquement des matériaux de première qualité et offrons une garantie sur tous nos
                      travaux.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-2 mr-4 mt-1">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Service client exceptionnel</h3>
                    <p className="text-gray-600">
                      Notre priorité est votre satisfaction. Nous sommes à votre écoute à chaque étape de votre projet.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="/about"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-white hover:bg-primary-700 h-10 px-4 py-2 w-fit"
              >
                Découvrir notre histoire
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>

            {/* Right side - Images */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 relative"
            >
              <div className="grid grid-cols-12 gap-2 sm:gap-4 h-full max-w-full">
                <div className="col-span-8 relative rounded-lg overflow-hidden shadow-xl h-full">
                  <Image
                    src="/MONTOITURE/mockup4.png"
                    alt="MONTOITURE équipe d'experts"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="col-span-4 flex flex-col gap-4">
                  <div className="relative rounded-lg overflow-hidden shadow-xl h-1/2">
                    <Image
                      src="/MONTOITURE/mockup2.png"
                      alt="Service de toiture"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="relative rounded-lg overflow-hidden shadow-xl h-1/2">
                    <Image
                      src="/MONTOITURE/mockup3.png"
                      alt="Travaux de toiture"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-primary/20 rounded-tl-3xl z-0"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-primary/20 rounded-br-3xl z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {stats.map((stat, index) => (
              <div key={index} className={`${stat.bgColor} py-12 px-4 text-white transition-all duration-300`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-3">{stat.icon}</div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {statsInView && (
                      <CountUp
                        key={statsInView ? "counting" : "not-counting"}
                        end={stat.value}
                        duration={2.5}
                        suffix={stat.suffix}
                      />
                    )}
                  </div>
                  <div className="text-lg text-white/80">{stat.label}</div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
