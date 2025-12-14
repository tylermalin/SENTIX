import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import NetworkStats from '@/components/NetworkStats'
import ArchitectureGrid from '@/components/ArchitectureGrid'
import TokenDynamics from '@/components/TokenDynamics'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <NetworkStats />
      <ArchitectureGrid />
      <TokenDynamics />
      <Footer />
    </main>
  )
}

