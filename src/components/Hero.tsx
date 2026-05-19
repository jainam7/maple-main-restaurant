import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { useEffect, useState, useRef } from 'react';
import { ArrowRight, ChefHat, Sparkles, Utensils } from 'lucide-react';
import MagneticButton from './MagneticButton';

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=80&w=2000",
    title: "Signature Artisanal Pasta",
    tagline: "Hand-rolled daily with organic semolina"
  },
  {
    url: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&q=80&w=2000",
    title: "Wild-Caught Maple Salmon",
    tagline: "Sustainably sourced, wood-fired to perfection"
  },
  {
    url: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=2000",
    title: "Dry-Aged Bourbon Ribeye",
    tagline: "Aged 45 days for unparalleled depth"
  },
  {
    url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2000",
    title: "Forest Mushroom Risotto",
    tagline: "Truffle oil infusion and aged parmesan"
  }
];

const titleLine1 = "Elevated";
const titleLine2 = "MAIN STREET";
const titleLine3 = "DINING.";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen lg:min-h-screen w-full flex flex-col lg:flex-row items-center overflow-hidden bg-charcoal">
      {/* Visual Side (Desktop: Right, Mobile: Background) */}
      <div className="absolute lg:relative w-full lg:w-1/2 min-h-screen lg:min-h-[100vh] z-0 lg:order-2">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <motion.img 
              style={{ y }}
              src={heroImages[currentIndex].url} 
              alt={heroImages[currentIndex].title}
              className="w-full h-[120%] object-cover brightness-[0.7] lg:brightness-100 absolute top-[-10%]"
              referrerPolicy="no-referrer"
            />
            {/* Gradient Overlay for Mobile Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 lg:via-transparent to-transparent lg:hidden" />
          </motion.div>
        </AnimatePresence>

        {/* Floating Interactive Callout */}
        <motion.div 
          key={`label-${currentIndex}`}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-12 right-12 hidden lg:flex items-center gap-4 bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 shadow-2xl group cursor-help"
        >
          <div className="w-12 h-12 bg-maple rounded-full flex items-center justify-center text-cream">
            <Sparkles size={20} className="animate-pulse" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-cream/60 font-bold">Featured Today</p>
            <h4 className="text-cream text-sm font-serif italic">{heroImages[currentIndex].title}</h4>
          </div>
        </motion.div>
      </div>

      {/* Content Side */}
      <div className="relative z-10 w-full lg:w-1/2 min-h-screen lg:h-full flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-12 lg:pt-28 lg:pb-12">
        <div className="max-w-2xl w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8"
          >
            <div className="flex items-center">
              <div className="h-[1px] w-6 sm:w-12 bg-maple" />
              <div className="w-1.5 h-1.5 rounded-full border border-maple bg-transparent -ml-0.5" />
            </div>
            <span className="text-cream/80 text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.3em] sm:tracking-[0.5em] font-bold">
              Artisanal Craft • Urban Soul
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black text-cream leading-[0.9] tracking-tighter mb-8">
              <span className="font-serif italic font-light block mb-2 text-maple overflow-hidden">
                {titleLine1.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2 + i * 0.05, duration: 0.5, ease: "easeOut" }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              {titleLine2.split(' ').map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-4">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
              <br />
              <span className="text-transparent border-text-cream overflow-hidden block" style={{ WebkitTextStroke: '1px rgba(255,250,240,0.3)' }}>
                {titleLine3.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + i * 0.05, duration: 0.4 }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mb-12"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-cream/60 text-lg md:text-xl font-light italic"
              >
                "{heroImages[currentIndex].tagline}"
              </motion.p>
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <MagneticButton>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-10 py-5 bg-maple text-cream font-bold uppercase tracking-widest text-xs rounded-full overflow-hidden transition-all pr-16 lg:pr-10 lg:hover:pr-16 cursor-pointer shadow-xl flex items-center justify-center whitespace-nowrap"
              >
                <span className="relative z-10 transition-transform duration-300 translate-x-[-8px] lg:translate-x-0 lg:group-hover:-translate-x-2">Book a Table</span>
                <ArrowRight 
                  className="absolute right-6 top-1/2 -translate-y-1/2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 transform translate-x-0 lg:translate-x-4 lg:group-hover:translate-x-0" 
                  size={18} 
                />
              </button>
            </MagneticButton>
            
            <MagneticButton>
              <button 
                onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-3 px-10 py-5 border border-cream/20 text-cream font-bold uppercase tracking-widest text-xs rounded-full hover:bg-cream/10 transition-all cursor-pointer"
              >
                <Utensils size={16} className="text-maple" />
                View Menu
              </button>
            </MagneticButton>
          </motion.div>

          {/* Carousel Indicators */}
          <div className="mt-20 flex gap-4">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1 transition-all duration-500 rounded-full cursor-pointer ${currentIndex === idx ? 'w-12 bg-maple' : 'w-4 bg-cream/20 hover:bg-cream/40'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Vertical Elements for Texture */}
      <div className="absolute right-0 top-0 h-full w-24 hidden lg:flex flex-col items-center justify-center gap-12 text-cream/5 pointer-events-none">
        <ChefHat size={32} />
        <Utensils size={32} />
        <span className="[writing-mode:vertical-lr] uppercase tracking-[1em] text-[10px] font-bold">ESTD 2024</span>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-10 left-12 hidden sm:flex flex-col items-center"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-maple to-transparent" />
      </motion.div>
    </section>
  );
}
