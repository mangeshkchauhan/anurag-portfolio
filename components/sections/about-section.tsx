'use client';

import { motion } from 'framer-motion';
import { CanvasRevealEffect } from '@/components/ui/canvas-reveal-effect';
import { ShootingStars, StarsBackground } from '@/components/ui/shooting-stars';
import { processSteps } from '@/data/process';

export const AboutSection = () => {
  return (
    <div id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative">
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
            About Me
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
              Hi, I&apos;m Anurag Ray. I design sustainable token economies,
              develop on-chain ecosystems, and lead product strategy across
              Web3 gaming and finance. With hands-on experience in building
              blockchain products like{' '}
              <strong className="text-white">Star Atlas</strong>,{' '}
              <strong className="text-white">Bloom</strong>, and{' '}
              <strong className="text-white">Valannia</strong>, I bring a
              structured, data-driven approach to tokenomics and Web3 product
              design—built for adoption and longevity.
            </p>
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-12 text-center">
            My Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((item) => (
              <CanvasRevealEffect
                key={`process-${item.title}`}
                containerClassName="h-80"
                colors={[
                  [125, 211, 252],
                  [139, 92, 246],
                ]}
                opacities={[0.3, 0.5]}
              >
                <div className="text-center group">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${
                      item.color === 'blue'
                        ? 'from-blue-600 to-blue-800'
                        : 'from-purple-600 to-purple-800'
                    } rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <item.icon className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-4">
                    {item.title}
                  </h4>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              </CanvasRevealEffect>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}; 