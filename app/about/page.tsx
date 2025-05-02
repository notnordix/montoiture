import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Clock, Shield, Users, Wallet } from "lucide-react"
import { COMPANY } from "@/lib/constants"
import Partners from "@/components/partners"
export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gray-900">
        {/* Background with overlay */}
        <div className="absolute inset-0 w-full h-full">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/MONTOITURE/mockup1.png')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
        </div>

        {/* Content */}
        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            À Propos de <span className="text-primary">Nous</span>
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-300">
            Découvrez notre histoire et notre engagement envers l'excellence dans le domaine de la toiture
          </p>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-10 sm:py-14 md:py-16 lg:py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative" data-aos="fade-right">
              <Image
                src="/MONTOITURE/mockup6.png"
                alt="MONTOITURE équipe d'experts"
                width={520}
                height={640}
                className="rounded-lg shadow-xl object-cover"
              />
            </div>

            {/* Content */}
            <div data-aos="fade-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Entrepreneur en Toiture Professionnel et Expert</h2>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 rounded-full p-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-semibold">Entreprise Certifiée</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 rounded-full p-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-semibold">Satisfaction Garantie</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 rounded-full p-2">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-semibold">Constructeur Précis</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 rounded-full p-2">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-semibold">Support d'Excellence</span>
                </div>
              </div>

              <p className="text-gray-600 mb-6">
                Chez {COMPANY.name}, nous sommes guidés par des <strong>valeurs fondamentales</strong> qui définissent
                chaque aspect de notre travail en tant qu'experts en toiture. Nous nous engageons à fournir des
                solutions de toiture durables, de haute qualité et adaptées à vos besoins spécifiques.
              </p>
              <p className="text-gray-600 mb-8">
                La <strong>transparence</strong>, l'<strong>intégrité</strong> et le <strong>respect des délais</strong>{" "}
                sont au cœur de notre approche, car nous croyons fermement que la confiance est essentielle pour bâtir
                des relations solides avec nos clients.
              </p>

              <Button className="bg-primary hover:bg-primary-600 transition-colors" asChild>
                <Link href="/contact">
                  Contactez-nous
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-10 sm:py-14 md:py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16" data-aos="zoom-in-up">
            <span className="text-primary font-medium">Nos Valeurs Fondamentales</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Ce qui nous définit</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Notre équipe met un point d'honneur à travailler avec <strong>professionnalisme</strong> et{" "}
              <strong>précision</strong>, en veillant à ce que chaque projet, qu'il soit petit ou grand, soit réalisé
              avec le plus grand soin. Nous visons non seulement à protéger votre maison, mais à surpasser vos attentes
              avec des résultats durables et esthétiques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center" data-aos="fade-right">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Horaires Flexibles</h3>
              <p className="text-gray-600">
                Nous nous adaptons à votre emploi du temps pour vous offrir un service personnalisé et pratique.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center" data-aos="fade-up">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wallet className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Forfait Abordable</h3>
              <p className="text-gray-600">
                Des solutions de qualité à des prix compétitifs, adaptées à tous les budgets.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center" data-aos="fade-left">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Garantie Qualité</h3>
              <p className="text-gray-600">
                Tous nos travaux sont garantis pour vous assurer une tranquillité d'esprit totale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Banner */}
      <section className="py-8 sm:py-10 md:py-12 bg-primary/10">
        <div className="container px-4 mx-auto">
          <div className="flex items-center gap-4 justify-center" data-aos="fade-right">
            <ArrowRight className="h-8 w-8 text-primary" />
            <h3 className="text-2xl md:text-3xl font-bold">Plus de 35 ans d'expérience en toiture et services</h3>
          </div>
        </div>
      </section>

      <Partners />

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
