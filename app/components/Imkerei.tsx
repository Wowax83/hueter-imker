import Image from 'next/image'
import Reveal from './Reveal'

type Bild = {
  bild: string
  titel: string
  alt: string
}

const bilder: Bild[] = [
  {
    bild: '/honig/honig-glaeser.webp',
    titel: 'Unsere Honigsorten im Glas',
    alt: 'Honiggläser in verschiedenen Farbtönen',
  },
  {
    bild: '/honig/honig-bienenstaende.webp',
    titel: 'Unsere Bienenstände',
    alt: 'Bienenstöcke am blühenden Feld',
  },
  {
    bild: '/honig/honig-rahmen.webp',
    titel: 'Wabenrahmen aus dem Volk',
    alt: 'Honigwabe mit Bienen im Rähmchen',
  },
  {
    bild: '/honig/honig-wabe.webp',
    titel: 'Frische Wabe aus der eigenen Imkerei',
    alt: 'Imker mit frischer Honigwabe',
  },
  {
    bild: '/honig/honig-schwarm.webp',
    titel: 'Bienenschwarm eingefangen',
    alt: 'Eingefangener Bienenschwarm',
  },
  {
    bild: '/honig/honig-bienenhotel.webp',
    titel: 'Bienenhotel für Wildbienen',
    alt: 'Biene am Bienenhotel aus Bambusröhren',
  },
  {
    bild: '/honig/honig-schaukasten.webp',
    titel: 'Schaukasten – Blick ins Volk',
    alt: 'Beobachtungsstock mit Bienenvolk',
  },
  {
    bild: '/honig/honig-lavendel.webp',
    titel: 'Honiggläser im Lavendelfeld',
    alt: 'Honiggläser im Lavendelfeld',
  },
]

export default function Imkerei() {
  return (
    <section id="imkerei" className="py-16 bg-honig-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <Reveal effect="fade-up" delay={0}>
            <p className="text-honig-700 uppercase tracking-widest text-xs mb-2">
              Vom Volk ins Glas
            </p>
          </Reveal>
          <Reveal effect="pop" delay={120}>
            <h2 className="text-3xl md:text-5xl font-bold">
              Aus unserer Imkerei
            </h2>
          </Reveal>
          <Reveal effect="fade-up" delay={260}>
            <p className="text-honig-700 mt-3 max-w-2xl mx-auto">
              Ein Blick hinter die Kulissen – vom Bienenvolk bis zum fertigen
              Honigglas.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {bilder.map((b, i) => (
            <Reveal key={b.bild} effect="pop" delay={100 + i * 80}>
              <figure className="group rounded-2xl overflow-hidden border border-honig-100 bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={b.bild}
                    alt={b.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <figcaption className="p-3 md:p-4 text-sm md:text-base font-medium text-honig-900">
                  {b.titel}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
