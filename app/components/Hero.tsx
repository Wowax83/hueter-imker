import Reveal from './Reveal'
import { ArrowRight, Phone } from 'lucide-react'

function HoneycombBg() {
  // Dezente Wabenstruktur im Hintergrund
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="hc" width="56" height="48" patternUnits="userSpaceOnUse" patternTransform="scale(1)">
          <polygon points="28,0 56,16 56,40 28,48 0,40 0,16" fill="none" stroke="#78350f" strokeWidth="1.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hc)" />
    </svg>
  )
}

function Bee() {
  return (
    <svg viewBox="0 0 200 160" className="w-44 sm:w-56 md:w-64" aria-hidden="true">
      <defs>
        <radialGradient id="beeBody" cx="0.4" cy="0.5">
          <stop offset="0" stopColor="#fbbf24" />
          <stop offset="1" stopColor="#b45309" />
        </radialGradient>
      </defs>
      {/* Flügel hinten */}
      <ellipse cx="135" cy="35" rx="42" ry="20" fill="#fff" opacity="0.75" stroke="#78350f" strokeWidth="1" />
      <ellipse cx="115" cy="50" rx="38" ry="18" fill="#fff" opacity="0.75" stroke="#78350f" strokeWidth="1" />
      {/* Hinterleib */}
      <ellipse cx="100" cy="100" rx="55" ry="40" fill="url(#beeBody)" stroke="#78350f" strokeWidth="2" />
      {/* Streifen */}
      <path d="M62 75 Q100 68 138 75" stroke="#3f2904" stroke-width="6" fill="none" opacity="0.85" />
      <path d="M55 95 Q100 88 145 95" stroke="#3f2904" stroke-width="6" fill="none" opacity="0.85" />
      <path d="M62 115 Q100 122 138 115" stroke="#3f2904" stroke-width="6" fill="none" opacity="0.85" />
      {/* Kopf */}
      <circle cx="55" cy="105" r="22" fill="#78350f" />
      {/* Fühler */}
      <path d="M48 88 Q40 75 38 60" stroke="#3f2904" stroke-width="2.5" fill="none" strokeLinecap="round" />
      <path d="M52 86 Q50 72 52 58" stroke="#3f2904" stroke-width="2.5" fill="none" strokeLinecap="round" />
      <circle cx="38" cy="60" r="2.5" fill="#3f2904" />
      <circle cx="52" cy="58" r="2.5" fill="#3f2904" />
      {/* Auge */}
      <circle cx="48" cy="103" r="4" fill="#fef3c7" />
      <circle cx="49" cy="103" r="2" fill="#000" />
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

        {/* Rechte Seite: Biene + Waben */}
        <Reveal effect="pop" delay={300} className="flex justify-center">
          <div className="relative">
            {/* Wabe dahinter */}
            <svg viewBox="0 0 280 280" className="absolute -inset-6 w-[calc(100%+3rem)]" aria-hidden="true">
              <defs>
                <linearGradient id="wabeFill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="#f5b942" />
                  <stop offset="1" stopColor="#d97706" />
                </linearGradient>
              </defs>
              {Array.from({ length: 5 }).map((_, row) =>
                Array.from({ length: 4 }).map((_, col) => {
                  const cx = 50 + col * 60 + (row % 2 === 0 ? 0 : 30)
                  const cy = 50 + row * 50
                  if (cx > 280) return null
                  return (
                    <polygon
                      key={`${row}-${col}`}
                      points={`${cx},${cy - 28} ${cx + 28},${cy - 14} ${cx + 28},${cy + 14} ${cx},${cy + 28} ${cx - 28},${cy + 14} ${cx - 28},${cy - 14}`}
                      fill="url(#wabeFill)"
                      stroke="#78350f"
                      strokeWidth="2"
                      opacity="0.85"
                    />
                  )
                })
              )}
            </svg>
            <Bee />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
