export default function Schedule() {
  return (
    <section id="schedule" className="bg-[#0b1220] text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Book a Free Strategy Call</h2>
        <p className="mt-3 text-white/70">Pick a time that works for you. We’ll dive into goals, timelines and next steps.</p>
        <div className="mt-8">
          <a href="https://calendly.com/mukundmehta21" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-6 h-12 rounded-full bg-white text-black hover:bg-white/90 transition">Schedule Meeting</a>
        </div>
        <div className="mt-10 rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04]">
          <iframe title="Calendly" src="https://calendly.com/mukundmehta21" className="w-full h-[70vh]" />
        </div>
      </div>
    </section>
  )
}
