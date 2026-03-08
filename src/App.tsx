import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Preamble } from './pages/Preamble';
import { Vision } from './pages/Vision';
import { DocumentationPage } from './pages/DocumentationPage';
import { SectionId } from './types';
import { NAVIGATION } from './constants';

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');

  // Simple routing based on hash or state
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as SectionId;
      if (hash) {
        setActiveSection(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (id: string) => {
    setActiveSection(id as SectionId);
    window.location.hash = id;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getActiveTitle = () => {
    const findTitle = (items: any[]): string | undefined => {
      for (const item of items) {
        if (item.id === activeSection) return item.title;
        if (item.children) {
          const childTitle = findTitle(item.children);
          if (childTitle) return childTitle;
        }
      }
      return undefined;
    };
    return findTitle(NAVIGATION) || 'Home';
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <Hero />;
      case 'preamble':
        return <Preamble />;
      case 'vision':
        return <Vision />;
      default:
        return <DocumentationPage sectionId={activeSection} title={getActiveTitle()} />;
    }
  };

  // Mock TOC items for the current page
  const tocItems = activeSection === 'home' ? [] : [
    { id: 'overview', title: 'Overview', level: 1 },
    { id: 'principles', title: 'Key Principles', level: 1 },
    { id: 'guidelines', title: 'Guidelines', level: 2 },
    { id: 'examples', title: 'Examples', level: 2 },
    { id: 'resources', title: 'Resources', level: 1 },
  ];

  return (
    <Layout 
      activeSection={activeSection} 
      onNavigate={handleNavigate}
      tocItems={tocItems}
    >
      {renderContent()}
    </Layout>
  );
}
