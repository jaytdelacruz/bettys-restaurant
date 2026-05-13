'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const pastries = [
  {
    id: 'pastries-1',
    src: '/pastries1.jpg',
    alt: "Betty's fresh pastries",
    priority: true,
  },
  {
    id: 'pastries-2',
    src: '/pastries2.jpg',
    alt: "Betty's baked goods",
    priority: true,
  },
  {
    id: 'pastries-3',
    src: '/pastries3.jpg',
    alt: "Betty's cakes and breads",
    priority: true,
  },
  {
    id: 'pastries-4',
    src: '/pastries4.jpg',
    alt: "Betty's bakehouse selection",
    priority: true,
  },
  {
    id: 'pastries-5',
    src: '/pastries5.jpg',
    alt: "Betty's homemade pastries",
    priority: false,
  },
  {
    id: 'pastries-6',
    src: '/pastries6.jpg',
    alt: "Betty's sweet treats",
    priority: false,
  },
  {
    id: 'pastries-7',
    src: '/Pastries7.jpg',
    alt: "Betty's specialty breads",
    priority: false,
  },
  {
    id: 'pastries-8',
    src: '/Pastries8.jpg',
    alt: "Betty's bakehouse favorites",
    priority: false,
  },
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function BakehouseGrid() {
  return (
    <section className="bg-cream pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="text-center mb-14"
        >
          <span className="inline-block font-lato text-xs font-semibold tracking-[0.22em] text-accent uppercase mb-4">
            Fresh from the Oven
          </span>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
            The Bakehouse
          </h1>
          <p className="font-lato text-base md:text-lg text-primary/60 max-w-xl mx-auto">
            Handcrafted breads, cakes, and pastries baked fresh every day — the sweet soul of Betty's
          </p>
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-14"
        >
          <div className="flex-1 h-px bg-tan" />
          <span className="text-accent text-lg">✦</span>
          <div className="flex-1 h-px bg-tan" />
        </motion.div>

        {/* Photo grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {pastries.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 280, damping: 20 }}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer h-52 sm:h-64 md:h-72 bg-tan/30"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                quality={80}
                priority={item.priority}
              />
              {/* Warm overlay on hover */}
              <div className="absolute inset-0 bg-primary/70 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-accent text-2xl">✦</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="font-lato text-sm text-primary/45 mb-4">Craving something sweet?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 font-lato text-sm font-semibold text-accent border border-accent/40 px-6 py-3 rounded-full hover:bg-accent hover:text-warm transition-all duration-300"
          >
            Order or Inquire
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
