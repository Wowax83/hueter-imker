import { Resend } from 'resend'

function getResend() {
  const key = process.env.RESEND_API_KEY
  if (!key) throw new Error('RESEND_API_KEY ist nicht gesetzt')
  return new Resend(key)
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function escape(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const name = String(body.name || '').trim()
    const email = String(body.email || '').trim()
    const adresse = String(body.adresse || '').trim()
    const bemerkung = String(body.bemerkung || '').trim()
    const items = Array.isArray(body.items) ? body.items : []

    if (!name || !email) {
      return Response.json({ error: 'Name und E-Mail erforderlich' }, { status: 400 })
    }
    if (!isValidEmail(email)) {
      return Response.json({ error: 'Ungültige E-Mail' }, { status: 400 })
    }
    if (items.length === 0) {
      return Response.json({ error: 'Bitte mindestens eine Sorte auswählen' }, { status: 400 })
    }

    const itemsHtml = items
      .map((i: any) => `<li>${escape(i.name)} &times; ${Number(i.menge)}</li>`)
      .join('')

    await getResend().emails.send({
      from: process.env.HONEY_MAIL_FROM || 'Hueter Imker <onboarding@resend.dev>',
      to: process.env.HONEY_MAIL_TO || 'imker@example.de',
      replyTo: email,
      subject: `Neue Honig-Bestellung von ${name}`,
      html: `
        <p><strong>Name:</strong> ${escape(name)}</p>
        <p><strong>E-Mail:</strong> ${escape(email)}</p>
        ${adresse ? `<p><strong>Lieferadresse:</strong><br/>${escape(adresse).replace(/\n/g, '<br/>')}</p>` : ''}
        <hr />
        <p><strong>Bestellung:</strong></p>
        <ul>${itemsHtml}</ul>
        ${bemerkung ? `<p><strong>Bemerkung:</strong><br/>${escape(bemerkung).replace(/\n/g, '<br/>')}</p>` : ''}
      `,
    })

    return Response.json({ success: true })
  } catch (err) {
    console.error('Bestellung API Fehler:', err)
    return Response.json({ error: 'Fehler beim Senden' }, { status: 500 })
  }
}