import Spline from '@splinetool/react-spline';

export default function Hero({ onCTAClick }) {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#0b1220] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20">
        <div className="max-w-3xl">
          <p className="text-sm tracking-widest text-white/60 uppercase mb-6">NV Media</p>
          <h1 className="text-4xl sm:text-6xl font-semibold leading-tight tracking-tight">
            Grow Your Business With NV Media
          </h1>
          <p className="mt-5 text-white/70 text-lg">
            Digital Marketing • Branding • Social Media • Strategy
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center justify-center px-6 h-12 rounded-full bg-white text-black hover:bg-white/90 transition">Get in Touch</a>
            <a href="#schedule" className="inline-flex items-center justify-center px-6 h-12 rounded-full border border-white/20 hover:border-white/40 transition">Schedule a Meeting</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1220] via-transparent to-[#0b1220]/40" />
    </section>
  );
}
