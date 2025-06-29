"use client";
import { cn } from "@/lib/utils";
import { ReactNode, useRef, useEffect } from "react";

interface GoogleGeminiEffectProps {
  children: ReactNode;
  className?: string;
}

export const GoogleGeminiEffect = ({
  children,
  className,
}: GoogleGeminiEffectProps) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = svg.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      svg.style.setProperty('--mouse-x', `${x}%`);
      svg.style.setProperty('--mouse-y', `${y}%`);
    };

    svg.addEventListener('mousemove', handleMouseMove);
    return () => svg.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={cn("relative overflow-hidden rounded-2xl", className)}>
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          '--mouse-x': '50%',
          '--mouse-y': '50%',
        } as React.CSSProperties}
        aria-hidden="true"
      >
        <defs>
          <radialGradient
            id="gradient"
            cx="var(--mouse-x)"
            cy="var(--mouse-y)"
            r="50%"
          >
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#gradient)"
          className="opacity-0 hover:opacity-100 transition-opacity duration-300"
        />
      </svg>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}; 