"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Check, Sun, Wind, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { setupRevealAnimation } from "@/lib/animation"

export default function PoseDeVeluxEtFenetresToitPage() {
  useEffect(() => {
    const cleanup = setupRevealAnimation()
    return () => cleanup()
  }, [])

  const advantages = [
    "Apport important de lumière naturelle",
    "Amélioration de la ventilation",
    "Valorisation de votre bien immobilier",
    "Économies d'énergie avec une bonne isolation",
    "Optimisation des combles et espaces mansardés",
  ]

  const services = [
    "Installation de Vélux et fenêtres de toit",
    "Remplacement de fenêtres existantes",
    "Pose de volets et stores",
    "Raccordements d'étanchéité",
    "Maintenance et service après-vente",
  ]

  const benefits = [
    {
      icon: <Sun className="h-6 w-6 text-primary" />,
      title: "Luminosité optimale",
      description: "Jusqu'à 3 fois plus de lumière naturelle qu'avec une fenêtre verticale de même surface.",
    },
    {
      icon: <Wind className="h-6 w-6 text-primary" />,
      title: "Ventilation efficace",
      description: "Renouvellement de l'air intérieur pour un habitat plus sain et confortable.",
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Économies d'énergie",
      description: "Réduction des besoins en éclairage artificiel et meilleure isolation thermique.",
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
            Pose de <span className="text-primary">Vélux</span> et fenêtres de toit
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-300">
            Faites entrer la lumière naturelle et améliorez la ventilation de votre maison
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Button
                className={cn("bg-primary hover:bg-primary-600 transition-colors", "px-6 py-3 text-lg font-medium")}
                asChild
              >
                <Link href="/contact">
                  Demander un devis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Button
                variant="outline"
                className={cn("border-white text-white hover:bg-white/10", "px-6 py-3 text-lg font-medium")}
                asChild
              >
                <Link href="/services">Nos services</Link>
              </Button>
            </motion.div>
          </div>
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
              <h2 className="text-3xl font-bold mb-6">Pose de Vélux et fenêtres de toit Alpes-Maritimes</h2>
              <p className="text-gray-700 mb-4">
                Nous offrons un service professionnel de <strong>pose de Vélux et fenêtres de toit</strong> pour
                apporter plus de lumière naturelle à vos espaces et améliorer la ventilation de votre maison. Notre
                équipe d'experts assure une installation précise et sécurisée, respectant les normes d'étanchéité et
                d'isolation.
              </p>
              <p className="text-gray-700 mb-4">
                Que ce soit pour une rénovation ou une nouvelle construction, nous installons des fenêtres de toit de
                qualité, adaptées à vos besoins, qu'il s'agisse de modèles manuels, motorisés ou équipés de stores. Nos
                solutions optimisent le confort de votre intérieur tout en valorisant votre bien immobilier.
              </p>
              <p className="text-gray-700">
                Faites entrer la lumière avec des finitions soignées et durables. Notre équipe vous accompagne à chaque
                étape du projet, depuis le choix du modèle jusqu'à l'installation finale.
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
                src="/s11.webp?width=800&height=600"
                alt="Installation de fenêtre de toit"
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
          <h2 className="text-3xl font-bold mb-8 text-center">Avantages des fenêtres de toit</h2>
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

      {/* Services and Advantages Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Avantages des fenêtres de toit</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                {advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <span>{advantage}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Nos prestations</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Notre processus d'installation</h2>
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
                  Évaluation de vos besoins et conseils sur les modèles adaptés à votre toiture et à vos attentes.
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
                  Préparation de la toiture et création de l'ouverture pour accueillir la fenêtre de toit.
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
                <h3 className="text-xl font-semibold mb-3">Installation</h3>
                <p className="text-gray-700">
                  Pose professionnelle de la fenêtre avec une attention particulière à l'étanchéité et à l'isolation.
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
                  Finitions intérieures et extérieures pour une intégration parfaite à votre toiture et votre
                  décoration.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Nos réalisations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative h-64 overflow-hidden rounded-lg shadow-md"
            >
              <Image
                src="/s11.webp"
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
                src="/s11-1.webp"
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
                src="/s11-2.webp"
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
                src="/s11-3.webp"
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
