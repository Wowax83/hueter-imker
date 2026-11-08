import Hero from './components/Hero'
import AsiatischeHornisse from './components/AsiatischeHornisse'
import BeratungSection from './components/BeratungSection'
import Projekte from './components/Projekte'
import Vorstellung from './components/Vorstellung'
import Honigfenster from './components/Honigfenster'
import HonigListe from './components/HonigListe'
import Imkerei from './components/Imkerei'
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
      <Projekte />
      <Vorstellung />
      <Honigfenster />
      <HonigListe />
      <Imkerei />
      <Footer />
    </main>
  )
}
