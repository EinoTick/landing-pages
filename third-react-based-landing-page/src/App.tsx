import Layout from './layout/Layout'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechMarquee from './components/TechMarquee'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Footer from './components/Footer'
import {u} from "framer-motion/m";

function App() {


  const selectionSort = (arr: number[]) => {
    const sortedArray = arr.slice()
    for (let i=0; i<arr.length; i++) {
      let smallestValue = sortedArray[i]
      let smallestValuePosition = i
      for (let u=i; u<arr.length; u++) {
        if (sortedArray[u] < smallestValue) {
          smallestValue = sortedArray[u]
          smallestValuePosition = u
        }
      }
      if (smallestValuePosition !== i) {
        const temp = sortedArray[i]
        sortedArray[i] = sortedArray[smallestValuePosition]
        sortedArray[smallestValuePosition] = temp
      }
    }

    console.log('Original Array: ', arr)
    console.log('Sorted Array: ', sortedArray)
  }

  selectionSort([1,5,2,3,7,6,9,3])




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
