"use client";
import { useEffect, useRef, useState } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface SpotlightProps extends HTMLMotionProps<"div"> {
  gradientFirst?: string; gradientSecond?: string; gradientThird?: string; duration?: number;
}

export function Spotlight({
  gradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.07%, rgba(13, 148, 136, 0.3) 0%, rgba(13, 148, 136, 0) 55.21%)",
  gradientSecond = "radial-gradient(50% 50% at 50% 50%, rgba(245, 158, 11, 0.2) 0%, rgba(245, 158, 11, 0) 50%)",
  gradientThird = "radial-gradient(50% 50% at 50% 50%, rgba(13, 148, 136, 0.15) 0%, rgba(13, 148, 136, 0) 50%)",
  duration = 10, className, ...props
}: SpotlightProps) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { setIsMounted(true); }, []);
  if (!isMounted) return null;
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className={cn("pointer-events-none absolute -inset-[10px] z-0 overflow-hidden", className)} {...props}>
      <motion.div animate={{ x: [0, -100, 0], y: [0, 50, 0] }} transition={{ duration, repeat: Infinity, ease: "linear" }} className="absolute inset-0 h-full w-full" style={{ background: gradientFirst }} />
      <motion.div animate={{ x: [0, 100, 0], y: [0, -50, 0] }} transition={{ duration: duration * 0.8, repeat: Infinity, ease: "linear" }} className="absolute inset-0 h-full w-full" style={{ background: gradientSecond }} />
      <motion.div animate={{ x: [0, -50, 0], y: [0, 100, 0] }} transition={{ duration: duration * 0.6, repeat: Infinity, ease: "linear" }} className="absolute inset-0 h-full w-full" style={{ background: gradientThird }} />
    </motion.div>
  );
}
