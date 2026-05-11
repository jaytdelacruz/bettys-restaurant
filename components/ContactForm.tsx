'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

const inputClass =
  'w-full bg-cream border border-tan rounded-xl px-4 py-3 font-lato text-sm text-primary placeholder:text-primary/35 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200'

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 900))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.93 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center text-center py-12"
        >
          <div className="w-20 h-20 rounded-full bg-accent/15 flex items-center justify-center mb-6">
            <span className="text-4xl">🍲</span>
          </div>
          <h3 className="font-playfair text-2xl font-bold text-primary mb-3">
            Message Sent!
          </h3>
          <p className="font-lato text-sm text-primary/60 max-w-xs leading-relaxed mb-6">
            Thank you for reaching out, {formData.name.split(' ')[0]}! We'll get back to you
            within 24 hours.
          </p>
          <button
            onClick={() => {
              setSubmitted(false)
              setFormData({ name: '', email: '', phone: '', message: '' })
            }}
            className="font-lato text-sm font-medium text-accent underline underline-offset-2 hover:text-primary transition-colors"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block font-lato text-xs font-semibold tracking-wide text-primary/60 uppercase mb-1.5">
              Name <span className="text-accent">*</span>
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
              className={inputClass}
            />
          </div>

          {/* Email + Phone row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="email" className="block font-lato text-xs font-semibold tracking-wide text-primary/60 uppercase mb-1.5">
                Email <span className="text-accent">*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block font-lato text-xs font-semibold tracking-wide text-primary/60 uppercase mb-1.5">
                Phone{' '}
                <span className="normal-case font-normal text-primary/35">(optional)</span>
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+63 XXX XXX XXXX"
                className={inputClass}
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block font-lato text-xs font-semibold tracking-wide text-primary/60 uppercase mb-1.5">
              Message <span className="text-accent">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tell us how we can help — reservations, events, catering..."
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-warm py-4 rounded-xl font-lato font-semibold text-sm tracking-wide hover:bg-accent transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg
                  className="w-4 h-4 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
