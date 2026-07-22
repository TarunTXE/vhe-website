import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import MagneticButton from '../../components/ui/MagneticButton';

export default function Contact() {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Simple floating particle for background
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    size: Math.random() * 8 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5
  }));

  return (
    <section className="w-full px-6 md:px-24 py-32 bg-white relative overflow-hidden" id="contact">
      {/* Background Particles near the illustration side */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none z-0">
        <div className="absolute inset-0 bg-blue-50/50 mix-blend-multiply" />
        {particles.map((p) => (
          <motion.div
            key={p.id}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear"
            }}
            className="absolute bg-blue-300 rounded-full blur-[1px]"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 relative z-10">
        
        {/* Contact Info & Illustration */}
        <div className="w-full lg:w-5/12 flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Get in Touch</h2>
            <p className="text-slate-600 text-lg mb-12">
              Available for consultations, collaborations, and discussions on advancing medical care.
            </p>

            <div className="space-y-8">
              {[
                { icon: Phone, title: "Phone", content: "+91 94002 91140" },
                { icon: Mail, title: "Email", content: "varunharish.vhe@gmail.com" },
                { icon: MapPin, title: "Location", content: "Kozhikode, Kerala, India" }
              ].map((info, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-1">{info.title}</h4>
                    <p className="text-slate-600 group-hover:text-blue-600 transition-colors">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Abstract Medical Eye Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 w-48 h-48 relative self-center lg:self-start opacity-70"
          >
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-blue-100 animate-pulse">
              <path fill="currentColor" d="M100 30C40 30 10 100 10 100s30 70 90 70 90-70 90-70-30-70-90-70zm0 110c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm0-60c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20z"/>
            </svg>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-7/12"
        >
          <form className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-6 relative group overflow-hidden">
            {/* Subtle glow effect behind form */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[80px] -z-10 group-hover:bg-blue-100 transition-colors duration-1000" />
            
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Send a Message</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label className="text-sm font-semibold text-slate-600 mb-2 block">Full Name</label>
                <input 
                  type="text" 
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 relative z-10"
                  placeholder="John Doe"
                />
                <div className={`absolute inset-0 rounded-xl transition-all duration-500 ${focusedField === 'name' ? 'shadow-[0_0_20px_rgba(59,130,246,0.3)]' : 'shadow-none'}`} />
              </div>
              <div className="relative">
                <label className="text-sm font-semibold text-slate-600 mb-2 block">Email Address</label>
                <input 
                  type="email" 
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 relative z-10"
                  placeholder="john@example.com"
                />
                <div className={`absolute inset-0 rounded-xl transition-all duration-500 ${focusedField === 'email' ? 'shadow-[0_0_20px_rgba(59,130,246,0.3)]' : 'shadow-none'}`} />
              </div>
            </div>
            
            <div className="relative">
              <label className="text-sm font-semibold text-slate-600 mb-2 block">Subject</label>
              <input 
                type="text" 
                onFocus={() => setFocusedField('subject')}
                onBlur={() => setFocusedField(null)}
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 relative z-10"
                placeholder="How can I help you?"
              />
              <div className={`absolute inset-0 rounded-xl transition-all duration-500 ${focusedField === 'subject' ? 'shadow-[0_0_20px_rgba(59,130,246,0.3)]' : 'shadow-none'}`} />
            </div>
            
            <div className="relative">
              <label className="text-sm font-semibold text-slate-600 mb-2 block">Message</label>
              <textarea 
                rows={5}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 resize-none relative z-10"
                placeholder="Your message here..."
              />
              <div className={`absolute inset-0 rounded-xl transition-all duration-500 ${focusedField === 'message' ? 'shadow-[0_0_20px_rgba(59,130,246,0.3)]' : 'shadow-none'}`} />
            </div>

            <MagneticButton 
              type="button" 
              className="mt-4 px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30 w-full md:w-auto self-end flex items-center justify-center gap-2 group"
            >
              Send Message
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </MagneticButton>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
