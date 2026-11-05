import Reveal from './Reveal'
import { ArrowRight, Phone, Bug } from 'lucide-react'

function MeshGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute -top-28 -left-24 w-[32rem] h-[32rem] rounded-full bg-amber-300/40 blur-3xl" />
      <div className="absolute top-1/4 -right-32 w-[36rem] h-[36rem] rounded-full bg-amber-200/40 blur-3xl" />
      <div className="absolute -bottom-32 left-1/4 w-[30rem] h-[30rem] rounded-full bg-honig-500/25 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[26rem] h-[26rem] rounded-full bg-honig-100/60 blur-3xl" />
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fffaf0] to-honig-100 py-20 md:py-28 border-b border-honig-200">
      <MeshGradient />

      <div className="relative max-w-3xl mx-auto px-4 text-center">
        <Reveal effect="fade-in" delay={0}>
          <p className="text-honig-700 uppercase tracking-[0.18em] text-xs mb-3 font-medium">
            Wespen · Hornissen · Asiatische Hornisse
          </p>
        </Reveal>
        <Reveal effect="pop" delay={120}>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-4 tracking-tight text-honig-900">
            Nester sicher <span className="text-honig-700">entfernen</span>
          </h1>
        </Reveal>
        <Reveal effect="fade-up" delay={260}>
          <p className="text-honig-700 italic text-xl md:text-2xl mb-6 font-serif">
            Bienen Hüter Pfalz · Alexander Hüter
          </p>
        </Reveal>
        <Reveal effect="fade-up" delay={360}>
          <p className="text-base md:text-lg text-honig-900/80 mb-10 leading-relaxed max-w-2xl mx-auto">
            Wespennest im Rollladenkasten? Hornissen unterm Dach? Ich entferne Nester
            fachgerecht und sicher – auch die invasive Asiatische Hornisse. Kostenlose
            Ersteinschätzung in Frankenthal und Umgebung.
          </p>
        </Reveal>
        <Reveal effect="fade-up" delay={480}>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="tel:+4915203180359"
              className="inline-flex items-center gap-2 bg-honig-600 hover:bg-honig-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition font-medium"
            >
              <Phone size={18} /> Jetzt anrufen
            </a>
            <a
              href="#hornisse"
              className="inline-flex items-center gap-2 bg-white hover:bg-honig-50 border border-honig-300 text-honig-900 px-6 py-3 rounded-xl shadow-sm transition font-medium"
            >
              <Bug size={18} /> Asiatische Hornisse <ArrowRight size={18} />
            </a>
            <a
              href="#honig"
              className="inline-flex items-center gap-2 bg-white hover:bg-honig-50 border border-honig-300 text-honig-900 px-6 py-3 rounded-xl shadow-sm transition font-medium"
            >
              Honig
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
