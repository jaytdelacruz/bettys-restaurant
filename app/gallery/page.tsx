import GalleryGrid from '@/components/GalleryGrid'
import PromoCarousel from '@/components/PromoCarousel'

export default function GalleryPage() {
  return (
    <div className="bg-cream pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Promo Carousel */}
        <PromoCarousel />
      </div>
      {/* Dish Gallery */}
      <GalleryGrid />
    </div>
  )
}
