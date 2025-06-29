"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BackgroundGradientProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: BackgroundGradientProps) => {


  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform",
          " bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]",
          animate && "animate-spin-slow"
        )}
      ></div>
      <div
        className={cn(
          "relative bg-slate-950 border border-slate-800 backdrop-blur-xl rounded-3xl p-6",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}; 