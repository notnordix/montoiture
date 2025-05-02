"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, Phone, ChevronDown, ChevronRight, Home, Grid3X3, FolderOpen, Info, MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { COMPANY } from "@/lib/constants"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [pathname, setPathname] = useState("/")
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
      // Reset active submenu when closing the menu
      setActiveSubmenu(null)
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

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  const handleLinkClick = (path: string) => {
    setPathname(path)
    if (isOpen) setIsOpen(false)
    setActiveSubmenu(null)
  }

  const toggleSubmenu = (name: string) => {
    setActiveSubmenu(activeSubmenu === name ? null : name)
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
    { name: "Accueil", href: "/", icon: <Home size={18} /> },
    {
      name: "Services",
      href: "/services",
      icon: <Grid3X3 size={18} />,
      submenu: services,
    },
    { name: "Projets", href: "/projects", icon: <FolderOpen size={18} /> },
    { name: "À propos", href: "/about", icon: <Info size={18} /> },
    { name: "Contact", href: "/contact", icon: <MessageSquare size={18} /> },
  ]

  // Reset menu scroll position when opened
  useEffect(() => {
    if (isOpen && menuRef.current) {
      const menuContent = menuRef.current.querySelector(".overflow-y-auto")
      if (menuContent) {
        menuContent.scrollTop = 0
      }
    }
  }, [isOpen])

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
          {scrolled ? (
            <img src="/MONTOITURE/black-logo.png" alt={COMPANY.name} className="h-12 w-auto transition-all duration-300" />
          ) : (
            <img src="/MONTOITURE/white-logo.png" alt={COMPANY.name} className="h-12 w-auto transition-all duration-300" />
          )}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.slice(0, 4).map((item) => (
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
          <a
            href="/contact"
            onClick={() => handleLinkClick("/contact")}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-white hover:bg-primary-700 h-10 px-4 py-2 hover:scale-105 transition-all duration-300"
          >
            Devis gratuit
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className={cn(
            "lg:hidden p-2 rounded-full transition-colors",
            scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10",
            isOpen && "bg-primary text-white hover:bg-primary",
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
              ref={menuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="lg:hidden fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white shadow-xl z-50 flex flex-col h-[100dvh]"
            >
              {/* Header with logo and close button */}
              <div className="p-4 flex justify-between items-center border-b border-gray-100">
                <Link href="/" className="flex items-center" onClick={() => handleLinkClick("/")}>
                  <img src="/logo-dark.png" alt={COMPANY.name} className="h-10 w-auto" />
                </Link>
                <button
                  className="text-gray-700 hover:text-primary p-2 rounded-full hover:bg-gray-100 transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                  aria-label="Fermer le menu"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Main navigation */}
              <div className="flex-1 overflow-y-auto overscroll-contain">
                <AnimatePresence mode="wait">
                  {activeSubmenu === null ? (
                    <motion.nav
                      key="main-menu"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="p-4"
                    >
                      <ul className="space-y-1">
                        {navItems.map((item) => (
                          <li key={item.name}>
                            {item.submenu ? (
                              <button
                                onClick={() => toggleSubmenu(item.name)}
                                className={cn(
                                  "w-full flex items-center justify-between p-3 rounded-lg text-left transition-all duration-200",
                                  pathname.startsWith(item.href)
                                    ? "bg-primary/10 text-primary font-medium"
                                    : "text-gray-700 hover:bg-gray-50",
                                )}
                              >
                                <span className="flex items-center gap-3">
                                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100">
                                    {item.icon}
                                  </span>
                                  {item.name}
                                </span>
                                <ChevronRight className="h-5 w-5 text-gray-400" />
                              </button>
                            ) : (
                              <Link
                                href={item.href}
                                onClick={() => handleLinkClick(item.href)}
                                className={cn(
                                  "w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200",
                                  pathname === item.href
                                    ? "bg-primary/10 text-primary font-medium"
                                    : "text-gray-700 hover:bg-gray-50",
                                )}
                              >
                                <span className="flex items-center gap-3">
                                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100">
                                    {item.icon}
                                  </span>
                                  {item.name}
                                </span>
                                <ChevronRight className="h-5 w-5 text-gray-400" />
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </motion.nav>
                  ) : (
                    <motion.div
                      key="submenu"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.2 }}
                      className="p-4"
                    >
                      <button
                        onClick={() => setActiveSubmenu(null)}
                        className="flex items-center gap-2 text-primary mb-4 p-2 hover:bg-gray-50 rounded-lg transition-all duration-200"
                      >
                        <ChevronRight className="h-5 w-5 rotate-180" />
                        <span>Retour</span>
                      </button>

                      <h3 className="font-semibold text-lg mb-3 px-2">Nos Services</h3>

                      <ul className="space-y-1">
                        {services.map((service) => (
                          <li key={service.name}>
                            <Link
                              href={service.href}
                              onClick={() => handleLinkClick(service.href)}
                              className={cn(
                                "block p-3 rounded-lg transition-all duration-200",
                                pathname === service.href
                                  ? "bg-primary/10 text-primary font-medium"
                                  : "text-gray-700 hover:bg-gray-50",
                              )}
                            >
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact and CTA section */}
              <div className="p-4 border-t border-gray-100 bg-gray-50">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm flex-1">
                    <Phone size={18} className="text-primary" />
                    <a href={`tel:${COMPANY.phone}`} className="font-medium">
                      {COMPANY.phoneDisplay}
                    </a>
                  </div>

                  <a
                    href={`tel:${COMPANY.phone}`}
                    aria-label="Appeler"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-12 w-12 shadow-md"
                  >
                    <Phone size={20} />
                  </a>
                </div>

                <a
                  href="/contact"
                  onClick={() => handleLinkClick("/contact")}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-white hover:bg-primary-700 h-10 px-4 py-6 text-base w-full"
                >
                  Demander un devis gratuit
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
