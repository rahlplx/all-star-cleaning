"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function CardSpotlight({ children, className, spotlightColor = "rgba(13, 148, 136, 0.15)" }: { children: React.ReactNode; className?: string; spotlightColor?: string }) {
  const [isMounted, setIsMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => { setIsMounted(true); }, []);
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }
  return (
    <div ref={cardRef} onMouseMove={handleMouseMove} className={cn("relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-md", className)}>
      {isMounted && !shouldReduceMotion && <motion.div className="pointer-events-none absolute -inset-px z-0" animate={{ background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, ${spotlightColor}, transparent 70%)` }} transition={{ type: "tween", duration: 0.1 }} />}
      {isMounted && shouldReduceMotion && <div className="pointer-events-none absolute -inset-px z-0" style={{ background: `radial-gradient(300px circle at center, ${spotlightColor}, transparent 70%)` }} />}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
