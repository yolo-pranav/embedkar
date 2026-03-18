import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, Command, ArrowRight, FileText, Tag, Cpu, Layout as LayoutIcon, Settings, ShieldCheck } from 'lucide-react';
import { MOCK_ENTRIES } from '../data';
import { Entry } from '../types';
import { cn } from '../lib/utils';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Entry[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setResults([]);
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const searchTerms = query.toLowerCase().split(' ');
    const filtered = MOCK_ENTRIES.filter(entry => {
      const title = entry.metadata.title.toLowerCase();
      const principle = entry.principle.toLowerCase();
      const explanation = entry.explanation.toLowerCase();
      const tags = entry.metadata.tags.map(t => t.toLowerCase()).join(' ');
      const category = entry.metadata.category.toLowerCase();

      return searchTerms.every(term => 
        title.includes(term) || 
        principle.includes(term) || 
        explanation.includes(term) || 
        tags.includes(term) ||
        category.includes(term)
      );
    }).slice(0, 8);

    setResults(filtered);
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % Math.max(results.length, 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
    } else if (e.key === 'Enter') {
      if (results[selectedIndex]) {
        handleSelect(results[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleSelect = (entry: Entry) => {
    // Map category to SectionId
    const categoryMap: Record<string, string> = {
      'PCB Design': '/pcb-design',
      'Firmware': '/firmware',
      'Architecture': '/architecture',
      'Tools': '/tools',
      'Checklists': '/checklists',
      'Philosophy': '/philosophy',
      'Core Laws': '/core-laws',
      'Reliability': '/reliability'
    };

    const path = categoryMap[entry.metadata.category] || '/';
    navigate(path);
    onClose();
    
    // Scroll to the specific entry if possible
    setTimeout(() => {
      const element = document.getElementById(entry.metadata.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.classList.add('ring-2', 'ring-copper', 'ring-offset-4');
        setTimeout(() => element.classList.remove('ring-2', 'ring-copper', 'ring-offset-4'), 2000);
      }
    }, 100);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'PCB Design': return <LayoutIcon className="w-4 h-4" />;
      case 'Firmware': return <Cpu className="w-4 h-4" />;
      case 'Architecture': return <Settings className="w-4 h-4" />;
      case 'Reliability': return <ShieldCheck className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-ink/40 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-[15%] left-1/2 -translate-x-1/2 w-full max-w-2xl bg-parchment rounded-3xl shadow-2xl z-[101] overflow-hidden border border-copper/20"
          >
            <div className="relative">
              <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-copper" />
              </div>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full pl-16 pr-16 py-6 text-lg bg-transparent border-b border-copper/10 outline-none placeholder:text-ink/20 font-serif"
                placeholder="Search principles, laws, or tags..."
              />
              <div className="absolute inset-y-0 right-6 flex items-center gap-2">
                <kbd className="hidden sm:inline-flex items-center px-2 py-1 text-[10px] font-mono text-ink/30 border border-copper/10 rounded bg-white">
                  ESC
                </kbd>
                <button 
                  onClick={onClose}
                  className="p-1 hover:bg-copper/10 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-ink/40" />
                </button>
              </div>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-4 custom-scrollbar">
              {results.length > 0 ? (
                <div className="space-y-2">
                  <p className="px-2 text-[10px] font-bold text-ink/30 uppercase tracking-widest mb-2">Results</p>
                  {results.map((result, index) => (
                    <button
                      key={result.metadata.id}
                      onClick={() => handleSelect(result)}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={cn(
                        "w-full flex items-center gap-4 p-4 rounded-2xl transition-all text-left group",
                        index === selectedIndex ? "bg-copper text-parchment shadow-lg shadow-copper/20" : "hover:bg-copper/5"
                      )}
                    >
                      <div className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center shrink-0",
                        index === selectedIndex ? "bg-parchment/20 text-parchment" : "bg-copper/10 text-copper"
                      )}>
                        {getCategoryIcon(result.metadata.category)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <h4 className={cn(
                            "font-serif font-bold truncate",
                            index === selectedIndex ? "text-parchment" : "text-ink"
                          )}>
                            {result.metadata.title}
                          </h4>
                          <span className={cn(
                            "text-[10px] uppercase tracking-tighter px-1.5 py-0.5 rounded",
                            index === selectedIndex ? "bg-parchment/20 text-parchment" : "bg-copper/10 text-copper"
                          )}>
                            {result.metadata.id}
                          </span>
                        </div>
                        <p className={cn(
                          "text-xs truncate",
                          index === selectedIndex ? "text-parchment/70" : "text-ink/50"
                        )}>
                          {result.principle}
                        </p>
                      </div>
                      <ArrowRight className={cn(
                        "w-4 h-4 transition-transform",
                        index === selectedIndex ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                      )} />
                    </button>
                  ))}
                </div>
              ) : query.trim() !== '' ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 bg-copper/5 text-copper/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-ink/40">No results found</h3>
                  <p className="text-ink/30 text-sm mt-1">Try searching for different keywords or tags.</p>
                </div>
              ) : (
                <div className="space-y-6 py-4">
                  <div>
                    <p className="px-2 text-[10px] font-bold text-ink/30 uppercase tracking-widest mb-3">Popular Categories</p>
                    <div className="grid grid-cols-2 gap-2">
                      {['PCB Design', 'Firmware', 'Architecture', 'Reliability'].map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setQuery(cat)}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-copper/5 text-left transition-colors border border-transparent hover:border-copper/10"
                        >
                          <div className="w-8 h-8 bg-copper/10 text-copper rounded-lg flex items-center justify-center">
                            {getCategoryIcon(cat)}
                          </div>
                          <span className="text-sm font-medium text-ink/70">{cat}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="px-2 text-[10px] font-bold text-ink/30 uppercase tracking-widest mb-3">Quick Actions</p>
                    <div className="space-y-1">
                      <button 
                        onClick={() => { navigate('/preamble'); onClose(); }}
                        className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-copper/5 text-left transition-colors"
                      >
                        <FileText className="w-4 h-4 text-copper" />
                        <span className="text-sm font-medium text-ink/70">Read the Preamble</span>
                      </button>
                      <button 
                        onClick={() => { navigate('/vision'); onClose(); }}
                        className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-copper/5 text-left transition-colors"
                      >
                        <Tag className="w-4 h-4 text-copper" />
                        <span className="text-sm font-medium text-ink/70">Our Vision</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 bg-copper/5 border-t border-copper/10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 text-[10px] text-ink/40">
                  <kbd className="px-1.5 py-0.5 border border-copper/20 rounded bg-white">↵</kbd>
                  <span>to select</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-ink/40">
                  <kbd className="px-1.5 py-0.5 border border-copper/20 rounded bg-white">↑↓</kbd>
                  <span>to navigate</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-ink/40">
                <Command className="w-3 h-3" />
                <span>Search the Digital Shastra</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
