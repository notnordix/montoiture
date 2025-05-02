import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { COMPANY } from "@/lib/constants"

export default function ProjectsPage() {
  // Update the projects array to include size information
  const projects = [
    {
      id: 1,
      image: "/1.webp",
      title: "Rénovation de toiture",
      category: "Couverture",
      size: "col-span-12 md:col-span-6 lg:col-span-4",
    },
    {
      id: 2,
      image: "/2.webp",
      title: "Installation de Velux",
      category: "Fenêtres de toit",
      size: "col-span-12 md:col-span-6 lg:col-span-8",
    },
    {
      id: 3,
      image: "/3.webp",
      title: "Réparation de toiture",
      category: "Réparation",
      size: "col-span-12 md:col-span-6 lg:col-span-6",
    },
    {
      id: 4,
      image: "/4.webp",
      title: "Charpente en béton",
      category: "Charpente",
      size: "col-span-12 md:col-span-6 lg:col-span-6",
    },
    {
      id: 5,
      image: "/5.webp",
      title: "Travaux de façade",
      category: "Façade",
      size: "col-span-12 md:col-span-6 lg:col-span-4",
    },
    {
      id: 6,
      image: "/6.webp",
      title: "Rénovation complète",
      category: "Rénovation",
      size: "col-span-12 md:col-span-6 lg:col-span-8",
    },
    {
      id: 7,
      image: "/7.webp",
      title: "Installation de gouttières",
      category: "Gouttières",
      size: "col-span-12 md:col-span-6 lg:col-span-3",
    },
    {
      id: 8,
      image: "/8.webp",
      title: "Étanchéité de toiture terrasse",
      category: "Étanchéité",
      size: "col-span-12 md:col-span-6 lg:col-span-3",
    },
    {
      id: 9,
      image: "/9.webp",
      title: "Réparation après tempête",
      category: "Urgence",
      size: "col-span-12 md:col-span-6 lg:col-span-6",
    },
    {
      id: 10,
      image: "/10.webp",
      title: "Toiture neuve",
      category: "Installation",
      size: "col-span-12 md:col-span-6 lg:col-span-4",
    },
    {
      id: 11,
      image: "/11.webp",
      title: "Rénovation de façade",
      category: "Façade",
      size: "col-span-12 md:col-span-6 lg:col-span-4",
    },
    {
      id: 12,
      image: "/12.webp",
      title: "Toiture en tuiles",
      category: "Couverture",
      size: "col-span-12 md:col-span-6 lg:col-span-4",
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
            Nos <span className="text-primary">Projets</span>
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-300">
            Découvrez notre portfolio de réalisations et inspirez-vous pour votre prochain projet
          </p>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-10 sm:py-14 md:py-16 lg:py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-medium">Nos Réalisations</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Inspiration pour Votre Prochain Projet</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explorez notre galerie de projets réalisés avec expertise et passion par notre équipe de professionnels
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-12 gap-4 sm:gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`${project.size} group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl`}
              >
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <span className="text-sm font-medium text-primary-200 mb-1">{project.category}</span>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-10 sm:py-14 md:py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-medium">Témoignages</span>
            <h2 className="text-3xl font-bold mt-2 mb-4">Ce que disent nos clients</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <svg className="h-12 w-12 text-primary opacity-20" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="text-lg text-gray-600 italic mb-6">
                {COMPANY.name} a réalisé la rénovation complète de notre toiture avec professionnalisme et dans les
                délais impartis. La qualité du travail est impeccable et le suivi après-chantier très apprécié. Je
                recommande vivement leurs services !
              </p>
              <div>
                <h4 className="font-bold">Jean Dupont</h4>
                <p className="text-gray-500">Nice, France</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-10 sm:py-14 md:py-16 bg-primary/10">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à démarrer votre projet ?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis gratuit et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary-600 transition-colors" asChild>
              <Link href="/contact">
                Demander un devis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" asChild>
              <Link href="/services">Voir nos services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
