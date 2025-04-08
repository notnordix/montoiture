"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Check, Paintbrush, Home, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { setupRevealAnimation } from "@/lib/animation"

export default function RavalementDeFacadePage() {
  useEffect(() => {
    const cleanup = setupRevealAnimation()
    return () => cleanup()
  }, [])

  const services = [
    "Nettoyage de façade (haute pression, nettoyage vapeur)",
    "Traitement des fissures et infiltrations",
    "Réparation des enduits abîmés",
    "Application d'enduits décoratifs",
    "Peinture de façade",
    "Isolation thermique par l'extérieur",
  ]

  const benefits = [
    {
      icon: <Home className="h-6 w-6 text-primary" />,
      title: "Amélioration esthétique",
      description: "Redonne un aspect neuf et attrayant à votre maison.",
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Protection durable",
      description: "Protège votre façade contre les intempéries et la pollution.",
    },
    {
      icon: <Paintbrush className="h-6 w-6 text-primary" />,
      title: "Valorisation immobilière",
      description: "Augmente la valeur de votre bien sur le marché immobilier.",
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
            Ravalement de <span className="text-primary">Façade</span>
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-300">
            Redonnez vie et protection à l'extérieur de votre maison
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
              <h2 className="text-3xl font-bold mb-6">Ravalement de façade Alpes-Maritimes</h2>
              <p className="text-gray-700 mb-4">
                Nous proposons un service complet de <strong>ravalement de façade</strong> pour restaurer l'apparence de
                votre maison tout en assurant sa protection contre les intempéries et le vieillissement. Nos prestations
                incluent le nettoyage, la réparation des fissures et des dégradations, ainsi que l'application d'enduits
                et de peintures de qualité.
              </p>
              <p className="text-gray-700 mb-4">
                Notre équipe veille à respecter les normes d'isolation thermique et d'étanchéité, pour un résultat à la
                fois durable et esthétique. Que ce soit pour des façades en pierre, en brique ou enduites, nous
                garantissons un travail soigné et adapté à votre architecture.
              </p>
              <p className="text-gray-700">
                Offrez à votre maison une seconde jeunesse avec une finition impeccable. Notre expertise vous assure un
                ravalement de qualité qui valorisera votre bien tout en le protégeant durablement.
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
                src="/s12.webp?width=800&height=600"
                alt="Ravalement de façade"
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
          <h2 className="text-3xl font-bold mb-8 text-center">Avantages du ravalement de façade</h2>
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
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Nos prestations</h2>
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

      {/* Before/After Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Avant / Après</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?width=600&height=800&text=Avant"
                  alt="Façade avant travaux"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-slate-800 text-white px-3 py-1 rounded-md text-sm font-medium">
                  Avant
                </div>
              </div>
              <p className="text-center text-gray-600">Façade détériorée nécessitant un ravalement</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?width=600&height=800&text=Après"
                  alt="Façade après travaux"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-md text-sm font-medium">
                  Après
                </div>
              </div>
              <p className="text-center text-gray-600">Façade rénovée et protégée</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Notre processus de travail</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                  Évaluation de l'état de votre façade et identification des travaux nécessaires.
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
                  Nettoyage de la façade et réparation des fissures et dégradations avant application des produits.
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
                  Application des enduits et peintures avec des techniques professionnelles pour un résultat optimal.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg shadow-sm"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl mb-4">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-3">Finition</h3>
                <p className="text-gray-700">
                  Vérification de la qualité du travail et nettoyage du chantier pour une satisfaction totale.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Nos réalisations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative h-64 overflow-hidden rounded-lg shadow-md"
            >
              <Image
                src="/s12.webp"
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
                src="/s12-1.webp"
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
                src="/s12-2.webp"
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
                src="/s12-3.webp"
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
