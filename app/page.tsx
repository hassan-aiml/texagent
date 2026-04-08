import Banner from '@/components/Banner'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import VSSection from '@/components/VSSection'
import WhoWeServe from '@/components/WhoWeServe'
import Pricing from '@/components/Pricing'
import Expansion from '@/components/Expansion'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Banner />
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <VSSection />
        <WhoWeServe />
        <Pricing />
        <Expansion />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
