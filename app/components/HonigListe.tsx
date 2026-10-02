import honig from '@/data/honig.json'

export type Honig = {
  slug: string
  name: string
  description: string
  farbe: string
  preis: string
  gewicht: string
}

export default function HonigListe() {
  return (
    <section id="honig" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-3">Unsere Sorten</h2>
        <p className="text-honig-700 mb-10">
          Aus der Region, schonend geschleudert, ohne Zusätze.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {honig.map((h) => (
            <div
              key={h.slug}
              className="bg-honig-50 rounded-2xl p-6 border border-honig-100 shadow-sm hover:shadow-md transition"
            >
              <div className="h-32 rounded-xl mb-4 bg-gradient-to-br from-honig-100 to-honig-500" />
              <h3 className="text-xl font-bold mb-2">{h.name}</h3>
              <p className="text-sm text-honig-900/80 mb-4">{h.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-honig-700">{h.gewicht}</span>
                <span className="font-bold text-honig-700">{h.preis}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}