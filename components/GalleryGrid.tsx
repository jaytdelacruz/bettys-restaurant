'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export const dishes = [
  {
    id: 'kbl',
    name: 'KBL (Kadios, Baboy, Langka)',
    description: 'A beloved Ilonggo classic — tender pork, young jackfruit, and pigeon peas slow-cooked in a rich, savory broth.',
    image: '/kbl.jpg',
    gradient: 'from-emerald-900 via-emerald-700 to-teal-500',
  },
  {
    id: 'kare-kare',
    name: 'Kare-Kare',
    description: 'Luxuriously rich oxtail stew in savory peanut sauce, served with fermented shrimp paste and fresh vegetables.',
    image: '/kare-kare.jpg',
    gradient: 'from-yellow-800 via-yellow-600 to-amber-300',
  },
  {
    id: 'palabok',
    name: 'Palabok',
    description: 'Rice noodles smothered in golden shrimp sauce, topped with tinapa flakes, chicharrón, and a squeeze of calamansi.',
    image: '/palabok.jpg',
    gradient: 'from-orange-700 via-orange-500 to-amber-300',
  },
  {
    id: 'pinakbet',
    name: 'Pinakbet',
    description: 'A medley of fresh local vegetables braised in fermented shrimp paste — simple, hearty, and deeply Ilonggo.',
    image: '/pinakbet.jpg',
    gradient: 'from-green-900 via-green-700 to-lime-500',
  },
  {
    id: 'baked-talaba',
    name: 'Baked Talaba',
    description: 'Fresh local oysters baked to perfection with butter, garlic, and cheese — a crowd-favorite that never lasts long.',
    image: '/baked-talaba.jpg',
    gradient: 'from-cyan-900 via-cyan-700 to-sky-400',
  },
  {
    id: 'dinuguan',
    name: 'Dinuguan',
    description: 'Tender pork simmered in a rich, savory blood stew with vinegar and chili — bold, comforting, and unforgettable.',
    image: '/dinuguan.jpg',
    gradient: 'from-red-950 via-red-800 to-rose-600',
  },
  {
    id: 'seafood-dishes',
    name: 'Seafood Dishes',
    description: "Fresh catches from Iloilo's waters, cooked the Ilonggo way — grilled, sautéed, or simmered in classic Filipino flavors.",
    image: '/seafood.jpg',
    gradient: 'from-blue-900 via-blue-700 to-cyan-500',
  },
  {
    id: 'baked-goods',
    name: 'Baked Goods & Pastries',
    description: "From soft pandesal to decadent cakes and pastries, Betty's bakehouse fills every corner with the scent of home.",
    image: '/baked-goods.jpg',
    gradient: 'from-amber-800 via-amber-600 to-yellow-300',
  },
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function GalleryGrid() {
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
            Food Gallery
          </span>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
            Dishes Made to Remember
          </h1>
          <p className="font-lato text-base md:text-lg text-primary/60 max-w-xl mx-auto">
            A glimpse of what's waiting for you at Betty's table
          </p>
        </motion.div>

        {/* 4-column grid — 2 rows of 4 on desktop */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {dishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
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
          <p className="font-lato text-sm text-primary/45 mb-4">Ready to taste the real thing?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 font-lato text-sm font-semibold text-accent border border-accent/40 px-6 py-3 rounded-full hover:bg-accent hover:text-warm transition-all duration-300"
          >
            Reserve a Table
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function DishCard({ dish }: { dish: typeof dishes[0] }) {
  return (
    <motion.div
      id={dish.id}
      variants={cardVariants}
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 280, damping: 20 }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl scroll-mt-24 h-52 sm:h-64 md:h-72"
    >
      {/* Real image or gradient fallback */}
      {dish.image ? (
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 1024px) 50vw, 25vw"
        />
      ) : (
        <>
          <div className={`absolute inset-0 bg-gradient-to-br ${dish.gradient}`} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_70%)]" />
        </>
      )}

      {/* Default bottom label */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent px-4 py-4 transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="font-playfair text-sm sm:text-base font-bold text-white drop-shadow-sm leading-snug">
          {dish.name}
        </h3>
      </div>

      {/* Hover caption overlay */}
      <div className="absolute inset-0 bg-primary/85 flex flex-col items-center justify-center px-5 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="font-playfair text-sm sm:text-base font-bold text-warm mb-2 leading-snug">{dish.name}</h3>
        <p className="font-lato text-xs text-tan/90 leading-relaxed">{dish.description}</p>
      </div>
    </motion.div>
  )
}
