'use client';

import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/components/common/animated-counter';
import { ShootingStars, StarsBackground } from '@/components/ui/shooting-stars';
import { stats } from '@/data/stats';

export const StatsSection = () => {
  return (
    <div className="py-20 bg-black relative">
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            By the Numbers
          </h2>
          <p className="text-lg text-gray-300">
            Delivering measurable impact in Web3
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={`stat-${stat.label}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <AnimatedCounter value={stat.value} />
              <div className="text-sm lg:text-base font-medium text-white mb-1 mt-2">
                {stat.label}
              </div>
              <div className="text-xs lg:text-sm text-gray-400">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}; 