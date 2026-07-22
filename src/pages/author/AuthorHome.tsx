import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Play, Book } from 'lucide-react';
import AuthorAbout from './AuthorAbout';
import AuthorFilms from './AuthorFilms';
import AuthorNovels from './AuthorNovels';
import AuthorContact from './AuthorContact';
import MagneticButton from '../../components/ui/MagneticButton';
import heroBg from '../../assets/hero-bg.gif';
import authorImg from '../../assets/author.webp';

const sentence: any = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const letter: any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  },
};

export default function AuthorHome() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const parallaxOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 20,
    delay: Math.random() * 10
  }));

  return (
    <div ref={containerRef} className="w-full relative bg-zinc-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        
        {/* Parallax Full-screen Background */}
        <motion.div 
          style={{ y: parallaxY, opacity: parallaxOpacity }}
          className="absolute inset-0 z-0 origin-center"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{ scale: { duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }, opacity: { duration: 2 } }}
        >
          <img 
            src={heroBg} 
            alt="Cinematic background" 
            className="w-full h-full object-cover"
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-zinc-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
        </motion.div>

        {/* Floating Particles reacting to cursor */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute bg-amber-500 rounded-full blur-[2px] opacity-40"
              style={{
                width: p.size,
                height: p.size,
                left: `${p.x}%`,
                top: `${p.y}%`,
              }}
              animate={{
                x: [0, mousePosition.x, 0],
                y: [0, mousePosition.y - 100, 0],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{
                x: { duration: 2, ease: "easeOut" },
                y: { duration: p.duration, repeat: Infinity, ease: "linear" },
                opacity: { duration: p.duration / 2, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          ))}
        </div>

        {/* Content Layout */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 mt-20">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-left backdrop-blur-[2px] p-4 lg:p-0 rounded-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-amber-500 tracking-[0.3em] text-sm md:text-base uppercase mb-6 drop-shadow-lg"
            >
              Award Winning Author & Filmmaker
            </motion.h2>
            
            <motion.h1 
              variants={sentence}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-amber-50 mb-8 font-cormorant leading-[1.1] filter drop-shadow-2xl"
            >
              {["Stories", "That", "Echo", "in", "Eternity."].map((word, index) => (
                <span key={index} className="inline-block mr-4">
                  {word === "Echo" ? (
                    <motion.span variants={letter} className="italic text-zinc-400">{word}</motion.span>
                  ) : (
                    <motion.span variants={letter}>{word}</motion.span>
                  )}
                </span>
              ))}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex flex-col sm:flex-row items-start lg:items-center gap-6 mt-12"
            >
              <MagneticButton 
                onClick={() => document.getElementById('novels')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-transparent border border-amber-500/50 text-amber-50 rounded-sm hover:bg-amber-500 hover:text-black transition-all duration-500 flex items-center gap-3 overflow-hidden backdrop-blur-sm"
              >
                <Book size={18} /> Explore Novels
              </MagneticButton>
              
              <MagneticButton 
                onClick={() => document.getElementById('films')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 bg-white text-black rounded-sm hover:bg-zinc-200 transition-colors flex items-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                <Play size={18} fill="currentColor" /> Watch Latest Short
              </MagneticButton>
            </motion.div>
          </div>

          {/* Portrait Image */}
          <motion.div 
            className="w-full max-w-md lg:w-1/2 relative"
            initial={{ opacity: 0, filter: 'blur(10px)', x: 50 }}
            animate={{ opacity: 1, filter: 'blur(0px)', x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <motion.div
              animate={{ 
                y: [-10, 10, -10],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative w-full aspect-[3/4] rounded-sm overflow-hidden shadow-[0_0_50px_rgba(245,158,11,0.15)] group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent mix-blend-overlay z-10 opacity-50" />
              <img 
                src={authorImg} 
                alt="Varun Harish E." 
                className="w-full h-full object-cover filter contrast-125 saturate-50 sepia-[.2]"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-sm z-20" />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        >
          <span className="text-xs uppercase tracking-widest text-zinc-500 drop-shadow-md">Scroll to explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-amber-500 to-transparent" />
        </motion.div>
      </section>

      <AuthorAbout />
      <div id="films"><AuthorFilms /></div>
      <div id="novels"><AuthorNovels /></div>
      <AuthorContact />
    </div>
  );
}
