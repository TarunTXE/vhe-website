import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Stethoscope, BookOpen } from 'lucide-react';

export default function MedicalAbout() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const features = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      desc: "Combining precision with empathy to ensure every patient receives the highest standard of individualized treatment."
    },
    {
      icon: Stethoscope,
      title: "Microsurgical Expertise",
      desc: "Specialized in advanced clinical diagnosis and microsurgical procedures for comprehensive ocular conditions."
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      desc: "Committed to professional growth and contributing to the advancement of ophthalmology through clinical excellence."
    }
  ];

  return (
    <section ref={containerRef} className="w-full px-6 md:px-12 lg:px-24 py-20 md:py-32 bg-white relative overflow-hidden font-sans">
      
      {/* Background medical mesh */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 z-0 pointer-events-none opacity-30"
      >
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-blue-50/50 rounded-full blur-3xl transform -skew-x-12" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[60%] bg-cyan-50/30 rounded-full blur-3xl transform skew-x-12" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.02)_1px,transparent_1px)] bg-[size:30px_30px]" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20 text-center lg:text-left"
        >
          <span className="text-blue-600 font-semibold tracking-widest uppercase text-xs md:text-sm mb-3 block">Professional Journey</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">Dedicated to Vision</h2>
          <p className="text-slate-500 max-w-xl text-base md:text-lg font-light leading-relaxed mx-auto lg:mx-0">
            A relentless pursuit of medical excellence driven by compassion and evidence-based practice.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left Column: Biography & Quote */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-5/12 flex flex-col justify-center"
          >
            <div className="space-y-6 text-slate-600 leading-relaxed text-[17px] font-light">
              <motion.p variants={itemVariants}>
                As an Ophthalmologist, I am dedicated to preserving and restoring vision through compassionate, patient-centered, and evidence-based care. My professional journey has equipped me with experience in comprehensive ophthalmology, clinical diagnosis, microsurgical procedures, emergency eye care, and the management of a wide range of ocular conditions.
              </motion.p>
              
              <motion.p variants={itemVariants}>
                Beyond medicine, I am an author with a passion for literary fiction. I have published four novels and twelve short stories spanning the crime, political, thriller, horror and fantasy genres, with my works featured in various magazines and newspapers.
              </motion.p>
              
              <motion.div 
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.01 }}
                className="relative p-8 rounded-2xl bg-blue-50/30 border border-blue-100/50 mt-10 overflow-hidden group transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 group-hover:w-1.5 transition-all duration-300" />
                <blockquote className="italic text-slate-800 font-medium text-xl leading-snug relative z-10">
                  "Through the lens of compassion, I care. Through the power of words, I connect."
                </blockquote>
                <div className="absolute -right-4 -bottom-6 text-9xl text-blue-100/50 font-serif font-bold leading-none select-none pointer-events-none group-hover:-translate-y-2 transition-transform duration-500">
                  "
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Feature Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-7/12 grid grid-cols-1 gap-6"
          >
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-8 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.1)] transition-all duration-500 overflow-hidden"
              >
                {/* Glow Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-50/50 group-hover:via-transparent group-hover:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="flex gap-6 relative z-10">
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500 shadow-inner">
                    <feature.icon size={24} className="transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">{feature.title}</h3>
                    <p className="text-slate-500 font-light leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
