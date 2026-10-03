export default function Nav() {
  return (
    <nav className="bg-honig-50/95 backdrop-blur border-b border-honig-200 sticky top-0 z-30 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <svg width="40" height="40" viewBox="0 0 64 64" aria-hidden="true">
            <defs>
              <linearGradient id="navBee" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0" stopColor="#f5b942" />
                <stop offset="1" stopColor="#d97706" />
              </linearGradient>
            </defs>
            <polygon points="32,2 60,17 60,47 32,62 4,47 4,17" fill="url(#navBee)" />
            <polygon points="32,8 56,21 56,43 32,56 8,43 8,21" fill="#fffdf6" />
            <text x="32" y="38" textAnchor="middle" fontSize="22" fill="#78350f" fontFamily="serif" fontWeight="bold">B</text>
          </svg>
          <div className="leading-tight">
            <div className="font-bold text-honig-900 text-sm sm:text-base">Bienen Hüter Pfalz</div>
            <div className="text-xs text-honig-700">Hüter Imker</div>
          </div>
        </a>
        <div className="hidden sm:flex gap-5 text-sm text-honig-900">
          <a href="#vorstellung" className="hover:text-honig-700">Über uns</a>
          <a href="#honig" className="hover:text-honig-700">Honig</a>
          <a href="#beratung" className="hover:text-honig-700">Wespen & Hornissen</a>
          <a href="#bestellen" className="hover:text-honig-700">Bestellen</a>
          <a href="#kontakt" className="hover:text-honig-700">Kontakt</a>
        </div>
        <a href="#bestellen" className="sm:hidden bg-honig-600 text-white px-3 py-1.5 rounded-lg text-sm">
          Bestellen
        </a>
      </div>
    </nav>
  )
}
