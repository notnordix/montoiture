"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { setupRevealAnimation } from "@/lib/animation"

export default function CharpentePage() {
  useEffect(() => {
    const cleanup = setupRevealAnimation()
    return () => cleanup()
  }, [])

  const services = [
    "Conception et fabrication de charpentes sur mesure",
    "Installation de charpentes neuves",
    "Rénovation de charpentes anciennes",
    "Traitement préventif et curatif du bois",
    "Renforcement de structures existantes",
    "Remplacement de pièces endommagées",
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
            Services de <span className="text-primary">Charpente</span>
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-300">
            Construction et rénovation de charpentes de qualité pour votre maison
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
              <h2 className="text-3xl font-bold mb-6">Services de charpente Alpes-Maritimes</h2>
              <p className="text-gray-700 mb-4">
                La <strong>charpente</strong> est un élément essentiel de la maison. C'est l'ossature, souvent en bois,
                positionnée au-dessus des murs porteurs de la maison. Son rôle est de soutenir la couverture de toiture
                et de contribuer à la mise hors d'eau et hors d'air de l'ensemble (étanchéité et isolation).
              </p>
              <p className="text-gray-700 mb-4">
                Notre équipe de charpentiers qualifiés propose des services complets de conception, fabrication,
                installation et rénovation de charpentes pour tous types de bâtiments. Nous travaillons avec différents
                matériaux selon vos besoins et préférences.
              </p>
              <p className="text-gray-700">
                Que vous ayez besoin d'une charpente neuve pour une construction ou d'une rénovation pour une structure
                existante, nous vous garantissons un travail de qualité, respectant les normes en vigueur et adapté à
                vos besoins spécifiques.
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
                src="/s5.webp?width=800&height=600"
                alt="Charpente en bois"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Nos services de charpente</h2>
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
              <Image
                src="/s5.webp"
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
                src="/s5-1.webp"
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
                src="/s5-2.webp"
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
                src="/s5-3.webp"
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
