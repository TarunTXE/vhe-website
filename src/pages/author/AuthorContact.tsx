import { Send, Globe } from 'lucide-react';

export default function AuthorContact() {
  return (
    <section className="w-full py-32 bg-[var(--color-author-bg)] relative z-20 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-cormorant text-amber-50 mb-8">Join the Narrative</h2>
        <p className="text-zinc-400 font-sans mb-12 max-w-2xl mx-auto">
          Subscribe to the newsletter for exclusive updates on upcoming novels, short film releases, and behind-the-scenes content. No spam, just stories.
        </p>

        <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto mb-20">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-grow px-6 py-4 bg-zinc-900 border border-zinc-800 text-amber-50 focus:outline-none focus:border-amber-500 rounded-sm font-sans transition-colors"
          />
          <button className="px-8 py-4 bg-amber-600 text-white font-bold rounded-sm hover:bg-amber-500 transition-colors flex items-center justify-center gap-3 whitespace-nowrap">
            Subscribe <Send size={18} />
          </button>
        </form>

        <div className="flex justify-center gap-8 border-t border-zinc-800 pt-12">
          <a href="#" className="text-zinc-500 hover:text-amber-500 transition-colors flex items-center gap-2">
            <Globe size={18} /> Instagram
          </a>
          <a href="#" className="text-zinc-500 hover:text-amber-500 transition-colors flex items-center gap-2">
            <Globe size={18} /> Twitter
          </a>
          <a href="#" className="text-zinc-500 hover:text-amber-500 transition-colors flex items-center gap-2">
            <Globe size={18} /> YouTube
          </a>
        </div>
        
        <p className="text-zinc-600 font-sans text-sm mt-12">
          © {new Date().getFullYear()} Varun Harish E. All rights reserved.
        </p>
      </div>
    </section>
  );
}
