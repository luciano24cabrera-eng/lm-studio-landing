import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react'

interface Project {
  id: number
  title: string
  category: string
  categoryColor: string
  description: string
  features: string[]
  technologies: string[]
  gradient: string
  accentColor: string
  url: string
  preview?: string
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'CVSmart',
    category: 'Inteligencia Artificial',
    categoryColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    description:
      'Plataforma de reclutamiento impulsada por IA diseñada para optimizar la selección de candidatos y agilizar los procesos de contratación.',
    features: [
      'Analisis inteligente de perfiles',
      'Filtrado automatizado de candidatos',
      'Plataforma web moderna',
      'Optimizacion del proceso de reclutamiento',
    ],
    technologies: ['React', 'TypeScript', 'AI Integration', 'Supabase'],
    gradient: 'from-blue-600/20 via-blue-900/10 to-transparent',
    accentColor: 'blue',
    url: 'https://cvsmart-production.up.railway.app/',
    preview: '/preview-cvsmart.png',
  },
  {
    id: 2,
    title: 'PowerGoms Mexico',
    category: 'Landing Page',
    categoryColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    description:
      'Sitio web diseñado para fortalecer la presencia digital de una marca especializada en productos de cafeína y energía.',
    features: [
      'Diseño orientado a conversión',
      'Presentacion profesional de productos',
      'Experiencia optimizada para móviles',
      'Identidad visual moderna',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    gradient: 'from-emerald-600/20 via-emerald-900/10 to-transparent',
    accentColor: 'emerald',
    url: 'https://powergoms-mx.vercel.app/',
    preview: '/preview-powergoms.png',
  },
  {
    id: 3,
    title: 'LM Studio',
    category: 'Software & IA',
    categoryColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    description:
      'Landing page corporativa desarrollada para presentar nuestros servicios de desarrollo web, automatización e inteligencia artificial.',
    features: [
      'Branding tecnologico',
      'Diseño premium',
      'Animaciones modernas',
      'Captacion de clientes potenciales',
    ],
    technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    gradient: 'from-blue-700/20 via-blue-950/10 to-transparent',
    accentColor: 'blue',
    url: 'https://lm-studio-landing.vercel.app/',
    preview: '/preview-lmstudio.png',
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { type: 'spring', stiffness: 280, damping: 20 } }}
      className="glass-card rounded-2xl overflow-hidden group cursor-default flex flex-col"
    >
      {/* Card visual header */}
      <div className="h-44 relative overflow-hidden">
        {project.preview ? (
          <img
            src={project.preview}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${project.gradient}`} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/90 via-[#050816]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-5">
          <div className={`text-[10px] font-medium px-2.5 py-1 rounded-full border ${project.categoryColor} inline-block mb-2`}>
            {project.category}
          </div>
          <h3 className="text-xl font-bold">{project.title}</h3>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5 space-y-4">
        <p className="text-zinc-400 text-sm leading-relaxed">{project.description}</p>

        <ul className="space-y-1.5">
          {project.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-xs text-zinc-500">
              <span className={`mt-1 w-1 h-1 rounded-full shrink-0 ${project.accentColor === 'blue' ? 'bg-blue-500' : 'bg-emerald-500'}`} />
              {f}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between gap-3 pt-1">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span key={tech} className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-zinc-400">
                {tech}
              </span>
            ))}
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`shrink-0 inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border transition-all duration-200 hover:-translate-y-0.5 ${
              project.accentColor === 'blue'
                ? 'text-blue-400 border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20'
                : 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20'
            }`}
          >
            Ver
            <ExternalLink size={11} strokeWidth={2} />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Soluciones{' '}
            <span className="text-gradient-blue">desarrolladas</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Cada proyecto representa un problema real que resolvimos mediante software, diseño y automatización.
          </p>
        </motion.div>

        {/* Featured project - CVSmart */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card rounded-3xl overflow-hidden mb-8 border-blue-500/15"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Info side */}
            <div className="p-8 lg:p-12 space-y-6">
              <div className="inline-flex items-center gap-2 text-[11px] font-medium px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <Sparkles size={11} strokeWidth={2} />
                Proyecto Destacado
              </div>
              <div>
                <div className="text-xs text-zinc-500 font-medium uppercase tracking-wider mb-2">CVSmart</div>
                <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-3">
                  Reclutamiento impulsado por IA
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Los procesos de reclutamiento suelen ser lentos y requieren revisar grandes cantidades de informacion manualmente.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-xs font-semibold text-zinc-300 mb-1.5">El reto</div>
                  <p className="text-zinc-500 text-xs leading-relaxed">
                    Empresas gastaban dias revisando CVs de forma manual, perdiendo candidatos clave por falta de tiempo.
                  </p>
                </div>
                <div>
                  <div className="text-xs font-semibold text-zinc-300 mb-1.5">La solución</div>
                  <p className="text-zinc-500 text-xs leading-relaxed">
                    Plataforma con IA que evalua y clasifica candidatos automaticamente, priorizando los perfiles mas relevantes.
                  </p>
                </div>
                <div>
                  <div className="text-xs font-semibold text-zinc-300 mb-2">Resultados</div>
                  <ul className="space-y-1.5">
                    {[
                      'Mayor velocidad en la revisión de perfiles',
                      'Mejor organizacion de candidatos',
                      'Experiencia moderna para reclutadores',
                    ].map((r) => (
                      <li key={r} className="flex items-center gap-2 text-xs text-zinc-500">
                        <span className="w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 pt-1">
                <div className="flex flex-wrap gap-1.5">
                  {['React', 'TypeScript', 'AI Integration', 'Supabase'].map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-zinc-400">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="https://cvsmart-production.up.railway.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-blue-400 border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 transition-all duration-200 hover:-translate-y-0.5"
                >
                  Ver proyecto
                  <ExternalLink size={13} strokeWidth={2} />
                </a>
              </div>
            </div>

            {/* Visual side */}
            <div className="relative bg-gradient-to-br from-blue-600/15 via-blue-950/30 to-transparent lg:rounded-r-3xl overflow-hidden flex items-center justify-center p-8 min-h-[280px]">
              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `radial-gradient(circle at 60% 40%, rgba(37,99,235,0.6) 0%, transparent 60%)`,
                }}
              />
              {/* Decorative product card mockup */}
              <div className="relative space-y-3 w-full max-w-xs">
                {[
                  { name: 'Ana Martinez', match: '97%', color: 'text-emerald-400' },
                  { name: 'Carlos Reyes', match: '89%', color: 'text-blue-400' },
                  { name: 'Sofia Lugo', match: '84%', color: 'text-blue-400' },
                ].map((candidate, i) => (
                  <motion.div
                    key={candidate.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center justify-between glass-card rounded-xl px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/40 to-emerald-500/40 flex items-center justify-center text-xs font-bold">
                        {candidate.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-xs font-medium">{candidate.name}</div>
                        <div className="text-[10px] text-zinc-500">Frontend Developer</div>
                      </div>
                    </div>
                    <div className={`text-sm font-bold ${candidate.color}`}>{candidate.match}</div>
                  </motion.div>
                ))}
                <div className="text-center mt-4">
                  <span className="text-[10px] text-zinc-600 font-mono">IA score - CVSmart Platform</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Coming soon card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl border-2 border-dashed border-white/10 p-10 text-center group hover:border-blue-500/30 transition-colors duration-300"
        >
          <div className="max-w-md mx-auto">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-5">
              <ExternalLink size={22} className="text-blue-400" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold mb-3">Tu proyecto podria estar aqui</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Estamos buscando empresas y emprendedores que quieran transformar sus procesos mediante software e inteligencia artificial.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white transition-all duration-200 shadow-lg shadow-blue-600/20 hover:-translate-y-0.5 active:translate-y-0"
            >
              Solicitar Cotizacion
              <ArrowRight size={14} strokeWidth={2.5} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
