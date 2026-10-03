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
              Ich bin Alexander Hüter, Imker aus Frankenthal. Meine Bienen
              stehen zwischen den Streuobstwiesen der Vorderpfalz, am Rand
              der Weinberge und in den Gärten der Stadt – genau da, wo
              Apfel, Kirsche, Linde und Wildkräuter wachsen, die den
              Geschmack eines regionalen Honigs ausmachen.
            </p>
          </Reveal>
          <Reveal effect="fade-up" delay={320}>
            <p>
              Geerntet wird hier, geschleudert wird hier, abgefüllt wird
              hier. Direkt in der Region – ohne lange Wege und ohne
              Zwischenhandel. Was die Bienen in Frankenthal und Umgebung
              sammeln, kommt ins Glas, das du in der Hand hältst.
            </p>
          </Reveal>
          <Reveal effect="fade-up" delay={440}>
            <p>
              Neben dem Honig biete ich <strong>Wespen- und
              Hornissenberatung</strong> an: Wenn ein Insektennest auf dem
              Dachboden, im Rollladenkasten oder im Garten Probleme macht,
              schaue ich mir die Lage an, berate zu Verhalten, Umsiedelung
              oder – wenn nötig – fachgerechter Entnahme.
            </p>
          </Reveal>
          <Reveal effect="fade-up" delay={560}>
            <p className="text-honig-700 italic font-serif border-l-4 border-honig-500 pl-4">
              „Wenn du wissen willst, wo dein Honig herkommt oder wo das
              Wespennest steckt – ruf an, ich komme vorbei."
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
