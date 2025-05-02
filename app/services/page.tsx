"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { setupRevealAnimation } from "@/lib/animation"

export default function ServicesPage() {
  useEffect(() => {
    const cleanup = setupRevealAnimation()
    return () => {
      if (cleanup) {
        cleanup()
      }
    }
  }, [])

  // Array of gradient colors for the cards
  const gradientColors = [
    "from-blue-500/70",
    "from-green-500/70",
    "from-red-500/70",
    "from-yellow-500/70",
    "from-purple-500/70",
    "from-indigo-500/70",
    "from-pink-500/70",
    "from-orange-500/70",
    "from-teal-500/70",
    "from-cyan-500/70",
    "from-lime-500/70",
    "from-emerald-500/70",
  ]

  // Update the services array to include links to all service pages
  const services = [
    {
      id: 1,
      title: "Réalisation de toiture",
      description:
        "Les installations de toiture concernent les travaux de pose d'une couverture de toit, qu'il s'agisse de tuiles, visant à protéger un bâtiment des intempéries.",
      image: "/s1.webp",
      link: "/services/installations-de-toiture",
    },
    {
      id: 2,
      title: "Réparation de toiture",
      description:
        "Les réparations de toiture consistent à corriger les dommages tels que les fuites, les tuiles cassées ou les problèmes d'étanchéité pour restaurer l'intégrité et la protection du toit.",
      image: "/s2.webp",
      link: "/services/reparation-de-toiture",
    },
    {
      id: 3,
      title: "Réparation de fuites",
      description:
        "C'est le processus de détection et de colmatage des infiltrations d'eau pour éviter les dégâts et assurer l'étanchéité.",
      image: "/s3.webp",
      link: "/services/reparation-de-fuites",
    },
    {
      id: 4,
      title: "L'entretien et le nettoyage de toiture",
      description:
        "L'entretien de toiture implique le nettoyage et la vérification réguliers pour prévenir les problèmes et prolonger la durée de vie du toit.",
      image: "/s4.webp",
      link: "/services/l-entretien-et-le-nettoyage-de-la-toiture",
    },
    {
      id: 5,
      title: "Traitement de charpente",
      description:
        "Le traitement de charpente vise à protéger le bois des attaques d'insectes, des moisissures et de l'humidité pour garantir sa solidité et sa durabilité.",
      image: "/s5.webp",
      link: "/services/charpente",
    },
    {
      id: 6,
      title: "Étanchéité toiture",
      description: "Assurer que le toit est imperméable à l'eau pour éviter les fuites et les infiltrations.",
      image: "/s6.webp",
      link: "/services/etancheite-de-toiture",
    },
    {
      id: 7,
      title: "Recherche de fuite toiture",
      description:
        "Détection et localisation précise des fuites pour corriger les dommages, assurer l'étanchéité et renforcer la solidité du toit.",
      image: "/s7.webp",
      link: "/services/recherche-de-fuite-toiture",
    },
    {
      id: 8,
      title: "Zinguerie",
      description:
        "Installation et réparation d'éléments en zinc pour protéger et étanchéifier votre toiture. Qualité et durabilité garanties pour une finition soignée et résistante.",
      image: "/s8.webp",
      link: "/services/zinguerie",
    },
    {
      id: 9,
      title: "Pose de Gouttière",
      description:
        "Installation rapide et efficace de gouttières pour protéger votre maison des eaux de pluie. Choix de matériaux résistants et adaptés à votre toiture.",
      image: "/s9.webp",
      link: "/services/pose-de-gouttiere",
    },
    {
      id: 10,
      title: "Peinture intérieur et extérieure",
      description:
        "Service de peinture intérieure et extérieure rapide et soigné, avec des peintures de qualité pour des finitions durables et esthétiques.",
      image: "/s10.webp",
      link: "/services/peinture-interieur-et-exterieure",
    },
    {
      id: 11,
      title: "Pose de Vélux et fenêtres de toit",
      description:
        "Installation rapide et précise de Vélux et fenêtres de toit pour optimiser la lumière naturelle et la ventilation de votre maison. Finitions soignées et durables pour un confort maximal.",
      image: "/s11.webp",
      link: "/services/pose-de-velux-et-fenetres-de-toit",
    },
    {
      id: 12,
      title: "Ravalement de façade",
      description:
        "Service de ravalement de façade pour redonner un coup de neuf à votre maison. Nettoyage, réparation et finition pour protéger et embellir vos murs extérieurs tout en respectant les normes d'isolation et d'étanchéité.",
      image: "/s12.webp",
      link: "/services/ravalement-de-facade",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gray-900">
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
            Nos <span className="text-primary">Services</span>
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-300">
            Découvrez notre gamme complète de services de toiture professionnels pour répondre à tous vos besoins
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 sm:py-14 md:py-16 lg:py-24 bg-gray-50">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="text-center mb-16 reveal">
            <span className="text-primary font-medium">Nos services</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Faites confiance à l&apos;expérience</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des solutions de toiture adaptées à tous vos besoins, qu&apos;il s&apos;agisse d&apos;une nouvelle
              installation, d&apos;une rénovation ou d&apos;une réparation d&apos;urgence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="reveal"
              >
                <Link href={service.link} className="block h-full">
                  <div className="relative h-80 sm:h-88 md:h-96 rounded-lg overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${gradientColors[index % gradientColors.length]} to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300`}
                    ></div>
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-white/90 mb-4">{service.description}</p>
                      <div className="flex items-center text-sm font-medium group-hover:underline">
                        En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-14 md:py-16 bg-primary/10">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à démarrer votre projet ?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd&apos;hui pour discuter de votre projet et obtenir un devis gratuit et sans
            engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary-600 transition-colors" asChild>
              <Link href="/contact">
                Demander un devis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
