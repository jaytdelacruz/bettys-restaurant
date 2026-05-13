import dynamic from 'next/dynamic'

const AboutSection = dynamic(() => import('@/components/AboutSection'))

export default function AboutPage() {
  return <AboutSection />
}
