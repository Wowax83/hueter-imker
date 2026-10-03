import Reveal from './Reveal'
import { ArrowRight, Phone } from 'lucide-react'

function HoneycombBg() {
  // Waben-Pattern im Section-Hintergrund - honigfarben, mit weisser Outline
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

function Bee() {
  // Vintage-Biene im Stil der Referenz: detailliert, anatomisch, schraffiert.
  // Aufbau:
  //  - Flügel (hinten, transparent mit Adern)
  //  - Thorax (flauschig, mit feinen Strichen als Behaarung)
  //  - Abdomen (segmentiert mit dunklen Bandern)
  //  - Kopf (Mandibel, Fuhler, Auge)
  //  - Beine (6, davon 2 vorne sichtbar)
  return (
    <svg viewBox="0 0 280 280" className="w-64 sm:w-80 md:w-96 lg:w-[26rem]" aria-hidden="true">
      <defs>
        {/* Koerper-Verlauf: dunkles Honigbraun */}
        <radialGradient id="thoraxGrad" cx="0.4" cy="0.5" r="0.6">
          <stop offset="0" stopColor="#a16207" />
          <stop offset="1" stopColor="#3f2904" />
        </radialGradient>
        <radialGradient id="abdomenGrad" cx="0.5" cy="0.4" r="0.7">
          <stop offset="0" stopColor="#92400e" />
          <stop offset="0.7" stopColor="#451a03" />
          <stop offset="1" stopColor="#1c0d02" />
        </radialGradient>

        {/* Fluessel-Verlauf: leicht blaeulich-transparent */}
        <linearGradient id="wingGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#e0f2fe" stopOpacity="0.55" />
          <stop offset="1" stopColor="#fef3c7" stopOpacity="0.25" />
        </linearGradient>

        {/* Schatten fuer Tiefe */}
        <filter id="beeShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
          <feOffset dx="3" dy="6" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.4" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Clip-Pfad fuer Abdomen-Segmente (Stripe-Beschraenkung) */}
        <clipPath id="abdomenClip">
          <ellipse cx="140" cy="170" rx="62" ry="44" />
        </clipPath>
      </defs>

      <g filter="url(#beeShadow)">
        {/* === FLUEGEL (hinten) === */}
        <g transform="rotate(-20 175 110)">
          <ellipse cx="180" cy="105" rx="60" ry="28" fill="url(#wingGrad)" stroke="#78350f" strokeWidth="1.2" />
          {/* Fluegeladern */}
          <g stroke="#78350f" strokeWidth="0.7" fill="none" opacity="0.7">
            <path d="M125 100 Q160 95 230 105" />
            <path d="M130 115 Q170 115 225 115" />
            <path d="M135 90 Q165 80 220 90" />
            <path d="M140 125 Q175 130 215 130" />
            <path d="M150 80 Q170 75 195 80" />
          </g>
        </g>
        <g transform="rotate(15 200 105)">
          <ellipse cx="205" cy="115" rx="55" ry="24" fill="url(#wingGrad)" stroke="#78350f" strokeWidth="1.2" />
          <g stroke="#78350f" strokeWidth="0.7" fill="none" opacity="0.7">
            <path d="M155 110 Q185 105 250 115" />
            <path d="M160 125 Q190 125 245 130" />
            <path d="M165 100 Q190 95 240 105" />
            <path d="M170 135 Q195 140 235 140" />
          </g>
        </g>

        {/* === THORAX (flauschig) === */}
        <ellipse cx="135" cy="135" rx="38" ry="30" fill="url(#thoraxGrad)" />
        {/* Thorax-Behaarung: feine gebogene Striche */}
        <g stroke="#fef3c7" strokeWidth="0.6" fill="none" opacity="0.7">
          {Array.from({ length: 60 }).map((_, i) => {
            const angle = (i / 60) * Math.PI * 2
            const cx = 135 + Math.cos(angle) * (20 + Math.random() * 12)
            const cy = 135 + Math.sin(angle) * (20 + Math.random() * 10)
            const len = 4 + Math.random() * 5
            const dx = Math.cos(angle) * len
            const dy = Math.sin(angle) * len
            return <line key={i} x1={cx} y1={cy} x2={cx + dx} y2={cy + dy} />
          })}
        </g>

        {/* === ABDOMEN (segmentiert) === */}
        <ellipse cx="170" cy="170" rx="62" ry="44" fill="url(#abdomenGrad)" />

        {/* Segmentierungs-Stripes (dunkel-honig mit helleren Saeumen) */}
        <g clipPath="url(#abdomenClip)">
          <path d="M110 158 Q170 152 230 160" stroke="#1c0a02" strokeWidth="6" fill="none" />
          <path d="M108 184 Q170 178 232 186" stroke="#1c0a02" strokeWidth="6" fill="none" />
          <path d="M118 210 Q170 216 222 212" stroke="#1c0a02" strokeWidth="6" fill="none" />
          {/* Honiggelbe Saeume zwischen Segmenten */}
          <path d="M115 150 Q170 144 225 152" stroke="#d97706" strokeWidth="2" fill="none" opacity="0.8" />
          <path d="M113 176 Q170 170 227 178" stroke="#d97706" strokeWidth="2" fill="none" opacity="0.8" />
          <path d="M120 202 Q170 208 220 204" stroke="#d97706" strokeWidth="2" fill="none" opacity="0.8" />
        </g>

        {/* Abdomen-Behaarung (subtiler als Thorax) */}
        <g stroke="#fde68a" strokeWidth="0.4" fill="none" opacity="0.5">
          {Array.from({ length: 35 }).map((_, i) => {
            const angle = (i / 35) * Math.PI * 2
            const cx = 170 + Math.cos(angle) * (40 + (i % 3) * 8)
            const cy = 170 + Math.sin(angle) * (30 + (i % 4) * 5)
            const len = 3 + (i % 3)
            const dx = Math.cos(angle) * len
            const dy = Math.sin(angle) * len
            return <line key={i} x1={cx} y1={cy} x2={cx + dx} y2={cy + dy} />
          })}
        </g>

        {/* === KOPF === */}
        <ellipse cx="80" cy="155" rx="22" ry="26" fill="#1c0a02" />
        {/* Auge (grosser Facettenaugen-Look) */}
        <ellipse cx="73" cy="148" rx="9" ry="13" fill="#1c0a02" stroke="#d97706" strokeWidth="1" />
        <ellipse cx="73" cy="148" rx="7" ry="11" fill="#451a03" />
        {/* Augen-Facetten (gepunktete Struktur) */}
        <g fill="#d97706" opacity="0.5">
          <circle cx="71" cy="145" r="0.8" />
          <circle cx="74" cy="143" r="0.7" />
          <circle cx="76" cy="147" r="0.8" />
          <circle cx="73" cy="150" r="0.7" />
          <circle cx="70" cy="152" r="0.8" />
        </g>
        {/* Augen-Glanz */}
        <ellipse cx="71" cy="144" rx="2" ry="2.5" fill="#fff" opacity="0.7" />

        {/* Mandibel */}
        <path d="M62 175 Q65 182 70 178" stroke="#1c0a02" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M68 175 Q70 180 75 178" stroke="#1c0a02" strokeWidth="1.5" fill="none" strokeLinecap="round" />

        {/* Fühler (geknickt) */}
        <path d="M73 132 Q60 115 65 95" stroke="#1c0a02" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M65 95 L70 92" stroke="#1c0a02" strokeWidth="2" strokeLinecap="round" />
        <circle cx="65" cy="95" r="1.5" fill="#d97706" />
        <path d="M85 130 Q80 113 88 100" stroke="#1c0a02" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="88" cy="100" r="1.5" fill="#d97706" />

        {/* === BEINE (3 sichtbar, jeweils 2 Segmente) === */}
        <g stroke="#1c0a02" strokeWidth="2" fill="none" strokeLinecap="round">
          {/* Vorderbein links */}
          <path d="M120 145 L108 175 L115 195" />
          <path d="M120 145 L108 145 L100 158" />
          {/* Mittelbein links */}
          <path d="M140 158 L130 188 L132 210" />
          {/* Hinterbein rechts */}
          <path d="M180 195 L195 220 L210 235" />
        </g>

        {/* === Korper-Glanz (Highlight auf Thorax) === */}
        <ellipse cx="120" cy="125" rx="10" ry="6" fill="#fef3c7" opacity="0.4" />

        {/* === Stinger === */}
        <path d="M225 178 L240 180 L225 184 Z" fill="#1c0a02" />
      </g>
    </svg>
  )
}

function HoneycombHalo() {
  // Dezenter radialer Honig-Glow direkt hinter der Biene
  return (
    <svg viewBox="0 0 400 400" className="absolute inset-0 z-0" aria-hidden="true">
      <defs>
        <radialGradient id="halo" cx="0.5" cy="0.5" r="0.55">
          <stop offset="0" stopColor="#fbbf24" stopOpacity="0.4" />
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

        {/* Rechte Seite: Halo + detaillierte Vintage-Biene im Vordergrund */}
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
