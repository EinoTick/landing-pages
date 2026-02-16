import Layout from './layout/Layout'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechMarquee from './components/TechMarquee'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Footer from './components/Footer'
import {u} from "framer-motion/m";

function App() {

  return (
    <Layout>
      <Navbar />
      <Hero />
      <TechMarquee />
      <Services />
      <WhyUs />
      <Footer />
    </Layout>
  )
}

export default App
