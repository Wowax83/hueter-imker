import Reveal from './Reveal'

export default function Vorstellung() {
  return (
    <section id="vorstellung" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <Reveal effect="fade-up" delay={0}>
          <p className="text-honig-700 uppercase tracking-widest text-xs mb-3 text-center">
            Aus Studernheim, für Studernheim
          </p>
        </Reveal>
        <Reveal effect="pop" delay={100}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
            Der Imker hinter dem Honig
          </h2>
        </Reveal>
        <div className="text-lg leading-relaxed text-honig-900/90 space-y-4">
          <Reveal effect="fade-up" delay={200}>
            <p>
              Ich imkere seit über zehn Jahren mitten in Studernheim – zwischen
              Streuobstwiesen, Hecken und Wildkräutern, die meine Bienen täglich
              anfliegen. Weil ich in der Region bleibe und meine Völker nicht
              quer durchs Land kutschiere, schmeckt jeder Löffel nach dem, was
              gerade vor unserer Haustür blüht.
            </p>
          </Reveal>
          <Reveal effect="fade-up" delay={320}>
            <p>
              Geerntet wird hier, geschleudert wird hier, abgefüllt wird hier.
              Direkt in Studernheim, ohne lange Wege, ohne Zwischenhandel. So
              bleibt, was die Bienen gesammelt haben, im Glas – und du bekommst
              genau den Honig, den unsere Heimat gerade hergibt.
            </p>
          </Reveal>
          <Reveal effect="fade-up" delay={440}>
            <p className="text-honig-700 italic">
              „Wenn du wissen willst, wo dein Honig herkommt, kannst du vorbeikommen
              und zugucken."
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
