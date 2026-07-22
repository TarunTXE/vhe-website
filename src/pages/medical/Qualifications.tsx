import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Building2, GraduationCap, MapPin } from 'lucide-react';

export default function Qualifications() {
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
    <section ref={containerRef} className="w-full px-6 md:px-12 lg:px-24 py-20 md:py-32 bg-slate-50 relative overflow-hidden font-sans">
      
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
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 text-center"
        >
          <span className="text-blue-600 font-semibold tracking-widest uppercase text-xs md:text-sm mb-3 block">Clinical Milestones</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">Experience & Education</h2>
          <p className="text-slate-500 max-w-xl text-base md:text-lg font-light leading-relaxed mx-auto">
            A continuous journey of learning, practice, and dedication to the highest standards of healthcare.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="max-w-5xl mx-auto relative pb-10">
          
          {/* Base Timeline Track */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 -translate-x-1/2 z-0" />
          
          {/* Glowing Animated Draw Line */}
          <motion.div 
            style={{ height: lineHeight }} 
            className="absolute left-6 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-blue-600 via-cyan-400 to-indigo-500 -translate-x-1/2 origin-top z-10 shadow-[0_0_15px_rgba(56,189,248,0.5)]"
          />

          {events.map((event, index) => {
            const isEven = index % 2 === 0;
            const Icon = event.type === 'education' ? GraduationCap : Building2;

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: isEven ? 50 : -50, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row items-center mb-20 ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Node / Icon */}
                <div className="absolute left-6 md:left-1/2 w-8 h-8 md:w-12 md:h-12 rounded-full bg-white border-4 border-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)] -translate-x-1/2 z-20 flex items-center justify-center text-blue-600">
                  <Icon size={16} className="md:w-5 md:h-5" />
                </div>
                
                <div className="w-full md:w-1/2 pl-14 md:pl-0 perspective-1000">
                  <motion.div 
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`
                      relative bg-white p-6 md:p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 
                      hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.15)] transition-all duration-300 group
                      ${isEven ? 'md:ml-12 lg:ml-16' : 'md:mr-12 lg:mr-16'}
                    `}
                  >
                    {/* Connector Triangle */}
                    <div className={`hidden md:block absolute top-6 w-0 h-0 border-y-8 border-y-transparent ${isEven ? '-left-4 border-r-8 border-r-white' : '-right-4 border-l-8 border-l-white'} filter drop-shadow-sm z-10`} />
                    <div className="md:hidden absolute top-6 w-0 h-0 border-y-8 border-y-transparent -left-4 border-r-8 border-r-white filter drop-shadow-sm z-10" />

                    {/* Animated Year Badge */}
                    <div className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-[10px] md:text-xs tracking-widest font-bold uppercase rounded-full mb-4 md:mb-6 shadow-sm border border-blue-100/50 group-hover:scale-105 transition-transform duration-300">
                      {event.year}
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">{event.title}</h3>
                    <h4 className="text-blue-600 font-semibold mb-2 text-sm md:text-base">{event.org}</h4>
                    
                    {event.location && (
                      <p className="text-slate-400 text-xs md:text-sm mb-4 md:mb-5 font-medium flex items-center gap-1.5">
                        <MapPin size={14} /> {event.location}
                      </p>
                    )}
                    
                    <p className="text-slate-600 leading-relaxed font-light text-sm md:text-base">{event.desc}</p>
                    
                    {event.skills && (
                      <div className="flex flex-wrap gap-2 mt-4 md:mt-6 pt-4 md:pt-6 border-t border-slate-50">
                        {event.skills.map((skill, i) => (
                          <span key={i} className="px-2 py-1 md:px-3 md:py-1 bg-slate-50 text-slate-500 text-[10px] md:text-xs rounded-md border border-slate-200 group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-200 transition-colors duration-300">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
