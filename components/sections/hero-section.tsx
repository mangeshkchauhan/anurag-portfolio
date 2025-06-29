'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Briefcase } from 'lucide-react';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';
import { ShootingStars, StarsBackground } from '@/components/ui/shooting-stars';
import { TextHoverEffect } from '@/components/ui/text-hover-effect';
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <div
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
    >
      <BackgroundBeamsWithCollision />
      <ShootingStars 
        starColor="#3b82f6"
        trailColor="#1d4ed8"
        minSpeed={8}
        maxSpeed={25}
        starCount={3}
      />
      <StarsBackground 
        starDensity={0.0002}
        allStarsTwinkle={true}
        twinkleProbability={0.7}
      />
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <TextHoverEffect
            text="Anurag Ray"
            className="text-5xl sm:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 bg-clip-text text-transparent"
          />

          <HeroHighlight containerClassName="h-auto mb-8">
            <motion.h2
              className="text-xl sm:text-3xl lg:text-4xl text-gray-300 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <Highlight className="text-white">
                Web3 Tokenomics Architect
              </Highlight>
              {' & Ecosystem Strategist'}
            </motion.h2>
          </HeroHighlight>

          <motion.p
            className="text-lg sm:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Designing sustainable token economies and scaling decentralized
            ecosystems with a focus on adoption, innovation, and longevity
            across Web3 gaming and finance.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white px-10 py-4 text-lg"
              >
                <a href="#contact" className="flex items-center gap-2">
                  Get In Touch <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="px-10 py-4 text-lg border-2 hover:border-blue-400 border-blue-500/30 text-white hover:text-blue-400"
              >
                <a href="#experience" className="flex items-center gap-2">
                  View Experience <Briefcase className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}; 