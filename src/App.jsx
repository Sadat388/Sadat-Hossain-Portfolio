import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'
import { profile } from './data'
export default function App() {
  return (
    <>
      <Nav />
      <main className="wrap">
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Contact />
      </main>
      <footer>© {new Date().getFullYear()} {profile.name.join(' ')}</footer>
    </>
  )
}
