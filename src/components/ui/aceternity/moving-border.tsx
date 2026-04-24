"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function MovingBorder({ children, duration = 4000, className, containerClassName, borderRadius = "0.5rem", as: Component = "div" }: { children: React.ReactNode; duration?: number; className?: string; containerClassName?: string; borderRadius?: string; as?: React.ElementType }) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { setIsMounted(true); }, []);
  return (
    <Component className={cn("relative overflow-hidden p-[1px]", containerClassName)} style={{ borderRadius }}>
      {isMounted && <motion.div className="pointer-events-none absolute inset-0" style={{ borderRadius, background: "conic-gradient(from 0deg, transparent 0%, #0d9488 10%, #f59e0b 20%, #0d9488 30%, transparent 40%)" }} animate={{ rotate: 360 }} transition={{ duration: duration / 1000, repeat: Infinity, ease: "linear" }} />}
      <div className={cn("relative h-full w-full bg-card", className)} style={{ borderRadius }}>{children}</div>
    </Component>
  );
}
