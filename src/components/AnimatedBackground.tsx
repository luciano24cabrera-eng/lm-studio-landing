import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Blue orb - top right */}
      <motion.div
        className="absolute rounded-full bg-blue-600/20 blur-[120px]"
        style={{ width: 600, height: 600, top: '-10%', right: '-5%' }}
        animate={{ y: [0, -30, 15, 0], x: [0, 15, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Green orb - bottom left */}
      <motion.div
        className="absolute rounded-full bg-emerald-500/15 blur-[100px]"
        style={{ width: 500, height: 500, bottom: '10%', left: '-5%' }}
        animate={{ y: [0, 25, -15, 0], x: [0, -20, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />
      {/* Smaller blue orb - center */}
      <motion.div
        className="absolute rounded-full bg-blue-700/10 blur-[80px]"
        style={{ width: 300, height: 300, top: '45%', left: '40%' }}
        animate={{ y: [0, -20, 10, 0], x: [0, 15, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />
      {/* Subtle green accent - top left */}
      <motion.div
        className="absolute rounded-full bg-emerald-600/8 blur-[90px]"
        style={{ width: 250, height: 250, top: '20%', left: '5%' }}
        animate={{ y: [0, 15, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  )
}
