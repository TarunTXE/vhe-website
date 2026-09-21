import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { Building2, GraduationCap, MapPin } from 'lucide-react';

export default function Qualifications() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const events = [
    { 
      type: 'experience',
      year: 'July 2026 – Present', 
      title: 'Senior Resident – Ophthalmology', 
      org: 'COMTRUST EYE HOSPITAL', 
      location: 'Kozhikode, Kerala, India',
      desc: 'DNB Ophthalmology Resident involved in comprehensive patient care, clinical diagnosis, and surgical training.' 
    },
    { 
      type: 'experience',
      year: 'Dec 2023 – Dec 2025', 
      title: 'Junior Resident – Ophthalmology', 
      org: 'PDU Medical College', 
      location: 'Churu, Rajasthan, India',
      desc: 'Delivered comprehensive ophthalmic care through patient evaluation, diagnosis, treatment, and emergency eye care.' 
    },
    { 
      type: 'experience',
      year: 'Apr 2022 – Dec 2023', 
      title: 'General Practitioner', 
      org: 'Connect and Heal (CNH Care)', 
      location: 'Remote',
      desc: 'Provided remote medical consultations, clinical assessments, treatment recommendations, and patient education through telemedicine.',
      skills: ['Public Health', 'GCP', 'Clinical Practice']
    },
    { 
      type: 'experience',
      year: 'Jul 2018 – Jul 2022', 
      title: 'Medical Officer', 
      org: 'National Health Mission, Government of Kerala', 
      location: 'Kozhikode, Kerala',
      desc: 'Managed outpatient services, emergency care, preventive health programs, and patient counseling in a primary healthcare setting.' 
    },
    { 
      type: 'experience',
      year: 'Jul 2017 – Jul 2018', 
      title: 'Non Academic Junior Resident – Neurology', 
      org: 'Nirmala Hospital', 
      location: 'Kozhikode, Kerala',
      desc: 'Assisted in the diagnosis and management of neurological conditions while delivering evidence-based inpatient and outpatient care.' 
    },
    { 
      type: 'education',
      year: 'Oct 2011 – Aug 2017', 
      title: 'Bachelor of Medicine, Bachelor of Surgery (MBBS)', 
      org: 'KMCT Medical College', 
      desc: 'Comprehensive medical education establishing the foundation for clinical excellence and patient care.' 
    }
  ];

  return (
    <section ref={containerRef} className="w-full px-4 sm:px-6 md:px-12 lg:px-24 py-14 sm:py-20 md:py-32 bg-slate-50 relative overflow-hidden font-sans">
      
      {/* Background medical mesh */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }}
        className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/30 via-transparent to-transparent pointer-events-none z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16 md:mb-24 text-center"
        >
          <span className="text-blue-600 font-semibold tracking-widest uppercase text-xs sm:text-sm mb-2.5 sm:mb-3 block">Clinical Milestones</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-3 sm:mb-4">Experience & Education</h2>
          <p className="text-slate-500 max-w-xl text-sm sm:text-base md:text-lg font-light leading-relaxed mx-auto">
            A continuous journey of learning, practice, and dedication to the highest standards of healthcare.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="max-w-5xl mx-auto relative pb-10">
          
          {/* Base Timeline Track - Desktop Center */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 -translate-x-1/2 z-0 hidden lg:block" />
          
          {/* Glowing Animated Draw Line - Desktop Center */}
          <motion.div 
            style={{ height: lineHeight }} 
            className="absolute left-1/2 top-0 w-[2px] bg-gradient-to-b from-blue-600 via-cyan-400 to-indigo-500 -translate-x-1/2 origin-top z-10 shadow-[0_0_15px_rgba(56,189,248,0.5)] hidden lg:block"
          />

          {/* Base Timeline Track - Mobile/Tablet Left */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-[2px] bg-slate-200 -translate-x-1/2 z-0 lg:hidden" />
          
          {/* Glowing Animated Draw Line - Mobile/Tablet Left */}
          <motion.div 
            style={{ height: lineHeight }} 
            className="absolute left-4 sm:left-6 top-0 w-[2px] bg-gradient-to-b from-blue-600 via-cyan-400 to-indigo-500 -translate-x-1/2 origin-top z-10 shadow-[0_0_15px_rgba(56,189,248,0.5)] lg:hidden"
          />

          {events.map((event, index) => {
            const isLeft = index % 2 === 0;
            const Icon = event.type === 'education' ? GraduationCap : Building2;

            return (
              <div 
                key={index}
                className="relative flex items-center mb-10 sm:mb-14 lg:mb-18 w-full"
              >
                {/* Timeline Node - Desktop Center */}
                <motion.div 
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ 
                    scale: 1, 
                    opacity: 1, 
                    boxShadow: '0 0 20px rgba(37,99,235,0.45)' 
                  }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="hidden lg:flex absolute left-1/2 top-1/2 w-10 h-10 rounded-full bg-white border-[3px] border-blue-600 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center text-blue-600 shadow-md"
                >
                  <Icon size={18} />
                </motion.div>

                {/* Timeline Node - Mobile/Tablet Left */}
                <motion.div 
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ 
                    scale: 1, 
                    opacity: 1, 
                    boxShadow: '0 0 14px rgba(37,99,235,0.35)' 
                  }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="lg:hidden absolute left-4 sm:left-6 top-7 sm:top-8 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border-[2.5px] sm:border-[3px] border-blue-600 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center text-blue-600 shadow-sm"
                >
                  <Icon size={14} className="sm:w-[15px] sm:h-[15px]" />
                </motion.div>

                {/* Mobile / Tablet Connector Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="lg:hidden absolute left-4 sm:left-6 top-7 sm:top-8 w-5 sm:w-6 h-[2px] bg-gradient-to-r from-blue-600 to-blue-300 origin-left z-10"
                />

                {/* Card Container: Desktop 42% width sitting right against center line; Mobile/Tablet full width */}
                <div 
                  className={`w-full pl-9 sm:pl-14 lg:pl-0 lg:w-[calc(50%-2rem)] ${
                    isLeft ? 'lg:mr-auto' : 'lg:ml-auto'
                  }`}
                >
                  <motion.div 
                    initial={shouldReduceMotion ? { opacity: 0 } : { 
                      opacity: 0, 
                      y: 20,
                      filter: 'blur(4px)' 
                    }}
                    whileInView={shouldReduceMotion ? { opacity: 1 } : { 
                      opacity: 1, 
                      y: 0, 
                      filter: 'blur(0px)' 
                    }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    whileHover={{ y: -3, scale: 1.005 }}
                    className="relative bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.15)] transition-all duration-300 group"
                  >
                    {/* Desktop Connector Line extending from card toward central node */}
                    {isLeft ? (
                      <motion.div 
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="hidden lg:flex absolute top-1/2 -right-8 w-8 h-[2px] bg-gradient-to-r from-blue-300 via-blue-500 to-blue-600 origin-left items-center justify-end z-10"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_6px_rgba(37,99,235,0.8)] -mr-0.5" />
                      </motion.div>
                    ) : (
                      <motion.div 
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="hidden lg:flex absolute top-1/2 -left-8 w-8 h-[2px] bg-gradient-to-l from-blue-300 via-blue-500 to-blue-600 origin-right items-center justify-start z-10"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_6px_rgba(37,99,235,0.8)] -ml-0.5" />
                      </motion.div>
                    )}

                    {/* Small Connector Arrow pointing toward node */}
                    <div 
                      className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-0 h-0 border-y-[6px] border-y-transparent ${
                        isLeft ? '-right-2 border-l-[8px] border-l-white' : '-left-2 border-r-[8px] border-r-white'
                      } filter drop-shadow-sm z-20`} 
                    />
                    
                    {/* Mobile Arrow */}
                    <div className="lg:hidden absolute top-7 sm:top-8 -translate-y-1/2 -left-2 w-0 h-0 border-y-[5px] sm:border-y-[6px] border-y-transparent border-r-[7px] sm:border-r-[8px] border-r-white filter drop-shadow-sm z-20" />

                    {/* Animated Year Badge */}
                    <div className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-[10px] md:text-xs tracking-wider font-bold uppercase rounded-full mb-3 sm:mb-4 md:mb-5 shadow-xs border border-blue-100/50 group-hover:scale-105 transition-transform duration-300">
                      {event.year}
                    </div>
                    
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors duration-300 leading-snug">{event.title}</h3>
                    <h4 className="text-blue-600 font-semibold mb-1.5 sm:mb-2 text-xs sm:text-sm md:text-base">{event.org}</h4>
                    
                    {event.location && (
                      <p className="text-slate-400 text-xs md:text-sm mb-3 sm:mb-4 md:mb-5 font-medium flex items-center gap-1.5">
                        <MapPin size={13} className="shrink-0" /> <span className="truncate">{event.location}</span>
                      </p>
                    )}
                    
                    <p className="text-slate-600 leading-relaxed font-light text-xs sm:text-sm md:text-base">{event.desc}</p>
                    
                    {event.skills && (
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4 md:mt-6 pt-3 sm:pt-4 md:pt-6 border-t border-slate-50">
                        {event.skills.map((skill, i) => (
                          <span key={i} className="px-2 py-0.5 sm:px-3 sm:py-1 bg-slate-50 text-slate-500 text-[10px] md:text-xs rounded-md border border-slate-200 group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-200 transition-colors duration-300">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
