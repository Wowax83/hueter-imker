'use client'

import { useState, FormEvent } from 'react'
import { Send, Check, AlertCircle, Mail } from 'lucide-react'

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
        <div className="text-center mb-10">
          <p className="text-honig-700 uppercase tracking-widest text-xs mb-2">
            Du erreichst mich
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Kontakt
          </h2>
          <p className="text-honig-700 mt-3">
            Fragen, Honigwünsche oder einfach Hallo sagen.
          </p>
          <a
            href="mailto:imker.ag@gmail.com"
            className="inline-flex items-center gap-2 mt-4 text-honig-700 hover:text-honig-900 underline-offset-4 hover:underline"
          >
            <Mail size={16} /> imker.ag@gmail.com
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 md:p-8 rounded-2xl shadow-sm">
          <label className="block">
            <span className="text-sm text-honig-900/80 mb-1 block">Name</span>
            <input name="name" required placeholder="Vor- und Nachname"
              className="w-full p-3 border border-honig-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-honig-500" />
          </label>
          <label className="block">
            <span className="text-sm text-honig-900/80 mb-1 block">E-Mail</span>
            <input name="email" type="email" required placeholder="deine@email.de"
              className="w-full p-3 border border-honig-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-honig-500" />
          </label>
          <label className="block">
            <span className="text-sm text-honig-900/80 mb-1 block">Nachricht</span>
            <textarea name="nachricht" required rows={5} placeholder="Worum geht's?"
              className="w-full p-3 border border-honig-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-honig-500" />
          </label>

          <button type="submit" disabled={isSubmitting}
            className="inline-flex items-center gap-2 bg-honig-600 hover:bg-honig-700 text-white px-6 py-3 rounded-xl shadow hover:shadow-lg transition disabled:opacity-50 font-medium">
            <Send size={18} /> {isSubmitting ? 'Wird gesendet…' : 'Senden'}
          </button>

          {status === 'ok' && (
            <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 text-green-800 rounded-lg text-sm">
              <Check size={18} /> Nachricht verschickt. Danke!
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
