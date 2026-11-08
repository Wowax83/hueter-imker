import Image from 'next/image'
import Reveal from './Reveal'

export default function Honigfenster() {
  return (
    <section id="honigfenster" className="py-16 bg-honig-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <Reveal effect="fade-up" delay={0}>
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md border border-honig-100">
            <Image
              src="/honigfenster.webp"
              alt="Selbstbedienungsfenster mit Honiggläsern und Preisliste"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal effect="fade-up" delay={120}>
            <p className="text-honig-700 uppercase tracking-widest text-xs mb-2">
              Rund um die Uhr
            </p>
          </Reveal>
          <Reveal effect="pop" delay={200}>
            <h2 className="text-3xl md:text-5xl font-bold">
              Unser Honigfenster – Selbstbedienung
            </h2>
          </Reveal>
          <Reveal effect="fade-up" delay={280}>
            <p className="text-honig-900/80 mt-4 leading-relaxed">
              Honig kaufen, wann immer du willst: Unser Selbstbedienungsfenster
              ist rund um die Uhr geöffnet. Glas aussuchen, Betrag bequem per
              PayPal-QR-Code bezahlen oder in die Kasse legen – ganz auf
              Vertrauensbasis.
            </p>
          </Reveal>
          <Reveal effect="fade-up" delay={360}>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-5 w-5 flex-none rounded-full bg-honig-400 text-white text-xs font-bold flex items-center justify-center">
                  1
                </span>
                <span className="text-honig-900">
                  <strong>24/7 geöffnet</strong> – kein Termin nötig
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-5 w-5 flex-none rounded-full bg-honig-400 text-white text-xs font-bold flex items-center justify-center">
                  2
                </span>
                <span className="text-honig-900">
                  <strong>Selbstbedienung</strong> – dein Glas direkt aus dem Regal
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-5 w-5 flex-none rounded-full bg-honig-400 text-white text-xs font-bold flex items-center justify-center">
                  3
                </span>
                <span className="text-honig-900">
                  <strong>Bezahlung auf Vertrauensbasis</strong> – per PayPal-QR-Code oder Kasse
                </span>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
