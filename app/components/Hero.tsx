export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-honig-100 via-honig-50 to-honig-100 py-20 md:py-28">
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-honig-500 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-honig-600 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <p className="text-honig-700 uppercase tracking-widest text-xs mb-3">
          Honig direkt aus Studernheim
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-5 tracking-tight">
          Hüter Imker
        </h1>
        <p className="text-lg md:text-xl text-honig-900/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Echter Honig aus der Region – von Bienen aus Studernheim, geschleudert
          in Studernheim, abgefüllt in Studernheim.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#bestellen"
            className="bg-honig-600 hover:bg-honig-700 text-white px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-shadow font-medium"
          >
            Honig bestellen
          </a>
          <a
            href="#honig"
            className="bg-white/80 hover:bg-white border border-honig-200 text-honig-900 px-7 py-3.5 rounded-xl shadow-sm hover:shadow transition font-medium"
          >
            Sorten ansehen
          </a>
        </div>
      </div>
    </section>
  )
}
