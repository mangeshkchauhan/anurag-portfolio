"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface ShootingStarsProps {
  className?: string;
  starColor?: string;
  trailColor?: string;
  minSpeed?: number;
  maxSpeed?: number;
  starCount?: number;
}

interface Star {
  id: number;
  x: number;
  y: number;
  angle: number;
  speed: number;
  length: number;
  opacity: number;
}

export const ShootingStars = ({
  className,
  starColor = "#9E00FF",
  trailColor = "#2EB9DF",
  minSpeed = 10,
  maxSpeed = 30,
  starCount = 3,
}: ShootingStarsProps) => {
  const [, setStars] = useState<Star[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    const createStar = (): Star => ({
      id: Math.random(),
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      angle: Math.random() * Math.PI * 2,
      speed: minSpeed + Math.random() * (maxSpeed - minSpeed),
      length: 80 + Math.random() * 80,
      opacity: 0.5 + Math.random() * 0.5,
    });

    const initStars = () => {
      const newStars = Array.from({ length: starCount }, createStar);
      setStars(newStars);
    };

    initStars();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      setStars(prevStars => 
        prevStars.map(star => {
          const newX = star.x + Math.cos(star.angle) * star.speed;
          const newY = star.y + Math.sin(star.angle) * star.speed;

          // Draw shooting star
          const gradient = ctx.createLinearGradient(
            newX,
            newY,
            newX - Math.cos(star.angle) * star.length,
            newY - Math.sin(star.angle) * star.length
          );
          gradient.addColorStop(0, `${starColor}${Math.floor(star.opacity * 255).toString(16).padStart(2, '0')}`);
          gradient.addColorStop(1, `${trailColor}00`);

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(newX, newY);
          ctx.lineTo(
            newX - Math.cos(star.angle) * star.length,
            newY - Math.sin(star.angle) * star.length
          );
          ctx.stroke();

          // Reset star if it goes off screen
          if (newX < -star.length || newX > canvas.width + star.length || 
              newY < -star.length || newY > canvas.height + star.length) {
            return createStar();
          }

          return { ...star, x: newX, y: newY };
        })
      );

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [starColor, trailColor, minSpeed, maxSpeed, starCount]);

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        "absolute inset-0 h-full w-full pointer-events-none",
        className
      )}
    />
  );
};

export const StarsBackground = ({
  className,
  starDensity = 0.0002,
  allStarsTwinkle = true,
  twinkleProbability = 0.7,
  minTwinkleSpeed = 0.5,
  maxTwinkleSpeed = 1,
}: {
  className?: string;
  starDensity?: number;
  allStarsTwinkle?: boolean;
  twinkleProbability?: number;
  minTwinkleSpeed?: number;
  maxTwinkleSpeed?: number;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    const stars = Array.from({ length: Math.floor(canvas.width * canvas.height * starDensity) }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      opacity: Math.random(),
      twinkleSpeed: minTwinkleSpeed + Math.random() * (maxTwinkleSpeed - minTwinkleSpeed),
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        if (allStarsTwinkle || Math.random() < twinkleProbability) {
          star.opacity += (Math.random() - 0.5) * star.twinkleSpeed * 0.02;
          star.opacity = Math.max(0.1, Math.min(1, star.opacity));
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [starDensity, allStarsTwinkle, twinkleProbability, minTwinkleSpeed, maxTwinkleSpeed]);

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        "absolute inset-0 h-full w-full pointer-events-none",
        className
      )}
    />
  );
}; 