import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { useEffect, useState, useRef } from 'react';
import { X, ChefHat, Leaf, Zap } from 'lucide-react';

const specials = [
  {
    title: "Maple Glazed Salmon",
    desc: "Sustainably sourced, wood-fired with a honey-maple reduction and charred asparagus.",
    image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&q=80&w=1974",
    price: "$34",
    gridClass: "md:col-span-2 md:row-span-2",
    details: "Our salmon is caught fresh from the North Atlantic and glazed with Grade A Vermont maple syrup, infused with toasted peppercorns and citrus zest.",
    calories: "450 kcal",
    prepTime: "25 min"
  },
  {
    title: "The Main Burger",
    desc: "Dry-aged brisket, maple-candied bacon, smoked gouda, and truffle aioli.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=1998",
    price: "$22",
    gridClass: "md:col-span-1 md:row-span-1",
    details: "A signature blend of chuck and brisket, aged for 21 days for maximum flavor. Served on a toasted brioche bun with our house-made maple-bourbon jam.",
    calories: "820 kcal",
    prepTime: "15 min"
  },
  {
    title: "Rustic Charcuterie",
    desc: "Local artisanal cheeses, cured meats, forest honeycomb, and maple-walnut bread.",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&q=80&w=2098",
    price: "$28",
    gridClass: "md:col-span-1 md:row-span-1",
    details: "A curated selection of the region's finest cheeses and meats. Accompanied by honeycomb harvested from our local apiary and bread baked in-house daily.",
    calories: "560 kcal",
    prepTime: "10 min"
  }
];

export default function BentoGrid() {
  const [selectedDish, setSelectedDish] = useState<typeof specials[0] | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  useEffect(() => {
    if (selectedDish) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedDish]);

  return (
    <section ref={containerRef} className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <span className="text-maple text-xs uppercase tracking-[0.4em] font-bold block mb-4">Chef's Selection</span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[var(--text-main)]">THE BENTO BOX <br /><span className="text-forest">SIGNATURES</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-[1000px] md:h-[700px]">
        {specials.map((special, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className={`group relative overflow-hidden bento-item !p-0 ${special.gridClass}`}
          >
            <motion.img 
              style={{ y, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              src={special.image} 
              alt={special.title}
              className="w-full h-full object-cover transition-all duration-700 brightness-75 group-hover:brightness-50"
              referrerPolicy="no-referrer"
            />
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-cream pointer-events-none">
              <div className="translate-y-0 lg:translate-y-8 lg:group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-maple font-bold mb-2 block">{special.price}</span>
                <h3 className="text-3xl font-serif mb-2 italic">{special.title}</h3>
                <p className="opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 text-sm font-light max-w-sm">
                  {special.desc}
                </p>
                <div className="mt-6 flex items-center gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0">
                  <button 
                    onClick={() => setSelectedDish(special)}
                    className="px-6 py-2 bg-maple text-white rounded-full text-[10px] uppercase font-bold tracking-widest pointer-events-auto hover:bg-white hover:text-maple transition-colors cursor-pointer"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Detail Modal */}
      <AnimatePresence>
        {selectedDish && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDish(null)}
              className="absolute inset-0 bg-charcoal/90 backdrop-blur-md"
            />
            
            <motion.div 
              layoutId={`modal-${selectedDish.title}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-[var(--bg-main)] rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row h-full max-h-[90vh] md:h-auto"
            >
              <button 
                onClick={() => setSelectedDish(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-10 h-10 md:w-12 md:h-12 bg-charcoal/80 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-maple transition-all shadow-lg border border-white/10 cursor-pointer"
              >
                <X size={20} className="md:w-6 md:h-6" />
              </button>

              {/* Image Section */}
              <div className="w-full md:w-1/2 h-48 sm:h-64 md:h-[600px] relative shrink-0">
                <img 
                  src={selectedDish.image} 
                  alt={selectedDish.title} 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-transparent to-transparent md:hidden" />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 p-6 md:p-12 overflow-y-auto">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-maple font-bold tracking-[0.3em] uppercase text-[10px]">Featured Dish</span>
                  <h2 className="text-3xl md:text-5xl font-black font-serif italic text-[var(--text-main)] mt-2 mb-4 md:mb-6 leading-tight">
                    {selectedDish.title}
                  </h2>
                  
                  <div className="flex gap-4 md:gap-6 mb-6 md:mb-8">
                    <div className="flex items-center gap-2 text-[var(--text-main)]/60 text-[10px] font-bold uppercase tracking-widest">
                      <ChefHat size={14} className="text-maple" />
                      {selectedDish.prepTime}
                    </div>
                    <div className="flex items-center gap-2 text-[var(--text-main)]/60 text-[10px] font-bold uppercase tracking-widest">
                      <Zap size={14} className="text-maple" />
                      {selectedDish.calories}
                    </div>
                  </div>

                  <p className="text-[var(--text-main)]/70 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                    {selectedDish.details}
                  </p>

                  <div className="grid grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-12">
                    <div className="p-3 md:p-4 bg-forest/5 rounded-2xl border border-forest/10 flex items-center gap-2 md:gap-3">
                      <Leaf size={16} className="text-forest shrink-0" />
                      <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-forest">Eco Sourced</span>
                    </div>
                    <div className="p-3 md:p-4 bg-maple/5 rounded-2xl border border-maple/10 flex items-center gap-2 md:gap-3">
                      <ChefHat size={16} className="text-maple shrink-0" />
                      <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-maple">Chef Choice</span>
                    </div>
                  </div>

                  {/* Quick Order Inquiry */}
                  <div className="border-t border-[var(--border-color)] pt-6 md:pt-8">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 text-[var(--text-main)]/40 text-center">Quick Inquiry</h4>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input 
                        type="email" 
                        placeholder="Your Email" 
                        className="flex-1 bg-transparent border-b border-[var(--border-color)] py-2 md:py-3 focus:outline-none focus:border-maple transition-colors text-[var(--text-main)] text-sm"
                      />
                      <button className="px-6 py-3 bg-charcoal text-white dark:bg-white dark:text-charcoal rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-maple dark:hover:bg-maple dark:hover:text-white transition-all shadow-md cursor-pointer">
                        Reserve
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

