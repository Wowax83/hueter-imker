'use client'

import { useState, FormEvent } from 'react'
import { ShoppingBag, Check, AlertCircle } from 'lucide-react'
import honig from '@/data/honig.json'

export default function BestellFormular() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'ok' | 'err'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('idle')

    const fd = new FormData(e.currentTarget)
    const items = honig
      .map((h) => ({
        name: h.name,
        slug: h.slug,
        menge: Number(fd.get(`menge-${h.slug}`) || 0),
      }))
      .filter((i) => i.menge > 0)

    const data = {
      name: fd.get('name'),
      email: fd.get('email'),
      adresse: fd.get('adresse'),
      bemerkung: fd.get('bemerkung'),
      items,
    }

    try {
      const res = await fetch('/api/bestellung', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      setStatus(res.ok ? 'ok' : 'err')
      if (res.ok) e.currentTarget.reset()
    } catch {
      setStatus('err')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="bestellen" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-honig-700 uppercase tracking-widest text-xs mb-2">
            Direkt aus Studernheim
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Honig bestellen
          </h2>
          <p className="text-honig-700 mt-3">
            Trag die gewünschten Mengen ein – ich melde mich per E-Mail zur Bestätigung.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 bg-honig-50 p-6 md:p-8 rounded-2xl shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm text-honig-900/80 mb-1 block">Name</span>
              <input name="name" required placeholder="Vor- und Nachname"
                className="w-full p-3 border border-honig-100 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-honig-500" />
            </label>
            <label className="block">
              <span className="text-sm text-honig-900/80 mb-1 block">E-Mail</span>
              <input name="email" type="email" required placeholder="deine@email.de"
                className="w-full p-3 border border-honig-100 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-honig-500" />
            </label>
          </div>

          <label className="block">
            <span className="text-sm text-honig-900/80 mb-1 block">Lieferadresse (optional)</span>
            <textarea name="adresse" rows={2} placeholder="Straße, PLZ, Ort"
              className="w-full p-3 border border-honig-100 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-honig-500" />
          </label>

          <div>
            <p className="font-semibold mb-2">Sorten &amp; Mengen</p>
            <div className="space-y-2">
              {honig.map((h) => (
                <div key={h.slug} className="flex items-center justify-between gap-3 bg-white p-3 rounded-lg border border-honig-100">
                  <div className="flex-1 min-w-0">
                    <div className="font-medium">{h.name}</div>
                    <div className="text-xs text-honig-700">{h.preis} · {h.gewicht}</div>
                  </div>
                  <input
                    type="number" min={0} max={50} defaultValue={0}
                    name={`menge-${h.slug}`}
                    className="w-20 p-2 border border-honig-100 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-honig-500"
                    aria-label={`Menge ${h.name}`}
                  />
                </div>
              ))}
            </div>
          </div>

          <label className="block">
            <span className="text-sm text-honig-900/80 mb-1 block">Bemerkung (optional)</span>
            <textarea name="bemerkung" rows={3} placeholder="Abholung in Studernheim? Wunschtermin?"
              className="w-full p-3 border border-honig-100 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-honig-500" />
          </label>

          <button type="submit" disabled={isSubmitting}
            className="inline-flex items-center gap-2 bg-honig-600 hover:bg-honig-700 text-white px-6 py-3 rounded-xl shadow hover:shadow-lg transition disabled:opacity-50 font-medium">
            <ShoppingBag size={18} /> {isSubmitting ? 'Wird gesendet…' : 'Bestellung absenden'}
          </button>

          {status === 'ok' && (
            <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 text-green-800 rounded-lg text-sm">
              <Check size={18} /> Bestellung verschickt. Ich melde mich per E-Mail.
            </div>
          )}
          {status === 'err' && (
            <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-red-800 rounded-lg text-sm">
              <AlertCircle size={18} /> Da ging was schief. Bitte später nochmal versuchen.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
