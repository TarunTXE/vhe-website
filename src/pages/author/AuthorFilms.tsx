import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Clapperboard, Award } from 'lucide-react';
import breathlessImg from '../../assets/author/breathless.jpg';
import gocImg from '../../assets/author/goc.jpg';

const films = [
  {
    id: 1,
    title: 'Breathless',
    year: '2015',
    duration: '15 Min',
    coverImg: breathlessImg,
    tagline: "The true cost of plastic pollution.",
    synopsis: "An awareness short film exploring the environmental impact of plastic pollution and the importance of responsible living.",
    awards: ["Best Short - IndieX Film Fest", "Official Selection - Cannes Short Film Corner"],
    videoUrl: "https://youtu.be/jUwFK4d_7lY?si=6Kmwx1AjZ-rWJpaR"
  },
  {
    id: 2,
    title: 'Garden Of Compassion',
    year: '2014',
    duration: '22 Min',
    coverImg: gocImg,
    tagline: "The quiet power of empathy.",
    synopsis: "A heartfelt short film celebrating empathy, kindness, and the quiet power of human compassion.",
    awards: ["Best Director - Tokyo International Short Film Festival"],
    videoUrl: "https://youtu.be/J4S_dtc9nh8?si=20HvlzAUXIqEDofw"
  }
];

export default function AuthorFilms() {
  const [selectedFilm, setSelectedFilm] = useState<typeof films[0] | null>(null);

  return (
    <section className="w-full py-32 bg-zinc-950 relative z-20 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none" />

      <div className="px-6 md:px-24 mb-16 relative z-10 flex flex-col items-center">
        <h2 className="text-sm uppercase tracking-[0.4em] text-blue-500 mb-4 font-semibold flex items-center gap-2">
          <Clapperboard size={16} /> Cinematic Vision
        </h2>
        <h3 className="text-4xl md:text-6xl font-cormorant text-white mb-6">Short Films</h3>
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {films.map((film, index) => (
          <motion.div
            key={film.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            className="group relative cursor-pointer rounded-xl overflow-hidden aspect-[16/9] bg-zinc-900"
            onClick={() => window.open(film.videoUrl, '_blank', 'noopener,noreferrer')}
          >
            {/* Image */}
            <motion.div 
              className="absolute inset-0 z-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <img 
                src={film.coverImg} 
                alt={`${film.title} - short film`} 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" 
                loading="lazy"
                width="600"
                height="338"
              />
            </motion.div>

            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent z-10" />
            
            {/* Cinematic Glow on Hover */}
            <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 mix-blend-overlay transition-colors duration-500 z-10" />
            
            {/* Content */}
            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-3 text-blue-400 text-xs tracking-widest uppercase mb-2">
                  <span>{film.year}</span>
                  <span className="w-1 h-1 rounded-full bg-blue-500" />
                  <span>{film.duration}</span>
                </div>
                <h4 className="text-3xl md:text-5xl font-cormorant text-white mb-2">{film.title}</h4>
                <p className="text-zinc-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {film.tagline}
                </p>
              </div>
            </div>

            {/* Play Button */}
            <div className="absolute inset-0 z-30 flex items-center justify-center">
              <motion.div 
                className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-[0_0_30px_rgba(59,130,246,0)] group-hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] group-hover:bg-white/20 group-hover:scale-110 transition-all duration-500"
              >
                <Play className="ml-1" size={24} fill="currentColor" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Film Detail Modal */}
      <AnimatePresence>
        {selectedFilm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/95 backdrop-blur-xl p-4 md:p-12 overflow-y-auto"
          >
            <div className="min-h-full w-full max-w-6xl mx-auto py-10 relative flex flex-col">
              <button 
                onClick={() => setSelectedFilm(null)}
                className="absolute top-0 right-0 md:fixed md:top-8 md:right-8 text-zinc-500 hover:text-white transition-colors p-3 bg-zinc-900/50 rounded-full hover:bg-zinc-800 z-50"
              >
                <X size={24} />
              </button>
              
              <div className="w-full flex flex-col lg:flex-row gap-12 mt-12">
                
                {/* Video Player Placeholder */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full lg:w-2/3 aspect-video bg-black rounded-xl overflow-hidden relative shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/5"
                >
                  <img src={selectedFilm.coverImg} alt={selectedFilm.title} className="w-full h-full object-cover opacity-40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button 
                      onClick={() => window.open(selectedFilm.videoUrl, '_blank', 'noopener,noreferrer')}
                      className="w-20 h-20 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center text-white transition-colors hover:scale-110 duration-300 shadow-[0_0_30px_rgba(37,99,235,0.5)]"
                    >
                      <Play className="ml-2" size={32} fill="currentColor" />
                    </button>
                  </div>
                  {/* Progress bar placeholder */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-zinc-800">
                    <div className="w-1/3 h-full bg-blue-500"></div>
                  </div>
                </motion.div>

                {/* Details */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-full lg:w-1/3 flex flex-col justify-center"
                >
                  <div className="flex items-center gap-3 text-blue-500 text-xs tracking-[0.3em] uppercase mb-4 font-semibold">
                    <span>{selectedFilm.year}</span>
                    <span className="w-1 h-1 rounded-full bg-blue-500" />
                    <span>{selectedFilm.duration}</span>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-cormorant text-white mb-2">{selectedFilm.title}</h3>
                  <p className="text-zinc-400 italic mb-8 border-l-2 border-blue-500/50 pl-4">"{selectedFilm.tagline}"</p>
                  
                  <h4 className="text-lg font-serif text-white mb-3">Synopsis</h4>
                  <p className="text-zinc-400 font-sans leading-relaxed text-sm mb-8">
                    {selectedFilm.synopsis}
                  </p>
                  
                  {selectedFilm.awards && selectedFilm.awards.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-widest text-white mb-4 flex items-center gap-2">
                        <Award size={16} className="text-amber-500" /> Accolades
                      </h4>
                      <ul className="space-y-3">
                        {selectedFilm.awards.map((award, i) => (
                          <li key={i} className="text-zinc-400 text-sm flex items-start gap-2">
                            <span className="text-amber-500 mt-1">•</span> {award}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
