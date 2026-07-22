import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Star, X, ArrowRight } from 'lucide-react';
import MagneticButton from '../../components/ui/MagneticButton';
import dravidanCover from '../../assets/dravidan.png';
import venkiCover from '../../assets/venki.jpg';

const novels = [
  {
    id: 1,
    title: 'Dravidan',
    spineText: 'Dravidan',
    color: 'from-orange-900 to-red-950',
    coverImg: dravidanCover,
    synopsis: 'A gripping tale deeply rooted in history and culture, exploring the ancient legends and the modern realities of the Dravidian heartland. Secrets buried under the sands of time resurface, challenging everything the protagonist thought they knew about their ancestry.',
    genre: 'Historical Thriller',
    pubDetails: 'Published: 2021 • Hardcover & Digital',
    reviews: 4.8
  },
  {
    id: 2,
    title: 'Venki',
    spineText: 'Venki',
    color: 'from-zinc-800 to-black',
    coverImg: venkiCover,
    synopsis: 'A psychological journey through the mind of an enigmatic character. As the lines between reality and illusion blur, Venki must confront the darkest corners of his past to survive the present. A masterclass in suspense and character building.',
    genre: 'Psychological Fiction',
    pubDetails: 'Published: 2019 • Paperback & Digital',
    reviews: 4.9
  }
];

const featuredStories = [
  {
    title: "Sethusamudram",
    description: "An evocative story woven around the mythical and geographical marvel of the Ram Setu, exploring faith, logic, and human ambition.",
    link: "#"
  },
  {
    title: "ആരണ്യകം (Aaranyakam)",
    description: "A Malayalam short story delving into the deep forests of the mind and nature, reflecting on isolation and discovery.",
    link: "#"
  },
  {
    title: "കനൽവഴികളിൽ (Kanalvazhikalil)",
    description: "Walking on paths of fire—a tale of resilience, struggle, and the indomitable human spirit in the face of adversity.",
    link: "#"
  }
];

