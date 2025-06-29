import { Mail, MessageCircle, Linkedin } from 'lucide-react';
import type { ContactMethod, WorldMapDot } from '@/types';

export const contactMethods: ContactMethod[] = [
  {
    icon: Mail,
    title: 'Email',
    value: 'anuragray28@gmail.com',
    href: 'mailto:anuragray28@gmail.com',
    description: 'Best for detailed project discussions',
  },
  {
    icon: MessageCircle,
    title: 'Telegram',
    value: '@anuragray',
    href: 'https://t.me/anuragray',
    description: 'Quick questions and updates',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    value: 'linkedin.com/in/aray28',
    href: 'https://linkedin.com/in/aray28',
    description: 'Professional networking',
  },
];

export const worldMapDots: WorldMapDot[] = [
  {
    start: { lat: 37.7749, lng: -122.4194 }, // San Francisco
    end: { lat: 51.5074, lng: -0.1278 }, // London
  },
  {
    start: { lat: 40.7128, lng: -74.006 }, // New York
    end: { lat: 35.6762, lng: 139.6503 }, // Tokyo
  },
  {
    start: { lat: 52.52, lng: 13.405 }, // Berlin
    end: { lat: 1.3521, lng: 103.8198 }, // Singapore
  },
  {
    start: { lat: -33.8688, lng: 151.2093 }, // Sydney
    end: { lat: 19.076, lng: 72.8777 }, // Mumbai
  },
]; 