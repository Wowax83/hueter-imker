import Reveal from './Reveal'
import { ArrowRight, Phone, Bug } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[92vh] flex items-center">
      {/* Hintergrundbild mit langsamem Zoom (Ken-Burns) */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="/hero-bild.jpg"
          alt=""
          className="w-full h-full object-cover animate-hero-zoom"
        />
        {/* Overlay für Text-Kontrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/70" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 py-24 md:py-32 text-center">
        <Reveal effect="fade-in" delay={0}>
          <p className="text-amber-200 uppercase tracking-[0.18em] text-xs md:text-sm mb-3 font-medium drop-shadow">
            Wespen · Hornissen · Asiatische Hornisse
          </p>
        </Reveal>
        <Reveal effect="pop" delay={120}>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-4 tracking-tight text-white drop-shadow-lg">
            Nester sicher <span className="text-honig-300">entfernen</span>
          </h1>
        </Reveal>
        <Reveal effect="fade-up" delay={260}>
          <p className="text-honig-100 italic text-xl md:text-2xl mb-6 font-serif drop-shadow">
            Bienen Hüter Pfalz · Alexander Hüter
          </p>
        </Reveal>
        <Reveal effect="fade-up" delay={360}>
          <p className="text-base md:text-lg text-white/95 mb-10 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            Wespennest im Rollladenkasten? Hornissen unterm Dach? Ich entferne Nester
            fachgerecht und sicher – auch die invasive Asiatische Hornisse. Kostenlose
            Ersteinschätzung in Frankenthal und Umgebung.
          </p>
        </Reveal>
        <Reveal effect="fade-up" delay={480}>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="tel:+4915203180359"
              className="inline-flex items-center gap-2 bg-honig-500 hover:bg-honig-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition font-medium"
            >
              <Phone size={18} /> Jetzt anrufen
            </a>
            <a
              href="#hornisse"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/40 text-white px-6 py-3 rounded-xl shadow-sm transition font-medium"
            >
              <Bug size={18} /> Asiatische Hornisse <ArrowRight size={18} />
            </a>
            <a
              href="#honig"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/40 text-white px-6 py-3 rounded-xl shadow-sm transition font-medium"
            >
              Honig
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
