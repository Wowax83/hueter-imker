import Reveal from './Reveal'

export default function Vorstellung() {
  return (
    <section id="vorstellung" className="py-16 bg-[#fffdf6]">
      <div className="max-w-4xl mx-auto px-4">
        <Reveal effect="fade-up" delay={0}>
          <p className="text-honig-700 uppercase tracking-[0.18em] text-xs mb-3 text-center font-medium">
            Aus Frankenthal, für Frankenthal
          </p>
        </Reveal>
        <Reveal effect="pop" delay={100}>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8 text-center">
            Über Bienen Hüter Pfalz
          </h2>
        </Reveal>
        <div className="text-lg leading-relaxed text-honig-900/90 space-y-5 max-w-3xl mx-auto">
          <Reveal effect="fade-up" delay={200}>
            <p>
              Ich bin Alexander Hüter aus Frankenthal – Imker und Ansprechpartner
              für <strong>Wespen- und Hornissennester</strong> in der Region. Wenn ein
              Nest auf dem Dachboden, im Rollladenkasten oder im Garten Probleme
              macht, schaue ich mir die Lage an und helfe mit Ruhe, Sachverstand und
              dem richtigen Werkzeug.
            </p>
          </Reveal>
          <Reveal effect="fade-up" delay={320}>
            <p>
              Das gilt auch für die <strong>invasive Asiatische Hornisse</strong>, die
              sich zunehmend in der Pfalz ausbreitet und unsere Honigbienen bedroht.
              Ich unterstütze bei der Bestimmung und der fachgerechten Entfernung.
            </p>
          </Reveal>
          <Reveal effect="fade-up" delay={440}>
            <p>
              Daneben imkere ich mit Leidenschaft: Meine Bienen stehen zwischen den
              Streuobstwiesen der Vorderpfalz, am Rand der Weinberge und in den
              Gärten der Stadt. Der Honig wird hier geerntet, geschleudert und
              abgefüllt – regional und ohne Zwischenhandel.
            </p>
          </Reveal>
          <Reveal effect="fade-up" delay={560}>
            <p className="text-honig-700 italic font-serif border-l-4 border-honig-500 pl-4">
              „Wenn ein Nest Probleme macht oder du wissen willst, wo dein Honig
              herkommt – ruf an, ich komme vorbei."
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
