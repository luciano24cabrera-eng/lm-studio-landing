import { motion } from 'framer-motion'
import { Search, Lightbulb, Code2, Rocket } from 'lucide-react'

const STEPS = [
  {
    number: '01',
    Icon: Search,
    title: 'Descubrimiento',
    description: 'Analizamos tu negocio, objetivos y desafios para entender el problema que necesitamos resolver.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    glow: 'shadow-blue-500/20',
  },
  {
    number: '02',
    Icon: Lightbulb,
    title: 'Diseño',
    description: 'Creamos una solución enfocada en resultados, con una arquitectura clara y un plan de ejecución.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    glow: 'shadow-emerald-500/20',
  },
  {
    number: '03',
    Icon: Code2,
    title: 'Desarrollo',
    description: 'Construimos el sistema con tecnologías modernas, iterando rápido y manteniendo calidad.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    glow: 'shadow-blue-500/20',
  },
  {
    number: '04',
    Icon: Rocket,
    title: 'Lanzamiento',
    description: 'Desplegamos y optimizamos continuamente para asegurar que el producto funcione a su máximo nivel.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    glow: 'shadow-emerald-500/20',
  },
]

export default function Process() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8">
      {/* Subtle divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-white/10" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Nuestro{' '}
            <span className="text-gradient-blue">proceso</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Un método probado que transforma ideas en productos funcionales.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500/30 via-emerald-500/30 to-blue-500/30"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              style={{ transformOrigin: 'left' }}
            />
          </div>

          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                {/* Icon circle */}
                <div className={`relative w-20 h-20 rounded-2xl ${step.bg} border ${step.border} flex items-center justify-center mb-5 shadow-lg ${step.glow}`}>
                  <step.Icon size={28} className={step.color} strokeWidth={1.5} />
                  <span className={`absolute -top-2 -right-2 text-[10px] font-bold font-mono ${step.color} px-1.5 py-0.5 rounded-full ${step.bg} border ${step.border}`}>
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
