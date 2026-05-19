import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';

type MenuItem = {
  name: string;
  price: string;
  desc: string;
  tags: string[];
  image: string;
};

const categories = ["Brunch", "Lunch", "Dinner", "Cocktails"];

const menuData: Record<string, MenuItem[]> = {
  Brunch: [
    { name: "Maple Syrup Pancakes", price: "$16", desc: "Triple stacked charcoal pancakes with Grade A forest maple syrup.", tags: ["Veg"], image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&q=80&w=2070" },
    { name: "Smoked Salmon Benedict", price: "$22", desc: "Poached eggs, maple-hollandaise, on multi-grain rustic toast.", tags: ["Non-Veg", "GF"], image: "https://images.unsplash.com/photo-1600335895229-6e75511892c8?auto=format&fit=crop&q=80&w=1974" },
    { name: "Avocado Forest Toast", price: "$18", desc: "Smashed avocado, heirloom tomatoes, and forest micro-greens.", tags: ["Vegan"], image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=2080" },
    { name: "Maple Glazed Bacon & Eggs", price: "$20", desc: "Farm-fresh eggs, double-smoked bacon, and roasted potatoes.", tags: ["Non-Veg"], image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&q=80&w=1974" },
    { name: "Chia Berry Pudding", price: "$14", desc: "Almond milk chia, forest berries, and maple nut crumble.", tags: ["Vegan", "GF"], image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&q=80&w=1974" },
  ],
  Lunch: [
    { name: "Maple Cobb Salad", price: "$18", desc: "Roasted bird, maple bacon, blue cheese, avocado, and cider vinaigrette.", tags: ["Non-Veg", "GF"], image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800" },
    { name: "Forest Mushroom Melt", price: "$17", desc: "Local mushrooms, truffle oil, melted gruyère on sourdough.", tags: ["Veg"], image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800" },
    { name: "Roasted Root Grain Bowl", price: "$19", desc: "Quinoa, roasted parsnips, maple-tahini dressing, and kale.", tags: ["Vegan", "GF"], image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&q=80&w=800" },
    { name: "Artisan Turkey Club", price: "$21", desc: "Slow-roasted turkey, maple ham, aged cheddar, and herb aioli.", tags: ["Non-Veg"], image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800" },
    { name: "Artisanal Grilled Cheese", price: "$16", desc: "Aged cheddar, fontina, and maple-glazed onions on sourdough.", tags: ["Veg"], image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=800" },
  ],
  Dinner: [
    { name: "Pan-Seared Sea Scallops", price: "$42", desc: "Jumbo scallops, maple-parsnip puree, and crispy pancetta.", tags: ["Non-Veg", "GF"], image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800" },
    { name: "Truffle Mushroom Risotto", price: "$29", desc: "Arborio rice, forest mushrooms, maple balsamic glaze.", tags: ["Veg", "GF"], image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=800" },
    { name: "Maple Glazed Salmon", price: "$34", desc: "Wild-caught, wood-fired with honey-maple reduction.", tags: ["Non-Veg", "GF"], image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&q=80&w=800" },
    { name: "Stuffed Butternut Squash", price: "$26", desc: "Wild rice, cranberries, pepitas, and maple sage drizzle.", tags: ["Vegan", "GF"], image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=800" },
    { name: "Wild Boar Ragout", price: "$38", desc: "Slow-braised boar, handmade pappardelle, and pecorino.", tags: ["Non-Veg"], image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800" },
  ],
  Cocktails: [
    { name: "Maple Old Fashioned", price: "$16", desc: "Bulleit Bourbon, Vermont maple syrup, walnut bitters.", tags: ["Spirit"], image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800" },
    { name: "Forest Gin Fizz", price: "$14", desc: "Local gin, pine-infused syrup, lemon, egg white.", tags: ["Spirit"], image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=800" },
    { name: "Classic Margarita", price: "$15", desc: "Tequila, lime, and simple syrup with a salt rim.", tags: ["Spirit"], image: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?auto=format&fit=crop&q=80&w=1974" },
    { name: "Urban Orchard Cider", price: "$12", desc: "Spiced artisan cider, maple foam, and cinnamon bar.", tags: ["Low ABV"], image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=1974" },
    { name: "Main Street Negroni", price: "$16", desc: "Campari, forest gin, sweet vermouth, and maple zest.", tags: ["Spirit"], image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&q=80&w=1974" },
  ]
};

export default function InteractiveMenu() {
  const [activeTab, setActiveTab] = useState("Dinner");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section id="menu" className="py-24 bg-charcoal text-cream relative overflow-hidden" onMouseMove={handleMouseMove}>
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-12 tracking-tighter"
          >
            THE DIGITAL <br /><span className="text-maple italic">FEAST</span>
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`text-xs uppercase tracking-[0.3em] font-bold py-2 transition-all relative cursor-pointer ${activeTab === cat ? 'text-maple' : 'text-cream/40 hover:text-cream'}`}
              >
                {cat}
                {activeTab === cat && (
                  <motion.div 
                    layoutId="underline" 
                    className="absolute -bottom-1 left-0 w-full h-[1px] bg-maple" 
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-12 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid gap-8"
            >
              {menuData[activeTab].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  onMouseEnter={() => setHoveredItem(item.image)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => setHoveredItem(hoveredItem === item.image ? null : item.image)}
                  className="flex flex-col md:flex-row md:items-end justify-between border-b border-cream/10 pb-6 group cursor-pointer"
                >
                  <div className="flex-1 flex gap-4">
                    {/* Inline Image for Mobile */}
                    <div className="lg:hidden shrink-0 self-center">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-12 h-12 sm:w-20 sm:h-20 rounded-full object-cover border border-maple/50" 
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center flex-wrap gap-2 mb-1">
                        <h3 className="text-xl md:text-2xl font-serif italic group-hover:text-maple transition-colors">{item.name}</h3>
                        <div className="flex gap-1.5">
                          {item.tags.map(tag => {
                            const isVeg = tag === 'Veg' || tag === 'Vegan';
                            const isNonVeg = tag === 'Non-Veg';
                            const colorClass = isVeg 
                              ? 'text-green-500 border-green-500/30 bg-green-500/5' 
                              : isNonVeg 
                                ? 'text-red-500 border-red-500/30 bg-red-500/5' 
                                : 'border-forest/30 text-forest bg-forest/5';
                            
                            return (
                              <span key={tag} className={`text-[9px] md:text-[10px] px-2 py-0.5 rounded-full border font-bold uppercase tracking-tighter whitespace-nowrap leading-none ${colorClass}`}>
                                {tag}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                      <p className="text-cream/50 font-light text-xs md:text-sm italic">{item.desc}</p>
                    </div>
                  </div>
                  <div className="text-2xl font-serif text-maple mt-2 md:mt-0">{item.price}</div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Floating Plate Reveal Effect for Desktop Only */}
      <AnimatePresence>
        {hoveredItem && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 15 }}
            className="fixed pointer-events-none z-50 hidden lg:block"
            style={{ 
              top: mousePos.y - 120, 
              left: mousePos.x + 60
            }}
          >
            <div className="w-72 h-72 rounded-full overflow-hidden border-8 border-maple/30 shadow-2xl p-1 bg-charcoal/50 backdrop-blur-sm">
              <img 
                src={hoveredItem} 
                alt="Preview" 
                className="w-full h-full object-cover rounded-full transition-opacity duration-300" 
                referrerPolicy="no-referrer"
                onLoad={(e) => (e.currentTarget.style.opacity = '1')}
                style={{ opacity: 1 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative BG element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-[0.03]">
        <span className="text-[30vw] font-black text-cream rotate-12 select-none">MAIN</span>
      </div>
    </section>
  );
}
