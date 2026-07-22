import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Activity, ScanFace, Dna } from 'lucide-react';
import iconImage from '../assets/icon.jpeg';
import authorImg from '../assets/author.webp';
import heroBg from '../assets/hero-bg.gif';

export default function Landing() {
  const navigate = useNavigate();
  const [hoveredSide, setHoveredSide] = useState<'medical' | 'author' | null>(null);
  const [selectedSide, setSelectedSide] = useState<'medical' | 'author' | null>(null);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseY(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSelect = (side: 'medical' | 'author') => {
    setSelectedSide(side);
    // Delay navigation to allow transition animation
    setTimeout(() => {
      navigate(`/${side}`);
    }, 1200);
  };

  // Width calculations for desktop
  const getWidth = (side: 'medical' | 'author') => {
    if (selectedSide === side) return '100vw';
    if (selectedSide && selectedSide !== side) return '0vw';
    if (hoveredSide === side) return '60vw';
    if (hoveredSide && hoveredSide !== side) return '40vw';
    return '50vw';
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-screen overflow-hidden bg-black font-sans relative">
      
      {/* MEDICAL SIDE */}
      <motion.div
        animate={{ width: typeof window !== 'undefined' && window.innerWidth >= 768 ? getWidth('medical') : '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 120 }}
        onMouseEnter={() => !selectedSide && setHoveredSide('medical')}
        onMouseLeave={() => !selectedSide && setHoveredSide(null)}
        className={`relative h-1/2 md:h-full flex items-center justify-center overflow-hidden transition-all duration-700
          ${selectedSide === 'medical' ? 'z-50' : 'z-10'} 
          ${selectedSide === 'author' ? 'opacity-0' : 'opacity-100'}
        `}
      >
        {/* Background Base */}
        <div className="absolute inset-0 bg-white" />
        
        {/* Animated Medical Graphics / Blueprint Overlays */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05] md:opacity-[0.08] mix-blend-multiply overflow-hidden">
           {/* Grid */}
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
           {/* SVG Elements */}
           <motion.div 
             animate={{ rotate: hoveredSide === 'medical' ? 180 : 0, scale: hoveredSide === 'medical' ? 1.1 : 1 }}
             transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
           >
             <ScanFace size={800} strokeWidth={0.5} className="text-blue-900 absolute top-0 left-0 opacity-20" />
           </motion.div>
           <motion.div 
             animate={{ x: hoveredSide === 'medical' ? [-100, 100, -100] : [0, 0] }}
             transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
             className="absolute top-1/4 -left-20"
           >
             <Activity size={400} strokeWidth={1} className="text-blue-900 opacity-20" />
           </motion.div>
           <motion.div 
             animate={{ rotate: hoveredSide === 'medical' ? -90 : 0 }}
             transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
             className="absolute bottom-0 right-10"
           >
             <Dna size={500} strokeWidth={0.5} className="text-blue-900 opacity-20" />
           </motion.div>
        </div>

        {/* Ambient Gradients & Glows */}
        <motion.div 
          animate={{ opacity: hoveredSide === 'medical' ? 0.8 : 0.4 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_70%)] pointer-events-none" 
        />
        <motion.div 
          animate={{ opacity: hoveredSide === 'medical' ? 1 : 0 }}
          className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-transparent to-cyan-400/10 pointer-events-none transition-opacity duration-700" 
        />

        {/* Moving Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           {Array.from({ length: 15 }).map((_, i) => (
             <motion.div
               key={`med-p-${i}`}
               className="absolute w-1 h-1 bg-blue-500 rounded-full blur-[1px]"
               initial={{ opacity: 0, y: '100%', x: `${Math.random() * 100}%` }}
               animate={{ 
                 opacity: [0, 0.5, 0], 
                 y: ['100%', '-10%'],
                 x: `${Math.random() * 100}%` 
               }}
               transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, ease: 'linear', delay: Math.random() * 5 }}
             />
           ))}
        </div>

        {/* Content */}
        <motion.div 
          animate={{ scale: hoveredSide === 'medical' ? 1.02 : 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-20 flex flex-col items-center text-center px-8 w-full max-w-xl"
        >
          {/* Portrait */}
          <div className="relative mb-8 group cursor-pointer" onClick={() => handleSelect('medical')}>
             {/* Rotating Outer Ring */}
             <motion.div 
               animate={{ rotate: hoveredSide === 'medical' ? 360 : 0 }}
               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
               className="absolute -inset-4 border border-dashed border-blue-400/40 rounded-full" 
             />
             <motion.div 
               animate={{ rotate: hoveredSide === 'medical' ? -360 : 0 }}
               transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
               className="absolute -inset-6 border border-blue-200/20 rounded-full" 
             />
             
             {/* Profile Image */}
             <motion.div 
               animate={{ scale: hoveredSide === 'medical' ? [1, 1.05, 1] : 1 }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-[3px] border-white shadow-[0_0_30px_rgba(59,130,246,0.3)] bg-blue-50 z-10"
             >
               <img src={iconImage} alt="Dr. Varun Harish E." className="w-full h-full object-cover" />
               <motion.div 
                 animate={{ opacity: hoveredSide === 'medical' ? 1 : 0 }}
                 className="absolute inset-0 bg-blue-500/10 mix-blend-overlay transition-opacity duration-500" 
               />
             </motion.div>
          </div>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="overflow-hidden"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-3">Dr. Varun Harish E.</h2>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-slate-500 tracking-widest uppercase text-sm font-semibold">OPHTHALMOLOGIST</p>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: 0.8 }}
          >
            <p className="text-slate-400 tracking-[0.4em] uppercase text-[10px] mb-10 mt-2 font-medium">Vision Care • Eye Surgery • Clinical Excellence</p>
          </motion.div>

          <motion.button
            onClick={() => handleSelect('medical')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              relative overflow-hidden px-8 py-4 rounded-full border border-blue-200/50 
              bg-white/70 backdrop-blur-md text-blue-900 font-semibold shadow-lg
              flex items-center gap-3 group transition-all duration-500
              ${hoveredSide === 'medical' ? 'shadow-[0_0_30px_rgba(59,130,246,0.3)] border-blue-400' : ''}
            `}
          >
             <span className="relative z-10">Enter Clinic</span>
             <ArrowRight size={18} className="relative z-10 transform group-hover:translate-x-1 transition-transform" />
             {/* Button Hover Ripple */}
             <div className="absolute inset-0 bg-blue-50 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
          </motion.button>
        </motion.div>

        {/* Transition Sweeper */}
        <AnimatePresence>
          {selectedSide === 'medical' && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 bg-blue-950 z-[100] origin-left"
            />
          )}
        </AnimatePresence>
      </motion.div>

      {/* CENTER DIVIDER */}
      <AnimatePresence>
        {!selectedSide && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 z-40 hidden md:block pointer-events-none mix-blend-screen"
            style={{ 
              x: hoveredSide === 'medical' ? '10vw' : hoveredSide === 'author' ? '-10vw' : '0vw',
              transition: 'transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}
          >
            {/* Base line */}
            <div className="w-full h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            
            {/* Glowing beam */}
            <motion.div 
              className={`absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-32 rounded-full blur-[2px] transition-colors duration-700
                ${hoveredSide === 'medical' ? 'bg-blue-400' : hoveredSide === 'author' ? 'bg-amber-400' : 'bg-white/50'}
              `}
              animate={{ y: [0, typeof window !== 'undefined' ? window.innerHeight : 1000, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />

            {/* Particle flares near divider */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-full flex justify-center opacity-30">
               <motion.div 
                 animate={{ 
                   opacity: hoveredSide ? 0.8 : 0.3,
                   background: hoveredSide === 'medical' 
                     ? 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)'
                     : hoveredSide === 'author'
                       ? 'radial-gradient(circle, rgba(245,158,11,0.2) 0%, transparent 70%)'
                       : 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)'
                 }}
                 className="w-full h-full transition-all duration-700"
               />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AUTHOR SIDE */}
      <motion.div
        animate={{ width: typeof window !== 'undefined' && window.innerWidth >= 768 ? getWidth('author') : '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 120 }}
        onMouseEnter={() => !selectedSide && setHoveredSide('author')}
        onMouseLeave={() => !selectedSide && setHoveredSide(null)}
        className={`relative h-1/2 md:h-full flex items-center justify-center overflow-hidden transition-all duration-700 font-cormorant
          ${selectedSide === 'author' ? 'z-50' : 'z-10'}
          ${selectedSide === 'medical' ? 'opacity-0' : 'opacity-100'}
        `}
      >
        {/* Background Base (GIF) */}
        <motion.div 
          animate={{ scale: hoveredSide === 'author' ? 1.05 : 1.1 }}
          transition={{ duration: 10, ease: 'easeOut' }}
          className="absolute inset-0 z-0 origin-center"
        >
          <img src={heroBg} alt="Cinematic" className="w-full h-full object-cover filter brightness-75" loading="lazy" />
        </motion.div>

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-zinc-950/60 z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(9,9,11,0.8)_100%)] z-0 pointer-events-none" />
        
        {/* Animated Noise / Grain */}
        <div className="absolute inset-0 opacity-[0.15] z-0 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

        {/* Floating Embers */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
           {Array.from({ length: 20 }).map((_, i) => (
             <motion.div
               key={`auth-p-${i}`}
               className="absolute w-1 h-1 bg-amber-500 rounded-full blur-[2px]"
               initial={{ opacity: 0, y: '100%', x: `${Math.random() * 100}%` }}
               animate={{ 
                 opacity: [0, Math.random() * 0.8 + 0.2, 0], 
                 y: ['100%', '-20%'],
                 x: `${Math.random() * 100}%` 
               }}
               transition={{ duration: Math.random() * 8 + 4, repeat: Infinity, ease: 'linear', delay: Math.random() * 5 }}
             />
           ))}
        </div>

        {/* Warm Lighting */}
        <motion.div 
          animate={{ opacity: hoveredSide === 'author' ? 0.6 : 0 }}
          className="absolute inset-0 bg-gradient-to-bl from-amber-900/30 via-transparent to-rose-950/40 pointer-events-none transition-opacity duration-700 z-0" 
        />
        
        {/* Cursor Spotlight (Fake interactive light) */}
        <motion.div
           className="absolute w-[600px] h-[600px] rounded-full pointer-events-none z-0 hidden md:block"
           style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 60%)' }}
           animate={{
             x: hoveredSide === 'author' ? mousePosition(mouseY) : 0,
             y: hoveredSide === 'author' ? mouseY - 300 : 0,
             opacity: hoveredSide === 'author' ? 1 : 0
           }}
           transition={{ type: 'spring', damping: 30, stiffness: 200 }}
        />

        {/* Content */}
        <motion.div 
          animate={{ scale: hoveredSide === 'author' ? 1.02 : 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-20 flex flex-col items-center text-center px-8 w-full max-w-xl"
        >
          {/* Portrait */}
          <div className="relative mb-8 group cursor-pointer" onClick={() => handleSelect('author')}>
             {/* Cinematic Rim Light & Glow */}
             <motion.div 
               animate={{ opacity: hoveredSide === 'author' ? 1 : 0, scale: hoveredSide === 'author' ? 1.1 : 1 }}
               transition={{ duration: 0.7 }}
               className="absolute -inset-4 bg-amber-500/20 rounded-full blur-2xl"
             />
             
             {/* Profile Image */}
             <motion.div 
               animate={{ y: hoveredSide === 'author' ? [-5, 5, -5] : 0 }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className={`
                 relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden 
                 border border-amber-900/50 shadow-[0_20px_50px_rgba(0,0,0,0.8)]
                 transition-all duration-700 z-10 bg-zinc-900
                 ${hoveredSide === 'author' ? 'border-amber-500/50 shadow-[0_0_40px_rgba(245,158,11,0.2)]' : 'grayscale-[30%]'}
               `}
             >
               <img src={authorImg} alt="Varun Harish E" className="w-full h-full object-cover filter contrast-125 sepia-[0.2]" />
               
               {/* Inner gold glow */}
               <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(245,158,11,0.3)] pointer-events-none" />
             </motion.div>
          </div>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="overflow-hidden"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-amber-50 tracking-wide mb-3 drop-shadow-xl">Varun Harish E</h2>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-amber-500/80 tracking-[0.3em] uppercase text-xs mb-10 font-sans">Author • Filmmaker</p>
          </motion.div>

          <motion.button
            onClick={() => handleSelect('author')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              relative overflow-hidden px-8 py-4 rounded-sm border border-white/10 
              bg-black/40 backdrop-blur-md text-amber-50 font-sans text-sm tracking-widest uppercase shadow-2xl
              flex items-center gap-4 group transition-all duration-700
              ${hoveredSide === 'author' ? 'border-amber-500/50 shadow-[0_0_30px_rgba(245,158,11,0.2)] bg-black/60' : ''}
            `}
          >
             <span className="relative z-10">Enter Story</span>
             <ArrowRight size={16} className="relative z-10 transform group-hover:translate-x-1 transition-transform text-amber-500" />
             {/* Cinematic Light Sweep */}
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent -translate-x-full group-hover:animate-[sweep_1.5s_ease-in-out_infinite]" />
          </motion.button>
        </motion.div>

        {/* Transition Sweeper */}
        <AnimatePresence>
          {selectedSide === 'author' && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 bg-zinc-950 z-[100] origin-right"
            />
          )}
        </AnimatePresence>
      </motion.div>
      
      {/* Global Style for Sweep Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}} />
    </div>
  );
}

// Helper for cursor X position relative to center (for author side spotlight)
function mousePosition(_y: number) {
  // We just need a subtle movement on X based on screen, but y is enough for vertical spotlight
  return 0;
}
