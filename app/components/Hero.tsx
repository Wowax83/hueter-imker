import Image from 'next/image'
import Reveal from './Reveal'
import { ArrowRight, Phone } from 'lucide-react'

function HoneycombBg() {
  // Waben-Pattern im Section-Hintergrund
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
    <svg viewBox="0 0 400 400" className="absolute inset-0" aria-hidden="true">
      <defs>
        <radialGradient id="halo" cx="0.5" cy="0.5" r="0.55">
          <stop offset="0" stopColor="#fbbf24" stopOpacity="0.45" />
          <stop offset="0.5" stopColor="#f59e0b" stopOpacity="0.15" />
          <stop offset="1" stopColor="#fde68a" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="200" r="190" fill="url(#halo)" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fffaf0] to-honig-100 py-16 md:py-24 border-b border-honig-200">
      <HoneycombBg />

      <div className="relative max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Linke Seite: Text */}
        <div>
          <Reveal effect="fade-in" delay={0}>
            <p className="text-honig-700 uppercase tracking-[0.18em] text-xs mb-3 font-medium">
              Honig aus Frankenthal und der Pfalz
            </p>
          </Reveal>
          <Reveal effect="pop" delay={120}>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-4 tracking-tight text-honig-900">
              Bienen Hüter <span className="text-honig-700">Pfalz</span>
            </h1>
          </Reveal>
          <Reveal effect="fade-up" delay={260}>
            <p className="text-honig-700 italic text-xl md:text-2xl mb-3 font-serif">
              Hüter Imker
            </p>
          </Reveal>
          <Reveal effect="fade-up" delay={360}>
            <p className="text-base md:text-lg text-honig-900/80 mb-8 leading-relaxed">
              Regionaler Honig und Wespen- &amp; Hornissenberatung direkt aus
              Frankenthal. Alexander Hüter – mit Erfahrung, Ruhe und dem
              richtigen Werkzeug für Bienen wie auch für ungebetene Gäste.
            </p>
          </Reveal>
          <Reveal effect="fade-up" delay={480}>
            <div className="flex flex-wrap gap-3">
              <a
                href="#bestellen"
                className="inline-flex items-center gap-2 bg-honig-600 hover:bg-honig-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition font-medium"
              >
                Honig bestellen <ArrowRight size={18} />
              </a>
              <a
                href="#beratung"
                className="inline-flex items-center gap-2 bg-white hover:bg-honig-50 border border-honig-300 text-honig-900 px-6 py-3 rounded-xl shadow-sm transition font-medium"
              >
                Wespen &amp; Hornissen
              </a>
              <a
                href="tel:+4915203180359"
                className="inline-flex items-center gap-2 sm:hidden bg-honig-900 text-white px-6 py-3 rounded-xl"
              >
                <Phone size={18} /> Anrufen
              </a>
            </div>
          </Reveal>
        </div>

        {/* Rechte Seite: 1911 Britannica Honigbiene-Königin (b) im Vordergrund */}
        <Reveal effect="pop" delay={300} className="flex justify-center relative">
          <HoneycombHalo />
          <div className="relative z-10 bg-gradient-to-br from-honig-50/40 to-honig-100/40 p-6 rounded-2xl shadow-[0_25px_50px_-12px_rgba(120,53,15,0.35)] border border-honig-200/60">
            <Image
              src="/bee-queen-500w.png"
              alt="Vintage-Stich der Honigbiene-Königin (Apis mellifera), aus der 11. Auflage der Encyclopædia Britannica, 1911"
              width={500}
              height={337}
              priority
              className="w-56 sm:w-72 md:w-80 lg:w-96 h-auto"
            />
            <p className="text-[10px] text-honig-700/70 italic mt-3 text-center">
              Honigbiene (Königin) · Encyclopædia Britannica, 1911 · Public Domain
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
