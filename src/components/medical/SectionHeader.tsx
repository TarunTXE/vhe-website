import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({ title, subtitle, align = 'left' }: SectionHeaderProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}
    >
      <h3 className="text-blue-600 font-semibold tracking-wider uppercase mb-2">{subtitle}</h3>
      <h2 className="text-3xl md:text-5xl font-bold text-slate-900">{title}</h2>
    </motion.div>
  );
}
