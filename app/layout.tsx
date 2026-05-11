import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Betty's Filipino Restaurant | Cebu City",
  description:
    "Authentic Ilonggo cuisine made with love in Iloilo City, Philippines. Home of KBL, Kare-Kare, Palabok, and classic Ilonggo comfort food.",
  keywords: ['Filipino restaurant', 'Cebu City', 'Betty\'s', 'adobo', 'sinigang', 'lechon'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfairDisplay.variable} ${lato.variable} font-lato bg-cream text-primary antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
