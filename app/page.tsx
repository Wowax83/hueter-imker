import Hero from './components/Hero'
import AsiatischeHornisse from './components/AsiatischeHornisse'
import BeratungSection from './components/BeratungSection'
import Vorstellung from './components/Vorstellung'
import HonigListe from './components/HonigListe'
import BestellFormular from './components/BestellFormular'
import KontaktFormular from './components/KontaktFormular'
import Footer from './components/Footer'
import Nav from './components/Nav'
import { ContactBar } from './components/ContactBar'

export default function Home() {
  return (
    <main>
      <div id="top" />
      <ContactBar />
      <Nav />
      <Hero />
      <AsiatischeHornisse />
      <BeratungSection />
      <Vorstellung />
      <HonigListe />
      <BestellFormular />
      <KontaktFormular />
      <Footer />
    </main>
  )
}
