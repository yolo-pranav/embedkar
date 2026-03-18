import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Preamble } from './pages/Preamble';
import { Vision } from './pages/Vision';
import { DocumentationPage } from './pages/DocumentationPage';
import { SectionId } from './types';
import { NAVIGATION } from './constants';

function AppContent() {
  const location = useLocation();
  
  // Map path to SectionId for active state in Sidebar
  const getActiveSection = (): SectionId => {
    const path = location.pathname;
    if (path === '/') return 'home';
    const item = NAVIGATION.find(n => n.path === path);
    return (item?.id as SectionId) || 'home';
  };

  const getTitleForPath = (path: string) => {
    const item = NAVIGATION.find(n => n.path === path);
    return item?.title || 'Home';
  };

  return (
    <Layout activeSection={getActiveSection()}>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/preamble" element={<Preamble />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/core-laws" element={<DocumentationPage sectionId="core-laws" title="Core Laws" />} />
        <Route path="/reliability" element={<DocumentationPage sectionId="reliability" title="Reliability" />} />
        <Route path="/pcb-design" element={<DocumentationPage sectionId="pcb-design" title="PCB Design Constitution" />} />
        <Route path="/firmware" element={<DocumentationPage sectionId="firmware" title="Firmware Constitution" />} />
        <Route path="/architecture" element={<DocumentationPage sectionId="architecture" title="Embedded Architecture" />} />
        <Route path="/debugging" element={<DocumentationPage sectionId="debugging" title="Debugging Laws" />} />
        <Route path="/tools" element={<DocumentationPage sectionId="tools" title="Tools & Workflows" />} />
        <Route path="/checklists" element={<DocumentationPage sectionId="checklists" title="Design Checklists" />} />
        <Route path="/philosophy" element={<DocumentationPage sectionId="philosophy" title="Engineering Philosophy" />} />
        <Route path="*" element={<Hero />} />
      </Routes>
    </Layout>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
