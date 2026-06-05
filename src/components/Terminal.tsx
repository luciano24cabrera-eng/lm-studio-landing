import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Zap } from 'lucide-react'

interface CodeLine {
  text: string
  color: string
}

interface CodeExample {
  label: string
  lines: CodeLine[]
}

const CODE_EXAMPLES: CodeExample[] = [
  {
    label: 'AI Automation',
    lines: [
      { text: '# LM Studio Code', color: 'text-zinc-500' },
      { text: '', color: '' },
      { text: 'from fastapi import FastAPI', color: 'text-blue-400' },
      { text: '', color: '' },
      { text: 'app = FastAPI()', color: 'text-white' },
      { text: '', color: '' },
      { text: '@app.get("/visión")', color: 'text-emerald-400' },
      { text: 'async def build():', color: 'text-white' },
      { text: '    return {', color: 'text-white' },
      { text: '        "idea": "tu visión",', color: 'text-amber-300' },
      { text: '        "code": "nuestro código",', color: 'text-amber-300' },
      { text: '        "status": 200', color: 'text-blue-300' },
      { text: '    }', color: 'text-white' },
    ],
  },
  {
    label: 'Web Application',
    lines: [
      { text: "// Next.js App Router", color: 'text-zinc-500' },
      { text: "import { Suspense } from 'react'", color: 'text-blue-400' },
      { text: '', color: '' },
      { text: "export default function App() {", color: 'text-white' },
      { text: "  return (", color: 'text-white' },
      { text: "    <Suspense fallback={<Loading />}>", color: 'text-emerald-400' },
      { text: "      <Dashboard metrics={data} />", color: 'text-blue-300' },
      { text: "    </Suspense>", color: 'text-emerald-400' },
      { text: "  )", color: 'text-white' },
      { text: "}", color: 'text-white' },
    ],
  },
  {
    label: 'Business Dashboard',
    lines: [
      { text: 'SELECT', color: 'text-blue-400' },
      { text: '  mes,', color: 'text-white' },
      { text: '  SUM(ventas)   AS total,', color: 'text-white' },
      { text: '  AVG(crecimiento) AS pct', color: 'text-white' },
      { text: 'FROM reportes', color: 'text-emerald-400' },
      { text: 'WHERE año = 2026', color: 'text-amber-300' },
      { text: 'GROUP BY mes', color: 'text-blue-400' },
      { text: 'ORDER BY mes ASC', color: 'text-blue-400' },
    ],
  },
]

const BADGES = [
  {
    Icon: CheckCircle,
    label: 'Build Passing',
    textColor: 'text-emerald-400',
    className: 'bg-emerald-500/10 border border-emerald-500/20',
  },
  {
    Icon: Zap,
    label: 'Deploy Ready',
    textColor: 'text-blue-400',
    className: 'bg-blue-500/10 border border-blue-500/20',
  },
  {
    Icon: CheckCircle,
    label: 'API Connected',
    textColor: 'text-emerald-400',
    className: 'bg-emerald-500/10 border border-emerald-500/20',
  },
]

export default function Terminal() {
  const [exampleIndex, setExampleIndex] = useState(0)
  const [revealedCount, setRevealedCount] = useState(0)
  const [visible, setVisible] = useState(true)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const currentExample = CODE_EXAMPLES[exampleIndex]

  const clear = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }

  useEffect(() => {
    clear()
    setRevealedCount(0)
    setVisible(true)

    let count = 0
    intervalRef.current = setInterval(() => {
      count += 1
      setRevealedCount(count)
      if (count >= currentExample.lines.length) {
        clear()
        timeoutRef.current = setTimeout(() => {
          setVisible(false)
          timeoutRef.current = setTimeout(() => {
            setExampleIndex(prev => (prev + 1) % CODE_EXAMPLES.length)
          }, 400)
        }, 2800)
      }
    }, 110)

    return clear
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exampleIndex])

  return (
    <div className="relative">
      {/* Glow halos */}
      <div className="absolute -inset-6 rounded-3xl bg-blue-600/8 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full bg-emerald-500/8 blur-3xl pointer-events-none" />

      <motion.div
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        className="relative rounded-2xl glass-card overflow-hidden glow-blue"
      >
        {/* Title bar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="flex gap-1.5 shrink-0">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          <span className="text-xs text-zinc-500 font-mono flex-1 text-center">
            app.py - lm-studio
          </span>
          <span className="shrink-0 text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono">
            {currentExample.label}
          </span>
        </div>

        {/* Code */}
        <div className="p-5 font-mono text-xs min-h-[220px]">
          <div className="flex gap-4">
            <div className="text-zinc-700 select-none text-right w-5 shrink-0">
              {currentExample.lines.slice(0, revealedCount).map((_, i) => (
                <div key={i} className="leading-6">{i + 1}</div>
              ))}
            </div>
            <div className="flex-1 overflow-hidden">
              {currentExample.lines.slice(0, revealedCount).map((line, i) => (
                <div key={i} className={`leading-6 ${line.color || 'text-white'}`}>
                  {line.text || ' '}
                  {i === revealedCount - 1 && (
                    <span className="inline-block w-[7px] h-[13px] bg-blue-400 ml-0.5 align-middle animate-blink" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Status badges */}
        <div className="px-5 py-3 border-t border-white/[0.06] bg-white/[0.02] flex flex-wrap gap-2">
          {BADGES.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.25 + 0.6, duration: 0.4 }}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono ${badge.className}`}
            >
              <badge.Icon size={10} className={badge.textColor} />
              <span className={badge.textColor}>{badge.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
