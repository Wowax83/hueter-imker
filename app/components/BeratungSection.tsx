import { AlertTriangle, ShieldCheck, Home, Bug } from 'lucide-react'
import Reveal from './Reveal'

const services = [
  {
    icon: Home,
    title: 'Beratung vor Ort',
    text: 'Ich schaue mir das Nest an und beurteile Lage, Größe und Gefährdung – kostenlose Ersteinschätzung im Stadtgebiet Frankenthal.',
  },
  {
    icon: ShieldCheck,
    title: 'Schutzmaßnahmen',
    text: 'Absperrungen, Schutzkleidung und Verhaltensregeln, damit Kinder und Nachbarn sicher am Haus bleiben können.',
  },
  {
    icon: Bug,
    title: 'Fachgerechte Entnahme',
    text: 'Wenn ein Nest nicht bleiben kann, entferne ich es nach den geltenden Regeln – auch Hornissen stehen unter Artenschutz.',
  },
  {
    icon: AlertTriangle,
    title: 'Notfälle',
    text: 'Akute Probleme mit Wespennestern im Rollladenkasten, Dachboden oder Schuppen? Ruf an, ich versuche kurzfristig zu kommen.',
  },
]

export default function BeratungSection() {
  return (
    <section id="beratung" className="py-16 bg-[#fffdf6] border-y border-honig-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <Reveal effect="fade-up" delay={0}>
            <p className="text-honig-700 uppercase tracking-[0.18em] text-xs mb-2 font-medium">
              Auch wenn's nicht um Honig geht
            </p>
          </Reveal>
          <Reveal effect="pop" delay={120}>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-3">
              Wespen- &amp; Hornissenberatung
            </h2>
          </Reveal>
          <Reveal effect="fade-up" delay={260}>
            <p className="text-honig-700 max-w-2xl mx-auto">
              Wespennester im Rollladenkasten? Hornissen unter dem Dachvorsprung?
              Nicht jedes Nest muss nicht entfernt, und nicht jedes Insekt ist
              gefährlich. Ich berate ruhig und sachlich – und helfe, wenn es nötig ist.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal key={s.title} effect="fade-up" delay={120 + i * 100}>
                <div className="bg-white rounded-2xl p-6 border border-honig-100 shadow-sm h-full">
                  <div className="w-12 h-12 rounded-xl bg-honig-100 text-honig-700 flex items-center justify-center mb-3">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-bold mb-2">{s.title}</h3>
                  <p className="text-sm text-honig-900/80 leading-relaxed">
                    {s.text}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal effect="fade-up" delay={500}>
          <div className="bg-honig-50 border border-honig-200 rounded-2xl p-6 md:p-8 text-center">
            <p className="font-serif text-xl md:text-2xl text-honig-900 mb-4">
              Bei Fragen einfach anrufen:
            </p>
            <a
              href="tel:+4915203180359"
              className="inline-flex items-center gap-2 bg-honig-600 hover:bg-honig-700 text-white px-6 py-3 rounded-xl shadow font-medium"
            >
              Alexander Hüter · 01520 3180359
            </a>
            <p className="text-xs text-honig-700 mt-3">
              Region Frankenthal und Umgebung · kostenlose Ersteinschätzung vor Ort
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
