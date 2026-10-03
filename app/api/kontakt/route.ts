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
    const nachricht = String(body.nachricht || '').trim()

    if (!name || !email || !nachricht) {
      return Response.json({ error: 'Alle Felder sind erforderlich' }, { status: 400 })
    }
    if (!isValidEmail(email)) {
      return Response.json({ error: 'Ungültige E-Mail' }, { status: 400 })
    }

    await getResend().emails.send({
      from: process.env.HONEY_MAIL_FROM || 'Bienen Hueter Pfalz <onboarding@resend.dev>',
      to: process.env.HONEY_MAIL_TO || 'bienen.hueter.pfalz@gmail.com',
      replyTo: email,
      subject: `Kontaktanfrage von ${name}`,
      html: `
        <p><strong>Name:</strong> ${escape(name)}</p>
        <p><strong>E-Mail:</strong> ${escape(email)}</p>
        <hr />
        <p>${escape(nachricht).replace(/\n/g, '<br/>')}</p>
      `,
    })

    return Response.json({ success: true })
  } catch (err) {
    console.error('Kontakt API Fehler:', err)
    return Response.json({ error: 'Fehler beim Senden' }, { status: 500 })
  }
}
