import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { SectionId } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeSection: SectionId;
  onNavigate: (id: string) => void;
}

export function Layout({ children, activeSection, onNavigate }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-parchment">
      <Sidebar 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen} 
        activeId={activeSection}
        onNavigate={(id) => {
          onNavigate(id);
          setIsSidebarOpen(false);
        }}
      />
      
      <div className="lg:pl-72 flex flex-col min-h-screen">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        
        <main className="flex-1">
          <div className="px-4 py-8 lg:px-12 lg:py-12 max-w-5xl mx-auto w-full">
            {children}
          </div>
        </main>

        <footer className="px-4 py-8 lg:px-12 border-t border-copper/10 bg-white/30">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-copper font-serif font-bold">Embedkar</span>
              <span className="text-ink/30 text-xs">© 2026 Engineering Dharma</span>
            </div>
            <div className="flex gap-6 text-xs text-ink/40 font-medium">
              <a href="#" className="hover:text-copper transition-colors">Privacy</a>
              <a href="#" className="hover:text-copper transition-colors">Terms</a>
              <a href="#" className="hover:text-copper transition-colors">Sabha</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
