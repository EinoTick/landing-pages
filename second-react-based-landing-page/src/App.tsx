import { Layout } from '@/layout/Layout'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { TechStack } from '@/components/TechStack'
import { Services } from '@/components/Services'
import { Process } from '@/components/Process'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'

function App() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <TechStack />
      <Services />
      <Process />
      <FAQ />
      <Footer />
    </Layout>
  )
}

export default App
