'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const promos = [
  { src: '/promo1.jpg', alt: "Betty's Promo 1" },
  { src: '/promo2.jpg', alt: "Betty's Promo 2" },
  { src: '/promo3.jpg', alt: "Betty's Promo 3" },
  { src: '/promo4.jpg', alt: "Betty's Promo 4" },
]

export default function PromoCarousel() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % promos.length)
  }, [])

  const prev = () => {
    setCurrent((prev) => (prev - 1 + promos.length) % promos.length)
  }

  const goTo = (index: number) => setCurrent(index)

  useEffect(() => {
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65 }}
      className="mb-14"
    >
      <div className="relative rounded-3xl overflow-hidden shadow-xl h-64 sm:h-80 md:h-[420px] bg-primary">

        {/* All slides rendered at once — CSS opacity handles visibility so all images preload immediately */}
        {promos.map((promo, i) => (
          <div
            key={promo.src}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={promo.src}
              alt={promo.alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              quality={85}
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
          </div>
        ))}

        {/* Prev button */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-warm/80 backdrop-blur-sm flex items-center justify-center hover:bg-warm transition-all duration-200 shadow-md z-20"
        >
          <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Next button */}
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-warm/80 backdrop-blur-sm flex items-center justify-center hover:bg-warm transition-all duration-200 shadow-md z-20"
        >
          <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {promos.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-6 h-2 bg-warm'
                  : 'w-2 h-2 bg-warm/50 hover:bg-warm/80'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
