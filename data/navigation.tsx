import React from 'react';
import { Home as HomeIcon, User, Briefcase, Phone } from 'lucide-react';

export interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

export const navItems: NavItem[] = [
  {
    name: 'Home',
    link: '#home',
    icon: <HomeIcon className="h-4 w-4" />,
  },
  {
    name: 'About',
    link: '#about',
    icon: <User className="h-4 w-4" />,
  },
  {
    name: 'Experience',
    link: '#experience',
    icon: <Briefcase className="h-4 w-4" />,
  },
  {
    name: 'Contact',
    link: '#contact',
    icon: <Phone className="h-4 w-4" />,
  },
];