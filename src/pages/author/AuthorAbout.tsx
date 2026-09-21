import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Quote } from 'lucide-react';
import authorImg from '../../assets/author/author.webp';

export default function AuthorAbout() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const paragraphVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="w-full px-6 md:px-24 py-32 bg-zinc-950 relative z-20 overflow-hidden text-zinc-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20 items-center relative z-10">
        
        {/* Author Image (Left) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="w-full md:w-5/12"
        >
          <div className="relative group perspective-[1000px]">
            <motion.div 
              className="aspect-[3/4] rounded-sm overflow-hidden z-10 relative transform-style-3d shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-zinc-900 border border-white/5"
              whileHover={{ rotateY: 5, rotateX: -5, z: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10 opacity-60" />
              <img 
                src={authorImg} 
                alt="Varun Harish - Author and Filmmaker" 
                className="w-full h-full object-cover filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                loading="lazy"
                width="400"
                height="533"
              />
            </motion.div>
            {/* Ambient Background Glow */}
            <div className="absolute -inset-4 bg-amber-500/20 blur-[50px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute -bottom-8 -right-8 w-64 h-64 border border-amber-500/20 z-0 group-hover:border-amber-500/50 transition-colors duration-700 pointer-events-none"></div>
          </div>
        </motion.div>

        {/* Text Content (Right) */}
        <motion.div 
          ref={containerRef}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full md:w-7/12 relative group rounded-2xl overflow-hidden p-8 md:p-12 border border-white/5 bg-white/[0.02] backdrop-blur-md shadow-2xl shadow-black"
        >
          {/* Spotlight Effect */}
          <div 
            className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(245, 158, 11, 0.05), transparent 40%)`
            }}
          />

          <div className="relative z-10">
            <h2 className="text-xs uppercase tracking-[0.4em] text-amber-500 mb-4 font-semibold">The Creator</h2>
            <h3 className="text-4xl md:text-5xl font-cormorant text-white mb-10 leading-tight">Crafting Worlds Beyond Imagination</h3>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
              className="space-y-6 text-zinc-400 leading-relaxed font-serif text-lg"
            >
              <motion.p variants={paragraphVariants}>
                Beyond my medical practice, I am an author with a deep passion for literary fiction. Storytelling, to me, is as vital as breathing—a way to explore the intricacies of human nature, society, and the unseen forces that shape our lives.
              </motion.p>
              
              <motion.div variants={paragraphVariants} className="flex justify-center py-4">
                {/* Handwritten divider (simulated with SVG path) */}
                <svg width="150" height="10" viewBox="0 0 150 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-amber-500/30">
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    d="M1 5 Q 37.5 0, 75 5 T 149 5" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    strokeLinecap="round" 
                  />
                </svg>
              </motion.div>
              
              <motion.p variants={paragraphVariants}>
                I have published <strong className="text-amber-100 font-medium">four novels</strong> and <strong className="text-amber-100 font-medium">twelve short stories</strong>. My works span a diverse range of genres including Crime, Political Fiction, Thriller, Horror, and Fantasy. Through these diverse landscapes, I seek to challenge perceptions and offer readers an immersive escape.
              </motion.p>
              
              <motion.p variants={paragraphVariants}>
                My writings have been featured in various esteemed magazines and newspapers, allowing me to connect with a wider audience and share the worlds I've crafted.
              </motion.p>
              
              <motion.div variants={paragraphVariants} className="relative mt-12 p-6 bg-zinc-900/50 rounded-lg border border-zinc-800/50 italic text-amber-50">
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -left-2 text-amber-500/20"
                >
                  <Quote size={48} />
                </motion.div>
                <p className="relative z-10 text-xl font-cormorant tracking-wide text-center pt-2">
                  "Through the lens of compassion, I care.<br />Through the power of words, I connect."
                </p>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-12 flex justify-end"
            >
              <span className="font-cormorant italic text-2xl md:text-3xl text-amber-200/50 hover:text-amber-200/90 transition-colors duration-500 select-none tracking-wide">
                Varun Harish E.
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
