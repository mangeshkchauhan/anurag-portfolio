"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

interface TextHoverEffectProps {
  text: string;
  className?: string;
}

export const TextHoverEffect = ({ text, className }: TextHoverEffectProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.h1
      className={cn(
        "font-bold text-center cursor-pointer",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          className="inline-block"
          initial={{ y: 0 }}
          animate={{
            y: isHovered ? -4 : 0,
            color: isHovered ? "#3b82f6" : "#ffffff",
          }}
          transition={{
            delay: index * 0.05,
            type: "spring",
            stiffness: 300,
            damping: 10,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
  );
}; 