import React from 'react';
import { motion } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import aboutContent from '../content/about.md?raw';
import { Scroll, Shield, Award, Landmark } from 'lucide-react';

export function Vision() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Decorative Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
            <Landmark className="w-64 h-64 text-copper" />
          </div>
          
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-copper/30 mb-6 bg-parchment relative z-10">
            <div className="w-16 h-16 rounded-full border border-copper/20 flex items-center justify-center animate-[spin_20s_linear_infinite]">
              <span className="text-copper text-2xl">ॐ</span>
            </div>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-serif font-bold text-ink mb-4 tracking-tight">
            Inspiration & <span className="text-copper italic">Vision</span>
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-copper/20" />
            <p className="text-copper font-serif italic text-lg">The Engineering Dharma</p>
            <div className="h-px w-12 bg-copper/20" />
          </div>
        </div>

        {/* Content Container */}
        <div className="constitution-border bg-white shadow-2xl p-8 lg:p-16 relative overflow-hidden">
          {/* Corner Ornaments */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-copper/30 m-4" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-copper/30 m-4" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-copper/30 m-4" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-copper/30 m-4" />

          <div className="prose prose-slate max-w-none relative z-10
            prose-headings:font-serif prose-headings:text-ink prose-headings:font-bold prose-headings:tracking-tight
            prose-h1:text-4xl prose-h1:border-b prose-h1:border-copper/10 prose-h1:pb-4 prose-h1:mb-8
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:flex prose-h2:items-center prose-h2:gap-3
            prose-p:text-ink/70 prose-p:leading-relaxed prose-p:text-lg
            prose-strong:text-ink prose-strong:font-bold
            prose-hr:border-copper/10 prose-hr:my-12
            prose-li:text-ink/70 prose-li:text-lg
            prose-blockquote:border-l-4 prose-blockquote:border-copper prose-blockquote:bg-copper/5 prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:rounded-r-2xl prose-blockquote:italic prose-blockquote:text-xl prose-blockquote:text-ink/80"
          >
            <ReactMarkdown
              components={{
                h1: ({node, ...props}) => <h1 {...props} className="flex items-center gap-4"><Scroll className="w-8 h-8 text-copper" /> {props.children}</h1>,
                h2: ({node, ...props}) => <h2 {...props} className="flex items-center gap-3"><Shield className="w-6 h-6 text-copper/60" /> {props.children}</h2>,
                hr: () => (
                  <div className="flex items-center justify-center my-12 gap-4">
                    <div className="h-px flex-1 bg-copper/10" />
                    <div className="w-2 h-2 rounded-full bg-copper/20" />
                    <Award className="w-5 h-5 text-copper/30" />
                    <div className="w-2 h-2 rounded-full bg-copper/20" />
                    <div className="h-px flex-1 bg-copper/10" />
                  </div>
                )
              }}
            >
              {aboutContent}
            </ReactMarkdown>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block p-1 rounded-full bg-copper/5 border border-copper/10 mb-8">
            <div className="px-6 py-3 rounded-full bg-white border border-copper/10">
              <p className="text-sm font-medium text-ink/60">
                "Engineering is the bridge between the human spirit and the physical world."
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
