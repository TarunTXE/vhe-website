import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ScanFace, Activity } from 'lucide-react';
import MedicalAbout from './MedicalAbout';
import Qualifications from './Qualifications';
import Gallery from './Gallery';
import Contact from './Contact';
import MagneticButton from '../../components/ui/MagneticButton';
import iconImage from '../../assets/icon.jpeg';

export default function MedicalHome() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  
  // Floating particle setup
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 5,
    delay: Math.random() * 2
  }));

  return (
    <div className="w-full relative bg-slate-50 overflow-hidden font-sans">
      
      {/* Background Ambience Layer */}
      <div className="fixed inset-0 pointer-events-none mix-blend-multiply opacity-[0.03] z-0">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] md:min-h-screen flex items-center pt-20 px-6 md:px-24 overflow-hidden z-10">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0 pointer-events-none">
          
          {/* Subtle medical graphics */}
          <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
             className="absolute top-1/4 right-0 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03]"
          >
             <ScanFace size={800} strokeWidth={0.5} className="text-blue-900" />
          </motion.div>
          
          <motion.div 
             animate={{ x: [-50, 50, -50] }}
             transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
             className="absolute bottom-10 left-10 opacity-[0.02]"
          >
             <Activity size={400} strokeWidth={1} className="text-blue-900" />
          </motion.div>
          
          {/* Glowing Gradients */}
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-100 rounded-full mix-blend-multiply filter blur-[120px] opacity-50" />
          <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-cyan-100/50 rounded-full mix-blend-multiply filter blur-[100px] opacity-40" />
          
          {/* Floating Particles */}
          {particles.map((p) => (
            <motion.div
              key={p.id}
              animate={{
                y: [0, -50, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0, 0.4, 0],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: "linear"
              }}
              className="absolute bg-blue-500 rounded-full blur-[1px]"
              style={{
                width: p.size,
                height: p.size,
                left: `${p.x}%`,
                top: `${p.y}%`,
              }}
            />
          ))}
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Text Content */}
          <div className="flex-1 w-full text-center lg:text-left order-2 lg:order-1 flex flex-col items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 w-full"
            >
              <h2 className="text-blue-600 font-semibold tracking-[0.3em] uppercase text-xs md:text-sm mb-4">OPHTHALMOLOGIST</h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight lg:leading-[1.05] mb-6">
                Dr. Varun <br className="hidden sm:block" /> Harish E
              </h1>
              
              {/* Value Pillars */}
              <div className="flex flex-col items-center lg:items-start gap-3 text-slate-500 text-base md:text-lg lg:text-xl font-light">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  <span>Compassionate Eye Care</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  <span>Clinical Excellence</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  <span>Evidence-Based Practice</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <MagneticButton 
                onClick={() => document.getElementById('qualifications')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-full font-medium shadow-[0_10px_30px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_10px_40px_-10px_rgba(37,99,235,0.7)] group border border-blue-500 hover:bg-blue-700 transition-all text-sm md:text-base"
              >
                <span className="flex items-center justify-center gap-2">
                  View Qualifications 
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </span>
              </MagneticButton>
              <MagneticButton 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-8 py-4 bg-white/50 backdrop-blur-md border border-slate-200 text-slate-700 rounded-full font-medium hover:bg-white transition-colors text-sm md:text-base flex justify-center"
              >
                Contact
              </MagneticButton>
            </motion.div>
          </div>

          {/* Portrait */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, delay: 0.3 }}
             className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2 w-full mt-10 lg:mt-0"
          >
            <div className="relative w-[65vw] h-[65vw] max-w-[280px] max-h-[280px] sm:w-[320px] sm:h-[320px] lg:max-w-none lg:max-h-none lg:w-[400px] lg:h-[400px]">
              {/* Animated Rings */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-8 md:-inset-12 border border-dashed border-blue-200 rounded-full opacity-50 pointer-events-none"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 md:-inset-6 border border-blue-100 rounded-full opacity-50 pointer-events-none"
              />
              
              {/* Subtle Medical Halo */}
              <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
              
              {/* Portrait container with floating animation */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-[0_20px_50px_-20px_rgba(37,99,235,0.3)] bg-slate-100"
              >
                <img src={iconImage} alt="Dr. Varun Harish E." className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent mix-blend-overlay pointer-events-none" />
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </section>

      {/* Remaining Sections */}
      <div id="about"><MedicalAbout /></div>
      <div id="qualifications"><Qualifications /></div>
      <div id="gallery"><Gallery /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
}
