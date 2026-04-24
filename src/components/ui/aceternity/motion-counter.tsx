"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export function MotionCounter({ value, suffix = "", prefix = "", className, duration = 2 }: { value: number; suffix?: string; prefix?: string; className?: string; duration?: number }) {
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });
  const [display, setDisplay] = useState(0);
  useEffect(() => { setIsMounted(true); }, []);
  useEffect(() => { if (isInView && isMounted) motionValue.set(value); }, [isInView, value, motionValue, isMounted]);
  useEffect(() => { const unsub = springValue.on("change", (v) => setDisplay(Math.round(v))); return unsub; }, [springValue]);
  return <span ref={ref} className={cn("tabular-nums", className)}>{prefix}{isMounted ? display : 0}{suffix}</span>;
}
