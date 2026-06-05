import { motion } from 'framer-motion'

const FOOTER_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-between gap-8"
        >
          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <a href="#inicio" className="flex items-center gap-2.5 group">
              <img
                src="/logoLM.png"
                alt="LM Studio"
                className="w-9 h-9 object-contain drop-shadow-[0_0_8px_rgba(37,99,235,0.5)]"
              />
              <span className="font-semibold text-base tracking-tight">LM Studio</span>
            </a>
            <p className="text-xs text-zinc-500">Tu visión, nuestro código.</p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>

        <div className="mt-8 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            &copy; 2026 LM Studio. Todos los derechos reservados.
          </p>
          <p className="text-xs text-zinc-700">
            Hecho con dedicacion en Mexico
          </p>
        </div>
      </div>
    </footer>
  )
}
