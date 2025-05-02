"use client"

import { useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Check, Search, ShieldAlert } from "lucide-react"
import { setupRevealAnimation } from "@/lib/animation"

export default function RechercheDeFuitePage() {
  useEffect(() => {
    const cleanup = setupRevealAnimation()
    return () => cleanup()
  }, [])

  const detectionMethods = [
    "Inspection visuelle détaillée",
    "Caméra thermique infrarouge",
    "Test d'arrosage contrôlé",
    "Inspection des combles et sous-toiture",
    "Vérification des points singuliers",
    "Détection des défauts d'étanchéité",
  ]

  const leakSigns = [
    "Taches d'humidité au plafond",
    "Traces de moisissure",
    "Gouttes d'eau visibles",
    "Peinture écaillée ou cloquée",
    "Plâtre détérioré",
    "Odeur d'humidité persistante",
  ]

  const faqItems = [
    {
      question: "Combien de temps prend la détection d'une fuite ?",
      answer:
        "La durée de la détection dépend de la complexité et de l'étendue de la fuite. En général, notre équipe peut identifier l'origine d'une fuite en quelques heures. Les cas complexes peuvent nécessiter plusieurs visites.",
    },
    {
      question: "Quand faut-il s'inquiéter d'une fuite ?",
      answer:
        "Il faut s'inquiéter dès les premiers signes d'infiltration (taches d'humidité, moisissures, peinture qui s'écaille). Une intervention rapide permet d'éviter des dommages plus importants et coûteux à réparer.",
    },
    {
      question: "Les fuites sont-elles couvertes par l'assurance ?",
      answer:
        "Certaines assurances habitation couvrent les dégâts causés par les fuites de toiture, notamment si elles sont dues à un événement climatique. Vérifiez votre contrat ou contactez votre assureur pour en savoir plus.",
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
              backgroundImage: "url('/roofing-tile-1-scaled.webp?width=1920&height=1080')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
        </div>

        {/* Content */}
        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            Recherche de <span className="text-primary">Fuite Toiture</span>
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-300">
            Détection précise et rapide des infiltrations d'eau sur votre toiture
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
              <h2 className="text-3xl font-bold mb-6">Recherche de fuite toiture Alpes-Maritimes</h2>
              <p className="text-gray-700 mb-4">
                Notre service de <strong>recherche de fuite toiture</strong> vous offre une expertise rapide et précise
                pour détecter et localiser les infiltrations d'eau. Grâce à des technologies avancées et à notre
                savoir-faire en couverture, nous identifions les fuites, même les plus discrètes, pour protéger
                durablement votre toit et votre habitation.
              </p>
              <p className="text-gray-700 mb-4">
                Les fuites de toiture peuvent causer des dommages considérables à votre maison si elles ne sont pas
                traitées rapidement. L'eau qui s'infiltre peut endommager la structure, favoriser le développement de
                moisissures et compromettre l'isolation de votre maison.
              </p>
              <p className="text-gray-700">
                Notre équipe d'experts utilise des méthodes professionnelles pour localiser avec précision l'origine des
                infiltrations et proposer les solutions adaptées. Ne laissez pas une fuite endommager votre maison,
                faites appel à nos services pour une intervention rapide et efficace.
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
                src="/s7.webp?width=800&height=600"
                alt="Recherche de fuite toiture"
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
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <ShieldAlert className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold">Signes indicatifs de fuite</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {leakSigns.map((sign, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 flex-shrink-0">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-gray-700">{sign}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-md border border-yellow-200">
                <p className="text-gray-700">
                  <strong>Points faibles de la toiture :</strong> le faîtage, les joints, les gouttières, les coins, les
                  ouvertures de toit.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detection Methods Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Nos méthodes de détection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {detectionMethods.map((method, index) => (
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
                    <Search className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <p className="text-gray-700">{method}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Notre processus d'intervention</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <h3 className="text-xl font-semibold mb-3">Diagnostic</h3>
                <p className="text-gray-700">
                  Inspection complète de votre toiture pour identifier l'origine exacte des infiltrations d'eau et
                  évaluer l'étendue des dégâts.
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
                <h3 className="text-xl font-semibold mb-3">Solution</h3>
                <p className="text-gray-700">
                  Proposition de solutions adaptées en fonction du type de fuite et de l'état général de votre toiture,
                  avec un devis détaillé.
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
                <h3 className="text-xl font-semibold mb-3">Réparation</h3>
                <p className="text-gray-700">
                  Intervention rapide et efficace par notre équipe de professionnels pour réparer les fuites et prévenir
                  de futurs problèmes.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Nos interventions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative h-64 overflow-hidden rounded-lg shadow-md"
            >
              <Image src="/s7.webp" alt="Réalisation de toiture 1" fill className="object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-64 overflow-hidden rounded-lg shadow-md"
            >
              <Image src="/s7-1.webp" alt="Réalisation de toiture 1" fill className="object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative h-64 overflow-hidden rounded-lg shadow-md"
            >
              <Image src="/s7-2.webp" alt="Réalisation de toiture 3" fill className="object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative h-64 overflow-hidden rounded-lg shadow-md"
            >
              <Image src="/s7-3.webp" alt="Réalisation de toiture 4" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Questions fréquentes</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-3 text-slate-800">{item.question}</h3>
                <p className="text-gray-700">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
