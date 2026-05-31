import { motion } from 'framer-motion'
import { ShieldCheck, Clock, TrendingUp, Gauge } from 'lucide-react'

const METRICS = [
  {
    Icon: ShieldCheck,
    value: '100%',
    label: 'Codigo Personalizado',
    description: 'Sin templates genericos. Cada linea de codigo es creada especificamente para tu proyecto.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/15',
  },
  {
    Icon: Clock,
    value: '24/7',
    label: 'Soporte',
    description: 'Disponibles para resolver cualquier problema o urgencia cuando tu negocio lo necesite.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/15',
  },
  {
    Icon: TrendingUp,
    value: 'Escalable',
    label: 'Para tu negocio',
    description: 'Construimos sistemas que crecen contigo, sin necesidad de reconstruir desde cero.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/15',
  },
  {
    Icon: Gauge,
    value: 'Rapido',
    label: 'Tiempo de entrega',
    description: 'Procesos optimizados para lanzar productos funcionales en el menor tiempo posible.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/15',
  },
]

export default function WhyUs() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            <span className="text-gradient-green">Por que</span> LM Studio?
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Comprometidos con entregar valor real a traves de tecnologia que funciona.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {METRICS.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              className={`glass-card rounded-2xl p-6 border ${metric.border} cursor-default group`}
            >
              <div className={`w-10 h-10 rounded-xl ${metric.bg} flex items-center justify-center mb-4`}>
                <metric.Icon size={20} className={metric.color} strokeWidth={1.5} />
              </div>
              <div className={`text-2xl font-bold mb-1 ${metric.color}`}>{metric.value}</div>
              <div className="text-sm font-semibold text-white mb-3">{metric.label}</div>
              <p className="text-zinc-500 text-xs leading-relaxed">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
