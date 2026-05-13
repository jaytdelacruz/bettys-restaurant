import dynamic from 'next/dynamic'

const PromoCarousel = dynamic(() => import('@/components/PromoCarousel'))
const GalleryGrid = dynamic(() => import('@/components/GalleryGrid'))

export default function GalleryPage() {
  return (
    <div className="bg-cream pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <PromoCarousel />
      </div>
      <GalleryGrid />
    </div>
  )
}
