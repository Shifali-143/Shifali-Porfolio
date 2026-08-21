import { useScrollSpy } from './hooks/useScrollSpy'
import { Navbar } from './components/Navbar'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Experience } from './components/sections/Experience'
import { Projects } from './components/sections/Projects'
import { Education } from './components/sections/Education'
import { Contact } from './components/sections/Contact'
import { Footer } from './components/Footer'

export default function App() {
  const activeSection = useScrollSpy()

  return (
    <div className="min-h-screen relative">
      <Navbar activeSection={activeSection} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}
