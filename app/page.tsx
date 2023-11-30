import About from '@/components/about'
import Features from '@/components/features'
import Footer from '@/components/footer'
import Form from '@/components/form'
import Hero from '@/components/header'
import Nav from '@/components/nav'
import Steps from '@/components/steps'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Steps />
      <Features />
      <Form />
      <Footer />
    </>
  )
}
