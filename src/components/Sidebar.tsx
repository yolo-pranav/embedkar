import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Feather, Scale, Cpu, Zap, Layout as LayoutIcon, Settings, CheckSquare, Lightbulb, History, ShieldCheck } from 'lucide-react';
import { cn } from '../lib/utils';
import { NAVIGATION } from '../constants';
import { NavItem } from '../types';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  activeId: string;
}

const iconMap: Record<string, React.ReactNode> = {
  home: <Book className="w-4 h-4" />,
  preamble: <Feather className="w-4 h-4" />,
  vision: <History className="w-4 h-4" />,
  'core-laws': <Scale className="w-4 h-4" />,
  'reliability': <ShieldCheck className="w-4 h-4" />,
  'pcb-design': <LayoutIcon className="w-4 h-4" />,
  firmware: <Cpu className="w-4 h-4" />,
  architecture: <Zap className="w-4 h-4" />,
  debugging: <Settings className="w-4 h-4" />,
  tools: <Settings className="w-4 h-4" />,
  checklists: <CheckSquare className="w-4 h-4" />,
  philosophy: <Lightbulb className="w-4 h-4" />,
};

export function Sidebar({ isOpen, setIsOpen, activeId }: SidebarProps) {
  const renderNavItem = (item: NavItem, depth = 0) => {
    const isActive = activeId === item.id;
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={item.id} className="mb-1">
        <Link
          to={item.path}
          onClick={() => setIsOpen(false)}
          className={cn(
            "w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-all duration-200 group",
            isActive 
              ? "bg-copper/10 text-copper font-medium border-l-2 border-copper" 
              : "text-ink/70 hover:bg-copper/5 hover:text-copper"
          )}
          style={{ paddingLeft: `${depth * 1.5 + 0.75}rem` }}
        >
          <span className={cn(
            "transition-colors",
            isActive ? "text-copper" : "text-ink/40 group-hover:text-copper"
          )}>
            {iconMap[item.id] || <Book className="w-4 h-4" />}
          </span>
          {item.title}
        </Link>
        {hasChildren && (
          <div className="mt-1">
            {item.children!.map(child => renderNavItem(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-ink/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <aside className={cn(
        "fixed top-0 left-0 h-full w-72 bg-parchment border-r border-copper/10 z-50 transition-transform duration-300 transform lg:translate-x-0 mandala-pattern",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="p-6 border-b border-copper/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg overflow-hidden">
                <img 
                  src={`${import.meta.env.VITE_IMAGE_BASE_URL || ''}/embedkar-logo.png`} 
                  alt="Embedkar Logo" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h1 className="text-xl font-serif font-bold text-ink tracking-tight">Embedkar</h1>
                <p className="text-[10px] uppercase tracking-[0.2em] text-copper font-medium opacity-80">The Digital Shastra</p>
              </div>
            </div>
          </div>

          {/* Navigation Section */}
          <nav className="flex-1 overflow-y-auto p-4 custom-scrollbar">
            <div className="space-y-1">
              {NAVIGATION.map(item => renderNavItem(item))}
            </div>
          </nav>

          {/* Footer Section */}
          <div className="p-6 border-t border-copper/10 bg-white/30">
            <div className="flex items-center gap-2 text-[10px] text-ink/40 font-mono uppercase tracking-widest">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              v1.0.0-alpha
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
