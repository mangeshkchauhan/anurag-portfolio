"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HeroHighlightProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

interface HighlightProps {
  children: ReactNode;
  className?: string;
}

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: HeroHighlightProps) => {
  return (
    <div
      className={cn(
        "relative h-[40rem] w-full rounded-md flex flex-col items-center justify-center antialiased",
        containerClassName
      )}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className={cn(
          "text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto",
          className
        )}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const Highlight = ({ children, className }: HighlightProps) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500`,
        className
      )}
    >
      {children}
    </motion.span>
  );
}; 