import { useEffect } from 'react'
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion'

export default function MouseFollower() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [mouseX, mouseY])

  const background = useMotionTemplate`radial-gradient(700px circle at ${mouseX}px ${mouseY}px, rgba(37,99,235,0.06), transparent 70%)`

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-20"
      style={{ background }}
    />
  )
}
