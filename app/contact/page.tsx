'use client'

import { motion } from 'framer-motion'
import ContactForm from '@/components/ContactForm'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const contactDetails = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: 'Address',
    value: 'Aurora Subdivision, 8 Maria Clara Avenue, Iloilo City Proper, Iloilo City, Philippines',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Hours',
    value: 'Open daily · 7:00 AM – 9:00 PM',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'Email',
    value: 'hello@bettysrestaurant.ph',
  },
]

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/bettysiloilo',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/bettysiloilo/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: 'Google Maps',
    href: 'https://maps.app.goo.gl/4194NsHArXBpDkpV8',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
  },
]

export default function ContactPage() {
  return (
    <section className="bg-cream min-h-screen pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block font-lato text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-4"
          >
            Get in Touch
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4"
          >
            We'd Love to Hear{' '}
            <span className="text-accent italic">from You</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="font-lato text-base md:text-lg text-primary/65 max-w-xl mx-auto leading-relaxed"
          >
            Whether you have a reservation, a catering inquiry, or just want to say hi — our
            doors (and inboxes) are always open.
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-primary rounded-3xl p-8 md:p-10 text-warm h-full">
              {/* Restaurant brand inside card */}
              <div className="mb-8 pb-6 border-b border-tan/20">
                <p className="font-playfair text-3xl font-bold text-accent mb-1">Betty's</p>
                <p className="font-lato text-sm text-tan/70">Authentic Ilonggo Cuisine · Iloilo City</p>
              </div>

              <div className="space-y-6">
                {contactDetails.map((detail) => (
                  <div key={detail.label} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent mt-0.5">
                      {detail.icon}
                    </div>
                    <div>
                      <p className="font-lato text-xs font-semibold tracking-widest text-tan/50 uppercase mb-0.5">
                        {detail.label}
                      </p>
                      <p className="font-lato text-sm text-tan/90 leading-snug">{detail.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social media links */}
              <div className="mt-8 pt-6 border-t border-tan/20">
                <p className="font-lato text-xs font-semibold tracking-widest text-tan/50 uppercase mb-4">
                  Follow Us
                </p>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex items-center gap-2.5 bg-accent/15 hover:bg-accent text-accent hover:text-warm px-4 py-2.5 rounded-xl transition-all duration-200 group"
                    >
                      <span className="flex-shrink-0">{social.icon}</span>
                      <span className="font-lato text-sm font-medium">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Decorative quote */}
              <div className="mt-8 pt-6 border-t border-tan/20">
                <p className="font-playfair text-base italic text-accent/80 leading-relaxed">
                  "Come hungry, leave happy. That's the Betty's promise."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="bg-warm border border-tan rounded-3xl p-8 md:p-10 shadow-sm">
              <h2 className="font-playfair text-2xl font-bold text-primary mb-2">Send Us a Message</h2>
              <p className="font-lato text-sm text-primary/55 mb-8">
                We typically respond within 24 hours.
              </p>
              <ContactForm />
            </div>
          </motion.div>
        </div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 rounded-3xl overflow-hidden border border-tan h-56 md:h-72 bg-gradient-to-br from-tan/40 via-accent/10 to-tan/20 flex items-center justify-center"
        >
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-primary/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <p className="font-lato text-sm text-primary/40">8 Maria Clara Avenue, Iloilo City</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
