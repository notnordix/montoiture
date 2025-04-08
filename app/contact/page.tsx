"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react"
import { COMPANY } from "@/lib/constants"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formError, setFormError] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(e.target as HTMLFormElement)
    const name = formData.get("name")
    const phone = formData.get("phone")
    const email = formData.get("email")
    const service = formData.get("service")
    const message = formData.get("message")

    // Here you would typically send this data to your backend
    // For now, we'll just simulate a successful submission
    console.log("Form submitted with:", { name, phone, email, service, message })

    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true)
      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()
    }, 1000)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gray-900">
        {/* Background with overlay */}
        <div className="absolute inset-0 w-full h-full">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('/roofing-tile-1-scaled.webp')"
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
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative" data-aos="fade-right">
              <Image
                src="https://expertoit.fr/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-02-at-01.06.40-e1743548864739.jpeg"
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
                  <Button type="submit" className="w-full bg-primary hover:bg-primary-600 transition-colors">
                    Obtenez un devis gratuit
                  </Button>
                  {formError && (
                    <p className="text-red-500 text-sm mt-2">
                      Une erreur s&apos;est produite lors de la soumission du formulaire. Veuillez vérifier tous les
                      champs à nouveau.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
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
                  <h6 className="font-bold">Vence, France</h6>
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
              src="https://maps.google.com/maps?q=43.722670232470534%2C%207.114309699851594&z=15&hl=fr&t=m&output=embed&iwloc=near"
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
      <section className="py-16 bg-primary/10">
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
