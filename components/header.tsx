"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { COMPANY } from "@/lib/constants"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [pathname, setPathname] = useState("/")

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    // Set initial pathname
    setPathname(window.location.pathname)

    // Update pathname when it changes
    const handleRouteChange = () => {
      setPathname(window.location.pathname)
    }

    // Add event listener for pathname changes
    window.addEventListener("popstate", handleRouteChange)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("popstate", handleRouteChange)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleLinkClick = (path) => {
    setPathname(path)
    if (isOpen) setIsOpen(false)
  }

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

  // Split services into two columns
  const leftColumnServices = services.slice(0, Math.ceil(services.length / 2))
  const rightColumnServices = services.slice(Math.ceil(services.length / 2))

  // Removed Contact from navItems
  const navItems = [
    { name: "Accueil", href: "/" },
    {
      name: "Services",
      href: "/services",
      submenu: services,
    },
    { name: "Projets", href: "/projects" },
    { name: "À propos", href: "/about" },
  ]

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-3" : "bg-transparent py-5",
      )}
      aria-label="Site header"
    >
      <div className="container mx-auto px-4 max-w-7xl flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center relative z-10 group"
          aria-label={`${COMPANY.name} - Retour à l'accueil`}
          onClick={() => handleLinkClick("/")}
        >
          <motion.span
            className="text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="text-primary">MONT</span>
            <span className={scrolled ? "text-gray-800" : "text-white"}>OITURE</span>
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className={cn(
                  "font-medium transition-colors duration-200 flex items-center text-base py-2 relative",
                  scrolled
                    ? pathname === item.href
                      ? "text-primary font-semibold"
                      : "text-gray-700 hover:text-primary"
                    : pathname === item.href
                      ? "text-primary-200 font-semibold"
                      : "text-white hover:text-primary-200",
                )}
                onClick={() => handleLinkClick(item.href)}
              >
                {item.name}
                {item.submenu && (
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                )}

                {/* Active indicator line */}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100",
                    scrolled ? "bg-primary" : "bg-white",
                    pathname === item.href && "scale-x-100",
                  )}
                />
              </Link>

              {/* Dropdown menu */}
              {item.submenu && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-4 px-4 grid grid-cols-2 gap-4">
                    <div>
                      {leftColumnServices.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200 rounded-md"
                          onClick={() => handleLinkClick(subItem.href)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                    <div>
                      {rightColumnServices.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200 rounded-md"
                          onClick={() => handleLinkClick(subItem.href)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center">
          <Button className="bg-primary hover:bg-primary-600 transition-all duration-300 hover:scale-105" asChild>
            <Link href="/contact" onClick={() => handleLinkClick("/contact")}>
              Devis gratuit
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className={cn(
            "lg:hidden p-2 rounded-md transition-colors",
            scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10",
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <motion.div initial={false} animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </button>
      </div>

      {/* Mobile Navigation Menu - Slide from right */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Menu panel */}
            <motion.div
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="lg:hidden fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white shadow-xl z-50 overflow-y-auto"
            >
              <div className="p-5 flex justify-between items-center border-b border-gray-100">
                <Link href="/" className="flex items-center" onClick={() => handleLinkClick("/")}>
                  <span className="text-xl font-bold">
                    <span className="text-primary">MONT</span>
                    <span className="text-gray-800">OITURE</span>
                  </span>
                </Link>
                <button
                  className="text-gray-700 hover:text-primary p-2 rounded-md hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                  aria-label="Fermer le menu"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="p-5 space-y-6">
                {navItems.map((item) => (
                  <div key={item.name} className="border-b border-gray-100 pb-4">
                    <Link
                      href={item.href}
                      className={cn(
                        "text-gray-700 hover:text-primary font-medium py-2 block transition-colors duration-200 text-lg",
                        pathname === item.href && "text-primary font-semibold",
                      )}
                      onClick={() => handleLinkClick(item.href)}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="mt-2 space-y-1 pl-4">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="text-gray-600 hover:text-primary text-sm block py-2 transition-colors duration-200"
                            onClick={() => handleLinkClick(subItem.href)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="pt-4 space-y-4">
                  <div className="flex items-center justify-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <Phone size={18} className="text-primary" />
                    <a href={`tel:${COMPANY.phone}`} className="font-medium">
                      {COMPANY.phoneDisplay}
                    </a>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary-600 transition-colors" asChild>
                    <Link href="/contact" onClick={() => handleLinkClick("/contact")}>
                      Devis gratuit
                    </Link>
                  </Button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
