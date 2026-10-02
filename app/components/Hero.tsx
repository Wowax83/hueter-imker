export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-honig-100 via-honig-50 to-honig-100 py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-honig-700 uppercase tracking-widest text-xs mb-2">
          Honig direkt vom Imker
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hüter Imker</h1>
        <p className="text-lg text-honig-900/80 mb-8">
          Echter Honig aus der Region – naturbelassen, mit Liebe gemacht.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="#bestellen"
            className="bg-honig-600 hover:bg-honig-700 text-white px-6 py-3 rounded-xl shadow">
            Honig bestellen
          </a>
          <a href="#honig"
            className="bg-white/70 hover:bg-white border border-honig-100 text-honig-900 px-6 py-3 rounded-xl">
            Sorten ansehen
          </a>
        </div>
      </div>
    </section>
  )
}