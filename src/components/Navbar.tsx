import { motion } from 'motion/react';
import { Menu, X, Sun, Moon, Calendar, ArrowRight } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import MagneticButton from './MagneticButton';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Menu', href: '#menu' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--bg-main)]/80 backdrop-blur-md border-b border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.a 
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-serif font-bold tracking-tight flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-10 h-10 bg-maple rounded-full flex items-center justify-center text-white text-xl transition-transform group-hover:scale-110">🍁</div>
          <span className="text-[var(--text-main)]">Maple <span className="text-maple italic">&</span> Main</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <MagneticButton key={link.name}>
              <motion.a
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative font-semibold text-sm uppercase tracking-widest group text-[var(--text-main)] cursor-pointer`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-maple transition-all duration-300 group-hover:w-full" />
              </motion.a>
            </MagneticButton>
          ))}
          
          <MagneticButton>
            <button 
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-[var(--border-color)] transition-colors text-[var(--text-main)] cursor-pointer"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </MagneticButton>

          <MagneticButton>
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => scrollToSection(e as any, '#contact')}
              className="group relative h-12 w-12 lg:w-auto lg:px-6 bg-charcoal text-white rounded-full hover:bg-maple transition-all duration-300 dark:bg-white dark:text-charcoal dark:hover:bg-maple dark:hover:text-white flex items-center justify-center cursor-pointer overflow-hidden lg:hover:pr-12"
            >
              <Calendar size={18} className="lg:hidden" />
              <div className="hidden lg:flex items-center justify-center">
                <span className="text-xs uppercase tracking-widest font-bold whitespace-nowrap transition-transform duration-300 translate-x-[-4px] lg:translate-x-0 lg:group-hover:-translate-x-2">Book a Table</span>
                <ArrowRight 
                  className="absolute right-4 top-1/2 -translate-y-1/2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 transform translate-x-0 lg:translate-x-4 lg:group-hover:translate-x-0" 
                  size={16} 
                />
              </div>
            </motion.button>
          </MagneticButton>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full text-[var(--text-main)] cursor-pointer"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="text-[var(--text-main)] cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[var(--bg-main)] border-b border-[var(--border-color)] px-6 py-8 space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="block text-xl font-serif text-[var(--text-main)] hover:text-maple transition-colors"
            >
              {link.name}
            </a>
          ))}
          <motion.button 
            whileTap={{ scale: 0.95 }}
            onClick={(e) => scrollToSection(e as any, '#contact')}
            className="w-full py-5 bg-charcoal text-white dark:bg-white dark:text-charcoal font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 rounded-xl hover:bg-maple transition-colors shadow-xl active:bg-maple"
          >
            Book a Table
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      )}
    </nav>
  );
}
