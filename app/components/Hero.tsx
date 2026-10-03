import Reveal from './Reveal'
import { ArrowRight, Phone } from 'lucide-react'

function HoneycombBg() {
  // Sehr dezente Wabenstruktur im Section-Hintergrund (Pattern)
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="hc-bg" width="72" height="62" patternUnits="userSpaceOnUse">
          <polygon points="36,2 70,21 70,51 36,62 2,51 2,21" fill="none" stroke="#78350f" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hc-bg)" />
    </svg>
  )
}

function Bee() {
  return (
    <svg viewBox="0 0 220 180" className="w-56 sm:w-72 md:w-80 lg:w-96 drop-shadow-[0_20px_40px_rgba(120,53,15,0.35)]" aria-hidden="true">
      <defs>
        <radialGradient id="beeBody" cx="0.4" cy="0.5">
          <stop offset="0" stopColor="#fcd34d" />
          <stop offset="0.6" stopColor="#f59e0b" />
          <stop offset="1" stopColor="#92400e" />
        </radialGradient>
        <linearGradient id="beeFluegel" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="1" stopColor="#fde68a" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="beeStripe" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#3f2904" />
          <stop offset="1" stopColor="#1f1502" />
        </linearGradient>
      </defs>

      {/* Flügel hinten (mit sanftem Honig-Glow) */}
      <ellipse cx="150" cy="40" rx="48" ry="22" fill="url(#beeFluegel)" stroke="#78350f" strokeWidth="1.2" opacity="0.85" />
      <ellipse cx="125" cy="58" rx="44" ry="20" fill="url(#beeFluegel)" stroke="#78350f" strokeWidth="1.2" opacity="0.85" />

      {/* Hinterleib */}
      <ellipse cx="115" cy="112" rx="65" ry="48" fill="url(#beeBody)" stroke="#78350f" strokeWidth="2.5" />

      {/* Streifen - dunkler, satter */}
      <path d="M70 82 Q115 74 162 82" stroke="url(#beeStripe)" strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d="M62 105 Q115 96 168 105" stroke="url(#beeStripe)" strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d="M70 130 Q115 138 162 130" stroke="url(#beeStripe)" strokeWidth="8" fill="none" strokeLinecap="round" />

      {/* Körper-Glanz */}
      <ellipse cx="95" cy="92" rx="22" ry="10" fill="#fff" opacity="0.45" />

      {/* Kopf */}
      <circle cx="62" cy="118" r="26" fill="#78350f" stroke="#3f2904" strokeWidth="1.5" />
      <ellipse cx="58" cy="115" rx="8" ry="4" fill="#a86f3f" opacity="0.7" />

      {/* Fühler */}
      <path d="M53 99 Q42 84 38 65" stroke="#3f2904" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M58 97 Q56 80 58 62" stroke="#3f2904" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="38" cy="63" r="3.5" fill="#3f2904" />
      <circle cx="58" cy="60" r="3.5" fill="#3f2904" />

      {/* Auge */}
      <circle cx="52" cy="116" r="5" fill="#fef3c7" />
      <circle cx="53" cy="116" r="2.5" fill="#000" />
      <circle cx="54" cy="115" r="1" fill="#fff" />

      {/* Mund */}
      <path d="M40 130 Q42 134 46 132" stroke="#3f2904" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  )
}

function HoneycombHalo() {
  // Dezenter Honig-Halo hinter der Biene - nur Glow + Outline-Ringe, keine dominante Wabenschar
  return (
    <svg viewBox="0 0 400 400" className="absolute inset-0" aria-hidden="true">
      <defs>
        <radialGradient id="halo" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#fbbf24" stopOpacity="0.5" />
          <stop offset="0.6" stopColor="#f5b942" stopOpacity="0.18" />
          <stop offset="1" stopColor="#fde68a" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Glow */}
      <circle cx="200" cy="200" r="195" fill="url(#halo)" />

      {/* Ein paar einzelne Waben als dezente Akzente (nicht-dominant) */}
      <g opacity="0.35" stroke="#78350f" strokeWidth="1" fill="none">
        <polygon points="40,40 60,30 80,40 80,60 60,70 40,60" />
        <polygon points="340,80 360,70 380,80 380,100 360,110 340,100" />
        <polygon points="60,330 80,320 100,330 100,350 80,360 60,350" />
        <polygon points="320,330 340,320 360,330 360,350 340,360 320,350" />
      </g>

      {/* Subtile Hexagon-Outline-Ringe */}
      <g opacity="0.18" stroke="#d97706" fill="none">
        <polygon points="200,80 220,90 220,110 200,120 180,110 180,90" strokeWidth="1" />
        <polygon points="200,280 220,290 220,310 200,320 180,310 180,290" strokeWidth="1" />
        <polygon points="80,200 90,220 90,240 80,250 70,240 70,220" strokeWidth="1" />
        <polygon points="320,200 330,220 330,240 320,250 310,240 310,220" strokeWidth="1" />
      </g>
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

        {/* Rechte Seite: Honig-Halo + Biene im Vordergrund */}
        <div className="flex justify-center relative">
          <HoneycombHalo />
          <Reveal effect="pop" delay={150} className="relative z-10">
            <Bee />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
