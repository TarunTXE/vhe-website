import { motion, useReducedMotion } from 'framer-motion';

export default function RetinaScan() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute -inset-10 sm:-inset-16 md:-inset-20 pointer-events-none flex items-center justify-center select-none overflow-visible">
      {/* Ophthalmology Scanner Base - 1. Slow Rotating Outer Calibrations Ring */}
      <motion.div
        animate={shouldReduceMotion ? {} : { rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[125%] h-[125%] rounded-full border border-sky-300/30"
      >
        {/* Optical Axis Angle Ticks */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
          <div
            key={deg}
            className="absolute top-1/2 left-1/2 w-full h-[1px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ transform: `translate(-50%, -50%) rotate(${deg}deg)` }}
          >
            <span className="absolute left-0 w-2.5 h-[1.5px] bg-sky-400/40" />
            <span className="absolute right-0 w-2.5 h-[1.5px] bg-sky-400/40" />
          </div>
        ))}
      </motion.div>

      {/* 2. Concentric Ocular Zones: Macular, Foveal, Retinal Rings */}
      <div className="absolute w-[140%] h-[140%] rounded-full border border-dashed border-blue-400/20" />
      <div className="absolute w-[112%] h-[112%] rounded-full border border-sky-400/30" />
      <div className="absolute w-[95%] h-[95%] rounded-full border border-dashed border-cyan-300/25" />

      {/* 3. Retinal Fundus Scanning Sweeper Beam */}
      {!shouldReduceMotion && (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[130%] h-[130%] rounded-full overflow-hidden"
          style={{
            background: 'conic-gradient(from 0deg at 50% 50%, rgba(56, 189, 248, 0.18) 0deg, rgba(37, 99, 235, 0.05) 45deg, transparent 75deg, transparent 360deg)'
          }}
        />
      )}

      {/* 4. Fine Axis Crosshairs with Target Brackets */}
      <div className="absolute w-[120%] h-[1px] bg-gradient-to-r from-transparent via-sky-400/30 to-transparent pointer-events-none" />
      <div className="absolute h-[120%] w-[1px] bg-gradient-to-b from-transparent via-sky-400/30 to-transparent pointer-events-none" />

      {/* 5. Micro Data Points (OCT Scan Targets) */}
      {[
        { top: '12%', left: '30%', label: '98.4°' },
        { top: '22%', right: '18%', label: 'T-COR' },
        { bottom: '16%', left: '20%', label: 'FOV' },
        { bottom: '26%', right: '14%', label: '250µm' },
      ].map((pt, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.3 }}
          animate={shouldReduceMotion ? {} : { opacity: [0.3, 0.8, 0.3], scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 3, delay: i * 0.7, repeat: Infinity, ease: 'easeInOut' }}
          className="hidden sm:flex absolute items-center gap-1 text-[8px] font-mono tracking-widest text-sky-600/60"
          style={{ top: pt.top, left: pt.left, right: pt.right, bottom: pt.bottom }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          <span className="hidden sm:inline font-semibold">{pt.label}</span>
        </motion.div>
      ))}

      {/* 6. Soft Ambient Ophthalmic Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/10 via-blue-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />
    </div>
  );
}
