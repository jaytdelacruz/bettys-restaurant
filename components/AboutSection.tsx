'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
}

const values = [
  {
    title: 'Heritage Recipes',
    description:
      'Traditional Ilonggo dishes inspired by generations of family cooking, carefully prepared with the warmth and flavor of home.',
    icon: '🍲',
    dark: true,
  },
  {
    title: 'Locally Sourced',
    description:
      "We use fresh local ingredients from Iloilo's markets and trusted producers to bring authentic flavors to every table.",
    icon: '🌾',
    dark: false,
  },
  {
    title: 'Ilonggo Hospitality',
    description:
      "At Betty's, guests are welcomed like family — with heartfelt service, comforting meals, and a homey atmosphere.",
    icon: '🤎',
    dark: false,
  },
  {
    title: 'Authentic Filipino Flavors',
    description:
      'Classic Filipino and Ilonggo favorites made with care, tradition, and the rich flavors people grew up loving.',
    icon: '✨',
    dark: true,
  },
]

const showcaseDishes = [
  { name: 'KBL (Kadios, Baboy, Langka)', id: 'kbl', gradient: 'from-emerald-900 to-emerald-600' },
  { name: 'Kare-Kare', id: 'kare-kare', gradient: 'from-yellow-700 to-amber-400' },
  { name: 'Palabok', id: 'palabok', gradient: 'from-orange-700 to-amber-400' },
  { name: 'Pinakbet', id: 'pinakbet', gradient: 'from-green-800 to-green-500' },
  { name: 'Baked Talaba', id: 'baked-talaba', gradient: 'from-cyan-800 to-cyan-500' },
  { name: 'Dinuguan', id: 'dinuguan', gradient: 'from-red-950 to-red-700' },
  { name: 'Seafood Dishes', id: 'seafood-dishes', gradient: 'from-blue-800 to-blue-500' },
  { name: 'Baked Goods & Pastries', id: 'baked-goods', gradient: 'from-amber-700 to-yellow-400' },
]

export default function AboutSection() {
  return (
    <section className="bg-warm pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block font-lato text-xs font-semibold tracking-[0.22em] text-accent uppercase mb-5"
          >
            Our Story
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-playfair font-bold text-primary text-4xl md:text-5xl lg:text-[3.25rem] leading-tight mb-7"
          >
            Betty's —{' '}
            <br className="hidden sm:block" />
            <span className="text-accent italic">Home of Ilonggo Comfort Food</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="font-lato text-base md:text-lg text-primary/65 leading-relaxed mb-5">
            If you're looking for authentic Ilonggo comfort food in Iloilo, one of the popular spots
            right now is Betty's Ilonggo Table and Bakehouse.
          </motion.p>
          <motion.p variants={fadeUp} className="font-lato text-base md:text-lg text-primary/65 leading-relaxed">
            Betty's is a Filipino restaurant and bakehouse that focuses on traditional Ilonggo cuisine
            with a modern and cozy dining experience. It has become known among locals and visitors for
            serving nostalgic home-style dishes in a stylish but welcoming setting.
          </motion.p>
        </motion.div>

        {/* Horizontal rule with icon */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="flex-1 h-px bg-tan" />
          <span className="text-accent text-xl">✦</span>
          <div className="flex-1 h-px bg-tan" />
        </motion.div>

        {/* Value cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 280, damping: 20 }}
              className={`relative rounded-2xl p-8 text-center overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 ${
                value.dark
                  ? 'bg-primary'
                  : 'bg-warm border border-tan/70'
              }`}
            >
              {/* Decorative top-right corner glow */}
              <div className={`absolute -top-6 -right-6 w-24 h-24 rounded-full blur-2xl ${
                value.dark ? 'bg-accent/20' : 'bg-primary/8'
              }`} />

              {/* Icon bubble */}
              <div className={`relative w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 ${
                value.dark
                  ? 'bg-accent/15 border border-accent/25'
                  : 'bg-cream border border-tan'
              }`}>
                <span className="text-3xl leading-none">{value.icon}</span>
              </div>

              {/* Title */}
              <h3 className={`relative font-playfair text-lg font-bold mb-3 ${
                value.dark ? 'text-accent' : 'text-primary'
              }`}>
                {value.title}
              </h3>

              {/* Description */}
              <p className={`relative font-lato text-sm leading-relaxed ${
                value.dark ? 'text-tan/75' : 'text-primary/60'
              }`}>
                {value.description}
              </p>

              {/* Bottom accent bar */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl ${
                value.dark ? 'bg-accent/40' : 'bg-primary/15'
              }`} />
            </motion.div>
          ))}
        </motion.div>

        {/* House favorites showcase */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-playfair text-2xl md:text-3xl font-bold text-primary mb-2"
          >
            House Favorites
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-lato text-sm text-primary/50 mb-8"
          >
            A few of the dishes that made Betty's famous
          </motion.p>

          <motion.div
            variants={stagger}
            className="flex flex-wrap justify-center gap-4"
          >
            {showcaseDishes.map((dish) => (
              <motion.div key={dish.name} variants={fadeUp}>
                <Link
                  href={`/gallery#${dish.id}`}
                  className={`block bg-gradient-to-br ${dish.gradient} text-white px-7 py-3.5 rounded-2xl shadow-md hover:shadow-xl hover:brightness-110 hover:-translate-y-1 transition-all duration-300`}
                >
                  <span className="font-playfair text-base sm:text-lg font-semibold tracking-wide">
                    {dish.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
