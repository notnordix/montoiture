"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Check, Shield, Droplets, PenToolIcon as Tool } from "lucide-react"
import { Button } from "@/components/ui/button"
import { setupRevealAnimation } from "@/lib/animation"

export default function ZinguerieServicePage() {
  useEffect(() => {
    const cleanup = setupRevealAnimation()
    return () => cleanup()
  }, [])

  const services = [
    "Installation de gouttières en zinc",
    "Pose de descentes pluviales",
    "Habillage de cheminées",
    "Faîtages et arêtiers",
    "Noues et solins",
    "Entourages de fenêtres de toit",
    "Bavettes et couvertines",
  ]

  const benefits = [
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Durabilité exceptionnelle",
      description: "Le zinc offre une résistance remarquable aux intempéries et à la corrosion.",
    },
    {
      icon: <Droplets className="h-6 w-6 text-primary" />,
      title: "Étanchéité parfaite",
      description: "Protection optimale contre les infiltrations d'eau pour votre toiture.",
    },
    {
      icon: <Tool className="h-6 w-6 text-primary" />,
      title: "Finitions soignées",
      description: "Travail artisanal de qualité pour un résultat esthétique et fonctionnel.",
    },
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
              backgroundImage: "url('/roofing-tile-1-scaled.webp?width=1920&height=1080')"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
        </div>

        {/* Content */}
        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            Services de <span className="text-primary">Zinguerie</span>
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-300">
            Travaux de zinguerie professionnels pour une protection optimale de votre toiture
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
              <h2 className="text-3xl font-bold mb-6">Zinguerie Alpes-Maritimes</h2>
              <p className="text-gray-700 mb-4">
                Notre service de <strong>zinguerie</strong> propose l'installation et la réparation de tous les éléments
                en zinc de votre toiture, garantissant une protection durable contre les intempéries. Nous intervenons
                pour la pose de gouttières, chéneaux, entourages de cheminée, raccords de toit et autres composants en
                zinc, connus pour leur robustesse et leur résistance à la corrosion.
              </p>
              <p className="text-gray-700 mb-4">
                Nos artisans zingueurs, experts dans leur domaine, assurent des finitions soignées et esthétiques, tout
                en veillant à l'étanchéité parfaite de votre toiture. Le zinc est un matériau de qualité qui offre une
                longévité exceptionnelle à votre toiture tout en s'intégrant harmonieusement à différents styles
                architecturaux.
              </p>
              <p className="text-gray-700">
                Que ce soit pour une construction neuve ou une rénovation, nous garantissons un travail précis et
                durable pour une toiture protégée et une maison bien isolée.
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
                src="/s8.webp?width=800&height=600"
                alt="Travaux de zinguerie"
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
          <h2 className="text-3xl font-bold mb-8 text-center">Avantages du zinc</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Nos services de zinguerie</h2>
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
      <section className="py-16 bg-white">
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
              <Image
                src="/s8.webp"
                alt="Réalisation de toiture 1"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-64 overflow-hidden rounded-lg shadow-md"
            >
              <Image
                src="/s8-1.webp"
                alt="Réalisation de toiture 1"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative h-64 overflow-hidden rounded-lg shadow-md"
            >
              <Image
                src="/s8-2.webp"
                alt="Réalisation de toiture 3"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative h-64 overflow-hidden rounded-lg shadow-md"
            >
              <Image
                src="/s8-3.webp"
                alt="Réalisation de toiture 4"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

    </>
  )
}
