import { motion } from 'framer-motion'
import { ArrowRight, ChevronRight } from 'lucide-react'
import Terminal from './Terminal'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Hero() {
  return (
    <div className="relative min-h-[100dvh] flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="space-y-8">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Software & AI Agency
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight"
            >
              Convertimos ideas en{' '}
              <span className="text-gradient-blue">software</span>{' '}
              que genera resultados.
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-lg text-zinc-400 leading-relaxed max-w-[500px]"
            >
              Desarrollamos aplicaciones web, automatizaciónes e inteligencia
              artificial para empresas que quieren crecer mas rápido.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium bg-blue-600 hover:bg-blue-500 text-white transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/35 hover:-translate-y-0.5 active:translate-y-0 text-sm"
              >
                Solicitar Cotizacion
                <ArrowRight size={15} strokeWidth={2.5} />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white transition-all duration-200 text-sm hover:-translate-y-0.5 active:translate-y-0"
              >
                Ver Servicios
                <ChevronRight size={15} strokeWidth={2} />
              </a>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-6 pt-2"
            >
              {[
                { value: '100%', label: 'Codigo personalizado' },
                { value: '24/7', label: 'Soporte' },
                { value: '3+', label: 'Proyectos entregados' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-xl font-bold text-gradient-blue">{stat.value}</div>
                  <div className="text-[11px] text-zinc-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:pl-8"
          >
            <Terminal />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
