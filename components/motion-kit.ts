"use client";

import { useEffect, useRef, useState } from "react";
import * as React from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";

export function Reveal({
  children,
  className,
  delay = 0,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}) {
  const inView = useInView({ once });
  return (
    <div
      className={`transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function Counter({ value, prefix = "", suffix = "" }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState(0);

  React.useEffect(() => {
    if (inView) {
      const duration = 1500;
      const steps = 60;
      const interval = duration / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += 1;
        setDisplay(Math.min(value, Math.ceil((value * current) / steps)));
        if (current >= steps) clearInterval(timer);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <span ref={ref} className="font-mono font-bold text-3xl md:text-4xl">
      {prefix}{display}{suffix}
    </span>
  );
}
