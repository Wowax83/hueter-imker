'use client'

import { useState, FormEvent } from 'react'
import { ShoppingBag } from 'lucide-react'
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
        <h2 className="text-3xl md:text-5xl font-bold mb-3">Honig bestellen</h2>
        <p className="text-honig-700 mb-8">
          Trage die gewünschten Mengen ein – ich melde mich per E-Mail zur Bestätigung.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5 bg-honig-50 p-6 rounded-2xl shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Name"
              className="p-3 border border-honig-100 rounded-lg bg-white" />
            <input name="email" type="email" required placeholder="E-Mail"
              className="p-3 border border-honig-100 rounded-lg bg-white" />
          </div>

          <textarea name="adresse" rows={2} placeholder="Lieferadresse (optional)"
            className="w-full p-3 border border-honig-100 rounded-lg bg-white" />

          <div className="space-y-2">
            <p className="font-semibold">Sorten &amp; Mengen:</p>
            {honig.map((h) => (
              <div key={h.slug} className="flex items-center justify-between bg-white p-3 rounded-lg border border-honig-100">
                <div>
                  <div className="font-medium">{h.name}</div>
                  <div className="text-xs text-honig-700">{h.preis} · {h.gewicht}</div>
                </div>
                <input
                  type="number" min={0} max={50} defaultValue={0}
                  name={`menge-${h.slug}`}
                  className="w-20 p-2 border border-honig-100 rounded-lg text-center" />
              </div>
            ))}
          </div>

          <textarea name="bemerkung" rows={3} placeholder="Bemerkung (optional)"
            className="w-full p-3 border border-honig-100 rounded-lg bg-white" />

          <button type="submit" disabled={isSubmitting}
            className="inline-flex items-center gap-2 bg-honig-600 hover:bg-honig-700 text-white px-5 py-3 rounded-lg shadow disabled:opacity-50">
            <ShoppingBag size={18} /> {isSubmitting ? 'Wird gesendet…' : 'Bestellung absenden'}
          </button>

          {status === 'ok' && <p className="text-green-700 text-sm">Bestellung verschickt. Ich melde mich per E-Mail.</p>}
          {status === 'err' && <p className="text-red-700 text-sm">Da ging was schief. Bitte später nochmal.</p>}
        </form>
      </div>
    </section>
  )
}