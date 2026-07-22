import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Dr. Varun's expertise and compassionate care made all the difference during my recovery. Highly recommended.",
    author: "Sarah Johnson",
    role: "Patient"
  },
  {
    quote: "A brilliant physician and a wonderful colleague. His dedication to advancing medical care is truly inspiring.",
    author: "Dr. Emily Chen",
    role: "Colleague"
  },
  {
    quote: "His research on innovative techniques has completely changed how we approach primary care.",
    author: "Prof. Michael Roberts",
    role: "Medical Mentor"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="w-full px-6 md:px-24 py-32 bg-slate-900 relative overflow-hidden flex items-center justify-center min-h-[60vh]">
      {/* Background Animated Gradient Mesh */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-blue-900 rounded-full mix-blend-screen filter blur-[100px] animate-[spin_20s_linear_infinite]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-indigo-900 rounded-full mix-blend-screen filter blur-[100px] animate-[spin_30s_linear_infinite_reverse]" />
      </div>
      
      <div 
        className="max-w-4xl mx-auto relative z-10 w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="h-auto md:h-80 relative flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.95, y: 30, filter: 'blur(5px)' }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.05, y: -30, filter: 'blur(5px)' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute w-full"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 md:p-16 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] text-center group transition-all duration-500 hover:bg-white/10 hover:shadow-[0_40px_80px_-15px_rgba(37,99,235,0.3)] hover:-translate-y-2">
                <motion.div
                  animate={{ rotate: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block mb-8"
                >
                  <Quote className="w-12 h-12 text-blue-400 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
                
                <p className="text-2xl md:text-4xl text-white font-medium leading-relaxed mb-10 font-serif tracking-wide">
                  "{testimonials[current].quote}"
                </p>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 h-[2px] bg-blue-500 mb-4 group-hover:w-24 transition-all duration-500" />
                  <h4 className="text-white font-bold text-lg tracking-wide">{testimonials[current].author}</h4>
                  <span className="text-blue-300/80 text-sm uppercase tracking-widest mt-1">{testimonials[current].role}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-4 mt-20 relative z-20">
          {testimonials.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`relative flex items-center justify-center w-8 h-8 rounded-full transition-all group`}
            >
              <div className={`absolute w-full h-full rounded-full border border-blue-400/30 scale-0 group-hover:scale-100 transition-transform duration-300 ${current === idx ? 'scale-100 bg-blue-500/20' : ''}`} />
              <div className={`w-2 h-2 rounded-full transition-all duration-300 ${current === idx ? 'bg-blue-400 scale-150 shadow-[0_0_10px_rgba(96,165,250,0.8)]' : 'bg-slate-600 group-hover:bg-blue-400'}`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
