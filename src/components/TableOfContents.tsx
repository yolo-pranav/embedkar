import React from 'react';
import { cn } from '../lib/utils';

interface TableOfContentsProps {
  items: { id: string; title: string; level: number }[];
  activeId?: string;
}

export function TableOfContents({ items, activeId }: TableOfContentsProps) {
  if (items.length === 0) return null;

  return (
    <div className="hidden xl:block w-64 shrink-0">
      <div className="sticky top-24 p-6 border-l border-copper/10">
        <h4 className="text-[10px] uppercase tracking-[0.2em] text-copper font-bold mb-6">
          On this page
        </h4>
        <nav className="space-y-3">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "block text-sm transition-all duration-200",
                item.level === 1 ? "font-medium" : "pl-4 text-xs",
                activeId === item.id 
                  ? "text-copper translate-x-1" 
                  : "text-ink/50 hover:text-ink hover:translate-x-1"
              )}
            >
              {item.title}
            </a>
          ))}
        </nav>

        <div className="mt-12 pt-8 border-t border-copper/10">
          <div className="p-4 bg-copper/5 rounded-xl border border-copper/10">
            <p className="text-[10px] text-copper font-bold uppercase tracking-widest mb-2">Did you know?</p>
            <p className="text-xs text-ink/60 italic leading-relaxed">
              "The discipline of the circuit is the dharma of the machine."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
