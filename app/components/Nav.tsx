export default function Nav() {
  return (
    <nav className="bg-honig-50/90 backdrop-blur border-b border-honig-100 sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#top" className="font-bold text-honig-700">Hüter Imker</a>
        <div className="flex gap-5 text-sm">
          <a href="#vorstellung" className="hover:text-honig-700">Vorstellung</a>
          <a href="#honig" className="hover:text-honig-700">Sorten</a>
          <a href="#bestellen" className="hover:text-honig-700">Bestellen</a>
          <a href="#kontakt" className="hover:text-honig-700">Kontakt</a>
        </div>
      </div>
    </nav>
  )
}