"use client";
import { useEffect, useRef, useState } from "react";
import * as React from "react";

import { useInView } from "motion/react";

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