export default function AuthorNovels() {
  const [selectedBook, setSelectedBook] = useState<typeof novels[0] | null>(null);

  return (
    <section className="w-full pt-32 pb-16 bg-zinc-950 relative z-20 overflow-hidden">
      
      {/* --- BOOKS SECTION --- */}
      <div className="px-6 md:px-24 mb-20 text-center relative z-10">
        <h2 className="text-sm uppercase tracking-[0.4em] text-amber-500 mb-4 font-semibold drop-shadow-md">Literary Works</h2>
        <h3 className="text-4xl md:text-6xl font-cormorant text-white mb-6">The Bookshelf</h3>
      </div>

      <div className="relative w-full max-w-5xl mx-auto flex flex-wrap justify-center gap-16 md:gap-24 mb-40 px-6">
        {novels.map((novel, index) => (
          <motion.div
            key={novel.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
            className="group relative w-64 md:w-80 cursor-pointer perspective-[1200px]"
            onClick={() => setSelectedBook(novel)}
          >
            <motion.div 
              className="relative w-full aspect-[2/3] transform-style-3d transition-transform duration-500 origin-center"
              whileHover={{ rotateY: -15, rotateX: 5, y: -20, scale: 1.05 }}
            >
              {/* Book Shadow */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-10 bg-black/80 blur-xl rounded-[100%] group-hover:bg-amber-900/40 group-hover:w-full transition-all duration-500" />
              
              {/* Book Cover */}
              <div className="absolute inset-0 bg-zinc-900 rounded-r-xl rounded-l-sm overflow-hidden border border-white/10 group-hover:border-amber-500/50 shadow-[0_20px_40px_rgba(0,0,0,0.8)] group-hover:shadow-[0_30px_60px_rgba(245,158,11,0.2)] transition-colors duration-500 transform-style-3d z-10">
                {/* Spine shadow/highlight */}
                <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/60 via-white/10 to-transparent z-20" />
                
                {/* Reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-30" />
                
                <img 
                  src={novel.coverImg} 
                  alt={novel.title} 
                  className="w-full h-full object-cover" 
                />
              </div>

              {/* Page Edges (Visible on 3D rotation) */}
              <div className="absolute top-[2%] bottom-[2%] -right-4 w-4 bg-zinc-200 transform origin-left rotate-y-90 border-r border-y border-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transform: "rotateY(90deg) translateZ(1px)" }}>
                {/* Simulated pages */}
                <div className="w-full h-full bg-[repeating-linear-gradient(to_bottom,transparent,transparent_2px,#d4d4d8_2px,#d4d4d8_3px)] opacity-50" />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* --- FEATURED STORIES SECTION --- */}
      <div className="relative z-10 px-6 md:px-24 max-w-7xl mx-auto mt-32">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.4em] text-amber-500 mb-4 font-semibold">Short Fiction</h2>
          <h3 className="text-3xl md:text-5xl font-cormorant text-white mb-6">Featured Stories</h3>
          <p className="text-zinc-400 font-sans max-w-2xl mx-auto">
            A collection of critically acclaimed short stories originally published on Pratilipi, exploring diverse narratives and human experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredStories.map((story, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="group bg-white/[0.02] border border-white/5 rounded-xl p-8 hover:bg-white/[0.05] hover:border-amber-500/30 transition-all duration-500 relative overflow-hidden backdrop-blur-sm"
            >
              {/* Glow background on hover */}
              <div className="absolute -inset-2 bg-gradient-to-br from-amber-500/0 via-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:to-transparent transition-all duration-700 pointer-events-none" />
              
              <h4 className="text-2xl font-cormorant text-white mb-4 relative inline-block">
                {story.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-500" />
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                {story.description}
              </p>
              
              <MagneticButton 
                className="w-full flex items-center justify-between px-6 py-4 border border-zinc-800 rounded-sm text-zinc-300 hover:text-amber-500 hover:border-amber-500/50 transition-colors group/btn"
              >
                <span className="text-sm font-semibold uppercase tracking-wider">Read on Pratilipi</span>
                <ArrowRight size={18} className="transform group-hover/btn:translate-x-2 transition-transform duration-300" />
              </MagneticButton>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- BOOK DETAIL MODAL --- */}
      <AnimatePresence>
        {selectedBook && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/90 backdrop-blur-xl p-4 md:p-12 overflow-y-auto"
          >
            <div className="min-h-full w-full flex items-center justify-center py-10">
              <button 
                onClick={() => setSelectedBook(null)}
                className="fixed top-8 right-8 text-zinc-500 hover:text-white transition-colors p-2 bg-zinc-900/50 rounded-full hover:bg-amber-600 z-50"
              >
                <X size={24} />
              </button>
              
              <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start relative">
                
                {/* Large Cover */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className="w-full max-w-sm lg:w-2/5 aspect-[2/3] relative rounded-r-2xl rounded-l-sm shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden flex-shrink-0"
                >
                  <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-black/80 via-white/10 to-transparent z-20" />
                  <img src={selectedBook.coverImg} alt={selectedBook.title} className="w-full h-full object-cover" />
                </motion.div>

                {/* Details */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-full lg:w-3/5 text-center lg:text-left mt-8 lg:mt-0"
                >
                  <h2 className="text-sm uppercase tracking-[0.4em] text-amber-500 mb-2 font-semibold">By Varun Harish E.</h2>
                  <h3 className="text-5xl md:text-7xl font-cormorant text-white mb-6 drop-shadow-md">{selectedBook.title}</h3>
                  
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 text-zinc-400 text-sm tracking-wide">
                    <span className="flex items-center gap-1 text-amber-500"><Star size={16} fill="currentColor" /> {selectedBook.reviews} Rating</span>
                    <span>•</span>
                    <span className="bg-zinc-900 px-3 py-1 rounded text-zinc-300">{selectedBook.genre}</span>
                    <span>•</span>
                    <span>{selectedBook.pubDetails}</span>
                  </div>
                  
                  <h4 className="text-xl font-serif text-white mb-4 border-b border-zinc-800 pb-2 inline-block">Synopsis</h4>
                  <p className="text-zinc-400 font-sans leading-relaxed text-lg mb-10 max-w-2xl mx-auto lg:mx-0">
                    {selectedBook.synopsis}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <MagneticButton className="px-10 py-5 bg-amber-600 text-zinc-950 font-bold rounded-sm hover:bg-amber-500 transition-colors flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(217,119,6,0.3)]">
                      <BookOpen size={20} /> Purchase Book
                    </MagneticButton>
                  </div>
                  
                  {/* Related Works placeholder */}
                  <div className="mt-16 pt-8 border-t border-zinc-900">
                    <h5 className="text-zinc-500 text-sm uppercase tracking-widest mb-4">Also by this author</h5>
                    <div className="flex gap-4 justify-center lg:justify-start opacity-60">
                      {novels.filter(n => n.id !== selectedBook.id).map(n => (
                        <div key={n.id} className="w-16 h-24 bg-zinc-800 rounded-r-md cursor-pointer hover:opacity-100 transition-opacity" onClick={() => setSelectedBook(n)}>
                          <img src={n.coverImg} alt={n.title} className="w-full h-full object-cover rounded-r-md" />
                        </div>
                      ))}
                    </div>
                  </div>

                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
