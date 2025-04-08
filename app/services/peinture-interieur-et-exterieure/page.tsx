"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Check, Paintbrush } from "lucide-react"
import { Button } from "@/components/ui/button"
import { setupRevealAnimation } from "@/lib/animation"

export default function PeintureServicePage() {
  useEffect(() => {
    const cleanup = setupRevealAnimation()
    return () => cleanup()
  }, [])

  const interiorServices = [
    "Peinture des murs et plafonds",
    "Peinture décorative et effets spéciaux",
    "Pose de papier peint",
    "Préparation des surfaces (rebouchage, enduit)",
    "Peinture de boiseries et radiateurs",
  ]

  const exteriorServices = [
    "Peinture de façades",
    "Traitement et peinture des boiseries extérieures",
    "Peinture de portails et clôtures",
    "Peinture de volets et fenêtres",
    "Traitement anti-humidité et imperméabilisation",
  ]

  const benefits = [
    {
      title: "Expertise professionnelle",
      description: "Des peintres qualifiés pour un résultat impeccable",
    },
    {
      title: "Matériaux de qualité",
      description: "Utilisation de peintures durables et respectueuses de l'environnement",
    },
    {
      title: "Préparation minutieuse",
      description: "Travail soigné de préparation des surfaces pour une finition parfaite",
    },
    {
      title: "Respect des délais",
      description: "Planification rigoureuse pour minimiser les perturbations",
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
            Peinture <span className="text-primary">Intérieure et Extérieure</span>
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-300">
            Services professionnels de peinture pour embellir et protéger votre maison
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
              <h2 className="text-3xl font-bold mb-6">Services de peinture Alpes-Maritimes</h2>
              <p className="text-gray-700 mb-4">
                Nous offrons des services de <strong>peinture intérieure et extérieure</strong> pour embellir et
                protéger votre maison. Que ce soit pour rafraîchir une pièce ou redonner un éclat à votre façade, notre
                équipe de peintres professionnels utilise des peintures de haute qualité, adaptées à chaque surface et
                condition.
              </p>
              <p className="text-gray-700 mb-4">
                Pour l'<strong>intérieur</strong>, nous créons des ambiances sur mesure, avec un grand choix de couleurs
                et de finitions (mat, satin, brillant) pour répondre à vos goûts et besoins. Notre travail minutieux
                assure des finitions parfaites, sans traces ni imperfections.
              </p>
              <p className="text-gray-700">
                Pour l'<strong>extérieur</strong>, nous utilisons des peintures résistantes aux intempéries et aux UV,
                garantissant une protection durable contre les éléments tout en améliorant l'esthétique de votre maison.
                Nos solutions allient esthétisme et performance, avec une application soignée pour une durabilité
                maximale.
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
                src="/s10.webp?width=800&height=600"
                alt="Services de peinture"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Nos services de peinture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Paintbrush className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Peinture intérieure</h3>
              <ul className="space-y-3">
                {interiorServices.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Paintbrush className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Peinture extérieure</h3>
              <ul className="space-y-3">
                {exteriorServices.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Pourquoi choisir nos services de peinture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg shadow-sm text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Paintbrush className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Notre processus de travail</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">Consultation</h3>
                <p className="text-gray-700">
                  Évaluation de vos besoins et conseils sur les couleurs et finitions adaptées à votre projet.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">Préparation</h3>
                <p className="text-gray-700">
                  Protection des zones à ne pas peindre et préparation minutieuse des surfaces pour un résultat optimal.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Application</h3>
                <p className="text-gray-700">
                  Application professionnelle de la peinture avec des techniques adaptées à chaque surface.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl mb-4">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-3">Finition</h3>
                <p className="text-gray-700">
                  Vérification de la qualité du travail et nettoyage complet du chantier après l'intervention.
                </p>
              </motion.div>
            </div>
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
                src="/s10.webp"
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
                src="/s10-1.webp"
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
                src="/s10-2.webp"
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
                src="/s10-3.webp"
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
