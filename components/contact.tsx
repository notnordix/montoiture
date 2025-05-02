"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Send, CheckCircle2, AlertCircle } from "lucide-react"
import { sendContactEmail } from "@/lib/actions"

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      // Get form data
      const formData = new FormData(e.target as HTMLFormElement)
      const name = formData.get("name") as string
      const email = formData.get("email") as string
      const subject = formData.get("subject") as string
      const message = formData.get("message") as string

      // Send email using server action
      const result = await sendContactEmail({
        name,
        email,
        subject,
        message,
      })

      if (result.success) {
        setIsSubmitted(true)
        // Reset form
        const form = e.target as HTMLFormElement
        form.reset()
      } else {
        setError(result.message || "Une erreur s'est produite. Veuillez réessayer.")
      }
    } catch (err) {
      console.error("Error submitting form:", err)
      setError("Une erreur s'est produite. Veuillez réessayer.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-16 sm:py-20 md:py-24 lg:py-32"
      style={{
        backgroundImage:
          "url('/MONTOITURE/mockup1.png')",
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
          className="text-center mb-8 sm:mb-12 md:mb-16"
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
            <CardContent className="p-5 sm:p-6 md:p-8">
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
                  className="space-y-3 sm:space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nom
                      </label>
                      <Input id="name" name="name" placeholder="Votre nom" required />
                    </motion.div>
                    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <Input id="email" name="email" type="email" placeholder="Votre email" required />
                    </motion.div>
                  </div>
                  <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Sujet
                    </label>
                    <Input id="subject" name="subject" placeholder="Sujet de votre message" required />
                  </motion.div>
                  <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea id="message" name="message" placeholder="Votre message" rows={5} required />
                  </motion.div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <p>{error}</p>
                    </div>
                  )}

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-600 flex items-center justify-center gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Envoyer le message
                        </>
                      )}
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
