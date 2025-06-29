'use client';

import { motion } from 'framer-motion';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import { ShootingStars, StarsBackground } from '@/components/ui/shooting-stars';
import { testimonials } from '@/data/testimonials';

export const TestimonialsSection = () => {
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
            What People Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Feedback from industry leaders and colleagues I&apos;ve worked
            with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={`testimonial-${testimonial.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <BackgroundGradient 
                className="h-full relative z-10"
                animate={false}
                containerClassName="h-full"
              >
                <div className="p-6 h-full flex flex-col bg-slate-950/90 backdrop-blur-sm">
                  <div className="flex-1 space-y-4">
                    <h3 className="text-xl font-semibold text-white">
                      {testimonial.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {testimonial.description}
                    </p>
                  </div>
                  <div className="text-sm text-gray-400 font-medium mt-6 pt-4 border-t border-gray-700">
                    — {testimonial.company}
                  </div>
                </div>
              </BackgroundGradient>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}; 