import React from 'react';
import { motion } from 'motion/react';

export function Preamble() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto text-center py-12"
    >
      <div className="mb-12 inline-block">
        <div className="w-24 h-24 border-2 border-copper rounded-full flex items-center justify-center mx-auto mb-4 relative">
          <div className="absolute inset-0 border border-copper/20 rounded-full animate-ping" />
          <span className="text-4xl">ॐ</span>
        </div>
        <h1 className="text-4xl lg:text-6xl font-serif font-bold text-ink uppercase tracking-widest">Preamble</h1>
      </div>

      <div className="constitution-border p-8 lg:p-16 bg-white shadow-2xl relative">
        <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-copper" />
        <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-copper" />
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-copper" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-copper" />

        <p className="text-2xl lg:text-3xl font-serif italic text-ink/80 leading-relaxed mb-12">
          "WE, THE ENGINEERS OF EMBEDDED SYSTEMS, having solemnly resolved to constitute a framework of discipline, reliability, and excellence..."
        </p>

        <div className="space-y-8 text-left max-w-xl mx-auto">
          <div className="flex gap-6">
            <span className="text-copper font-serif font-bold text-2xl">I.</span>
            <p className="text-lg text-ink/70 leading-relaxed">
              <span className="font-bold text-ink">RELIABILITY</span> as the supreme dharma of every circuit and line of code.
            </p>
          </div>
          <div className="flex gap-6">
            <span className="text-copper font-serif font-bold text-2xl">II.</span>
            <p className="text-lg text-ink/70 leading-relaxed">
              <span className="font-bold text-ink">DISCIPLINE</span> in design, ensuring that every component serves a purpose.
            </p>
          </div>
          <div className="flex gap-6">
            <span className="text-copper font-serif font-bold text-2xl">III.</span>
            <p className="text-lg text-ink/70 leading-relaxed">
              <span className="font-bold text-ink">INTEGRITY</span> of data and hardware, protecting the system from entropy.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-copper/10">
          <p className="font-serif italic text-ink/40">Adopted this day, for the betterment of all machines.</p>
        </div>
      </div>
    </motion.div>
  );
}
