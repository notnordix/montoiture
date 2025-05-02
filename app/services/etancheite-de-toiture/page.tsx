"use client"

import { useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Check, Shield, Droplets, Sun, ThermometerSnowflake } from "lucide-react"
import { setupRevealAnimation } from "@/lib/animation"

export default function EtancheitePage() {
  useEffect(() => {
    const cleanup = setupRevealAnimation()
    return () => cleanup()
  }, [])

  const benefits = [
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Protection complète",
      description: "Protège votre maison contre les infiltrations d'eau et les dommages structurels.",
    },
    {
      icon: <Droplets className="h-6 w-6 text-primary" />,
      title: "Prévention des moisissures",
      description: "Évite le développement de moisissures et champignons nocifs pour la santé.",
    },
    {
      icon: <Sun className="h-6 w-6 text-primary" />,
      title: "Durabilité accrue",
      description: "Prolonge la durée de vie de votre toiture en la protégeant des éléments extérieurs.",
    },
    {
      icon: <ThermometerSnowflake className="h-6 w-6 text-primary" />,
      title: "Efficacité énergétique",
      description: "Contribue à une meilleure isolation thermique et réduit les coûts de chauffage et climatisation.",
    },
  ]

  const services = [
    "Étanchéité de toitures terrasses",
    "Étanchéité de toitures inclinées",
    "Réparation de membranes d'étanchéité",
    "Installation de systèmes d'évacuation d'eau",
    "Traitement des points singuliers",
    "Isolation thermique par l'extérieur",
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gray-900">
        {/* Background with overlay */}
        <div className="absolute inset-0 w-full h-full">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/roofing-tile-1-scaled.webp?width=1920&height=1080')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
        </div>

        {/* Content */}
        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            Étanchéité de <span className="text-primary">Toiture</span>
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-300">
            Solutions professionnelles pour une protection optimale contre les infiltrations
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Étanchéité de toiture Alpes-Maritimes</h2>
              <p className="text-gray-700 mb-4">
                L'<strong>étanchéité de toiture</strong> consiste à garantir que le toit est complètement imperméable à
                l'eau pour éviter les infiltrations et les fuites. Cela implique l'application de matériaux spéciaux,
                comme des membranes ou des revêtements, ainsi que le contrôle et l'entretien des joints et des éléments
                de fixation.
              </p>
              <p className="text-gray-700 mb-4">
                Notre équipe d'experts utilise des techniques avancées et des matériaux de haute qualité pour assurer
                une étanchéité parfaite de votre toiture. Nous intervenons sur tous types de toitures : plates,
                inclinées, terrasses, et proposons des solutions adaptées à chaque configuration.
              </p>
              <p className="text-gray-700">
                Une bonne étanchéité est essentielle pour protéger votre maison des dégâts causés par l'eau, préserver
                la structure du bâtiment et garantir votre confort au quotidien. Faites confiance à notre expertise pour
                une protection durable et efficace.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-[400px] md:h-[500px]"
            >
              <Image
                src="/s6.webp?width=800&height=600"
                alt="Étanchéité de toiture"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Pourquoi faire une étanchéité de toiture ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      {benefit.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-700">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Nos services d'étanchéité</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="mt-1 flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <p className="text-gray-700">{service}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Nos réalisations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative h-64 overflow-hidden rounded-lg shadow-md"
            >
              <Image src="/s6.webp" alt="Réalisation de toiture 1" fill className="object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-64 overflow-hidden rounded-lg shadow-md"
            >
              <Image src="/s6-1.webp" alt="Réalisation de toiture 1" fill className="object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative h-64 overflow-hidden rounded-lg shadow-md"
            >
              <Image src="/s6-2.webp" alt="Réalisation de toiture 3" fill className="object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative h-64 overflow-hidden rounded-lg shadow-md"
            >
              <Image src="/s6-3.webp" alt="Réalisation de toiture 4" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Notre processus d'intervention</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg shadow-sm"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">Diagnostic</h3>
                <p className="text-gray-700">
                  Évaluation complète de votre toiture pour identifier les problèmes d'étanchéité et déterminer les
                  solutions adaptées.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg shadow-sm"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">Préparation</h3>
                <p className="text-gray-700">
                  Nettoyage et préparation de la surface pour assurer une adhérence optimale des matériaux d'étanchéité.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg shadow-sm"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Application</h3>
                <p className="text-gray-700">
                  Installation professionnelle des systèmes d'étanchéité avec une attention particulière aux détails et
                  aux finitions.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
