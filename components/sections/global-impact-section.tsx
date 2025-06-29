'use client';

import { motion } from 'framer-motion';
import { WorldMap } from '@/components/ui/world-map';
import { ShootingStars, StarsBackground } from '@/components/ui/shooting-stars';
import { worldMapDots } from '@/data/contact';

export const GlobalImpactSection = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative">
      <ShootingStars 
        starColor="#3b82f6"
        trailColor="#1d4ed8"
        minSpeed={8}
        maxSpeed={25}
        starCount={4}
      />
      <StarsBackground 
        starDensity={0.0003}
        allStarsTwinkle={true}
        twinkleProbability={0.8}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Global Impact
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Working with clients and projects across the globe to build
            sustainable Web3 ecosystems
          </p>
        </motion.div>

        <div className="h-96 w-full">
          <WorldMap
            className="h-full w-full"
            dots={worldMapDots}
            lineColor="#3b82f6"
          />
        </div>
      </div>
    </div>
  );
}; 