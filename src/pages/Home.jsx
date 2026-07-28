import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/home/Hero'
import TrustBar from '../components/home/TrustBar'
import Features from '../components/home/Features'
import HowItWorks from '../components/home/HowItWorks'
import ProductsTeaser from '../components/home/ProductsTeaser'
import Stats from '../components/home/Stats'
import Testimonials from '../components/home/Testimonials'
import Integrations from '../components/home/Integrations'
import CTASection from '../components/home/CTASection'
import FAQ from '../components/home/FAQ'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    const sectionId = location.state?.scrollTo
    if (sectionId) {
      const el = document.getElementById(sectionId)
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }))
      }
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [location])

  return (
    <>
      <Hero />
      <TrustBar />
      <Features />
      <HowItWorks />
      <ProductsTeaser />
      <Stats />
      <Testimonials />
      <Integrations />
      <CTASection />
      <FAQ />
    </>
  )
}
