import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Activity, Mail, MapPin, Phone, ArrowLeft, Menu, X } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Qualifications', href: '#qualifications' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export default function MedicalLayout() {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth hide/reveal navbar on scroll
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150 && !isMobileMenuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);

    // Simple scroll spy logic
    const sections = navLinks.map(link => link.href.substring(1));
    for (const section of sections.reverse()) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          setActiveSection(section);
          break;
        }
      }
    }
  });

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200 selection:text-blue-900 flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Premium Navbar */}
      <AnimatePresence>
        <motion.nav
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: { y: -100, opacity: 0 }
          }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
            isScrolled || isMobileMenuOpen ? 'bg-white/90 backdrop-blur-xl border-b border-blue-100/50 shadow-sm' : 'bg-transparent'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
            
            {/* Logo */}
            <div 
              className="flex items-center gap-2 cursor-pointer group z-50"
              onClick={() => {
                setIsMobileMenuOpen(false);
                const target = document.getElementById('home');
                target?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <motion.div 
                whileHover={{ rotate: 90 }}
                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white"
              >
                <Activity size={18} />
              </motion.div>
              <span className="font-semibold text-lg tracking-tight text-slate-800">Dr. Varun</span>
            </div>

            {/* Nav Links Desktop */}
            <div className="hidden lg:flex items-center gap-1 bg-slate-100/50 backdrop-blur-md p-1 rounded-full border border-slate-200/50">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="relative px-5 py-2 text-sm font-medium rounded-full transition-colors"
                >
                  <span className={`relative z-10 transition-colors duration-300 ${activeSection === link.href.substring(1) ? 'text-blue-900' : 'text-slate-500 hover:text-slate-900'}`}>
                    {link.name}
                  </span>
                  {activeSection === link.href.substring(1) && (
                    <motion.div
                      layoutId="medical-active-nav"
                      className="absolute inset-0 bg-white rounded-full shadow-sm"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Back Button Desktop */}
            <MagneticButton 
              onClick={() => navigate('/')}
              className="hidden lg:flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium border border-transparent hover:bg-slate-800 shadow-md group"
            >
              <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
              <span>Portal</span>
            </MagneticButton>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-blue-100/50 overflow-hidden"
              >
                <div className="flex flex-col px-6 py-6 gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => scrollTo(e, link.href)}
                      className={`text-lg font-medium py-2 transition-colors ${activeSection === link.href.substring(1) ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
                    >
                      {link.name}
                    </a>
                  ))}
                  <div className="h-px w-full bg-slate-100 my-2" />
                  <button 
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 py-3 text-slate-700 font-medium hover:text-blue-600 transition-colors w-full text-left"
                  >
                    <ArrowLeft size={18} />
                    Back to Portal
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow w-full">
        <Outlet />
      </main>

      {/* Premium Footer */}
      <footer className="relative bg-slate-950 text-slate-400 py-16 border-t border-slate-800 overflow-hidden mt-auto z-20">
        
        {/* Subtle Medical Pattern Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-screen" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
            
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6 text-white">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                  <Activity size={18} />
                </div>
                <span className="font-semibold text-xl tracking-tight">Dr. Varun Harish E.</span>
              </div>
              <p className="text-slate-400 font-sans max-w-sm mb-6 leading-relaxed">
                Dedicated to preserving and restoring vision through compassionate, patient-centered, and evidence-based care.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-6 tracking-wide">Navigation</h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} onClick={(e) => scrollTo(e, link.href)} className="hover:text-blue-400 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-6 tracking-wide">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-blue-500" />
                  <a href="mailto:varunharish.vhe@gmail.com" className="hover:text-white transition-colors">varunharish.vhe@gmail.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-blue-500" />
                  <span>+91 XXX XXX XXXX</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-blue-500 mt-1 shrink-0" />
                  <span className="leading-tight">
                    Eye Care Clinic,<br/>
                    Kochi, Kerala, India
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Animated Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8" />

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; {new Date().getFullYear()} Dr. Varun Harish E. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
