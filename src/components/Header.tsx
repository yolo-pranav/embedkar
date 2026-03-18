import React from 'react';
import { Search, Github, Menu } from 'lucide-react';
import { cn } from '../lib/utils';

interface HeaderProps {
  onMenuClick: () => void;
  onSearchClick: () => void;
}

export function Header({ onMenuClick, onSearchClick }: HeaderProps) {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onSearchClick();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onSearchClick]);

  return (
    <header className="sticky top-0 z-30 w-full bg-parchment/80 backdrop-blur-md border-b border-copper/10">
      <div className="flex items-center justify-between h-16 px-4 lg:px-8">
        <div className="flex items-center gap-4">
          <button 
            onClick={onMenuClick}
            className="p-2 text-ink/60 hover:text-copper lg:hidden transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <button 
            onClick={onSearchClick}
            className="relative hidden md:flex items-center w-96 group"
          >
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-4 h-4 text-ink/30 group-hover:text-copper transition-colors" />
            </div>
            <div className="block w-full pl-10 pr-3 py-2 text-sm text-left text-ink/30 bg-white/50 border border-copper/10 rounded-full group-hover:border-copper/30 group-hover:bg-white transition-all">
              Search the Constitution...
            </div>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono text-ink/30 border border-copper/10 rounded bg-parchment group-hover:bg-white group-hover:text-copper transition-colors">
                ⌘K
              </kbd>
            </div>
          </button>
        </div>

        <div className="flex items-center gap-2 lg:gap-4">
          <button 
            onClick={onSearchClick}
            className="p-2 text-ink/60 hover:text-copper md:hidden transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>
          <a 
            href="https://github.com/yolo-pranav/embedkar" 
            target="_blank" 
            rel="noreferrer"
            className="p-2 text-ink/60 hover:text-copper transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <div className="h-6 w-px bg-copper/10 mx-2 hidden sm:block" />
          <a 
            href="https://discord.com/invite/xfjUGV6p55"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-copper border border-copper/20 rounded-full hover:bg-copper/5 transition-all"
          >
            <span className="hidden sm:inline">Join the Sabha</span>
            <div className="w-6 h-6 bg-copper/10 rounded-full flex items-center justify-center">
              <span className="text-[10px]">ॐ</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}
