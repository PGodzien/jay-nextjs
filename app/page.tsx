import Hero from '@/components/header'
import Nav from '@/components/nav'
import Steps from '@/components/steps'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Steps />
    </>
  )
}
