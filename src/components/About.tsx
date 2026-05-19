import { motion } from 'motion/react';
import { Clock, MapPin, Phone, Instagram, Facebook, ChefHat, GlassWater, Leaf } from 'lucide-react';
import { useEffect, useState } from 'react';

const milestones = [
  { year: "2023", title: "The Vision", desc: "Chef Julian Main and Sarah Maple shared a dream of reclaimed urban dining." },
  { year: "2024", title: "The Opening", desc: "Doors opened in the historic Main Street district to immediate acclaim." },
  { year: "2025", title: "Green Star", desc: "Awarded for our commitment to local maple forest preservation." }
];

const team = [
  { name: "Julian Main", role: "Executive Chef", image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=1954" },
  { name: "Sarah Maple", role: "Sommelier", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=2070" }
];

const testimonials = [
  {
    name: "Eleanor Vance",
    quote: "The wood-fired salmon is life-changing. Every bite feels like a hug from the forest.",
    role: "Regular Guest",
    thumbnail: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1000",
  },
  {
    name: "Marcus Thorne",
    quote: "Finally, a place that understands the balance between urban energy and artisanal craft.",
    role: "Food Critic",
    thumbnail: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000",
  },
  {
    name: "Julianna Grey",
    quote: "The attention to detail in the interior design is only matched by the precision on the plate.",
    role: "Architect",
    thumbnail: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=1000",
  },
  {
    name: "Simon Wells",
    quote: "As a local farmer, seeing our heritage crops treated with such respect is truly rewarding.",
    role: "Local Supplier",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000",
  },
  {
    name: "Clara Bennett",
    quote: "The atmosphere here is electric yet grounding. The perfect spot for meaningful conversation.",
    role: "Lifestyle Curator",
    thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1000",
  }
];

export default function About() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const getStatus = () => {
    const hour = currentTime.getHours();
    if (hour >= 10 && hour < 22) return { text: "Open Now", color: "bg-forest" };
    return { text: "Closed Now", color: "bg-red-900" };
  };

  const status = getStatus();

  return (
    <section id="about" className="py-20 bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
             <span className="text-maple text-xs uppercase tracking-[0.4em] font-bold block mb-4">Our Story</span>
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none text-[var(--text-main)]">ROOTED IN <br /><span className="text-forest lowercase italic font-light">Heritage</span></h2>
            <p className="text-[var(--text-main)]/70 text-lg leading-relaxed mb-8">
              At Maple & Main, we believe that high-end dining shouldn't feel clinical. 
              Our kitchen is fueled by the seasons, our furniture is carved from 
              century-old maple, and our heart is in the hustle of Main Street.
            </p>
            
            <div className="space-y-8 relative">
              <div className="absolute left-4 top-2 bottom-2 w-px bg-[var(--text-main)]/10" />
              {milestones.map((m, i) => (
                <div key={i} className="pl-12 relative">
                  <div className="absolute left-2.5 top-2 w-3 h-3 rounded-full bg-maple ring-4 ring-[var(--bg-main)]" />
                  <span className="text-maple font-bold text-sm tracking-widest">{m.year}</span>
                  <h4 className="font-serif text-xl mb-1 text-[var(--text-main)]">{m.title}</h4>
                  <p className="text-sm text-[var(--text-main)]/60">{m.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {team.map((person, i) => (
              <div key={i} className="group relative bento-item !p-0 overflow-hidden">
                <div className="aspect-[3/4] overflow-hidden grayscale-0 lg:grayscale lg:group-hover:grayscale-0 transition-all duration-700">
                  <img src={person.image} alt={person.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="p-4 bg-[var(--item-bg)]">
                  <h3 className="font-serif text-2xl italic text-[var(--text-main)]">{person.name}</h3>
                  <p className="text-maple text-xs uppercase tracking-widest font-bold">{person.role}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Video Testimonials Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-maple text-xs uppercase tracking-[0.4em] font-bold block mb-4">Guest Experiences</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[var(--text-main)]">HEAR FROM OUR <br /><span className="text-maple italic font-serif font-light">Community</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.21, 1, 0.44, 1] }}
                className="group relative bento-item overflow-hidden"
              >
                <div className="aspect-video relative rounded-xl overflow-hidden mb-6 bg-charcoal/50">
                  <img 
                    src={t.thumbnail} 
                    alt={t.name} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 lg:group-hover:scale-105 transition-all duration-700 grayscale-0 lg:grayscale lg:group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="text-lg font-serif italic text-[var(--text-main)] leading-relaxed mb-4">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-1 bg-maple" />
                    <div>
                      <h4 className="font-bold text-sm tracking-tight text-[var(--text-main)]">{t.name}</h4>
                      <p className="text-[10px] uppercase tracking-widest text-maple font-bold">{t.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact & Footer Section */}
        <section id="contact" className="pt-20 border-t border-[var(--border-color)]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-5xl font-black mb-12 tracking-tighter text-[var(--text-main)]">RESERVE A <span className="text-maple italic">TABLE</span></h2>
              
              {formStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-forest/10 p-12 rounded-3xl text-center border border-forest/20"
                >
                  <h3 className="text-2xl font-serif mb-4 text-forest italic">Reservation Confirmed!</h3>
                  <p className="text-forest/80 mb-6">A confirmation email has been sent to your inbox. We look forward to seeing you!</p>
                  <div className="inline-block px-8 py-4 bg-forest text-white rounded-2xl text-sm font-bold">
                    Booking for {new Date().toLocaleDateString()} at 7:30 PM
                  </div>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="block mt-8 mx-auto text-xs font-bold uppercase tracking-widest text-forest border-b border-forest cursor-pointer"
                  >
                    Modify reservation
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={async (e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget as HTMLFormElement);
                  const data = Object.fromEntries(formData.entries());
                  
                  setFormStatus('submitting');
                  try {
                    const res = await fetch('/api/reserve', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(data),
                    });
                    if (res.ok) setFormStatus('success');
                    else throw new Error();
                  } catch (err) {
                    setFormStatus('idle');
                    alert('Something went wrong. Please try again.');
                  }
                }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--text-main)]/40">Full Name</label>
                    <input required name="name" type="text" className="w-full bg-transparent border-b border-[var(--text-main)]/20 py-3 focus:outline-none focus:border-maple transition-colors text-[var(--text-main)]" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--text-main)]/40">Email Address</label>
                    <input required name="email" type="email" className="w-full bg-transparent border-b border-[var(--text-main)]/20 py-3 focus:outline-none focus:border-maple transition-colors text-[var(--text-main)]" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--text-main)]/40">Date</label>
                    <input required name="date" type="date" className="w-full bg-transparent border-b border-[var(--text-main)]/20 py-3 focus:outline-none focus:border-maple transition-colors text-[var(--text-main)]" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--text-main)]/40">Time</label>
                    <select required name="time" className="w-full bg-transparent border-b border-[var(--text-main)]/20 py-3 focus:outline-none focus:border-maple transition-colors text-[var(--text-main)]">
                      <option className="bg-[var(--bg-main)]">6:00 PM</option>
                      <option className="bg-[var(--bg-main)]">6:30 PM</option>
                      <option className="bg-[var(--bg-main)]">7:00 PM</option>
                      <option className="bg-[var(--bg-main)]">7:30 PM (Peak)</option>
                      <option className="bg-[var(--bg-main)]">8:00 PM</option>
                      <option className="bg-[var(--bg-main)]">8:30 PM</option>
                      <option className="bg-[var(--bg-main)]">9:00 PM</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--text-main)]/40">Guests</label>
                    <input required name="guests" type="number" min="1" max="10" defaultValue="2" className="w-full bg-transparent border-b border-[var(--text-main)]/20 py-3 focus:outline-none focus:border-maple transition-colors text-[var(--text-main)]" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--text-main)]/40">Special Requirements</label>
                    <input name="special" type="text" placeholder="Gluten free, anniversary, etc." className="w-full bg-transparent border-b border-[var(--text-main)]/20 py-3 focus:outline-none focus:border-maple transition-colors text-[var(--text-main)]" />
                  </div>
                  <button 
                    disabled={formStatus === 'submitting'}
                    className="md:col-start-2 place-self-end w-full md:w-auto px-12 py-5 bg-charcoal text-white dark:bg-white dark:text-charcoal rounded-full uppercase tracking-widest font-bold text-xs shadow-xl disabled:opacity-50 liquid-fill cursor-pointer"
                  >
                    {formStatus === 'submitting' ? 'Confirming...' : 'Confirm Reservation'}
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-12">
              <div className="bento-item">
                <div className="flex items-center gap-2 mb-6">
                  <div className={`w-2 h-2 rounded-full ${status.color} animate-pulse`} />
                  <span className="text-xs uppercase font-bold tracking-widest text-[var(--text-main)]/60">{status.text}</span>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-maple shrink-0" size={20} />
                    <p className="text-sm text-[var(--text-main)]">118 Yorkville Ave, <br />Toronto, ON M5R 1C2</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="text-maple" size={20} />
                    <p className="text-sm text-[var(--text-main)]">+1 (555) 012-3456</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="text-maple" size={20} />
                    <div className="text-sm text-[var(--text-main)]">
                      <p>Tue - Sun: 10:00 AM - 10:00 PM</p>
                      <p className="opacity-40">Mon: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full border border-[var(--border-color)] flex items-center justify-center hover:bg-maple hover:border-maple hover:text-white transition-all duration-300 text-[var(--text-main)] cursor-pointer">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-[var(--border-color)] flex items-center justify-center hover:bg-maple hover:border-maple hover:text-white transition-all duration-300 text-[var(--text-main)] cursor-pointer">
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-[var(--border-color)] flex flex-col md:flex-row justify-between items-center gap-6 pb-12">
            <p className="text-[10px] uppercase tracking-widest text-[var(--text-main)]/40 font-bold">© 2026 Maple & Main Artisanal Dining</p>
            <div className="flex gap-12 text-[var(--text-main)]/20">
              <motion.div
                animate={{ 
                  y: [0, -25, 0, 0],
                  rotate: [0, 10, -10, 5, 0],
                  scaleX: [1, 0.9, 1, 1.2, 1],
                  scaleY: [1, 1.2, 1, 0.8, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  times: [0, 0.4, 0.7, 0.85, 1],
                  ease: "easeInOut" 
                }}
              >
                <ChefHat size={20} />
              </motion.div>
              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut", 
                  delay: 0.5 
                }}
              >
                <GlassWater size={20} />
              </motion.div>
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, -20, 20, 0]
                }}
                transition={{ 
                  duration: 2.8, 
                  repeat: Infinity, 
                  ease: "easeInOut", 
                  delay: 0.2 
                }}
              >
                <Leaf size={20} />
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
