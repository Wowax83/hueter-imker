import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://bienenhueterpfalz.de'),
  title: {
    default: 'Wespen & Hornissen entfernen Frankenthal – Bienen Hüter Pfalz',
    template: '%s | Bienen Hüter Pfalz',
  },
  description:
    'Fachgerechte Entfernung von Wespen- und Hornissennestern sowie der Asiatischen Hornisse in Frankenthal und der Pfalz. Kostenlose Ersteinschätzung.',
  openGraph: {
    title: 'Bienen Hüter Pfalz – Nester sicher entfernen',
    description:
      'Wespen- und Hornissennester fachgerecht entfernen – auch die invasive Asiatische Hornisse. Frankenthal und Umgebung.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://bienenhueterpfalz.de',
    siteName: 'Bienen Hüter Pfalz',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'lgk2wxN2aX5ovv5tHBWn_vwh-VO5kaeU37nnWo6XzWg',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://bienenhueterpfalz.de/#business',
  name: 'Bienen Hüter Pfalz',
  description:
    'Wespen- und Hornissennester fachgerecht entfernen sowie die invasive Asiatische Hornisse. Honig aus Frankenthal und der Pfalz.',
  url: 'https://bienenhueterpfalz.de',
  telephone: '+4915203180359',
  email: 'bienen.hueter.pfalz@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Oggersheimerstr. 14',
    postalCode: '67227',
    addressLocality: 'Frankenthal',
    addressRegion: 'Rheinland-Pfalz',
    addressCountry: 'DE',
  },
  areaServed: [
    { '@type': 'City', name: 'Frankenthal' },
    { '@type': 'AdministrativeArea', name: 'Pfalz' },
  ],
  founder: { '@type': 'Person', name: 'Alexander Hüter' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
