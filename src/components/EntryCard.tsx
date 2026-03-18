import React from 'react';
import { Entry } from '../types';
import { BadgeCheck, Info, Lightbulb, Link as LinkIcon } from 'lucide-react';
import { cn } from '../lib/utils';

interface EntryCardProps {
  entry: Entry;
}

export function EntryCard({ entry }: EntryCardProps) {
  return (
    <div 
      id={entry.metadata.id}
      className="bg-white border border-copper/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex flex-wrap gap-2">
            <span className={cn(
              "px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider",
              entry.metadata.difficulty === 'Basic' ? "bg-emerald-100 text-emerald-700" :
              entry.metadata.difficulty === 'Intermediate' ? "bg-amber-100 text-amber-700" :
              "bg-rose-100 text-rose-700"
            )}>
              {entry.metadata.difficulty}
            </span>
            <span className="px-2 py-0.5 rounded bg-copper/10 text-copper text-[10px] font-bold uppercase tracking-wider">
              {entry.metadata.type}
            </span>
          </div>
          <span className="text-[10px] text-ink/30 font-mono">{entry.metadata.id}</span>
        </div>

        <h3 className="text-xl font-serif font-bold text-ink mb-3 group-hover:text-copper transition-colors">
          {entry.metadata.title}
        </h3>

        <div className="flex items-start gap-3 p-4 bg-parchment/50 rounded-xl border-l-4 border-copper mb-4">
          <Info className="w-5 h-5 text-copper shrink-0 mt-0.5" />
          <p className="text-sm font-medium text-ink italic leading-relaxed">
            "{entry.principle}"
          </p>
        </div>

        <p className="text-sm text-ink/70 leading-relaxed mb-6">
          {entry.explanation}
        </p>

        {entry.checklist && (
          <div className="space-y-2 mb-6">
            <h4 className="text-xs font-bold text-ink uppercase tracking-widest flex items-center gap-2">
              <BadgeCheck className="w-4 h-4 text-copper" />
              Checklist
            </h4>
            <ul className="space-y-1.5">
              {entry.checklist.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-ink/60">
                  <div className="w-1 h-1 rounded-full bg-copper mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-copper/5">
          {entry.metadata.tags.map(tag => (
            <span key={tag} className="text-[10px] text-ink/40 hover:text-copper cursor-pointer transition-colors">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
