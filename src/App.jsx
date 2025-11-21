import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Schedule from './components/Schedule'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0b1220]">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Schedule />
      <Footer />
    </div>
  )
}

export default App
