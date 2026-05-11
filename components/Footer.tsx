import Link from 'next/link'

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-primary text-warm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link href="/" className="font-playfair text-3xl font-bold text-accent hover:text-warm transition-colors">
              Betty's
            </Link>
            <p className="font-lato text-sm text-tan/60 mt-1">Authentic Filipino Cuisine</p>
            <p className="font-lato text-xs text-tan/40 mt-0.5">Iloilo City, Philippines</p>
          </div>

          {/* Quick links */}
          <div className="text-center md:text-right">
            <p className="font-lato text-xs font-semibold tracking-widest text-tan/40 uppercase mb-3">Quick Links</p>
            <nav className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-lato text-sm text-tan/70 hover:text-accent transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Hours snippet */}
          <div className="text-center md:text-right">
            <p className="font-lato text-xs font-semibold tracking-widest text-tan/40 uppercase mb-3">Hours</p>
            <p className="font-lato text-sm text-tan/70">Monday – Sunday</p>
            <p className="font-lato text-sm text-accent font-medium">10:00 AM – 9:00 PM</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-tan/15 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-lato text-xs text-tan/40">
            © 2026 Betty's Filipino Restaurant. All rights reserved.
          </p>
        </div>

        {/* Portfolio disclaimer */}
        <div className="border-t border-tan/10 mt-4 pt-4 text-center">
          <p className="font-lato text-[11px] text-tan/30 italic">
            This is an independent sample redesign created for portfolio purposes only.
          </p>
        </div>
      </div>
    </footer>
  )
}
