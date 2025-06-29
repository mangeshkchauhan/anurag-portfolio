"use client";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useRef } from "react";

export interface TestimonialItem {
  title: string;
  company: string;
  description: string;
  period?: string;
}

export const AnimatedTestimonials = ({ 
  testimonials,
  className 
}: { 
  testimonials: TestimonialItem[];
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={`testimonial-${testimonial.company}-${index}`}
          className="group"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          whileHover={{ y: -5 }}
        >
          <div className="relative h-full">
            {/* Glow effect */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"
              animate={{
                background: [
                  "linear-gradient(to right, #2563eb, #9333ea, #2563eb)",
                  "linear-gradient(to right, #9333ea, #2563eb, #9333ea)",
                  "linear-gradient(to right, #2563eb, #9333ea, #2563eb)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            {/* Card */}
            <div className="relative bg-card/90 backdrop-blur-sm border border-border rounded-2xl p-6 h-full hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl">
              {/* Quote icon */}
              <motion.div
                className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Quote className="w-4 h-4 text-white" />
              </motion.div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={`star-${testimonial.company}-${testimonial.title}-${i}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
                  >
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-foreground group-hover:text-blue-600 transition-colors">
                  {testimonial.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-sm">
                  &ldquo;{testimonial.description}&rdquo;
                </p>
                
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground text-sm">
                    {testimonial.company}
                  </p>
                  {testimonial.period && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {testimonial.period}
                    </p>
                  )}
                </div>
              </div>

              {/* Bottom gradient line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-b-2xl"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}; 