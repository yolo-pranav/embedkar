import React from 'react';
import { motion } from 'motion/react';
import { Shield, Cpu, Zap, Eye, Activity, Heart } from 'lucide-react';

export function Preamble() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto pb-20 px-4"
    >
      <div className="ornate-border shadow-2xl">
        <div className="ornate-border-inner">
          <div className="chakra-watermark" />
          
          {/* Corner Motifs */}
          <div className="corner-motif corner-motif-tl" />
          <div className="corner-motif corner-motif-tr" />
          <div className="corner-motif corner-motif-bl" />
          <div className="corner-motif corner-motif-br" />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Emblem Section */}
            <div id="emblem" className="mb-8 flex flex-col items-center">
              <div className="w-24 h-24 text-copper mb-2 flex items-center justify-center">
                <Shield className="w-20 h-20 stroke-[1.5]" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-serif font-bold text-ink/60 uppercase tracking-[0.3em]">
                  सिद्धान्त एव जयते
                </p>
                <p className="text-[8px] font-serif text-ink/40 uppercase tracking-[0.2em]">
                  Siddhānta Eva Jayate
                </p>
                <p className="text-[6px] font-serif text-ink/30 uppercase tracking-[0.1em] mt-0.5 italic">
                  Principles alone triumph
                </p>
              </div>
            </div>

            {/* Title Section */}
            <div id="title" className="mb-12 space-y-2">
              <h1 className="text-3xl lg:text-5xl font-serif font-bold text-ink uppercase tracking-[0.15em] leading-tight">
                Embedkar
              </h1>
              <p className="text-sm lg:text-base font-serif italic text-saffron font-medium">
                The Constitution of Embedded Engineering
              </p>
            </div>

            {/* Main Preamble Text */}
            <div id="principles" className="max-w-2xl mx-auto space-y-8 preamble-text">
              <p className="text-base lg:text-lg">
                We, the engineers and builders of embedded systems,
                having resolved to establish a shared foundation of disciplined engineering,
              </p>

              <p className="text-base lg:text-lg">
                do hereby commit to designing systems that uphold the principles of
              </p>

              <div className="space-y-6 py-4">
                <div>
                  <span className="preamble-principle">Reliability</span>
                  <span className="text-sm lg:text-base text-ink/70">in hardware, firmware, and the interaction between them,</span>
                </div>

                <div>
                  <span className="preamble-principle">Clarity</span>
                  <span className="text-sm lg:text-base text-ink/70">in architecture, documentation, and system design,</span>
                </div>

                <div>
                  <span className="preamble-principle">Discipline</span>
                  <span className="text-sm lg:text-base text-ink/70">in respecting electrical, computational, and physical constraints,</span>
                </div>

                <div>
                  <span className="preamble-principle">Observability</span>
                  <span className="text-sm lg:text-base text-ink/70">so that systems may always be measured, debugged, and understood,</span>
                </div>

                <div>
                  <span className="preamble-principle">Robustness</span>
                  <span className="text-sm lg:text-base text-ink/70">to ensure that machines continue to function safely under real-world conditions,</span>
                </div>

                <div className="py-2">
                  <span className="text-sm lg:text-base italic text-ink/40">and</span>
                </div>

                <div>
                  <span className="preamble-principle">Responsibility</span>
                  <span className="text-sm lg:text-base text-ink/70">recognizing that the systems we build influence industries, infrastructure, and human lives.</span>
                </div>
              </div>

              <div className="space-y-6 pt-8 border-t border-copper/10">
                <p className="text-base lg:text-lg">
                  Through the collective experience of engineers across domains,
                  we establish these principles as a living body of knowledge,
                </p>

                <p className="text-base lg:text-lg">
                  so that present and future engineers may build technologies
                  that are reliable, maintainable, and worthy of trust.
                </p>

                <p className="text-lg lg:text-xl font-bold text-ink uppercase tracking-wider pt-4">
                  We therefore adopt these principles as Embedkar,
                  <br />
                  <span className="text-saffron">a constitution for embedded engineering.</span>
                </p>
              </div>
            </div>

            {/* Decorative Footer */}
            <div className="mt-16 flex items-center justify-center gap-4 opacity-30">
              <div className="w-12 h-px bg-copper" />
              <div className="w-2 h-2 rounded-full border border-copper" />
              <div className="w-12 h-px bg-copper" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
