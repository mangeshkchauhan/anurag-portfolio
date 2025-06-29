'use client';
import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export interface TimelineEntry {
  title: string;
  company: string;
  period: string;
  description: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="relative max-w-4xl mx-auto">
      {/* Timeline line */}
      <motion.div
        className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 md:left-1/2 md:-translate-x-1/2"
        initial={{ height: 0 }}
        animate={isInView ? { height: '100%' } : { height: 0 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      />

      <div className="space-y-12">
        {data.map((item, index) => (
          <motion.div
            key={`timeline-${item.company}-${index}`}
            className={cn(
              'relative flex items-center',
              index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
            )}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Timeline dot */}
            <motion.div
              className="absolute left-2 -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-background shadow-lg z-10 md:left-[calc(50%-8px)]"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
            />

            {/* Timeline pulse effect */}
            <motion.div
              className="absolute left-2 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full opacity-20 md:left-[calc(50%-8px)]"
              animate={{ scale: [1, 2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
            />

            {/* Content card */}
            <motion.div
              className={cn(
                'ml-12 md:ml-0 md:w-5/12 group',
                index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
              )}
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-500/50">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-1">
                    {item.company}
                  </p>
                  <p className="text-sm text-muted-foreground font-medium">
                    {item.period}
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
