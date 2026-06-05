import { motion } from 'framer-motion'
import { Globe, Monitor, Settings2, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Service {
  Icon: LucideIcon
  title: string
  description: string
  iconBg: string
  iconColor: string
  iconGlow: string
  borderHover: string
  shadowHover: string
}

const SERVICES: Service[] = [
  {
    Icon: Globe,
    title: 'Landing Pages',
    description:
      'Páginas rapidas, modernas y optimizadas para convertir visitas en clientes.',
    iconBg: 'bg-blue-500/15',
    iconColor: 'text-blue-400',
    iconGlow: 'shadow-blue-500/30',
    borderHover: 'group-hover:border-blue-500/30',
    shadowHover: 'group-hover:shadow-blue-500/10',
  },
  {
    Icon: Monitor,
    title: 'Desarrollo Web',
    description:
      'Aplicaciones y sistemas web personalizados segun las necesidades de tu negocio.',
    iconBg: 'bg-emerald-500/15',
    iconColor: 'text-emerald-400',
    iconGlow: 'shadow-emerald-500/30',
    borderHover: 'group-hover:border-emerald-500/30',
    shadowHover: 'group-hover:shadow-emerald-500/10',
  },
  {
    Icon: Settings2,
    title: 'Automatizacion',
    description:
      'Automatizamos procesos repetitivos para que tu negocio trabaje solo.',
    iconBg: 'bg-blue-500/15',
    iconColor: 'text-blue-400',
    iconGlow: 'shadow-blue-500/30',
    borderHover: 'group-hover:border-blue-500/30',
    shadowHover: 'group-hover:shadow-blue-500/10',
  },
  {
    Icon: Wrench,
    title: 'Soluciones a Medida',
    description:
      'Si lo puedes imaginar, nosotros lo desarrollamos.',
    iconBg: 'bg-emerald-500/15',
    iconColor: 'text-emerald-400',
    iconGlow: 'shadow-emerald-500/30',
    borderHover: 'group-hover:border-emerald-500/30',
    shadowHover: 'group-hover:shadow-emerald-500/10',
  },
]

export default function Services() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Lo que{' '}
            <span className="text-gradient-green">construimos</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Soluciones tecnológicas diseñadas para resolver problemas reales y generar resultados medibles.
          </p>
        </motion.div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, transition: { type: 'spring', stiffness: 280, damping: 22 } }}
              className={`group glass-card rounded-2xl p-8 cursor-default transition-all duration-300 hover:shadow-xl ${service.shadowHover} ${service.borderHover}`}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center mb-6 shadow-lg ${service.iconGlow} transition-shadow duration-300 group-hover:shadow-xl`}
              >
                <service.Icon size={26} className={service.iconColor} strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 tracking-tight">{service.title}</h3>

              {/* Description */}
              <p className="text-zinc-400 text-base leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
