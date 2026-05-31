import Hero from '@/components/Hero'
import SobreFenty from '@/components/SobreFenty'
import Blog from '@/components/Blog'
import Propuestas from '@/components/Propuestas'
import Trabajo from '@/components/Trabajo'

export default function Home() {
  return (
    <main>
      <Hero />
      <SobreFenty />
      <Blog />
      <Propuestas />
      <Trabajo />
    </main>
  )
}
