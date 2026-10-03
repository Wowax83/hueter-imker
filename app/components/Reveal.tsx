'use client'

import { useEffect, useRef, useState, ReactNode, ElementType } from 'react'

type RevealProps = {
  children: ReactNode
  effect?: 'fade-up' | 'fade-in' | 'pop'
  delay?: number
  as?: ElementType
  className?: string
}

export default function Reveal({
  children,
  effect = 'fade-up',
  delay = 0,
  as: Tag = 'div',
  className = '',
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Fallback: ohne IntersectionObserver sofort zeigen (alte Browser)
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setTimeout(() => setShown(true), delay)
            obs.disconnect()
            break
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])

  return (
    <Tag
      ref={ref as any}
      className={`reveal reveal--${effect} ${shown ? 'reveal--shown' : ''} ${className}`}
    >
      {children}
    </Tag>
  )
}
