'use client';

import { FloatingNav } from '@/components/ui/floating-navbar';
import { HeroSection } from '@/components/sections/hero-section';
import { StatsSection } from '@/components/sections/stats-section';
import { AboutSection } from '@/components/sections/about-section';
import { ExperienceSection } from '@/components/sections/experience-section';
import { GlobalImpactSection } from '@/components/sections/global-impact-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { ContactSection } from '@/components/sections/contact-section';
import { FooterSection } from '@/components/sections/footer-section';
import { navItems } from '@/data/navigation';

export default function Home() {
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
      
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ExperienceSection />
      <GlobalImpactSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}