import Image from 'next/image'
import Reveal from './Reveal'

type Projekt = {
  bild: string
  titel: string
  alt: string
}

const projekte: Projekt[] = [
  {
    bild: '/projekte/projekte-wand.webp',
    titel: 'Asiatisches Hornissennest an der Hauswand',
    alt: 'Asiatisches Hornissennest an einer Hauswand',
  },
  {
    bild: '/projekte/projekte-baum.webp',
    titel: 'Nest im Gehölz',
    alt: 'Wespennest in einem Gehölz',
  },
  {
    bild: '/projekte/projekte-wabe.webp',
    titel: 'Entnommenes Wespennest',
    alt: 'Entnommenes Wespennest auf einem Tablett',
  },
  {
    bild: '/projekte/projekte-schutzanzug.webp',
    titel: 'Nestentfernung im Schutzanzug',
    alt: 'Imker im Schutzanzug bei der Nestentfernung',
  },
  {
    bild: '/projekte/projekte-papierwespe.webp',
    titel: 'Primärnest der Asiatischen Hornisse (Frühjahr)',
    alt: 'Primärnest der Asiatischen Hornisse im Frühjahr',
  },
  {
    bild: '/projekte/projekte-hornisse.webp',
    titel: 'Europäische Hornisse (Vespa crabro)',
    alt: 'Europäische Hornisse auf einem Blatt',
  },
]

export default function Projekte() {
  return (
    <section id="projekte" className="py-16 bg-honig-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <Reveal effect="fade-up" delay={0}>
            <p className="text-honig-700 uppercase tracking-widest text-xs mb-2">
              Vor Ort im Einsatz
            </p>
          </Reveal>
          <Reveal effect="pop" delay={120}>
            <h2 className="text-3xl md:text-5xl font-bold">
              Unsere Einsätze
            </h2>
          </Reveal>
          <Reveal effect="fade-up" delay={260}>
            <p className="text-honig-700 mt-3 max-w-2xl mx-auto">
              Ein Blick auf unsere Arbeit – Wespennester und Hornissennester
              sicher entfernt.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projekte.map((p, i) => (
            <Reveal key={p.bild} effect="pop" delay={100 + i * 100}>
              <figure className="group rounded-2xl overflow-hidden border border-honig-100 bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={p.bild}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <figcaption className="p-3 md:p-4 text-sm md:text-base font-medium text-honig-900">
                  {p.titel}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
