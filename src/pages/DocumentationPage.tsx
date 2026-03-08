import React from 'react';
import { motion } from 'motion/react';
import { EntryCard } from '../components/EntryCard';
import { MOCK_ENTRIES } from '../data';
import { SectionId } from '../types';
import { Filter, SortAsc, Tag } from 'lucide-react';

interface DocumentationPageProps {
  sectionId: SectionId;
  title: string;
}

export function DocumentationPage({ sectionId, title }: DocumentationPageProps) {
  const entries = MOCK_ENTRIES.filter(e => 
    e.metadata.category.toLowerCase().includes(title.toLowerCase()) || 
    sectionId === 'principles'
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-copper/10 pb-8">
        <div>
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-ink mb-4">{title}</h1>
          <p className="text-ink/60 max-w-2xl">
            Explore the laws and principles governing {title.toLowerCase()}. This section defines the standards for excellence and reliability.
          </p>
        </div>
        
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-ink/40 border border-copper/10 rounded-lg hover:border-copper/30 transition-all">
            <Filter className="w-3 h-3" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-ink/40 border border-copper/10 rounded-lg hover:border-copper/30 transition-all">
            <SortAsc className="w-3 h-3" />
            Sort
          </button>
        </div>
      </div>

      {entries.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {entries.map(entry => (
            <EntryCard key={entry.metadata.id} entry={entry} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center border-2 border-dashed border-copper/10 rounded-3xl">
          <div className="w-16 h-16 bg-copper/5 text-copper/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Tag className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-serif font-bold text-ink/40">No entries found yet</h3>
          <p className="text-ink/30 text-sm mt-2">This section of the Constitution is currently being drafted.</p>
        </div>
      )}

      <div className="mt-12 p-8 bg-copper/5 rounded-2xl border border-copper/10">
        <h4 className="font-serif font-bold text-lg mb-2">Contribute to the Sabha</h4>
        <p className="text-sm text-ink/60 leading-relaxed mb-4">
          The Constitution of Embedded Engineering is a living document. If you have a principle or law that should be included, please submit it for review by the Sabha.
        </p>
        <button className="text-sm font-bold text-copper hover:underline">
          Submit a Proposal →
        </button>
      </div>
    </motion.div>
  );
}
