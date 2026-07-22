import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Camera } from 'lucide-react';

import wa1 from '../../assets/WhatsApp Image 2026-07-19 at 2.26.25 PM.jpeg';
import wa2 from '../../assets/WhatsApp Image 2026-07-19 at 2.26.26 PM (1).jpeg';
import wa3 from '../../assets/WhatsApp Image 2026-07-19 at 2.26.26 PM.jpeg';
import wa4 from '../../assets/WhatsApp Image 2026-07-19 at 2.26.27 PM.jpeg';
import iconImg from '../../assets/icon.jpeg';

const galleryImages = [
  { id: 1, src: iconImg, title: 'Clinical Practice', format: 'hero' },
  { id: 2, src: wa1, title: 'Patient Care', format: 'tall' },
  { id: 3, src: wa2, title: 'Medical Excellence', format: 'wide' },
  { id: 4, src: wa3, title: 'Community Outreach', format: 'square' },
  { id: 5, src: wa4, title: 'Continued Learning', format: 'square' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const getFormatClass = (format: string) => {
    switch(format) {
      case 'hero': return 'col-span-1 row-span-1 md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto';
      case 'tall': return 'col-span-1 row-span-1 md:col-span-1 md:row-span-2 aspect-[3/4]';
      case 'wide': return 'col-span-1 row-span-1 md:col-span-2 md:row-span-1 aspect-[16/9] md:aspect-[21/9]';
      case 'square': return 'col-span-1 row-span-1 md:col-span-1 md:row-span-1 aspect-square';
      default: return 'col-span-1 row-span-1 aspect-square';
    }
  };

  return (
    <section className="w-full px-6 md:px-12 lg:px-24 py-20 md:py-32 bg-white relative overflow-hidden font-sans">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-blue-50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-cyan-50/50 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.03)_0%,transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-16 text-center md:text-left"
        >
          <span className="text-blue-600 font-semibold tracking-widest uppercase text-xs md:text-sm mb-3 flex items-center justify-center md:justify-start gap-2">
            <Camera size={16} /> Moments of Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">Life in Practice</h2>
          <p className="text-slate-500 max-w-xl text-base md:text-lg font-light leading-relaxed mx-auto md:mx-0">
            A visual documentation of clinical practice, community care, and professional milestones.
          </p>
        </motion.div>

        {/* Asymmetrical Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-flow-dense gap-4 md:gap-6">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-slate-100 ${getFormatClass(img.format)}`}
              onClick={() => setSelectedImage(img)}
            >
              <motion.div 
                className="w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-all duration-700 filter brightness-95 group-hover:brightness-105"
                />
              </motion.div>
              
              {/* Glass Reflection Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform -translate-x-full group-hover:translate-x-full" style={{ transitionDuration: '1.5s' }} />
              
              {/* Blue Glow on Hover */}
              <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(37,99,235,0)] group-hover:shadow-[inset_0_0_50px_rgba(37,99,235,0.2)] transition-shadow duration-500 pointer-events-none" />

              {/* Image Title Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-end p-6 md:p-8">
                <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h4 className="text-white font-semibold text-lg md:text-xl tracking-tight">{img.title}</h4>
                </div>
              </div>
              
              {/* Maximize Icon */}
              <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-xl border border-white/30 hover:bg-white/40 hover:scale-110">
                <Maximize2 size={18} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-xl p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 md:top-8 md:right-8 text-slate-400 hover:text-white transition-colors p-3 bg-white/10 rounded-full hover:bg-white/20 z-50 backdrop-blur-md"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={24} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-6xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.title} 
                  className="max-w-full max-h-full object-contain rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/10"
                />
              </div>
              <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-block px-6 py-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10"
                >
                  <h4 className="text-white font-sans text-sm tracking-widest uppercase">{selectedImage.title}</h4>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
