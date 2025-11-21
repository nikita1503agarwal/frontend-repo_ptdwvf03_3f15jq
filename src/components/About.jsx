export default function About() {
  return (
    <section id="about" className="relative bg-[#0b1220] text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">About NV Media</h2>
            <p className="mt-5 text-white/70 leading-relaxed">
              We are a digital-first growth partner helping brands scale with clarity and creative excellence. Our work blends performance marketing with brand strategy so you get measurable results—without losing your voice.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Strategy-Led', desc: 'Every campaign starts with data, insights and a clear plan.' },
                { title: 'Full-Funnel', desc: 'From awareness to conversions—built as one seamless system.' },
                { title: 'Creative First', desc: 'Thumb-stopping content crafted for modern platforms.' },
                { title: 'Transparent', desc: 'Clear reporting, honest communication, no fluff.' },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-white/10 p-5 bg-white/5 hover:bg-white/[0.07] transition">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-white/70 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 p-6 bg-gradient-to-br from-white/5 to-transparent">
              <p className="text-sm uppercase tracking-widest text-white/60">Our Mission</p>
              <p className="mt-3 text-white/80">To help ambitious brands grow faster with performance, design and storytelling—working as an extension of your team.</p>
            </div>
            <div className="rounded-2xl border border-white/10 p-6 bg-gradient-to-br from-white/5 to-transparent">
              <p className="text-sm uppercase tracking-widest text-white/60">What Makes Us Different</p>
              <p className="mt-3 text-white/80">We combine media buying with strong creative and clear strategy. That means better CAC, stronger retention and brand equity that compounds.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
