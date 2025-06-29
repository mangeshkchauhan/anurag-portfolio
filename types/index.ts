import { LucideIcon } from 'lucide-react';

export interface Stat {
  value: string;
  label: string;
  description: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Testimonial {
  title: string;
  company: string;
  description: string;
}

export interface ProcessStep {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: 'blue' | 'purple';
}

export interface ContactMethod {
  icon: LucideIcon;
  title: string;
  value: string;
  href: string;
  description: string;
}

export interface WorldMapDot {
  start: { lat: number; lng: number };
  end: { lat: number; lng: number };
} 