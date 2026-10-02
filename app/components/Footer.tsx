export default function Footer() {
  return (
    <footer className="bg-honig-900 text-honig-50 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
        <p>© {new Date().getFullYear()} Hüter Imker · Alle Rechte vorbehalten</p>
        <nav className="flex gap-4">
          <a href="/impressum" className="hover:text-honig-100 underline-offset-2 hover:underline">
            Impressum
          </a>
          <a href="/datenschutz" className="hover:text-honig-100 underline-offset-2 hover:underline">
            Datenschutz
          </a>
        </nav>
      </div>
    </footer>
  )
}
