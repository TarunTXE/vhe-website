import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ScanFace, Activity } from 'lucide-react';
import MedicalAbout from './MedicalAbout';
import Qualifications from './Qualifications';
import Gallery from './Gallery';
import Contact from './Contact';
import MagneticButton from '../../components/ui/MagneticButton';
import iconImage from '../../assets/doctor/icon.jpeg';
import RetinaScan from '../../components/medical/RetinaScan';
import IrisBackground from '../../components/medical/IrisBackground';
import IrisSectionDivider from '../../components/medical/IrisSectionDivider';

export default function MedicalHome() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <main className="w-full relative bg-slate-50 overflow-hidden font-sans">
      {/* Ophthalmology Iris & Vascular Ambience Background */}
      <IrisBackground />

      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] md:min-h-screen flex items-center pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden z-10">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0 pointer-events-none">
          
          {/* Subtle medical graphics - hidden/reduced on mobile to optimize CPU */}
          <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
             className="hidden sm:block absolute top-1/4 right-0 -translate-y-1/2 w-[600px] lg:w-[800px] h-[600px] lg:h-[800px] opacity-[0.025]"
          >
             <ScanFace size={800} strokeWidth={0.5} className="text-blue-900 w-full h-full" />
          </motion.div>
          
          <motion.div 
             animate={{ x: [-30, 30, -30] }}
             transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
             className="hidden md:block absolute bottom-10 left-10 opacity-[0.02]"
          >
             <Activity size={300} strokeWidth={1} className="text-blue-900" />
          </motion.div>
          
          {/* Glowing Gradients */}
          <div className="absolute top-0 right-0 w-[60%] sm:w-[50%] h-[50%] bg-blue-100/60 rounded-full mix-blend-multiply filter blur-[80px] sm:blur-[120px] opacity-40 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[60%] sm:w-[50%] h-[50%] bg-cyan-100/40 rounded-full mix-blend-multiply filter blur-[70px] sm:blur-[100px] opacity-30 pointer-events-none" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16">
          
          {/* Portrait: Order 1 on mobile, Order 2 on desktop */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2 w-full mt-2 sm:mt-6 lg:mt-0"
          >
            <div className="relative w-[min(64vw,250px)] h-[min(64vw,250px)] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px]">
              {/* Ophthalmology Retinal Examination Scanning Effect */}
              <RetinaScan />
              
              {/* Portrait container with floating animation */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-[0_20px_50px_-20px_rgba(37,99,235,0.3)] bg-slate-100"
              >
                <img src={iconImage} alt="Dr. Varun Harish E. - Ophthalmologist" className="w-full h-full object-cover" width="400" height="400" loading="eager" />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent mix-blend-overlay pointer-events-none" />
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content: Order 2 on mobile, Order 1 on desktop */}
          <div className="flex-1 w-full text-center lg:text-left order-2 lg:order-1 flex flex-col items-center lg:items-start">
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-6 sm:mb-8 w-full flex flex-col items-center lg:items-start"
            >
              {/* Label */}
              <p className="order-1 text-blue-600 font-semibold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm mb-3 lg:mb-4">
                OPHTHALMOLOGIST
              </p>

              {/* Title with fluid clamp */}
              <h1 className="order-2 text-[clamp(2.15rem,7.5vw,3.75rem)] font-bold text-slate-900 tracking-tight leading-[1.12] mb-4 sm:mb-5">
                Dr. Varun <br className="hidden sm:block" /> Harish E.
              </h1>
              
              {/* Value Pillars */}
              <div className="order-3 flex flex-col items-center lg:items-start gap-2 sm:gap-2.5 text-slate-500 text-sm sm:text-base md:text-lg lg:text-xl font-light">
                <div className="flex items-center gap-2 lg:gap-3">
                  <div className="hidden lg:block w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  <span>Compassionate Eye Care</span>
                </div>
                <div className="flex items-center gap-2 lg:gap-3">
                  <div className="hidden lg:block w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  <span>Clinical Excellence</span>
                </div>
                <div className="flex items-center gap-2 lg:gap-3">
                  <div className="hidden lg:block w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  <span>Evidence-Based Practice</span>
                </div>
              </div>
            </motion.header>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 w-full sm:w-auto"
            >
              <MagneticButton 
                onClick={() => document.getElementById('qualifications')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 sm:py-4 bg-blue-600 text-white rounded-full font-medium shadow-[0_10px_30px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_10px_40px_-10px_rgba(37,99,235,0.7)] group border border-blue-500 hover:bg-blue-700 transition-all text-sm sm:text-base flex items-center justify-center"
              >
                <span className="flex items-center justify-center gap-2">
                  View Qualifications 
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </span>
              </MagneticButton>
              <MagneticButton 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 sm:py-4 bg-white/60 backdrop-blur-md border border-slate-200 text-slate-700 rounded-full font-medium hover:bg-white transition-colors text-sm sm:text-base flex items-center justify-center"
              >
                Contact
              </MagneticButton>
            </motion.div>
          </div>
          
        </div>
      </section>

      {/* Remaining Sections with Ophthalmology Transitions */}
      <IrisSectionDivider />
      <div id="about"><MedicalAbout /></div>
      <IrisSectionDivider />
      <div id="qualifications"><Qualifications /></div>
      <IrisSectionDivider />
      <div id="gallery"><Gallery /></div>
      <IrisSectionDivider />
      <div id="contact"><Contact /></div>
    </main>
  );
}
