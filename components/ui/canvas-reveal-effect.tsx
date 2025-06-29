"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode, useRef, useEffect, useState } from "react";

interface CanvasRevealEffectProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: number[][];
  opacities?: number[];
  showGradient?: boolean;
}

export const CanvasRevealEffect = ({
  children,
  className,
  containerClassName,
  colors = [[125, 211, 252]],
  opacities = [0.3],
  showGradient = true,
}: CanvasRevealEffectProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (isHovered) {
        const gradient = ctx.createRadialGradient(
          canvas.width / 2,
          canvas.height / 2,
          0,
          canvas.width / 2,
          canvas.height / 2,
          Math.max(canvas.width, canvas.height) / 2
        );
        
        gradient.addColorStop(0, `rgba(${colors[0][0]}, ${colors[0][1]}, ${colors[0][2]}, ${opacities[0]})`);
        gradient.addColorStop(1, `rgba(${colors[0][0]}, ${colors[0][1]}, ${colors[0][2]}, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [isHovered, colors, opacities]);

  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden rounded-2xl",
        containerClassName
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="presentation"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 h-full w-full pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "relative z-10 h-full w-full flex flex-col items-center justify-center p-8",
          className
        )}
      >
        {children}
      </motion.div>
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 z-[1] pointer-events-none" />
      )}
    </div>
  );
}; 