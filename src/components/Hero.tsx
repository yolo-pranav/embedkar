import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TAGLINES } from '../constants';
import { ChevronRight, ScrollText, ShieldCheck, Zap } from 'lucide-react';

export function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % TAGLINES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden py-16 lg:py-24">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-copper/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-saffron/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-copper/10 text-copper text-xs font-bold tracking-widest uppercase mb-6 border border-copper/20">
            <span className="w-2 h-2 rounded-full bg-copper animate-pulse" />
            The Digital Shastra
          </div>

          <h1 className="text-5xl lg:text-7xl font-serif font-bold text-ink leading-[1.1] mb-8">
            The Constitution for <br />
            <span className="text-copper italic">Embedded Engineers</span>
          </h1>

          <div className="h-12 mb-10">
            <AnimatePresence mode="wait">
              <motion.p
                key={taglineIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-xl lg:text-2xl text-ink/60 font-medium"
              >
                {TAGLINES[taglineIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-copper text-parchment rounded-xl font-bold shadow-xl shadow-copper/20 hover:bg-copper/90 transition-all flex items-center gap-2 group">
              Read the Preamble
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white text-ink border border-copper/10 rounded-xl font-bold hover:bg-parchment transition-all">
              Explore Principles
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
        >
          {[
            { icon: <ScrollText className="w-6 h-6" />, title: "Structured Knowledge", desc: "A hierarchical system of engineering laws." },
            { icon: <ShieldCheck className="w-6 h-6" />, title: "Reliability First", desc: "Design principles focused on mission-critical stability." },
            { icon: <Zap className="w-6 h-6" />, title: "Modern Workflows", desc: "Bridging ancient discipline with modern tech." }
          ].map((feature, i) => (
            <div key={i} className="p-6 bg-white/50 backdrop-blur-sm border border-copper/10 rounded-2xl hover:border-copper/30 transition-all group">
              <div className="w-12 h-12 bg-copper/10 text-copper rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="font-serif font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-ink/60 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
