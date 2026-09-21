import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import MagneticButton from '../../components/ui/MagneticButton';

export default function Contact() {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validate = () => {
    const errs: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your full name';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address';
    } else if (!emailPattern.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subjectText = formData.subject.trim() || `Consultation Inquiry from ${formData.name.trim()}`;
    const bodyText = `Name: ${formData.name.trim()}\n\nEmail: ${formData.email.trim()}\n\nMessage:\n\n${formData.message.trim()}`;

    const mailtoUrl = `mailto:varunharish.vhe@gmail.com?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;
    window.location.href = mailtoUrl;
  };

  // Lightweight floating particles for background
  const particles = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 8 + 12,
    delay: Math.random() * 4
  }));

  return (
    <section className="w-full px-4 sm:px-6 md:px-12 lg:px-24 py-14 sm:py-20 md:py-32 bg-white relative overflow-hidden font-sans" id="contact">
      {/* Background Particles near the illustration side - reduced on mobile */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none z-0 hidden sm:block">
        <div className="absolute inset-0 bg-blue-50/50 mix-blend-multiply" />
        {particles.map((p) => (
          <motion.div
            key={p.id}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.1, 0.4, 0.1],
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

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20 relative z-10">
        
        {/* Contact Info & Illustration */}
        <div className="w-full lg:w-5/12 flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-600 font-semibold tracking-widest uppercase text-xs sm:text-sm mb-2.5 sm:mb-3 block">Inquiries & Consultations</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 tracking-tight">Get in Touch</h2>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 font-light leading-relaxed">
              Available for clinical appointments, surgical consultations, and academic discussions on advancing eye care.
            </p>

            <div className="space-y-5 sm:space-y-6">
              {[
                { 
                  icon: Phone, 
                  title: "Phone", 
                  content: "+91 8281945642",
                  href: "tel:+918281945642" 
                },
                { 
                  icon: Mail, 
                  title: "Email", 
                  content: "varunharish.vhe@gmail.com",
                  href: "mailto:varunharish.vhe@gmail.com" 
                },
                { 
                  icon: MapPin, 
                  title: "Location", 
                  content: "Kozhikode, Kerala, India",
                  href: null 
                }
              ].map((info, idx) => (
                <div key={idx} className="flex items-center gap-3.5 sm:gap-4 group">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-blue-50 rounded-xl sm:rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shrink-0 shadow-xs">
                    <info.icon size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-900 mb-0.5">{info.title}</h4>
                    {info.href ? (
                      <a 
                        href={info.href} 
                        className="text-slate-600 hover:text-blue-600 active:text-blue-700 transition-colors text-sm sm:text-base break-all min-h-[36px] inline-flex items-center"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-slate-600 text-sm sm:text-base">{info.content}</p>
                    )}
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
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-10 sm:mt-14 w-36 h-36 sm:w-44 sm:h-44 relative self-center lg:self-start opacity-70 hidden sm:block"
          >
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-blue-100 animate-pulse">
              <path fill="currentColor" d="M100 30C40 30 10 100 10 100s30 70 90 70 90-70 90-70-30-70-90-70zm0 110c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm0-60c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20z"/>
            </svg>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-7/12"
        >
          <form 
            onSubmit={handleSubmit}
            noValidate
            className="bg-white p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2rem] shadow-xl sm:shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-4 sm:gap-5 relative group overflow-hidden"
          >
            {/* Subtle glow effect behind form */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[80px] -z-10 group-hover:bg-blue-100 transition-colors duration-1000 pointer-events-none" />
            
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1.5">Send a Message</h3>
              <p className="text-slate-500 text-xs sm:text-sm font-light">
                Submit to open pre-filled inquiry directly in your mail application.
              </p>
            </div>
            
            {/* Fields stack vertically on mobile, 2-col on md+ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              <div className="relative">
                <label className="text-xs sm:text-sm font-semibold text-slate-600 mb-1.5 block">Full Name *</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, name: e.target.value }));
                    if (errors.name) setErrors(prev => ({ ...prev, name: undefined }));
                  }}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-3 sm:px-5 sm:py-3.5 min-h-[48px] text-[16px] bg-slate-50 border rounded-xl focus:outline-none focus:bg-white transition-all duration-300 relative z-10 ${
                    errors.name ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'
                  }`}
                  placeholder="Dr. / Mr. / Ms. John Doe"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>
                )}
                <div className={`absolute inset-0 rounded-xl transition-all duration-500 ${focusedField === 'name' ? 'shadow-[0_0_20px_rgba(59,130,246,0.3)]' : 'shadow-none'}`} />
              </div>

              <div className="relative">
                <label className="text-xs sm:text-sm font-semibold text-slate-600 mb-1.5 block">Email Address *</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, email: e.target.value }));
                    if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
                  }}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-3 sm:px-5 sm:py-3.5 min-h-[48px] text-[16px] bg-slate-50 border rounded-xl focus:outline-none focus:bg-white transition-all duration-300 relative z-10 ${
                    errors.email ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>
                )}
                <div className={`absolute inset-0 rounded-xl transition-all duration-500 ${focusedField === 'email' ? 'shadow-[0_0_20px_rgba(59,130,246,0.3)]' : 'shadow-none'}`} />
              </div>
            </div>
            
            <div className="relative">
              <label className="text-xs sm:text-sm font-semibold text-slate-600 mb-1.5 block">Subject</label>
              <input 
                type="text" 
                value={formData.subject}
                onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                onFocus={() => setFocusedField('subject')}
                onBlur={() => setFocusedField(null)}
                className="w-full px-4 py-3 sm:px-5 sm:py-3.5 min-h-[48px] text-[16px] bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 relative z-10"
                placeholder="Medical Consultation / Academic Discussion"
              />
              <div className={`absolute inset-0 rounded-xl transition-all duration-500 ${focusedField === 'subject' ? 'shadow-[0_0_20px_rgba(59,130,246,0.3)]' : 'shadow-none'}`} />
            </div>
            
            <div className="relative">
              <label className="text-xs sm:text-sm font-semibold text-slate-600 mb-1.5 block">Message *</label>
              <textarea 
                rows={4}
                value={formData.message}
                onChange={(e) => {
                  setFormData(prev => ({ ...prev, message: e.target.value }));
                  if (errors.message) setErrors(prev => ({ ...prev, message: undefined }));
                }}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-4 py-3 sm:px-5 sm:py-3.5 min-h-[120px] text-[16px] bg-slate-50 border rounded-xl focus:outline-none focus:bg-white transition-all duration-300 resize-none relative z-10 ${
                  errors.message ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'
                }`}
                placeholder="Enter details of your clinical inquiry or message..."
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1 font-medium">{errors.message}</p>
              )}
              <div className={`absolute inset-0 rounded-xl transition-all duration-500 ${focusedField === 'message' ? 'shadow-[0_0_20px_rgba(59,130,246,0.3)]' : 'shadow-none'}`} />
            </div>

            <MagneticButton 
              type="submit" 
              className="mt-2 min-h-[48px] px-8 py-3.5 sm:py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-lg shadow-blue-600/30 w-full sm:w-auto self-stretch sm:self-end flex items-center justify-center gap-2 group text-sm sm:text-base"
            >
              Send Message
              <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </MagneticButton>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
