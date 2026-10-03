export default function Footer() {
  return (
    <footer className="bg-honig-900 text-honig-50 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm mb-8">
          <div>
            <h3 className="font-serif text-honig-100 text-lg mb-2">Bienen Hüter Pfalz</h3>
            <p className="text-honig-200/80">
              Honig aus Frankenthal und der Pfalz.<br />
              Wespen- und Hornissenberatung.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-honig-100 text-lg mb-2">Kontakt</h3>
            <p className="text-honig-200/80 leading-relaxed">
              Alexander Hüter<br />
              Oggersheimerstr. 14<br />
              67227 Frankenthal<br />
              <a href="tel:+4915203180359" className="hover:text-honig-100 underline-offset-2 hover:underline">
                01520 3180359
              </a>
            </p>
          </div>
          <div>
            <h3 className="font-serif text-honig-100 text-lg mb-2">Rechtliches</h3>
            <ul className="space-y-1">
              <li>
                <a href="/impressum" className="hover:text-honig-100 underline-offset-2 hover:underline">
                  Impressum
                </a>
              </li>
              <li>
                <a href="/datenschutz" className="hover:text-honig-100 underline-offset-2 hover:underline">
                  Datenschutz
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-6 border-t border-honig-700/40 text-xs text-honig-200/60 text-center">
          © {new Date().getFullYear()} Bienen Hüter Pfalz · Alexander Hüter
        </div>
      </div>
    </footer>
  )
}
