import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"

import Header from "@/components/header"
import Footer from "@/components/footer"
import FixedPhone from "@/components/fixed-phone"
import { ThemeProvider } from "@/components/theme-provider"
import { SITE_CONFIG } from "@/lib/constants"

// Import Swiper styles
import "swiper/css"
import "swiper/css/autoplay"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: SITE_CONFIG.metaTitle,
  description: SITE_CONFIG.metaDescription,
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png" },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} ${montserrat.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
          forcedTheme="light"
          storageKey="montoiture-theme"
          themes={["light"]}
        >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <FixedPhone />
        </ThemeProvider>
      </body>
    </html>
  )
}
