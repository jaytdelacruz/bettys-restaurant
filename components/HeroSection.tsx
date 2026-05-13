'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const badges = [
  { label: '50+ Ilonggo Dishes', symbol: '◆' },
  { label: 'Made with Love', symbol: '◆' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen lg:min-h-[calc(100vh-5rem)] lg:mt-20 flex flex-col lg:flex-row overflow-hidden bg-cream">

      {/* ── LEFT PANEL ── */}
      <div className="relative z-10 flex flex-col justify-center w-full lg:w-[55%] px-6 sm:px-10 lg:px-16 xl:px-24 pt-28 pb-16 lg:pt-12 lg:pb-12">

        {/* Decorative dot grid */}
        <div aria-hidden="true" className="absolute top-20 left-4 opacity-20 hidden sm:block">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex gap-3 mb-3">
              {Array.from({ length: 6 }).map((_, j) => (
                <div key={j} className="w-1.5 h-1.5 rounded-full bg-accent" />
              ))}
            </div>
          ))}
        </div>

        {/* Decorative ring */}
        <div aria-hidden="true" className="absolute bottom-16 left-8 w-36 h-36 rounded-full border border-accent/15 hidden lg:block" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative max-w-xl"
        >
          {/* Logo */}
          <motion.div variants={itemVariants} className="mb-7">
            <Image
              src="/logo.png"
              alt="Betty's Logo"
              width={90}
              height={90}
              className="rounded-full shadow-lg"
              priority
            />
          </motion.div>

          {/* Eyebrow pill */}
          <motion.div variants={itemVariants} className="mb-5">
            <span className="inline-flex items-center gap-2 font-lato text-xs font-semibold tracking-[0.22em] text-accent uppercase bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Authentic Ilonggo Cuisine · Iloilo City
            </span>
          </motion.div>

          {/* Restaurant name */}
          <motion.h1
            variants={itemVariants}
            className="font-playfair font-bold text-primary leading-none mb-2 text-[clamp(3.5rem,9vw,6rem)]"
          >
            Betty's
          </motion.h1>

          {/* Full name */}
          <motion.p
            variants={itemVariants}
            className="font-lato text-sm sm:text-base font-semibold tracking-widest text-accent uppercase mb-5"
          >
            Ilonggo Table and Bakehouse
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="font-playfair italic text-primary/70 text-lg sm:text-xl mb-6"
          >
            "A Taste of Home, Made with Love"
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="font-lato text-primary/60 text-sm sm:text-base leading-relaxed mb-8"
          >
            Welcome to Betty's — where every dish carries the warmth of a Filipino home kitchen.
            From hearty KBL to silky Leche Flan, we cook with tradition, heart, and the finest
            local ingredients from Iloilo.
          </motion.p>

          {/* Badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 mb-9"
          >
            {badges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 bg-warm border border-tan px-4 py-2 rounded-full shadow-sm"
              >
                <span className="text-accent text-[9px]">{badge.symbol}</span>
                <span className="font-lato text-xs sm:text-sm font-medium text-primary">{badge.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/gallery"
              className="group inline-flex items-center justify-center gap-2 bg-primary text-warm px-7 py-3.5 rounded-full font-lato font-semibold text-sm hover:bg-accent transition-all duration-300 shadow-md hover:shadow-lg"
            >
              See Our Food
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center bg-transparent text-primary border-2 border-primary px-7 py-3.5 rounded-full font-lato font-semibold text-sm hover:bg-primary hover:text-warm transition-all duration-300"
            >
              Our Story
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* ── RIGHT PANEL — Restaurant Photo ── */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="relative w-full lg:w-[45%] h-72 sm:h-96 lg:h-auto lg:min-h-screen flex-shrink-0"
      >
        <Image
          src="/restaurant.jpg"
          alt="Betty's Ilonggo Table and Bakehouse"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 1024px) 100vw, 45vw"
        />

        {/* Warm overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-cream/30 lg:via-transparent lg:to-transparent" />

      </motion.div>

    </section>
  )
}
