import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung – Hüter Imker',
  description: 'Informationen zur Verarbeitung personenbezogener Daten',
}

export default function DatenschutzPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 text-honig-900">
      <h1 className="text-3xl md:text-5xl font-bold mb-8">
        Datenschutzerklärung
      </h1>

      <section className="space-y-6 leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Allgemeines</h2>
          <p>
            Wir nehmen den Schutz deiner persönlichen Daten ernst.
            Personenbezogene Daten werden ausschließlich im Rahmen der
            gesetzlichen Vorschriften, insbesondere der DSGVO und des BDSG,
            erhoben und verarbeitet. Im Folgenden informieren wir dich über
            Art, Umfang und Zweck der Erhebung und Verwendung personenbezogener
            Daten.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            2. Verantwortlicher
          </h2>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            <br />
            Hüter Imker, [Vorname Nachname], [Anschrift]
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
          <h2 className="text-xl font-semibold mb-2">
            3. Erhebung und Speicherung personenbezogener Daten
          </h2>
          <p>
            Beim Besuch dieser Website werden automatisch folgende Informationen
            verarbeitet:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>IP-Adresse (gekürzt / vom Hosting-Anbieter Vercel verarbeitet)</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Browsertyp und -version</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer-URL</li>
          </ul>
          <p className="mt-2">
            Diese Daten dienen dem ordnungsgemäßen Betrieb der Website und
            werden ausschließlich zu statistischen Zwecken sowie zur
            Verbesserung des Angebots ausgewertet. Die Rechtsgrundlage ist
            Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            4. Kontaktformular und Bestellformular
          </h2>
          <p>
            Bei Nutzung des Kontakt- oder Bestellformulars erheben wir die von
            dir angegebenen Daten (Name, E-Mail-Adresse, ggf. Lieferadresse,
            Nachricht bzw. Bestellpositionen), um deine Anfrage zu bearbeiten
            bzw. deine Bestellung entgegenzunehmen.
          </p>
          <p className="mt-2">
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
            Abs. 1 lit. b DSGVO (vorvertragliche bzw. vertragliche Maßnahme).
            Die Daten werden nicht für Werbezwecke verwendet und nicht an
            Dritte weitergegeben – mit Ausnahme des unten genannten
            Mail-Versand-Dienstleisters.
          </p>
          <p className="mt-2">
            Die über das Formular übermittelten Daten werden so lange
            gespeichert, wie es für die Bearbeitung deiner Anfrage erforderlich
            ist, längstens jedoch bis zum Ablauf der gesetzlichen
            Aufbewahrungsfristen.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            5. Mail-Versand via Resend
          </h2>
          <p>
            Für den Versand von E-Mails (Bestellbestätigungen und Antworten auf
            Kontaktanfragen) nutzen wir den Dienst{' '}
            <strong>Resend</strong> (Anbieter: Resend Inc., 2261 Market Street
            #5039, San Francisco, CA 94114, USA).
          </p>
          <p className="mt-2">
            Resend verarbeitet die E-Mail-Adressen der Absender und Empfänger
            sowie den Inhalt der Nachricht. Mit Resend wurde ein
            Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO
            abgeschlossen. Die Datenübertragung in die USA erfolgt auf
            Grundlage der EU-Standardvertragsklauseln.
          </p>
          <p className="mt-2">
            Weitere Informationen zum Datenschutz bei Resend:{' '}
            <a
              href="https://resend.com/legal/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-honig-700 hover:underline"
            >
              resend.com/legal/privacy
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            6. Hosting durch Vercel
          </h2>
          <p>
            Diese Website wird bei{' '}
            <strong>Vercel</strong> (Anbieter: Vercel Inc., 340 S Lemon Ave
            #4133, Walnut, CA 91789, USA) gehostet. Beim Besuch der Website
            werden technisch notwendige Daten (IP-Adresse, Browsertyp,
            Zugriffszeitpunkt) verarbeitet. Vercel speichert diese Daten in
            Rechenzentren innerhalb der EU (Frankfurt) und ist nach dem
            EU-US Data Privacy Framework zertifiziert.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            7. Cookies und lokale Speicherung
          </h2>
          <p>
            Diese Website setzt <strong>keine eigenen Cookies</strong> und
            verwendet kein Tracking. Funktionale Cookies, die für den Betrieb
            der Website technisch notwendig wären, kommen nicht zum Einsatz.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            8. Deine Rechte als Nutzer
          </h2>
          <p>Du hast gegenüber dem Verantwortlichen folgende Rechte:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Recht auf <strong>Auskunft</strong> über die verarbeiteten
              personenbezogenen Daten (Art. 15 DSGVO)
            </li>
            <li>
              Recht auf <strong>Berichtigung</strong> unrichtiger Daten (Art. 16
              DSGVO)
            </li>
            <li>
              Recht auf <strong>Löschung</strong> deiner Daten (Art. 17 DSGVO)
            </li>
            <li>
              Recht auf <strong>Einschränkung</strong> der Verarbeitung (Art. 18
              DSGVO)
            </li>
            <li>
              Recht auf <strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)
            </li>
            <li>
              Recht auf <strong>Widerspruch</strong> gegen die Verarbeitung
              (Art. 21 DSGVO)
            </li>
            <li>
              Recht auf <strong>Beschwerde</strong> bei der zuständigen
              Aufsichtsbehörde (Art. 77 DSGVO)
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            9. Beschwerderecht bei der Aufsichtsbehörde
          </h2>
          <p>
            Zuständige Aufsichtsbehörde ist das Landesamt für
            Datenschutzaufsicht des Landes, in dem der Verantwortliche seinen
            Sitz hat. Eine Liste der Aufsichtsbehörden findest du auf der
            Website der Bundesbeauftragten für den Datenschutz:{' '}
            <a
              href="https://www.bfdi.bund.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-honig-700 hover:underline"
            >
              bfdi.bund.de
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">10. Änderungen</h2>
          <p>
            Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf zu
            aktualisieren, um sie an geänderte Rechtslagen oder bei
            Änderungen des Dienstes anzupassen. Es gilt die zum Zeitpunkt
            deines Besuchs abrufbare Fassung.
          </p>
        </div>
      </section>

      <p className="mt-10 text-sm text-honig-700">
        Stand: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long' })}
      </p>
    </main>
  )
}