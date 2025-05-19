"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, ArrowRight, AlertCircle } from "lucide-react"
import { COMPANY } from "@/lib/constants"
import { sendQuoteEmail } from "@/lib/actions"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormError(null)

    try {
      // Get form data
      const formData = new FormData(e.target as HTMLFormElement)
      const name = formData.get("name") as string
      const phone = formData.get("phone") as string
      const email = formData.get("email") as string
      const service = formData.get("service") as string
      const message = formData.get("message") as string

      // Send email using server action
      const result = await sendQuoteEmail({
        name,
        phone,
        email,
        service,
        message,
      })

      if (result.success) {
        setFormSubmitted(true)
        // Reset form
        const form = e.target as HTMLFormElement
        form.reset()
      } else {
        setFormError(result.message || "Une erreur s'est produite. Veuillez réessayer.")
      }
    } catch (err) {
      console.error("Error submitting form:", err)
      setFormError("Une erreur s'est produite. Veuillez réessayer.")
    } finally {
      setIsSubmitting(false)
    }
  }

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
            Devis <span className="text-primary">Gratuit</span>
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-300">
            Contactez-nous pour obtenir un devis gratuit et sans engagement pour vos travaux de toiture
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-10 sm:py-14 md:py-16 lg:py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative" data-aos="fade-right">
              <Image
                src="/MONTOITURE/mockup1.png"
                alt="MONTOITURE équipe d'experts"
                width={500}
                height={672}
                className="rounded-lg shadow-xl object-cover"
              />
            </div>

            {/* Form */}
            <div data-aos="fade-left">
              <div className="mb-8">
                <span className="text-primary font-medium">Contactez-nous</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                  Toute question ?<br />
                  Écrivez-la et envoyez-nous.
                </h2>
              </div>

              {formSubmitted ? (
                <Card className="border-none shadow-xl bg-white/95 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-green-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-semibold mb-2">Formulaire envoyé !</h4>
                      <p className="text-gray-600">
                        Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.
                      </p>
                      <Button
                        className="mt-6 bg-primary hover:bg-primary-600 transition-colors"
                        onClick={() => setFormSubmitted(false)}
                      >
                        Envoyer un autre message
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Entrez votre nom complet"
                      required
                      className="bg-white border-gray-200"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Numéro de téléphone"
                      required
                      className="bg-white border-gray-200"
                    />
                  </div>
                  <div>
                    <Input type="email" name="email" placeholder="Votre email" className="bg-white border-gray-200" />
                  </div>
                  <div>
                    <Input
                      type="text"
                      name="service"
                      placeholder="Description du service"
                      required
                      className="bg-white border-gray-200"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Message"
                      rows={4}
                      className="bg-white border-gray-200"
                      required
                    />
                  </div>

                  {formError && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <p>{formError}</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-600 transition-colors"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      "Obtenez un devis gratuit"
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-10 sm:py-14 md:py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-right">
            {/* Office */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h5 className="text-xl font-bold mb-4 text-primary">Bureau</h5>
              <div className="h-1 w-16 bg-primary mb-6"></div>
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h6 className="font-bold">Villeneuve-Loubet, France</h6>
                  <p className="text-gray-600 mt-2">{COMPANY.address}</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h5 className="text-xl font-bold mb-4 text-primary">Passer un appel</h5>
              <div className="h-1 w-16 bg-primary mb-6"></div>
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h6 className="font-bold">{COMPANY.phone}</h6>
                  <p className="text-gray-600 mt-2">
                    {COMPANY.hours.weekdays}
                    <br />
                    {COMPANY.hours.saturday}
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h5 className="text-xl font-bold mb-4 text-primary">Envoyer un mail</h5>
              <div className="h-1 w-16 bg-primary mb-6"></div>
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h6 className="font-bold">{COMPANY.email}</h6>
                  <p className="text-gray-600 mt-2">Nous vous répondrons dans les plus brefs délais</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8">
        <div className="container-fluid px-0">
          <div className="w-full h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.8022529992454!2d7.1266742!3d43.65228239999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdd37b1f21dd57%3A0x461aed46dd052102!2s806%20Av.%20des%20Plans%2C%2006270%20Villeneuve-Loubet%2C%20France!5e0!3m2!1sen!2sma!4v1747631739644!5m2!1sen!2sma"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
              aria-label="Carte montrant l'emplacement de MONTOITURE"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-14 md:py-16 bg-primary/10">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à démarrer votre projet ?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis gratuit et sans engagement.
          </p>
          <Button className="bg-primary hover:bg-primary-600 transition-colors" asChild>
            <Link href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}>
              Appelez-nous maintenant
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
