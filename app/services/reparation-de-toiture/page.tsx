"use client"

import { useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { setupRevealAnimation } from "@/lib/animation"

export default function RoofRepairPage() {
  useEffect(() => {
    const cleanup = setupRevealAnimation()
    return () => cleanup()
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gray-900">
        {/* Background with overlay */}
        <div className="absolute inset-0 w-full h-full">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/roofing-tile-1-scaled.webp')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
        </div>

        {/* Content */}
        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            Réparation de <span className="text-primary">Toiture</span>
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-300">
            Service professionnel de réparation de toiture dans les Alpes-Maritimes
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
              <h2 className="text-3xl font-bold mb-6">Réparation de toiture Alpes-Maritimes</h2>
              <p className="text-gray-700 mb-4">
                Nous offrons un service professionnel de <strong>réparation de toiture</strong> pour résoudre rapidement
                et efficacement tous vos problèmes de toiture. Que ce soit pour réparer des fuites, remplacer des tuiles
                endommagées, renforcer l&apos;étanchéité ou rénover partiellement la couverture, notre équipe intervient
                avec expertise et précision.
              </p>
              <p className="text-gray-700 mb-4">
                Nous travaillons avec différents types de toitures et utilisons des matériaux de qualité pour garantir
                la durabilité des réparations. Notre objectif est de préserver l&apos;intégrité de votre toit tout en
                assurant la protection optimale de votre maison face aux intempéries.
              </p>
              <p className="text-gray-700">
                Faites appel à nos services pour des interventions rapides et des résultats durables.
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
                src="/s2.webp?width=800&height=600"
                alt="Réparation de toiture"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      {/* Image Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Nos travaux de réparation de toiture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative h-64 rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src="/s2.webp"
                alt="Travaux de réparation de toiture 1"
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-64 rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src="/s2-1.webp"
                alt="Travaux de réparation de toiture 2"
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative h-64 rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src="/s2-2.webp"
                alt="Travaux de réparation de toiture 3"
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative h-64 rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src="/s2-3.webp"
                alt="Travaux de réparation de toiture 4"
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Nos services de réparation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-bold mb-3">Réparation de fuites</h3>
              <p className="text-gray-700">
                Détection et réparation des infiltrations d&apos;eau pour protéger votre maison des dégâts causés par
                l&apos;humidité.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-bold mb-3">Remplacement de tuiles</h3>
              <p className="text-gray-700">
                Remplacement des tuiles endommagées, cassées ou manquantes pour maintenir l&apos;intégrité de votre
                toiture.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-bold mb-3">Réparation de charpente</h3>
              <p className="text-gray-700">
                Restauration et renforcement de la structure de votre toiture pour assurer sa stabilité et sa
                durabilité.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-bold mb-3">Traitement d&apos;étanchéité</h3>
              <p className="text-gray-700">
                Application de solutions d&apos;étanchéité professionnelles pour protéger votre toiture contre les
                infiltrations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
