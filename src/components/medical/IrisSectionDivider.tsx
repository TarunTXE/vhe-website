import { motion, useReducedMotion } from 'framer-motion';

export default function IrisSectionDivider() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full h-16 flex items-center justify-center pointer-events-none overflow-hidden select-none">
      {/* Precision Axis Line */}
      <div className="absolute inset-x-12 sm:inset-x-24 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* Iris Aperture Expanding Ring on In-View */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        whileInView={shouldReduceMotion ? { opacity: 0.3 } : { scale: [0.7, 1.15, 1.3], opacity: [0, 0.5, 0] }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-sky-400/40 pointer-events-none"
      />

      {/* Inner Lens / Aperture Tick Ring */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 border border-blue-200/80 shadow-sm"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_6px_rgba(59,130,246,0.6)]" />
        <span className="absolute -top-1 w-[1px] h-1 bg-blue-400/60" />
        <span className="absolute -bottom-1 w-[1px] h-1 bg-blue-400/60" />
        <span className="absolute -left-1 h-[1px] w-1 bg-blue-400/60" />
        <span className="absolute -right-1 h-[1px] w-1 bg-blue-400/60" />
      </motion.div>
    </div>
  );
}
