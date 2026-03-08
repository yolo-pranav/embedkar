import { Type } from "@google/genai";

export interface NavItem {
  id: string;
  title: string;
  path: string;
  icon?: string;
  children?: NavItem[];
}

export interface EntryMetadata {
  id: string;
  title: string;
  category: string;
  tags: string[];
  difficulty: 'Basic' | 'Intermediate' | 'Advanced';
  type: 'Hardware' | 'Software' | 'Architecture' | 'Workflow';
  lastUpdated: string;
}

export interface Entry {
  metadata: EntryMetadata;
  principle: string;
  explanation: string;
  example?: string;
  checklist?: string[];
  relatedTopics?: string[];
}

export type SectionId = 
  | 'home'
  | 'preamble'
  | 'principles'
  | 'pcb-design'
  | 'firmware'
  | 'architecture'
  | 'debugging'
  | 'tools'
  | 'checklists'
  | 'philosophy'
  | 'vision';
