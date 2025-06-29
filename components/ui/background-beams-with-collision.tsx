"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface BackgroundBeamsWithCollisionProps {
  className?: string;
}

export const BackgroundBeamsWithCollision = ({
  className,
}: BackgroundBeamsWithCollisionProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const beams: Array<{
      x: number;
      y: number;
      width: number;
      height: number;
      color: string;
      speed: number;
      direction: number;
    }> = [];

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      color: string;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createBeam = () => {
      const colors = ["#3b82f6", "#1d4ed8", "#2563eb", "#1e40af"];
      return {
        x: Math.random() * canvas.width,
        y: -50,
        width: Math.random() * 3 + 1,
        height: Math.random() * 200 + 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 2 + 1,
        direction: Math.random() > 0.5 ? 1 : -1,
      };
    };

    const createParticle = (x: number, y: number) => {
      const colors = ["#3b82f6", "#1d4ed8", "#60a5fa"];
      return {
        x,
        y,
        vx: (Math.random() - 0.5) * 8,
        vy: (Math.random() - 0.5) * 8,
        life: 60,
        maxLife: 60,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create new beams occasionally
      if (Math.random() < 0.02 && beams.length < 8) {
        beams.push(createBeam());
      }

      // Update and draw beams
      for (let i = beams.length - 1; i >= 0; i--) {
        const beam = beams[i];
        
        // Update position
        beam.y += beam.speed;
        beam.x += beam.direction * 0.5;

        // Check for collision with bottom
        if (beam.y + beam.height > canvas.height - 50) {
          // Create collision particles
          for (let j = 0; j < 8; j++) {
            particles.push(createParticle(beam.x + beam.width / 2, canvas.height - 50));
          }
          beams.splice(i, 1);
          continue;
        }

        // Create gradient
        const gradient = ctx.createLinearGradient(
          beam.x,
          beam.y,
          beam.x,
          beam.y + beam.height
        );
        gradient.addColorStop(0, `${beam.color}00`);
        gradient.addColorStop(0.5, `${beam.color}80`);
        gradient.addColorStop(1, `${beam.color}ff`);

        // Draw beam
        ctx.fillStyle = gradient;
        ctx.fillRect(beam.x, beam.y, beam.width, beam.height);

        // Remove beams that are off screen (sides)
        if (beam.x < -50 || beam.x > canvas.width + 50) {
          beams.splice(i, 1);
        }
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.1; // gravity
        particle.life--;

        const alpha = particle.life / particle.maxLife;
        ctx.fillStyle = `${particle.color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 3, 0, Math.PI * 2);
        ctx.fill();

        if (particle.life <= 0) {
          particles.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        "absolute inset-0 z-0 h-full w-full pointer-events-none",
        className
      )}
    />
  );
}; 