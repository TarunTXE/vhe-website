import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Camera } from 'lucide-react';

import iconImg from '../../assets/doctor/icon.jpeg';
import comtrustLab from '../../assets/doctor/comtrust lab.jpeg';
import churuFelicitation from '../../assets/doctor/churu2.jpeg';
import churuCamp from '../../assets/doctor/churu1.jpeg';
import churuHospital from '../../assets/doctor/churu3.jpeg';

const galleryImages = [
  { 
    id: 1, 
    src: iconImg, 
    title: 'Clinical Practice', 
    format: 'hero',
    alt: 'Dr. Varun Harish E. - Clinical practice and patient care'
  },
  { 
    id: 2, 
    src: comtrustLab, 
    title: 'Microsurgical Training', 
    format: 'tall',
    alt: 'Dr. Varun Harish E. operating ophthalmic surgical microscope at Comtrust Eye Hospital lab'
  },
  { 
    id: 3, 
    src: churuFelicitation, 
    title: 'Outreach Felicitation', 
    format: 'wide',
    alt: 'Dr. Varun Harish E. receiving memento felicitation for community eye care services in Churu'
  },
  { 
    id: 4, 
    src: churuCamp, 
    title: 'Community Eye Camp', 
    format: 'square',
    alt: 'Ophthalmology and medical team at Churu community eye health outreach program'
  },
  { 
    id: 5, 
    src: churuHospital, 
    title: 'Academic & Residency Care', 
    format: 'square',
    alt: 'Medical team and resident doctors at PDU Medical College'
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const getFormatClass = (format: string) => {
    switch(format) {
      case 'hero': return 'col-span-1 row-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto';
      case 'tall': return 'col-span-1 row-span-1 sm:col-span-1 lg:col-span-1 lg:row-span-2 aspect-[4/3] sm:aspect-[3/4]';
      case 'wide': return 'col-span-1 row-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-1 aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9]';
      case 'square': return 'col-span-1 row-span-1 sm:col-span-1 lg:col-span-1 lg:row-span-1 aspect-[4/3] sm:aspect-square';
      default: return 'col-span-1 row-span-1 aspect-[4/3] sm:aspect-square';
    }
  };

  return (
    <section className="w-full px-4 sm:px-6 md:px-12 lg:px-24 py-14 sm:py-20 md:py-32 bg-white relative overflow-hidden font-sans">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-blue-50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-cyan-50/50 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.03)_0%,transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mb-10 sm:mb-14 md:mb-16 text-center md:text-left"
        >
          <span className="text-blue-600 font-semibold tracking-widest uppercase text-xs sm:text-sm mb-2.5 sm:mb-3 flex items-center justify-center md:justify-start gap-2">
            <Camera size={16} /> Moments of Excellence
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-3 sm:mb-4">Life in Practice</h2>
          <p className="text-slate-500 max-w-xl text-sm sm:text-base md:text-lg font-light leading-relaxed mx-auto md:mx-0">
            A visual documentation of clinical practice, community care, and professional milestones.
          </p>
        </motion.div>

        {/* Responsive Grid: 1-col on mobile, 2-col on tablet, 4-col asymmetrical masonry on desktop */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-flow-dense gap-4 sm:gap-5 md:gap-6"
          onMouseLeave={() => setHoveredId(null)}
        >
          {galleryImages.map((img, index) => {
            const isHovered = hoveredId === img.id;
            const isSoftened = hoveredId !== null && !isHovered;

            return (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.06, duration: 0.6, ease: "easeOut" }}
                onMouseEnter={() => setHoveredId(img.id)}
                className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-slate-900 transition-all duration-500 ${
                  isSoftened ? 'lg:opacity-65 lg:filter lg:blur-[1.5px] lg:scale-[0.98]' : 'opacity-100 filter blur-0 scale-100'
                } ${getFormatClass(img.format)}`}
                onClick={() => setSelectedImage(img)}
              >
                {/* Image with slow optical zoom */}
                <motion.div 
                  className="w-full h-full"
                  animate={{ scale: isHovered ? 1.05 : 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <img 
                    src={img.src} 
                    alt={img.alt || img.title} 
                    className="w-full h-full object-cover transition-all duration-700 filter brightness-95 group-hover:brightness-105"
                    loading="lazy"
                  />
                </motion.div>
                
                {/* Medical Camera Focus Ring & Reticle on Hover / Active */}
                <div 
                  className={`absolute inset-2.5 sm:inset-3 rounded-xl border border-cyan-400/40 pointer-events-none transition-all duration-300 ${
                    isHovered ? 'opacity-100 scale-100 shadow-[0_0_20px_rgba(56,189,248,0.25)]' : 'opacity-0 scale-95'
                  }`}
                >
                  {/* Viewfinder Corner Focus Brackets */}
                  <span className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
                  <span className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-cyan-400" />
                  <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />

                  {/* Center Optical Crosshair */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none opacity-60">
                    <span className="absolute top-1/2 left-0 right-0 h-[1px] bg-cyan-300 -translate-y-1/2" />
                    <span className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-cyan-300 -translate-x-1/2" />
                  </div>
                </div>

                {/* Glass Reflection Overlay */}
                <div className="hidden lg:block absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform -translate-x-full group-hover:translate-x-full" style={{ transitionDuration: '1.5s' }} />
                
                {/* Blue Vignette Glow on Hover */}
                <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(14,165,233,0)] group-hover:shadow-[inset_0_0_50px_rgba(14,165,233,0.3)] transition-shadow duration-500 pointer-events-none" />

                {/* Image Title Overlay: Always legible with sleek gradient on mobile, reveals on desktop */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/35 to-transparent opacity-90 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-4 sm:p-6 md:p-8">
                  <div className="transform translate-y-0 lg:translate-y-3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-300">
                    <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase mb-1 block">FOCUS RECORD</span>
                    <h4 className="text-white font-semibold text-base sm:text-lg md:text-xl tracking-tight leading-snug">{img.title}</h4>
                  </div>
                </div>
                
                {/* Tap / View indicator badge */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full bg-slate-950/75 text-cyan-300 border border-cyan-400/40 text-[10px] sm:text-[11px] font-mono tracking-wider backdrop-blur-md opacity-90 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 shadow-lg flex items-center gap-1.5">
                  <Maximize2 size={11} />
                  <span>VIEW</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-xl p-3 sm:p-6 md:p-12 safe-top safe-bottom"
            onClick={() => setSelectedImage(null)}
          >
            {/* Touch-Friendly Close Button (Min 48px hit target) */}
            <button 
              className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 text-white p-3 min-w-[48px] min-h-[48px] flex items-center justify-center bg-white/15 hover:bg-white/25 active:bg-white/35 rounded-full z-50 backdrop-blur-md transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              aria-label="Close image lightbox"
            >
              <X size={22} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
              className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt || selectedImage.title} 
                  className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-white/10"
                />
              </div>
              <div className="mt-4 text-center pointer-events-none">
                <div className="inline-block px-5 py-1.5 bg-black/60 backdrop-blur-md rounded-full border border-white/15">
                  <h4 className="text-white font-sans text-xs sm:text-sm tracking-widest uppercase">{selectedImage.title}</h4>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
