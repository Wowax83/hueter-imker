export default function Nav() {
  return (
    <nav className="bg-honig-50/95 backdrop-blur border-b border-honig-200 sticky top-0 z-30 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src="/icon.png" alt="Bienen Hüter Pfalz" width={40} height={40} className="w-10 h-10" />
          <div className="leading-tight">
            <div className="font-bold text-honig-900 text-sm sm:text-base">Bienen Hüter Pfalz</div>
            <div className="text-xs text-honig-700">Hüter Imker</div>
          </div>
        </a>
        <div className="hidden sm:flex gap-5 text-sm text-honig-900">
          <a href="#hornisse" className="hover:text-honig-700">Asiatische Hornisse</a>
          <a href="#nester" className="hover:text-honig-700">Nester entfernen</a>
          <a href="#honig" className="hover:text-honig-700">Honig</a>
        </div>
        <a href="tel:+4915203180359" className="sm:hidden bg-honig-600 text-white px-3 py-1.5 rounded-lg text-sm">
          Anrufen
        </a>
      </div>
    </nav>
  )
}
