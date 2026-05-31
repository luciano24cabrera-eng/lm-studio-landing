import { motion } from 'framer-motion'
import { Code2, Cpu, Sparkles } from 'lucide-react'

const PILLARS = [
  {
    Icon: Code2,
    title: 'Desarrollo de Software',
    description: 'Aplicaciones web modernas construidas con las mejores tecnologias del ecosistema actual.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    Icon: Cpu,
    title: 'Automatizacion',
    description: 'Flujos inteligentes que eliminan tareas repetitivas y liberan el potencial de tu equipo.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
  {
    Icon: Sparkles,
    title: 'Presencia Digital',
    description: 'Sitios web y experiencias digitales que fortalecen tu marca y generan nuevas oportunidades de negocio.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
]

export default function About() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/8 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Construimos tecnologia que{' '}
              <span className="text-gradient-green">impulsa negocios.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-lg">
              En LM Studio combinamos desarrollo de software, automatizacion e inteligencia
              artificial para crear soluciones modernas que ayudan a las empresas a ahorrar
              tiempo, aumentar productividad y crecer.
            </p>
            <p className="text-zinc-500 text-base leading-relaxed max-w-lg">
              Trabajamos como un equipo tecnico dedicado a tu proyecto, con enfoque en
              resultados medibles y entregas de calidad en cada etapa.
            </p>
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-gradient-blue">100%</div>
                <div className="text-xs text-zinc-500 mt-1">Codigo propio</div>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <div className="text-3xl font-bold text-gradient-green">3+</div>
                <div className="text-xs text-zinc-500 mt-1">Proyectos lanzados</div>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <div className="text-3xl font-bold text-white">2</div>
                <div className="text-xs text-zinc-500 mt-1">Fundadores</div>
              </div>
            </div>
          </motion.div>

          {/* Right: pillars */}
          <div className="space-y-4">
            {PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ x: 4, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                className="glass-card rounded-2xl p-5 flex items-start gap-4 cursor-default"
              >
                <div className={`w-10 h-10 rounded-xl ${pillar.bg} flex items-center justify-center shrink-0`}>
                  <pillar.Icon size={20} className={pillar.color} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1.5">{pillar.title}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
