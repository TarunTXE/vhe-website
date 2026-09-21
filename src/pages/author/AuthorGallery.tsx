import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, Maximize2 } from 'lucide-react';

import authorImg from '../../assets/author/author.webp';
import breathlessImg from '../../assets/author/breathless.jpg';
import dravidanImg from '../../assets/author/dravidan.png';
import gocImg from '../../assets/author/goc.jpg';
import heroBg from '../../assets/author/hero-bg.gif';
import venkiImg from '../../assets/author/venki.jpg';
import doctorPortrait from '../../assets/doctor/icon.jpeg';
import doctorFull from '../../assets/doctor/full photo.jpeg';
import comtrustLab from '../../assets/doctor/comtrust lab.jpeg';
import churuFelicitation from '../../assets/doctor/churu2.jpeg';
import churuCamp from '../../assets/doctor/churu1.jpeg';
import churuHospital from '../../assets/doctor/churu3.jpeg';

const galleryImages = [
  { id: 1, src: authorImg, title: 'The Author at Work', format: 'tall', alt: 'Varun Harish - Author and Filmmaker' },
  { id: 2, src: churuFelicitation, title: 'Creative Journey & Service', format: 'wide', alt: 'Dr. Varun Harish receiving recognition at Churu outreach' },
  { id: 3, src: dravidanImg, title: 'Dravidan Cover Art', format: 'tall', alt: 'Dravidan' },
  { id: 4, src: comtrustLab, title: 'Precision in Practice', format: 'tall', alt: 'Dr. Varun Harish operating ophthalmic surgical microscope' },
  { id: 5, src: breathlessImg, title: 'Breathless Production', format: 'wide', alt: 'Breathless - short film' },
  { id: 6, src: heroBg, title: 'Cinematic Mood', format: 'wide', alt: 'Atmospheric cinematic visual' },
  { id: 7, src: churuCamp, title: 'Community Outreach', format: 'square', alt: 'Community eye care camp team' },
  { id: 8, src: venkiImg, title: 'Venki Concept', format: 'tall', alt: 'Venki' },
  { id: 9, src: churuHospital, title: 'Clinical Community', format: 'square', alt: 'Medical staff and resident doctors at PDU Medical College' },
  { id: 10, src: gocImg, title: 'Garden Of Compassion Poster', format: 'square', alt: 'Garden Of Compassion - short film' },
  { id: 11, src: doctorFull, title: 'Personal Journey', format: 'tall', alt: 'Dr. Varun Harish E.' },
  { id: 12, src: doctorPortrait, title: 'Professional Portrait', format: 'square', alt: 'Dr. Varun Harish E. - Ophthalmologist' }
];

export default function AuthorGallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  // Helper to get Tailwind grid classes based on format
  const getFormatClass = (format: string) => {
    switch(format) {
      case 'tall': return 'col-span-1 row-span-2 md:col-span-1 md:row-span-2 aspect-[3/4]';
      case 'wide': return 'col-span-1 row-span-1 md:col-span-2 md:row-span-1 aspect-[16/9]';
      case 'square': return 'col-span-1 row-span-1 md:col-span-1 md:row-span-1 aspect-square';
      default: return 'col-span-1 row-span-1 aspect-square';
    }
  };

  return (
    <section className="w-full py-32 bg-zinc-950 relative z-20 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-amber-900/5 blur-[120px] pointer-events-none" />

      <div className="px-6 md:px-24 mb-16 relative z-10 flex flex-col items-center">
        <h2 className="text-sm uppercase tracking-[0.4em] text-amber-500 mb-4 font-semibold flex items-center gap-2">
          <Camera size={16} /> Visual Archive
        </h2>
        <h3 className="text-4xl md:text-6xl font-cormorant text-white mb-6">Creative Journey</h3>
        <p className="text-zinc-400 font-sans max-w-2xl text-center">
          A collection of moments, inspirations, and visual elements that shape the narrative world.
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="relative w-full max-w-7xl mx-auto px-6 z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-dense gap-4 md:gap-6">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (index % 4) * 0.1, duration: 0.8 }}
              className={`group relative cursor-pointer overflow-hidden rounded-xl bg-zinc-900 ${getFormatClass(img.format)}`}
              onClick={() => setSelectedImage(img)}
            >
              <motion.div 
                className="w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <img 
                  src={img.src} 
                  alt={img.alt || img.title} 
                  className={`w-full h-full object-cover transition-all duration-700 ${img.src === heroBg ? 'filter grayscale group-hover:grayscale-0' : 'filter brightness-75 group-hover:brightness-110 group-hover:saturate-150'}`}
                  loading="lazy"
                />
              </motion.div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              
              {/* Image Title & Icon */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h4 className="text-white font-serif text-lg tracking-wide drop-shadow-md">{img.title}</h4>
                </div>
              </div>
              
              {/* Maximize Icon */}
              <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-xl border border-white/10">
                <Maximize2 size={16} />
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/95 backdrop-blur-xl p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-zinc-500 hover:text-white transition-colors p-3 bg-zinc-900/50 rounded-full hover:bg-zinc-800 z-50"
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
              className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt || selectedImage.title} 
                  className="max-w-full max-h-full object-contain rounded-sm shadow-[0_0_50px_rgba(0,0,0,1)] border border-white/5"
                />
              </div>
              <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
                <motion.h4 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-white font-cormorant text-2xl tracking-widest drop-shadow-lg"
                >
                  {selectedImage.title}
                </motion.h4>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
