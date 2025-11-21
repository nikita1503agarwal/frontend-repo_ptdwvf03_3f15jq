import { useState } from 'react'

const serviceOptions = [
  'Social Media Management',
  'Performance Marketing (Google & Meta Ads)',
  'Branding & Design',
  'Website Development',
  'Video Production',
  'Creative Strategy',
  'Other',
]

const budgetOptions = ['<$1,000', '$1,000 - $3,000', '$3,000 - $5,000', '$5,000 - $10,000', '>$10,000']

export default function Contact() {
  const [status, setStatus] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const data = Object.fromEntries(form.entries())

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: data.full_name,
          email: data.email,
          phone: data.phone,
          company: data.company,
          service: data.service,
          budget: data.budget,
          message: data.message,
        })
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus('success')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-[#0b1220] text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Let’s Talk</h2>
            <p className="mt-4 text-white/70">Tell us about your goals and we’ll come back with a plan. We typically respond within 24 hours.</p>
            <div className="mt-6 text-white/80 space-y-1">
              <p>Email: support@nvmedia.in</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-white/70">Full Name</label>
                <input name="full_name" required className="mt-1 w-full h-11 rounded-lg bg-white/5 border border-white/10 px-3 outline-none focus:ring-2 focus:ring-white/20" />
              </div>
              <div>
                <label className="text-sm text-white/70">Email</label>
                <input type="email" name="email" required className="mt-1 w-full h-11 rounded-lg bg-white/5 border border-white/10 px-3 outline-none focus:ring-2 focus:ring-white/20" />
              </div>
              <div>
                <label className="text-sm text-white/70">Phone</label>
                <input name="phone" className="mt-1 w-full h-11 rounded-lg bg-white/5 border border-white/10 px-3 outline-none focus:ring-2 focus:ring-white/20" />
              </div>
              <div>
                <label className="text-sm text-white/70">Business / Company</label>
                <input name="company" className="mt-1 w-full h-11 rounded-lg bg-white/5 border border-white/10 px-3 outline-none focus:ring-2 focus:ring-white/20" />
              </div>
              <div>
                <label className="text-sm text-white/70">Service Needed</label>
                <select name="service" required className="mt-1 w-full h-11 rounded-lg bg-white/5 border border-white/10 px-3 outline-none">
                  {serviceOptions.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="text-sm text-white/70">Budget Range</label>
                <select name="budget" required className="mt-1 w-full h-11 rounded-lg bg-white/5 border border-white/10 px-3 outline-none">
                  {budgetOptions.map((b) => <option key={b}>{b}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="text-sm text-white/70">Message</label>
              <textarea name="message" rows={4} className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20" />
            </div>
            <button type="submit" className="inline-flex items-center justify-center px-6 h-11 rounded-full bg-white text-black hover:bg-white/90 transition">Submit</button>
            {status === 'success' && <p className="text-emerald-400 text-sm">Thanks! Your inquiry has been sent.</p>}
            {status === 'error' && <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
