"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Send, CheckCircle2 } from "lucide-react"

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(e.target as HTMLFormElement)
    const name = formData.get("name")
    const email = formData.get("email")
    const subject = formData.get("subject")
    const message = formData.get("message")

    // Here you would typically send this data to your backend
    // For now, we'll just simulate a successful submission
    console.log("Form submitted with:", { name, email, subject, message })

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 md:py-32"
      style={{
        backgroundImage:
          "url('https://expertoit.fr/wp-content/uploads/2024/08/La-reglementation-de-linstallation-dune-toiture.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">Contactez-nous</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-white">Nous sommes à votre écoute</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Vous avez des questions ou souhaitez discuter de votre projet ? Notre équipe est à votre disposition.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-none shadow-xl bg-white/95 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6">Envoyez-nous un message</h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="flex flex-col items-center justify-center py-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4"
                  >
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </motion.div>
                  <h4 className="text-xl font-semibold mb-2">Message envoyé !</h4>
                  <p className="text-gray-600">
                    Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.
                  </p>
                  <Button
                    className="mt-6 bg-primary hover:bg-primary-600 transition-colors"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Envoyer un autre message
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nom
                      </label>
                      <Input id="name" placeholder="Votre nom" required />
                    </motion.div>
                    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Votre email" required />
                    </motion.div>
                  </div>
                  <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Sujet
                    </label>
                    <Input id="subject" placeholder="Sujet de votre message" required />
                  </motion.div>
                  <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Votre message" rows={5} required />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-600 flex items-center justify-center gap-2"
                    >
                      <Send size={16} />
                      Envoyer le message
                    </Button>
                  </motion.div>
                </motion.form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
