"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function BackgroundBeams({ className }: { className?: string }) {
  const [isMounted, setIsMounted] = useState(false);
  const paths = useRef(Array.from({ length: 24 }, () => {
    const sx = Math.random() * 100, sy = Math.random() * 100;
    const ex = Math.random() * 100, ey = Math.random() * 100;
    return `M${sx} ${sy} Q ${(sx+ex)/2} ${(sy+ey)/2-20} ${ex} ${ey}`;
  }));
  useEffect(() => { setIsMounted(true); }, []);
  if (!isMounted) return null;
  return (
    <div className={cn("pointer-events-none absolute inset-0 z-0 overflow-hidden", className)}>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
        {paths.current.map((d, i) => (
          <motion.path key={i} d={d} stroke="rgba(13, 148, 136, 0.15)" strokeWidth="0.2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
            transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 4 }}
          />
        ))}
      </svg>
    </div>
  );
}
