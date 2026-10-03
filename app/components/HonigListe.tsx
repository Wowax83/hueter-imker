import Reveal from './Reveal'
import honig from '@/data/honig.json'

type Honig = {
  slug: string
  name: string
  beschreibung: string
  farbe: string
  preis: string
  gewicht: string
}

function HonigGlas({ farbe }: { farbe: string }) {
  return (
    <svg viewBox="0 0 200 140" className="w-full h-32" aria-hidden="true">
      <defs>
        <linearGradient id={`glas-${farbe.replace('#', '')}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor={farbe} stopOpacity="0.95" />
          <stop offset="1" stopColor={farbe} stopOpacity="0.75" />
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="128" rx="55" ry="6" fill="#000" opacity="0.12" />
      <path
        d="M50 38 Q50 32 56 32 L144 32 Q150 32 150 38 L150 110 Q150 124 136 124 L64 124 Q50 124 50 110 Z"
        fill="#f8f4ea"
        stroke="#d6c9a3"
        strokeWidth="2"
      />
      <path
        d="M56 56 L144 56 L144 110 Q144 122 134 122 L66 122 Q56 122 56 110 Z"
        fill={`url(#glas-${farbe.replace('#', '')})`}
      />
      <rect x="68" y="76" width="64" height="28" rx="2" fill="#fffdf6" stroke="#d6c9a3" strokeWidth="1" />
      <text x="100" y="89" textAnchor="middle" fontSize="7" fill="#78350f" fontFamily="serif">
        Hüter
      </text>
      <text x="100" y="98" textAnchor="middle" fontSize="7" fill="#78350f" fontFamily="serif">
        Imker
      </text>
      <rect x="48" y="22" width="104" height="12" rx="3" fill="#a8b5a3" stroke="#7a8a7a" strokeWidth="1.5" />
      <rect x="48" y="22" width="104" height="3" rx="1" fill="#7a8a7a" />
      <path
        d="M60 50 L60 100"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  )
}

export default function HonigListe() {
  return (
    <section id="honig" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <Reveal effect="fade-up" delay={0}>
            <p className="text-honig-700 uppercase tracking-widest text-xs mb-2">
              Sorten aus dem Jahr
            </p>
          </Reveal>
          <Reveal effect="pop" delay={120}>
            <h2 className="text-3xl md:text-5xl font-bold">
              Unsere Honigsorten
            </h2>
          </Reveal>
          <Reveal effect="fade-up" delay={260}>
            <p className="text-honig-700 mt-3 max-w-2xl mx-auto">
              Vier Sorten, jede mit eigenem Charakter – was gerade blüht, bestimmt,
              was ins Glas kommt.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(honig as Honig[]).map((h, i) => (
            <Reveal key={h.slug} effect="pop" delay={100 + i * 110}>
              <article className="group bg-honig-50 rounded-2xl p-6 border border-honig-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="h-32 rounded-xl mb-4 bg-gradient-to-br from-honig-100 to-honig-50 flex items-center justify-center overflow-hidden">
                  <HonigGlas farbe={h.farbe} />
                </div>
                <h3 className="text-xl font-bold mb-2">{h.name}</h3>
                <p className="text-sm text-honig-900/80 mb-4 leading-relaxed">
                  {h.beschreibung}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-honig-100">
                  <span className="text-sm text-honig-700">{h.gewicht}</span>
                  <span className="font-bold text-honig-700 text-lg">{h.preis}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal effect="fade-in" delay={600}>
          <p className="text-center text-sm text-honig-700 mt-8 italic">
            Verfügbarkeit je nach Saison und Ernte – nicht jede Sorte ist das ganze Jahr vorrätig.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
