import Reveal from './Reveal'
import { Bug, ShieldAlert, Search, Phone, AlertTriangle } from 'lucide-react'

const schritte = [
  {
    icon: Search,
    title: '1 · Erkennen',
    text: 'Foto machen, Abstand halten, nicht anfassen. Die Asiatische Hornisse ist dunkler und kleiner als unsere heimische Hornisse und hat gelbe Beinenden.',
  },
  {
    icon: AlertTriangle,
    title: '2 · Melden',
    text: 'Verdachtsfälle melden – so hilfst du, die Ausbreitung zu bremsen. Ich unterstütze bei der sicheren Bestimmung.',
  },
  {
    icon: Bug,
    title: '3 · Entfernen',
    text: 'Nester liegen oft hoch in Baumkronen. Entfernung nur durch Fachleute – niemals selbst versuchen.',
  },
]

export default function AsiatischeHornisse() {
  return (
    <section id="hornisse" className="py-16 bg-white border-y border-honig-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <Reveal effect="fade-up" delay={0}>
            <p className="text-honig-700 uppercase tracking-[0.18em] text-xs mb-2 font-medium">
              Invasive Art · für Honigbienen gefährlich
            </p>
          </Reveal>
          <Reveal effect="pop" delay={120}>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-3">
              Asiatische Hornisse
            </h2>
          </Reveal>
          <Reveal effect="fade-up" delay={260}>
            <p className="text-honig-700 text-lg max-w-2xl mx-auto">
              Erkennen · Melden · Entfernen
            </p>
          </Reveal>
        </div>

        <div className="max-w-3xl mx-auto text-lg leading-relaxed text-honig-900/90 space-y-5 mb-12">
          <Reveal effect="fade-up" delay={0}>
            <p>
              Die <strong>Asiatische Hornisse</strong> (<em>Vespa velutina</em>) ist
              eine invasive Art aus Südostasien. Seit einigen Jahren breitet sie sich
              auch in der Pfalz aus – und wird für unsere Honigbienen zur ernsten
              Gefahr: Die Hornissen fangen Bienen direkt vor dem Flugloch ab und
              können ganze Völker erheblich schwächen.
            </p>
          </Reveal>
        </div>

        {/* Vergleich: Asiatische vs. heimische Hornisse */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12 max-w-4xl mx-auto">
          <Reveal effect="fade-up" delay={120}>
            <div className="bg-honig-50 border border-honig-200 rounded-2xl p-6 h-full">
              <div className="flex items-center gap-2 mb-3 text-honig-900">
                <AlertTriangle size={22} className="text-honig-700" />
                <h3 className="font-bold text-lg">Asiatische Hornisse</h3>
              </div>
              <ul className="space-y-2 text-sm text-honig-900/85 leading-relaxed">
                <li>• Dunkler, fast schwarzer Körper</li>
                <li>• <strong>Gelbe Beinenden</strong></li>
                <li>• Orange-gelbes Band am Hinterleib</li>
                <li>• Deutlich kleiner (Königin ~3 cm)</li>
                <li>• Invasive Art – nicht geschützt</li>
              </ul>
            </div>
          </Reveal>
          <Reveal effect="fade-up" delay={220}>
            <div className="bg-white border border-honig-200 rounded-2xl p-6 h-full">
              <div className="flex items-center gap-2 mb-3 text-honig-900">
                <Bug size={22} className="text-honig-700" />
                <h3 className="font-bold text-lg">Heimische Hornisse</h3>
              </div>
              <ul className="space-y-2 text-sm text-honig-900/85 leading-relaxed">
                <li>• Größer, rotbraun-gelb gefärbt</li>
                <li>• <strong>Braune Beine</strong></li>
                <li>• Deutlich gelb-schwarzer Kopf</li>
                <li>• Größer (Königin ~3,5 cm)</li>
                <li>• <strong>Steht unter Artenschutz</strong></li>
              </ul>
            </div>
          </Reveal>
        </div>

        {/* 3 Schritte */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          {schritte.map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal key={s.title} effect="fade-up" delay={120 + i * 100}>
                <div className="bg-white rounded-2xl p-6 border border-honig-100 shadow-sm h-full">
                  <div className="w-12 h-12 rounded-xl bg-honig-100 text-honig-700 flex items-center justify-center mb-3">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-bold mb-2">{s.title}</h3>
                  <p className="text-sm text-honig-900/80 leading-relaxed">{s.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* CTA */}
        <Reveal effect="fade-up" delay={300}>
          <div className="bg-honig-50 border border-honig-200 rounded-2xl p-6 md:p-8 text-center max-w-3xl mx-auto">
            <p className="font-serif text-xl md:text-2xl text-honig-900 mb-4">
              Unsicher, ob es eine Asiatische Hornisse ist?
            </p>
            <p className="text-honig-700 mb-4">
              Schick mir ein Foto oder ruf an – ich helfe bei der Bestimmung und
              der fachgerechten Entfernung.
            </p>
            <a
              href="tel:+4915203180359"
              className="inline-flex items-center gap-2 bg-honig-600 hover:bg-honig-700 text-white px-6 py-3 rounded-xl shadow font-medium"
            >
              <Phone size={18} /> Alexander Hüter · 01520 3180359
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
