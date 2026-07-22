import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function AuthorLayout() {
  return (
    <motion.div
      className="min-h-screen bg-[var(--color-author-bg)] text-[var(--color-author-text)] font-serif selection:bg-amber-900/50"
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Background grain or texture can be added here */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-0"></div>

      <nav className="w-full p-8 flex justify-between items-center fixed top-0 z-50 mix-blend-difference">
        <div className="text-2xl font-bold tracking-widest uppercase text-amber-50">Varun</div>
        <div className="flex gap-8 text-sm uppercase tracking-widest text-zinc-400">
          <a href="/author" className="hover:text-amber-500 transition-colors">Home</a>
          <a href="/author/novels" className="hover:text-amber-500 transition-colors">Novels</a>
          <a href="/author/films" className="hover:text-amber-500 transition-colors">Films</a>
          <a href="/" className="ml-8 px-4 py-1 border border-zinc-700 rounded-full hover:border-amber-500 hover:text-amber-500 transition-all">Portal</a>
        </div>
      </nav>

      <main className="relative z-10">
        <Outlet />
      </main>
    </motion.div>
  );
}
