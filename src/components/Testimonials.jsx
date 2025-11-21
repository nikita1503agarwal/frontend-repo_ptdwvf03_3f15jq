const testimonials = [
  { name: 'Aarav S.', role: 'Founder, D2C', quote: 'Clear strategy, strong creative and real results. The team is fast and reliable.' },
  { name: 'Meera K.', role: 'Marketing Lead, SaaS', quote: 'They improved our CAC and helped us build a consistent content engine.' },
  { name: 'Rohan P.', role: 'Co-founder, Fintech', quote: 'Brand clarity + performance execution. We finally saw compounding growth.' },
]

export default function Testimonials() {
  return (
    <section className="bg-[#0b1220] text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between gap-6 mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">What Clients Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-white/80">“{t.quote}”</p>
              <div className="mt-4 text-sm text-white/60">{t.name} • {t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
