import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import WhyUs from './components/WhyUs'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'
import MouseFollower from './components/MouseFollower'

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050816] text-white overflow-x-hidden">
      <AnimatedBackground />
      <MouseFollower />
      <Navbar />
      <main>
        <section id="inicio">
          <Hero />
        </section>
        <section id="servicios">
          <Services />
        </section>
        <section id="proceso">
          <Process />
        </section>
        <WhyUs />
        <Portfolio />
        <section id="nosotros">
          <About />
        </section>
        <section id="contacto">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}
