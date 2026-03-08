import React from 'react';
import { Search, Bell, Github, Menu } from 'lucide-react';
import { cn } from '../lib/utils';

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
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
          
          <div className="relative hidden md:block w-96">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-4 h-4 text-ink/30" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 text-sm bg-white/50 border border-copper/10 rounded-full focus:ring-2 focus:ring-copper/20 focus:border-copper outline-none transition-all placeholder:text-ink/30"
              placeholder="Search the Constitution..."
            />
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono text-ink/30 border border-copper/10 rounded bg-parchment">
                ⌘K
              </kbd>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 lg:gap-4">
          <button className="p-2 text-ink/60 hover:text-copper transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-saffron rounded-full border-2 border-parchment" />
          </button>
          <a 
            href="https://github.com" 
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
