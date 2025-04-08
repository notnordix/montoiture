"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { setupRevealAnimation } from "@/lib/animation"

export default function LeakRepairPage() {
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
              backgroundImage: "url('/roofing-tile-1-scaled.webp?width=1920&height=1080')"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
        </div>

        {/* Content */}
        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            Réparation de <span className="text-primary">Fuites</span>
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-300">
            Service professionnel de réparation de fuites de toiture
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
              <h2 className="text-3xl font-bold mb-6">Réparation de fuites Alpes-Maritimes</h2>
              <p className="text-gray-700 mb-4">
                Notre service de <strong>réparation de fuites</strong> de toiture est conçu pour résoudre rapidement et
                efficacement tout problème d&apos;infiltration d&apos;eau. Nos experts interviennent pour localiser
                précisément la source de la fuite, qu&apos;il s&apos;agisse de tuiles endommagées, de joints défectueux,
                ou de problèmes d&apos;étanchéité.
              </p>
              <p className="text-gray-700 mb-4">
                Nous utilisons des techniques avancées et des matériaux de haute qualité pour garantir des réparations
                durables. Que la fuite soit due à l&apos;usure, à une tempête ou à un défaut de construction, nous
                assurons une intervention rapide pour éviter les dommages supplémentaires à votre maison.
              </p>
              <p className="text-gray-700">
                Faites confiance à notre expertise pour restaurer l&apos;intégrité de votre toiture et protéger votre
                intérieur des infiltrations d&apos;eau.
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
                src="/s3.webp?width=800&height=600"
                alt="Réparation de fuites de toiture"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Signs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Comment reconnaître une fuite de toiture ?</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="mb-4">
                Les <strong>signes indicatifs de la fuite de toiture</strong> sont :
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  L&apos;apparition de taches d&apos;humidité sur vos plafonds ou murs, dans les rangements, dans les
                  combles ou greniers
                </li>
                <li>Des tuiles glissées et tombées au sol</li>
                <li>Une flaque d&apos;eau dans la grange, le garage ou les parties non habitées</li>
                <li>Des cloques de peinture</li>
                <li>Depuis l&apos;extérieur, la forme de votre toiture qui s&apos;affaisse</li>
                <li>Des interstices de lumière sont visibles entre les tuiles ou panneaux de toit</li>
                <li>Vous repérez des tuiles cassées, poreuses ou fissurées</li>
                <li>
                  Les joints de vos fenêtres de toit ou ouvertures de toit peuvent être détériorés et montrer des traces
                  d&apos;humidité
                </li>
              </ul>
              <p className="mt-4">
                Les points faibles de la toiture sont : le faîtage, les joints, les gouttières, les coins, les
                ouvertures de toit.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Nos travaux de réparation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          viewport={{ once: true }}
                          className="relative h-64 overflow-hidden rounded-lg shadow-md"
                        >
                          <Image
                            src="/s3.webp"
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
                            src="/s3-1.webp"
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
                            src="/s3-2.webp"
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
                            src="/s3-3.webp"
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
