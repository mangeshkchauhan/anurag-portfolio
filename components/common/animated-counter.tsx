'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedCounterProps {
  value: string;
}

export const AnimatedCounter = ({ value }: AnimatedCounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
      >
        {value}
      </motion.div>
    </div>
  );
}; 