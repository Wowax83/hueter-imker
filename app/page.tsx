import Hero from './components/Hero'
import AsiatischeHornisse from './components/AsiatischeHornisse'
import BeratungSection from './components/BeratungSection'
import Vorstellung from './components/Vorstellung'
import HonigListe from './components/HonigListe'
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
      <Footer />
    </main>
  )
}
