import Hero from './components/Hero'
import Vorstellung from './components/Vorstellung'
import HonigListe from './components/HonigListe'
import BestellFormular from './components/BestellFormular'
import KontaktFormular from './components/KontaktFormular'
import Footer from './components/Footer'
import Nav from './components/Nav'

export default function Home() {
  return (
    <main>
      <div id="top" />
      <Nav />
      <Hero />
      <Vorstellung />
      <HonigListe />
      <BestellFormular />
      <KontaktFormular />
      <Footer />
    </main>
  )
}