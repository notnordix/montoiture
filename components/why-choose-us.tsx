"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Award, CheckCircle, Clock, Shield, Users, Zap } from "lucide-react"

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const reasons = [
    {
      icon: <CheckCircle className="h-10 w-10 text-emerald-500" />,
      title: "Matériaux de qualité",
      description:
        "Nous utilisons uniquement des matériaux de première qualité pour garantir la durabilité de votre toiture.",
      size: "col-span-12 md:col-span-6 lg:col-span-4",
      bgColor: "bg-emerald-50",
    },
    {
      icon: <Award className="h-10 w-10 text-blue-500" />,
      title: "Accrédité",
      description: "Notre entreprise est accréditée par les organismes professionnels du secteur de la toiture.",
      size: "col-span-12 md:col-span-6 lg:col-span-4",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Users className="h-10 w-10 text-purple-500" />,
      title: "Travailleurs qualifiés",
      description:
        "Notre équipe est composée de professionnels expérimentés et qualifiés dans tous les aspects de la toiture.",
      size: "col-span-12 md:col-span-6 lg:col-span-4",
      bgColor: "bg-purple-50",
    },
    {
      icon: <Clock className="h-10 w-10 text-amber-500" />,
      title: "Disponibilité",
      description: "Nous sommes disponibles pour répondre à vos besoins, même en cas d'urgence.",
      size: "col-span-12 md:col-span-6 lg:col-span-6",
      bgColor: "bg-amber-50",
    },
    {
      icon: <Zap className="h-10 w-10 text-red-500" />,
      title: "Réponse rapide",
      description: "Nous nous engageons à intervenir rapidement pour tous vos projets et urgences.",
      size: "col-span-12 md:col-span-6 lg:col-span-3",
      bgColor: "bg-red-50",
    },
    {
      icon: <Shield className="h-10 w-10 text-teal-500" />,
      title: "Garantie décennale",
      description: "Tous nos travaux sont couverts par une garantie décennale pour votre tranquillité d'esprit.",
      size: "col-span-12 md:col-span-6 lg:col-span-3",
      bgColor: "bg-teal-50",
    },
  ]

  return (
    <section id="why-choose-us" ref={ref} className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">Pourquoi nous choisir</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Six raisons pour lesquelles les gens nous choisissent
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez pourquoi MONTOITURE est le choix privilégié pour tous vos projets de toiture.
          </p>
        </motion.div>

        <div className="grid grid-cols-12 gap-4 sm:gap-6 max-w-full">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${reason.size} h-full`}
            >
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full p-6 flex flex-col">
                <div className={`w-16 h-16 rounded-full ${reason.bgColor} flex items-center justify-center mb-4`}>
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-gray-600 mt-auto">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
