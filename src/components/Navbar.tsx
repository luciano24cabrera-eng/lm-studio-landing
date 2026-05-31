import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()

  const bgColor = useTransform(scrollY, [0, 80], ['rgba(5,8,22,0)', 'rgba(5,8,22,0.92)'])
  const borderColor = useTransform(scrollY, [0, 80], ['rgba(255,255,255,0)', 'rgba(255,255,255,0.08)'])
  const blurAmount = useTransform(scrollY, [0, 80], ['blur(0px)', 'blur(16px)'])

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{
          backgroundColor: bgColor,
          borderColor: borderColor,
          backdropFilter: blurAmount,
          WebkitBackdropFilter: blurAmount,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#inicio" className="flex items-center gap-2.5 group">
              <img
                src="/logoLM.png"
                alt="LM Studio"
                className="w-9 h-9 object-contain drop-shadow-[0_0_8px_rgba(37,99,235,0.6)] group-hover:drop-shadow-[0_0_12px_rgba(16,185,129,0.7)] transition-all duration-300"
              />
              <span className="font-semibold text-base tracking-tight">LM Studio</span>
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:block">
              <a
                href="#contacto"
                className="inline-flex items-center px-5 py-2 rounded-full text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                Agenda una llamada
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <motion.div
        initial={false}
        animate={mobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
        transition={{ duration: 0.2 }}
        className={`fixed top-16 left-0 right-0 z-40 md:hidden ${mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div className="glass-card border-t-0 mx-4 rounded-b-2xl px-5 py-5 space-y-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm text-zinc-400 hover:text-white py-1.5 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="block w-full text-center px-5 py-2.5 rounded-full text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white transition-colors mt-2"
            onClick={() => setMobileOpen(false)}
          >
            Agenda una llamada
          </a>
        </div>
      </motion.div>
    </>
  )
}
