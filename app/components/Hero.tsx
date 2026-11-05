import Reveal from './Reveal'
import { ArrowRight, Phone, Bug } from 'lucide-react'

function HoneycombBg() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.13] pointer-events-none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="hc-bg" width="80" height="70" patternUnits="userSpaceOnUse">
          <polygon
            points="40,4 76,24 76,54 40,74 4,54 4,24"
            fill="#f5b942"
            stroke="#ffffff"
            strokeWidth="3"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hc-bg)" />
    </svg>
  )
}

function HoneycombHalo() {
  return (
    <svg viewBox="0 0 400 400" className="absolute inset-0 -z-10" aria-hidden="true">
      <defs>
        <radialGradient id="halo" cx="0.5" cy="0.5" r="0.55">
          <stop offset="0" stopColor="#fbbf24" stopOpacity="0.35" />
          <stop offset="0.5" stopColor="#f59e0b" stopOpacity="0.12" />
          <stop offset="1" stopColor="#fde68a" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="200" r="190" fill="url(#halo)" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fffaf0] to-honig-100 py-20 md:py-28 border-b border-honig-200">
      <HoneycombBg />
      <HoneycombHalo />

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
