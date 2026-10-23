"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number; // Parallax intensity factor (e.g., 0.1 to 0.5)
}

export default function Parallax({
  children,
  className = "",
  speed = 0.2,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how far the element is from the center of the viewport
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distance = elementCenter - viewportCenter;

      // Apply offset based on speed factor
      setOffset(distance * speed);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed]);

  return (
    <div
      ref={ref}
      style={{ transform: `translateY(${offset}px)` }}
      className={`transition-transform duration-75 ease-out will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}
