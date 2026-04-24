"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function HoverBorderGradient({ children, className, containerClassName, as: Component = "button", duration = 1 }: { children: React.ReactNode; className?: string; containerClassName?: string; as?: React.ElementType; duration?: number }) {
  const [isMounted, setIsMounted] = useState(false);
  const [hovered, setHovered] = useState(false);
  useEffect(() => { setIsMounted(true); }, []);
  return (
    <Component onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className={cn("relative flex items-center justify-center overflow-hidden rounded-full border-0 bg-card p-[1px]", containerClassName)}>
      {isMounted && <motion.div className="pointer-events-none absolute inset-0" style={{ background: hovered ? "conic-gradient(from 0deg, transparent 0%, #0d9488 10%, #f59e0b 20%, #0d9488 30%, transparent 40%)" : "conic-gradient(from 0deg, transparent 0%, rgba(13,148,136,0.3) 10%, rgba(245,158,11,0.2) 20%, rgba(13,148,136,0.3) 30%, transparent 40%)" }} animate={{ rotate: 360 }} transition={{ duration, repeat: Infinity, ease: "linear" }} />}
      <div className={cn("relative flex h-full w-full items-center justify-center rounded-full bg-card px-6 py-2 text-sm font-medium text-foreground", className)}>{children}</div>
    </Component>
  );
}
