import { motion } from 'framer-motion'
import { Phone, Mail, Globe, ArrowRight } from 'lucide-react'

const CONTACT_CARDS = [
  {
    Icon: Phone,
    title: 'Telefonos',
    items: ['55 8574 5091', '55 3884 8763'],
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/15',
    glow: 'hover:shadow-blue-500/15',
    action: 'tel:+52',
  },
  {
    Icon: Mail,
    title: 'Correos',
    items: ['milo.rodal@gmail.com', 'luciano24cabrera@gmail.com'],
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/15',
    glow: 'hover:shadow-emerald-500/15',
    action: 'mailto:',
  },
  {
    Icon: Globe,
    title: 'Redes Sociales',
    items: ['Proximamente'],
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/15',
    glow: 'hover:shadow-blue-500/15',
    action: null,
  },
]

export default function Contact() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header + CTA split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Hablemos de tu{' '}
              <span className="text-gradient-blue">proyecto</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-md">
              Cuentanos que necesitas y te diremos como podemos ayudarte a construirlo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:pt-6"
          >
            <div className="glass-card rounded-2xl p-8 border border-blue-500/15">
              <h3 className="font-semibold text-lg mb-2">Inicia tu proyecto hoy</h3>
              <p className="text-zinc-400 text-sm mb-6">
                Respondemos todas las consultas dentro de las siguientes 24 horas.
              </p>
              <a
                href="mailto:luciano24cabrera@gmail.com"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium bg-blue-600 hover:bg-blue-500 text-white transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/35 hover:-translate-y-0.5 active:translate-y-0 text-sm"
              >
                Solicitar Cotizacion
                <ArrowRight size={15} strokeWidth={2.5} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Contact info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {CONTACT_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              className={`glass-card rounded-2xl p-6 border ${card.border} transition-shadow duration-300 hover:shadow-lg ${card.glow} cursor-default`}
            >
              <div className={`w-10 h-10 rounded-xl ${card.bg} flex items-center justify-center mb-4`}>
                <card.Icon size={20} className={card.color} strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-sm mb-3">{card.title}</h3>
              <div className="space-y-2">
                {card.items.map((item) => (
                  <div key={item}>
                    {card.action ? (
                      <a
                        href={`${card.action}${item.replace(/\s/g, '')}`}
                        className={`block text-sm ${card.color} hover:underline transition-colors`}
                      >
                        {item}
                      </a>
                    ) : (
                      <span className={`block text-sm ${item === 'Proximamente' ? 'text-zinc-500' : card.color}`}>
                        {item}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
