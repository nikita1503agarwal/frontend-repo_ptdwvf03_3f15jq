import { Megaphone, Rocket, Palette, Globe, Video, Lightbulb } from 'lucide-react'

const services = [
  {
    icon: Megaphone,
    title: 'Social Media Management',
    desc: 'Content calendars, page management, community and growth across platforms.'
  },
  {
    icon: Rocket,
    title: 'Performance Marketing (Google & Meta Ads)',
    desc: 'Campaign strategy, media buying, tracking and optimization for ROI.'
  },
  {
    icon: Palette,
    title: 'Branding & Design',
    desc: 'Identity systems, brand kits, creative direction and production.'
  },
  {
    icon: Globe,
    title: 'Website Development',
    desc: 'High-conversion websites built for speed, SEO and scalability.'
  },
  {
    icon: Video,
    title: 'Video Production',
    desc: 'Shoots, edits and motion—tailored for ads and organic distribution.'
  },
  {
    icon: Lightbulb,
    title: 'Creative Strategy',
    desc: 'Hooks, scripts and structured testing to find winners fast.'
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-[#0b1220] text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between gap-6 mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Services</h2>
          <a href="#contact" className="text-sm text-white/70 hover:text-white">Get a custom plan →</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition p-6">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:scale-105 transition">
                <Icon className="w-5 h-5" />
              </div>
              <p className="font-medium">{title}</p>
              <p className="text-sm text-white/70 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
