import React from 'react';
import { motion, Variants } from 'motion/react';
import { Compass, Lightbulb, Target, Users, ArrowRight, ScrollText, Sparkles } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export function Vision() {
  const handleGoToPreamble = () => {
    window.location.hash = 'preamble';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-6xl mx-auto pb-32 px-6 lg:px-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-24 lg:space-y-32"
      >
        {/* Hero Section - The Grand Entrance */}
        <motion.section 
          id="hero"
          variants={itemVariants}
          className="relative pt-8 lg:pt-12"
        >
          <div className="absolute inset-0 bg-white border border-copper/10 rounded-[3rem] lg:rounded-[4rem] shadow-xl shadow-copper/5 overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-copper/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-saffron/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-[100px]" />
            <div className="absolute inset-0 mandala-pattern opacity-20" />
          </div>

          <div className="relative z-10 p-10 lg:p-20 flex flex-col items-center text-center">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-copper/10 text-copper text-[10px] font-bold uppercase tracking-[0.4em] mb-8 border border-copper/20"
            >
              <Sparkles className="w-3 h-3" />
              The Foundation
            </motion.div>
            
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-ink mb-6 leading-[1.2] tracking-tight">
              Inspiration <br />
              <span className="text-copper italic">& Vision</span>
            </h1>
            
            <p className="text-base lg:text-lg text-ink/50 leading-relaxed mb-8 max-w-2xl font-serif italic font-light">
              "WE, THE ENGINEERS OF EMBEDDED SYSTEMS, having solemnly resolved to constitute a framework of discipline, reliability, and excellence..."
            </p>
            
            <button 
              onClick={handleGoToPreamble}
              className="group relative flex items-center gap-3 px-6 py-3 bg-ink text-parchment rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-md shadow-ink/20"
            >
              <span className="relative z-10 text-sm tracking-wide">Read the Preamble</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-copper opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300" />
            </button>
          </div>
        </motion.section>

        {/* Why Embedkar? - Technical/Blueprint Aesthetic */}
        <motion.section 
          id="mandate"
          variants={itemVariants} 
          className="relative group"
        >
          <div className="absolute inset-0 bg-white border border-copper/10 rounded-[2.5rem] -z-10 overflow-hidden sacred-grid" />
          
          <div className="p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-copper/60">
                <div className="w-6 h-px bg-copper/30" />
                <span className="text-[9px] font-bold uppercase tracking-[0.3em]">The Mandate</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-ink leading-tight">Why <span className="text-copper">Embedkar?</span></h2>
              <div className="text-ink/70 leading-relaxed space-y-4 text-base font-light">
                <p>
                  Embedded systems sit at the critical intersection of software, electronics, and the physical world. As complexity scales, the margin for error vanishes.
                </p>
                <p>
                  A missing safety mechanism or a flawed firmware assumption isn't just a bug—it's a potential system failure in the real world.
                </p>
                <div className="p-5 bg-copper/5 border-l-4 border-copper rounded-r-xl italic text-ink/80 text-sm leading-relaxed temple-border">
                  "Knowledge remains fragmented across tutorials and forums. Embedkar transforms scattered wisdom into a structured foundation."
                </div>
              </div>
            </div>
            
            <div className="relative aspect-square rounded-[2rem] overflow-hidden border border-copper/10 bg-parchment flex items-center justify-center shadow-inner">
              <div className="absolute inset-0 mandala-pattern opacity-10" />
              <div className="absolute inset-0 sacred-grid opacity-20" />
              <Target className="w-24 h-24 text-copper/10" />
              <div className="absolute bottom-6 left-6 right-6 p-5 glass-card rounded-xl">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-copper mb-1">Mission Statement</p>
                <p className="text-sm text-ink/80 italic font-serif leading-relaxed">To establish the fundamental rules that guide a nation of engineers.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Engineering Dharma - Sacred/Temple Aesthetic */}
        <motion.section 
          id="philosophy"
          variants={itemVariants} 
          className="relative"
        >
          <div className="absolute inset-0 bg-copper/[0.03] border border-copper/10 rounded-[2.5rem] -z-10 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] mandala-pattern opacity-[0.08] animate-[spin_120s_linear_infinite]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
          </div>

          <div className="p-8 lg:p-16 flex flex-col items-center text-center space-y-8">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-saffron/10 text-saffron rounded-full flex items-center justify-center mx-auto border border-saffron/20 shadow-sm shadow-saffron/5">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-saffron">The Philosophy</span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-serif font-bold text-ink leading-none">Engineering <span className="text-saffron italic">Dharma</span></h2>
            
            <div className="max-w-2xl text-ink/70 leading-relaxed space-y-6 text-base font-light">
              <p>
                Dharma refers to the principles that sustain order and harmony. In engineering, it is the understanding of what keeps a system balanced.
              </p>
              <p className="text-xl lg:text-2xl font-serif italic text-ink/90 leading-tight border-y border-copper/10 py-6">
                "An embedded system is a delicate balance between hardware constraints, timing guarantees, and power budgets."
              </p>
              <p>
                Engineering rules are not arbitrary restrictions; they are the boundaries discovered by generations of engineers to ensure reliability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full pt-8">
              {[
                { label: 'Order', icon: Target, desc: 'Sustaining harmony within complex systems.', color: 'text-copper' },
                { label: 'Balance', icon: Compass, desc: 'Respecting physical limits and constraints.', color: 'text-saffron' },
                { label: 'Wisdom', icon: Lightbulb, desc: 'Learning from the boundaries of the past.', color: 'text-gold' }
              ].map((item, i) => (
                <div key={i} className="p-6 glass-card rounded-[1.5rem] hover:bg-white transition-all duration-500 group temple-border">
                  <item.icon className={`w-6 h-6 ${item.color} mb-3 mx-auto group-hover:scale-110 transition-transform`} />
                  <h4 className="font-serif font-bold text-lg mb-1 tracking-tight">{item.label}</h4>
                  <p className="text-xs text-ink/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Discipline & Community - Grid Style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.section variants={itemVariants} className="p-10 bg-white border border-copper/10 rounded-[2.5rem] space-y-6 relative overflow-hidden group temple-border shadow-md shadow-copper/5">
            <div className="absolute top-0 right-0 w-32 h-32 bg-navy/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-navy/10 transition-colors" />
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-navy/10 text-navy rounded-xl flex items-center justify-center border border-navy/20">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold tracking-tight">The Philosophy</h3>
            </div>
            <p className="text-base text-ink/70 leading-relaxed font-light">
              Discipline allows innovation to happen without chaos. When foundational principles are respected, engineers gain the freedom to experiment safely.
            </p>
            <ul className="space-y-3 text-[9px] text-ink/60 font-bold tracking-widest uppercase">
              <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-navy" /> Sustainable Creativity</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-navy" /> Structural Integrity</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-navy" /> Safe Experimentation</li>
            </ul>
          </motion.section>

          <motion.section variants={itemVariants} className="p-10 bg-white border border-copper/10 rounded-[2.5rem] space-y-6 relative overflow-hidden group temple-border shadow-md shadow-copper/5">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-emerald-500/10 transition-colors" />
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center border border-emerald-600/20">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold tracking-tight">The Community</h3>
            </div>
            <p className="text-base text-ink/70 leading-relaxed font-light">
              Embedkar is the foundation of a community that believes in disciplined engineering. A digital sabha for refining principles.
            </p>
            <ul className="space-y-3 text-[9px] text-ink/60 font-bold tracking-widest uppercase">
              <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-emerald-500" /> Shared Knowledge</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-emerald-500" /> Cross-Domain Insights</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-emerald-500" /> Continuous Refinement</li>
            </ul>
          </motion.section>
        </div>

        {/* Origin Section */}
        <motion.section 
          id="etymology"
          variants={itemVariants} 
          className="space-y-12 pt-16 border-t border-copper/10"
        >
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-copper block">Etymology</span>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-ink leading-none tracking-tighter">Origin of <span className="text-copper italic">Embedkar</span></h2>
            <p className="text-lg text-ink/40 font-serif italic font-light">A deliberate fusion of engineering, language, and history.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Embed', desc: 'Represents embedded systems engineering — hardware-software systems interacting with the physical world.', color: 'bg-copper/5', text: 'text-copper', icon: Target },
              { title: 'Kar (कर)', desc: 'From the Sanskrit root meaning "to do", "to act", or "to create". Suggests the act of engineering.', color: 'bg-saffron/5', text: 'text-saffron', icon: Compass },
              { title: 'Ambedkar', desc: 'Echoes Dr. B. R. Ambedkar, architect of the Indian Constitution, symbolizing foundational governance.', color: 'bg-navy/5', text: 'text-navy', icon: ScrollText }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -8 }}
                className={`p-6 ${item.color} border border-copper/10 rounded-[1.5rem] transition-all duration-500 relative overflow-hidden group shadow-sm hover:shadow-md`}
              >
                <item.icon className={`absolute -right-3 -bottom-3 w-20 h-20 opacity-[0.04] ${item.text} group-hover:scale-110 transition-transform duration-700`} />
                <h4 className={`font-serif font-bold text-xl ${item.text} mb-3 tracking-tight`}>{item.title}</h4>
                <p className="text-ink/70 leading-relaxed text-sm font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Final Quote */}
        <motion.section variants={itemVariants}>
          <div className="p-12 lg:p-20 bg-ink text-parchment rounded-[2.5rem] relative overflow-hidden shadow-xl group text-center">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-copper/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px] group-hover:bg-copper/30 transition-colors duration-1000" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-saffron/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-[100px]" />
            <div className="absolute inset-0 mandala-pattern opacity-5" />
            <div className="absolute inset-0 sacred-grid opacity-[0.02]" />
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <div className="w-16 h-16 bg-copper/20 rounded-full flex items-center justify-center mx-auto border border-copper/30 backdrop-blur-sm shadow-lg shadow-copper/20">
                <ScrollText className="w-8 h-8 text-copper" />
              </div>
              <h3 className="text-2xl lg:text-4xl font-serif font-bold leading-tight tracking-tight">A Modern Digital Shastra</h3>
              <p className="text-parchment/50 text-lg lg:text-xl leading-relaxed italic font-serif font-light">
                "Just as a constitution governs a nation, Embedkar governs the machine. It is the silent law that ensures every electron finds its path and every bit finds its meaning."
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-px bg-copper/30" />
                <div className="w-2 h-2 rounded-full border-2 border-copper/30" />
                <div className="w-12 h-px bg-copper/30" />
              </div>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
