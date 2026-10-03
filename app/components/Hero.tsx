import Reveal from './Reveal'
import { ArrowRight, Phone } from 'lucide-react'

function HoneycombBg() {
  // Wabenstruktur im Section-Background
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
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
      <path d="M62 75 Q100 68 138 75" stroke="#3f2904" strokeWidth="6" fill="none" opacity="0.85" />
      <path d="M55 95 Q100 88 145 95" stroke="#3f2904" strokeWidth="6" fill="none" opacity="0.85" />
      <path d="M62 115 Q100 122 138 115" stroke="#3f2904" strokeWidth="6" fill="none" opacity="0.85" />
      {/* Kopf */}
      <circle cx="55" cy="105" r="22" fill="#78350f" />
      {/* Fühler */}
      <path d="M48 88 Q40 75 38 60" stroke="#3f2904" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M52 86 Q50 72 52 58" stroke="#3f2904" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="38" cy="60" r="2.5" fill="#3f2904" />
      <circle cx="52" cy="58" r="2.5" fill="#3f2904" />
      {/* Auge */}
      <circle cx="48" cy="103" r="4" fill="#fef3c7" />
      <circle cx="49" cy="103" r="2" fill="#000" />
    </svg>
  )
}

function HoneycombCluster() {
  // Organischer Waben-Cluster: verschiedene Groessen, Honig-Verlauf,
  // Glanzlichter, weiche Outlines. Liegt hinter der Biene.
  // viewBox 0..420 x 0..420
  type Cell = { cx: number; cy: number; r: number; tone: 'dark' | 'medium' | 'light' }

  const cells: Cell[] = [
    // Zentraler grosser Block
    { cx: 210, cy: 210, r: 50, tone: 'dark' },
    // naechste Ring
    { cx: 145, cy: 210, r: 45, tone: 'medium' },
    { cx: 275, cy: 210, r: 45, tone: 'medium' },
    { cx: 210, cy: 145, r: 45, tone: 'medium' },
    { cx: 210, cy: 275, r: 45, tone: 'medium' },
    // diagonal oben links
    { cx: 80, cy: 145, r: 42, tone: 'light' },
    { cx: 145, cy: 80, r: 42, tone: 'dark' },
    // diagonal oben rechts
    { cx: 340, cy: 145, r: 42, tone: 'light' },
    { cx: 275, cy: 80, r: 42, tone: 'dark' },
    // diagonal unten links
    { cx: 80, cy: 275, r: 42, tone: 'light' },
    { cx: 145, cy: 340, r: 42, tone: 'dark' },
    // diagonal unten rechts
    { cx: 340, cy: 275, r: 42, tone: 'light' },
    { cx: 275, cy: 340, r: 42, tone: 'dark' },
    // Aussen klein
    { cx: 35, cy: 210, r: 30, tone: 'light' },
    { cx: 385, cy: 210, r: 30, tone: 'light' },
    { cx: 210, cy: 35, r: 30, tone: 'light' },
    { cx: 210, cy: 385, r: 30, tone: 'light' },
    // ganz aussen winzig
    { cx: 35, cy: 35, r: 22, tone: 'medium' },
    { cx: 385, cy: 35, r: 22, tone: 'medium' },
    { cx: 35, cy: 385, r: 22, tone: 'medium' },
    { cx: 385, cy: 385, r: 22, tone: 'medium' },
  ]

  // Hexagon-Punkte (pointy-top orientation
  function hexPoints(cx: number, cy: number, r: number): string {
    const pts: string[] = []
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i - Math.PI / 2 // start oben
      const x = cx + r * Math.cos(angle)
      const y = cy + r * Math.sin(angle)
      pts.push(`${x.toFixed(1)},${y.toFixed(1)}`)
    }
    return pts.join(' ')
  }

  const gradientFor = (id: string, tone: string) => (
    <linearGradient id={id} x1="0" x2="0" y1="0" y2="1">
      {tone === 'dark' ? (
        <>
          <stop offset="0" stopColor="#f59e0b" />
          <stop offset="0.5" stopColor="#d97706" />
          <stop offset="1" stopColor="#7c2d12" />
        </>
      ) : tone === 'medium' ? (
        <>
          <stop offset="0" stopColor="#fbbf24" />
          <stop offset="0.6" stopColor="#f59e0b" />
          <stop offset="1" stopColor="#b45309" />
        </>
      ) : (
        <>
          <stop offset="0" stopColor="#fde68a" />
          <stop offset="1" stopColor="#f5b942" />
        </>
      )}
    </linearGradient>
  )

  return (
    <svg viewBox="0 0 420 420" className="absolute -inset-12 w-[calc(100%+6rem)]" aria-hidden="true">
      <defs>
        {/* Verlaeufe pro Zelle */}
        {cells.map((c, i) => (
          <linearGradient key={c.cx} id={`wabe-${i}`} x1="0" x2="0" y1="0" y2="1">
            {c.tone === 'dark' ? (
              <>
                <stop offset="0" stopColor="#f59e0b" />
                <stop offset="0.5" stopColor="#d97706" />
                <stop offset="1" stopColor="#7c2d12" />
              </>
            ) : c.tone === 'medium' ? (
              <>
                <stop offset="0" stopColor="#fbbf24" />
                <stop offset="0.6" stopColor="#f59e0b" />
                <stop offset="1" stopColor="#b45309" />
              </>
            ) : (
              <>
                <stop offset="0" stopColor="#fde68a" />
                <stop offset="1" stopColor="#f5b942" />
              </>
            )}
          </linearGradient>
        ))}

        {/* Glanzlicht-Filter (weicher Schein oben links pro Zelle) */}
        <radialGradient id="shine" cx="0.3" cy="0.25" r="0.6">
          <stop offset="0" stopColor="#fff" stopOpacity="0.65" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0.15" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>

        {/* Schatten-Filter fuer Tiefe */}
        <filter id="dropshadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="2" dy="3" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.35" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Honig-* Hintergrund-Glow */}
      <circle cx="210" cy="210" r="200" fill="#fef3c7" opacity="0.35" />

      {/* Waben zeichnen */}
      <g filter="url(#dropshadow)">
        {cells.map((c, i) => (
          <polygon
            key={i}
            points={hexPoints(c.cx, c.cy, c.r)}
            fill={`url(#wabe-${i})`}
            stroke="#78350f"
            strokeWidth={c.tone === 'light' ? 1.2 : 1.8}
            strokeLinejoin="round"
          />
        ))}
      </g>

      {/* Glanzlichter */}
      {cells.map((c, i) => (
        <polygon
          key={`shine-${i}`}
          points={hexPoints(c.cx, c.cy, c.r * 0.85)}
          fill="url(#shine)"
          pointerEvents="none"
        />
      ))}

      {/* Zarte Honig-Tropfen in 4 zentralen Zellen */}
      {cells.slice(0, 4).map((c, i) => (
        <g key={`drop-${i}`} opacity="0.55">
          <circle cx={c.cx - c.r * 0.15} cy={c.cy + c.r * 0.2} r="2.5" fill="#fff" />
          <circle cx={c.cx - c.r * 0.15} cy={c.cy + c.r * 0.2} r="4" fill="#fff" opacity="0.4" />
        </g>
      ))}
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

        {/* Rechte Seite: Biene + Waben-Cluster */}
        <Reveal effect="pop" delay={300} className="flex justify-center">
          <div className="relative">
            <HoneycombCluster />
            <Bee />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
