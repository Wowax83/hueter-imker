import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hüter Imker – Honig aus der Region',
  description:
    'Honig direkt vom Imker. Vorstellung, Sorten, Kontakt und Bestellung.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}