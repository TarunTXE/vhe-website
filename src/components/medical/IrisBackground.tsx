import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function IrisBackground() {
  const shouldReduceMotion = useReducedMotion();
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (shouldReduceMotion) return;
    if (typeof window !== 'undefined' && (window.matchMedia('(hover: none)').matches || window.innerWidth < 768)) {
      return;
    }
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 24;
      const y = (e.clientY / window.innerHeight - 0.5) * 24;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [shouldReduceMotion]);

  // Generate 32 delicate iris sphincter fiber lines (optimized for mobile performance)
  const irisFibers = Array.from({ length: 32 }).map((_, i) => {
    const angle = (i * 360) / 32;
    return { angle, length: 110 + (i % 5) * 6 };
  });

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* 1. Subtle Precision Medical Grid Base */}
      <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#0284c7_1px,transparent_1px),linear-gradient(to_bottom,#0284c7_1px,transparent_1px)] bg-[size:4.5rem_4.5rem]" />

      {/* 2. Abstract Ophthalmology Iris Visualization (Top-Right / Central Field) */}
      <motion.div
        className="absolute -top-24 -right-24 md:top-10 md:right-10 w-[550px] h-[550px] lg:w-[700px] lg:h-[700px] opacity-[0.045]"
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: mouseOffset.x,
                y: mouseOffset.y,
              }
        }
        transition={{ type: 'spring', damping: 40, stiffness: 60 }}
      >
        <motion.svg
          viewBox="0 0 600 600"
          className="w-full h-full text-blue-900"
          animate={shouldReduceMotion ? {} : { rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
        >
          <defs>
            <radialGradient id="irisGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.8" />
              <stop offset="35%" stopColor="#2563eb" stopOpacity="0.5" />
              <stop offset="70%" stopColor="#0369a1" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0.05" />
            </radialGradient>
            <linearGradient id="vesselGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Scleral Ring & Collarette */}
          <circle cx="300" cy="300" r="280" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="6 4" />
          <circle cx="300" cy="300" r="240" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <circle cx="300" cy="300" r="160" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
          <circle cx="300" cy="300" r="80" fill="none" stroke="currentColor" strokeWidth="1" />

          {/* Iris Crypts & Trabecular Radials */}
          {irisFibers.map((fiber, idx) => (
            <line
              key={idx}
              x1="300"
              y1="300"
              x2={300 + Math.cos((fiber.angle * Math.PI) / 180) * fiber.length}
              y2={300 + Math.sin((fiber.angle * Math.PI) / 180) * fiber.length}
              stroke="currentColor"
              strokeWidth={idx % 2 === 0 ? "1.2" : "0.6"}
              strokeOpacity={idx % 3 === 0 ? "0.8" : "0.4"}
            />
          ))}

          {/* Central Pupil with gentle physiological pulse */}
          <motion.circle
            cx="300"
            cy="300"
            r="42"
            fill="currentColor"
            animate={shouldReduceMotion ? {} : { r: [40, 44, 40] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Corneal Specular Moving Highlight */}
          <motion.ellipse
            cx="285"
            cy="285"
            rx="8"
            ry="4"
            fill="#ffffff"
            animate={
              shouldReduceMotion
                ? {}
                : {
                    cx: [283, 288, 283],
                    cy: [283, 287, 283],
                    opacity: [0.6, 0.9, 0.6]
                  }
            }
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            transform="rotate(-30 285 285)"
          />
        </motion.svg>
      </motion.div>

      {/* 3. Retinal Blood Vessel Arborescence (Vessel-inspired branched lines emanating from left) */}
      <div className="absolute -bottom-20 -left-20 w-[450px] h-[450px] lg:w-[600px] lg:h-[600px] opacity-[0.035] pointer-events-none">
        <svg viewBox="0 0 500 500" className="w-full h-full text-sky-700">
          {/* Superior & Inferior Temporal Arcades */}
          <path
            d="M 50,450 C 120,400 180,320 220,220 C 250,150 320,100 420,80"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M 220,220 C 260,260 340,300 440,320"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M 120,400 C 160,420 250,440 380,420"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <path
            d="M 250,150 C 270,110 320,60 400,30"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeLinecap="round"
          />

          {/* Micro Vessel Arterioles */}
          <path d="M 320,100 Q 360,130 410,125" fill="none" stroke="currentColor" strokeWidth="0.6" />
          <path d="M 260,260 Q 300,280 350,270" fill="none" stroke="currentColor" strokeWidth="0.6" />
          <path d="M 160,420 Q 200,450 250,460" fill="none" stroke="currentColor" strokeWidth="0.6" />
        </svg>

        {/* Retinal outward micro-pulse particles */}
        {!shouldReduceMotion && (
          <>
            {[
              { pathX: [50, 220, 420], pathY: [450, 220, 80], dur: 12, delay: 0 },
              { pathX: [220, 340, 440], pathY: [220, 300, 320], dur: 9, delay: 3 },
              { pathX: [120, 250, 380], pathY: [400, 440, 420], dur: 14, delay: 5 },
            ].map((p, idx) => (
              <motion.div
                key={idx}
                className="absolute w-1 h-1 rounded-full bg-cyan-400 blur-[0.5px]"
                animate={{
                  x: p.pathX,
                  y: p.pathY,
                  opacity: [0, 0.8, 0],
                  scale: [0.8, 1.3, 0.8]
                }}
                transition={{
                  duration: p.dur,
                  delay: p.delay,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
