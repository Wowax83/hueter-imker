'use client'

import { useState, FormEvent } from 'react'
import { Send } from 'lucide-react'

export default function KontaktFormular() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'ok' | 'err'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('idle')

    const fd = new FormData(e.currentTarget)
    const data = {
      name: fd.get('name'),
      email: fd.get('email'),
      nachricht: fd.get('nachricht'),
    }

    try {
      const res = await fetch('/api/kontakt', {
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
    <section id="kontakt" className="py-16 bg-honig-50">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-3">Kontakt</h2>
        <p className="text-honig-700 mb-8">
          Fragen, Honigwünsche oder einfach Hallo sagen.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-2xl shadow-sm">
          <input
            name="name" required placeholder="Name" className="w-full p-3 border border-honig-100 rounded-lg" />
          <input
            name="email" type="email" required placeholder="E-Mail" className="w-full p-3 border border-honig-100 rounded-lg" />
          <textarea
            name="nachricht" required rows={5} placeholder="Nachricht"
            className="w-full p-3 border border-honig-100 rounded-lg" />

          <button
            type="submit" disabled={isSubmitting}
            className="inline-flex items-center gap-2 bg-honig-600 hover:bg-honig-700 text-white px-5 py-3 rounded-lg shadow disabled:opacity-50">
            <Send size={18} /> {isSubmitting ? 'Wird gesendet…' : 'Senden'}
          </button>

          {status === 'ok' && <p className="text-green-700 text-sm">Nachricht verschickt. Danke!</p>}
          {status === 'err' && <p className="text-red-700 text-sm">Da ging was schief. Bitte später nochmal.</p>}
        </form>
      </div>
    </section>
  )
}