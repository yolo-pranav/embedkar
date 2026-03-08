import { NavItem, SectionId } from './types';

export const TAGLINES = [
  "The Constitution of Embedded Engineering",
  "Principles That Govern Reliable Systems",
  "Where Circuits Meet Dharma",
  "Engineering with Discipline",
  "The Dharma of Embedded Systems",
  "Laws for Designing Intelligent Machines"
];

export const NAVIGATION: NavItem[] = [
  { id: 'home', title: 'Home', path: '/' },
  { id: 'preamble', title: 'Preamble', path: '/preamble' },
  { id: 'vision', title: 'Inspiration & Vision', path: '/vision' },
  { 
    id: 'principles', 
    title: 'Principles', 
    path: '/principles',
    children: [
      { id: 'core-laws', title: 'Core Laws', path: '/principles/core' },
      { id: 'reliability', title: 'Reliability', path: '/principles/reliability' },
    ]
  },
  { id: 'pcb-design', title: 'PCB Design Constitution', path: '/pcb-design' },
  { id: 'firmware', title: 'Firmware Constitution', path: '/firmware' },
  { id: 'architecture', title: 'Embedded Architecture', path: '/architecture' },
  { id: 'debugging', title: 'Debugging Laws', path: '/debugging' },
  { id: 'tools', title: 'Tools & Workflows', path: '/tools' },
  { id: 'checklists', title: 'Design Checklists', path: '/checklists' },
  { id: 'philosophy', title: 'Engineering Philosophy', path: '/philosophy' },
];

export const COLORS = {
  saffron: '#FF9933',
  copper: '#B87333',
  parchment: '#F5F2ED',
  ink: '#1A1A1A',
  gold: '#D4AF37',
  navy: '#000080',
};
