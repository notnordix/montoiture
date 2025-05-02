"use client"

import { useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { setupRevealAnimation } from "@/lib/animation"

export default function RoofInstallationPage() {
  useEffect(() => {
    const cleanup = setupRevealAnimation()
    return () => {
      if (cleanup) cleanup()
    }
  }, [])

  const installationTypes = [
    {
      title: "Tuile Canal",
      description: "Couramment utilisée dans les régions du sud de la France pour les toits à faible pente.",
    },
    {
      title: "Plaque Ondulée PST",
      description: "Utilisée pour les toitures de bâtiments industriels, agricoles, et certains logements.",
    },
    {
      title: "Tuile Romane",
      description:
        "Très populaire dans les régions méditerranéennes, combinant la forme de la tuile canal avec une seule pièce.",
    },
    {
      title: "Tuiles Romane Jumbo",
      description:
        "Version élargie de la tuile romane classique, permettant de couvrir de plus grandes surfaces plus rapidement.",
    },
    {
      title: "Tuiles Plates Marseillaises",
      description: "Typiques de la région de Marseille et de ses environs, installées par emboîtement sur des liteaux.",
    },
    {
      title: "Tôle Bac Acier",
      description:
        "Largement utilisée dans les toitures modernes et industrielles, légère et résistante à la corrosion.",
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
              backgroundImage: "url('/roofing-tile-1-scaled.webp')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
        </div>

        {/* Content */}
        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            Installations de <span className="text-primary">Toiture</span>
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-300">
            Service professionnel d&apos;installation de toiture dans les Alpes-Maritimes
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
              <h2 className="text-3xl font-bold mb-6">Installations de toiture Alpes-Maritimes</h2>
              <p className="text-gray-700 mb-6">
                L&apos;installation d&apos;une toiture en France peut s&apos;effectuer à l&apos;aide de divers matériaux
                et techniques, chacun ayant ses propres caractéristiques en termes d&apos;isolation, de résistance et
                d&apos;esthétique.
              </p>
              <p className="text-gray-700">
                Notre équipe d&apos;experts vous accompagne dans le choix du meilleur type de toiture adapté à votre
                bâtiment, à vos besoins spécifiques et à votre budget. Nous assurons ensuite une installation
                professionnelle et durable pour protéger votre maison pendant de nombreuses années.
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
                src="/s1.webp?width=800&height=600"
                alt="Installations de toiture"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Types of Roof Installation */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Types d&apos;installations de toiture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {installationTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold mb-3">{type.title}</h3>
                <p className="text-gray-700">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Installation Types */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Autres types d&apos;installations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <div className="mt-1 flex-shrink-0">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Sous-toitures</h3>
                <p className="text-gray-700">
                  Membrane de protection installée sous la couverture principale, améliore l&apos;étanchéité et
                  participe à l&apos;isolation thermique et phonique du bâtiment.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <div className="mt-1 flex-shrink-0">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Toitures en Bacs Acier</h3>
                <p className="text-gray-700">
                  Utilisées pour les bâtiments industriels, commerciaux ou agricoles. Très résistantes aux intempéries.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <div className="mt-1 flex-shrink-0">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Toitures en Bardeaux</h3>
                <p className="text-gray-700">
                  Très répandues pour les maisons individuelles, les bardeaux sont faciles à installer et offrent une
                  bonne étanchéité.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <div className="mt-1 flex-shrink-0">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Toitures en Tôle Isolante</h3>
                <p className="text-gray-700">
                  Associent des plaques d&apos;acier avec une couche d&apos;isolation intégrée, idéal pour des bâtiments
                  nécessitant une bonne isolation thermique.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Nos réalisations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Real images instead of placeholders */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative h-64 overflow-hidden rounded-lg shadow-md"
            >
              <Image src="/s1.webp" alt="Réalisation de toiture 1" fill className="object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-64 overflow-hidden rounded-lg shadow-md"
            >
              <Image src="/s1-1.webp" alt="Réalisation de toiture 1" fill className="object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative h-64 overflow-hidden rounded-lg shadow-md"
            >
              <Image src="/s1-2.webp" alt="Réalisation de toiture 3" fill className="object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative h-64 overflow-hidden rounded-lg shadow-md"
            >
              <Image src="/s1-3.webp" alt="Réalisation de toiture 4" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
