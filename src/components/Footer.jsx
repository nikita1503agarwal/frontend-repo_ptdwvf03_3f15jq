import { Mail, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0b1220] text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/10" />
          <div>
            <p className="font-medium">NV Media</p>
            <p className="text-xs text-white/60">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
        <div className="flex items-center gap-6 text-white/80">
          <a href="mailto:support@nvmedia.in" className="flex items-center gap-2 hover:text-white"><Mail className="w-4 h-4"/>support@nvmedia.in</a>
          <a href="#" className="hover:text-white"><Instagram className="w-5 h-5"/></a>
          <a href="#" className="hover:text-white"><Linkedin className="w-5 h-5"/></a>
        </div>
      </div>
    </footer>
  )
}
