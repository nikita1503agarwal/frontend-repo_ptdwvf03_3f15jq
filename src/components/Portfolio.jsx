const items = [
  { title: 'D2C Skincare', result: '3.1x ROAS in 60 days', img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Edtech Startup', result: '55% lower CAC', img: 'https://images.unsplash.com/photo-1553531384-411a2479c2a9?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Fashion Label', result: '+210% social reach', img: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Fintech App', result: '2x sign-ups with new landing', img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Cafe Chain', result: '1M+ local impressions', img: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Fitness Brand', result: 'Grew IG to 100k in 6 months', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1200&auto=format&fit=crop' },
]

export default function Portfolio() {
  return (
    <section id="work" className="bg-[#0b1220] text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between gap-6 mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Work</h2>
          <p className="text-sm text-white/70">A few highlights</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it) => (
            <div key={it.title} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04]">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={it.img} alt={it.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-4">
                <p className="font-medium">{it.title}</p>
                <p className="text-sm text-white/70">{it.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
