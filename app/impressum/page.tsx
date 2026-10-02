import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum – Hüter Imker',
  description: 'Anbieterkennzeichnung nach TMG §5',
}

export default function ImpressumPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 text-honig-900">
      <h1 className="text-3xl md:text-5xl font-bold mb-8">Impressum</h1>

      <section className="space-y-6 leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold mb-2">Angaben gemäß § 5 TMG</h2>
          <p>
            Hüter Imker
            <br />
            [Vorname Nachname]
            <br />
            [Straße + Hausnummer]
            <br />
            [PLZ Ort]
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Kontakt</h2>
          <p>
            Telefon: [optional]
            <br />
            E-Mail:{' '}
            <a
              href="mailto:imker.ag@gmail.com"
              className="text-honig-700 hover:underline"
            >
              imker.ag@gmail.com
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            <br />
            [falls vorhanden, sonst entfernen oder „Nicht vorhanden –
            Kleinunternehmer gemäß § 19 UStG“]
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p>
            [Vorname Nachname]
            <br />
            [Anschrift wie oben]
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            EU-Streitschlichtung / OS-Plattform
          </h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{' '}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-honig-700 hover:underline"
            >
              ec.europa.eu/consumers/odr
            </a>
            . Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
          <p className="mt-2">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungen vor
            einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
            Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
            verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
            jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die
            auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Vervielfältigung,
            Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung
            des jeweiligen Autors bzw. Erstellers.
          </p>
        </div>
      </section>

      <p className="mt-10 text-sm text-honig-700">
        Hinweis: Diese Vorlage enthält Platzhalter in eckigen Klammern.
        Bitte durch deine echten Daten ersetzen, bevor die Seite online geht.
      </p>
    </main>
  )
}