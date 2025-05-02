"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Linkedin, ArrowUp, MapPin, Phone, Mail, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { COMPANY } from "@/lib/constants"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  const services = [
    { name: "Réalisation de toiture", href: "/services/installations-de-toiture" },
    { name: "Réparation de toiture", href: "/services/reparation-de-toiture" },
    { name: "Réparation de fuites", href: "/services/reparation-de-fuites" },
    { name: "L'entretien et le nettoyage de toiture", href: "/services/l-entretien-et-le-nettoyage-de-la-toiture" },
    { name: "Traitement de charpente", href: "/services/charpente" },
    { name: "Étanchéité toiture", href: "/services/etancheite-de-toiture" },
    { name: "Recherche de fuite toiture", href: "/services/recherche-de-fuite-toiture" },
    { name: "Zinguerie", href: "/services/zinguerie" },
    { name: "Pose de Gouttière", href: "/services/pose-de-gouttiere" },
    { name: "Peinture intérieur et extérieure", href: "/services/peinture-interieur-et-exterieure" },
    { name: "Pose de Vélux et fenêtres de toit", href: "/services/pose-de-velux-et-fenetres-de-toit" },
    { name: "Ravalement de façade", href: "/services/ravalement-de-facade" },
  ]

  const socialLinks = [
    { name: "Facebook", icon: <Facebook size={18} />, href: COMPANY.social.facebook },
    { name: "Instagram", icon: <Instagram size={18} />, href: COMPANY.social.instagram },
    { name: "Twitter", icon: <Twitter size={18} />, href: COMPANY.social.twitter },
    { name: "LinkedIn", icon: <Linkedin size={18} />, href: COMPANY.social.linkedin },
  ]

  const contactInfo = [
    { icon: <MapPin className="h-5 w-5 text-primary" />, text: COMPANY.address },
    { icon: <Phone className="h-5 w-5 text-primary" />, text: COMPANY.phoneDisplay },
    { icon: <Mail className="h-5 w-5 text-primary" />, text: COMPANY.email },
    { icon: <Clock className="h-5 w-5 text-primary" />, text: COMPANY.hours.weekdays },
  ]

  return (
    <footer className="bg-black text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-10 sm:py-12 md:py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-3">
            <Link href="/" className="flex items-center mb-6 group">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Image
                  src="/MONTOITURE/white-logo.png"
                  alt="Montoiture Logo"
                  width={150}
                  height={50}
                  className="h-auto w-auto"
                  priority
                />
              </motion.div>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Des solutions de toiture durables et esthétiques pour protéger votre maison des intempéries. Expertise et
              qualité au service de votre satisfaction.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  aria-label={social.name}
                  whileHover={{ y: -3 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services - First Column */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <span className="w-6 h-1 bg-primary mr-2"></span>
              Nos services
            </h3>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">›</span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - Second Column */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <span className="w-6 h-1 bg-primary mr-2"></span>
              Autres services
            </h3>
            <ul className="space-y-3">
              {services.slice(6).map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">›</span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <span className="w-6 h-1 bg-primary mr-2"></span>
              Contact
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 text-primary">{item.icon}</div>
                  <span className="text-gray-300">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {currentYear} {COMPANY.name}. Tous droits réservés.
            </p>

            {/* Back to top button */}
            <motion.button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary-600 transition-colors"
              aria-label="Retour en haut"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
