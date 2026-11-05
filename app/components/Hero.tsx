import Reveal from './Reveal'
import { ArrowRight, Phone, Bug } from 'lucide-react'

function MeshGradient() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
      style={{
        background: [
          'radial-gradient(55% 55% at 18% 12%, rgba(251,191,36,0.62) 0%, rgba(251,191,36,0) 65%)',
          'radial-gradient(48% 48% at 84% 26%, rgba(245,158,11,0.5) 0%, rgba(245,158,11,0) 65%)',
          'radial-gradient(52% 52% at 26% 86%, rgba(217,119,6,0.4) 0%, rgba(217,119,6,0) 65%)',
          'radial-gradient(44% 44% at 54% 50%, rgba(252,211,77,0.55) 0%, rgba(252,211,77,0) 65%)',
        ].join(', '),
      }}
    />
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
