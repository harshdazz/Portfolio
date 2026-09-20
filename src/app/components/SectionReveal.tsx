"use client";
import { CSSProperties, ReactNode, useEffect, useRef } from "react";

type Direction = "up" | "down" | "left" | "right";

interface SectionRevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}

const OFFSETS: Record<Direction, { x: string; y: string }> = {
  up: { x: "0px", y: "50px" },
  down: { x: "0px", y: "-50px" },
  left: { x: "50px", y: "0px" },
  right: { x: "-50px", y: "0px" },
};

/**
 * Reveals its children on scroll using a single IntersectionObserver per
 * instance. The animation itself is pure CSS (see `.reveal` in globals.css),
 * so no JS runs while scrolling and the observer disconnects after firing.
 */
export default function SectionReveal({
  children,
  direction = "up",
  delay = 0,
  className,
}: SectionRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // No IntersectionObserver (or reduced motion): show immediately.
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      el.dataset.revealed = "true";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.dataset.revealed = "true";
        observer.disconnect();
      },
      { rootMargin: "0px 0px -15% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const { x, y } = OFFSETS[direction];

  return (
    <div
      ref={elementRef}
      className={className ? `reveal ${className}` : "reveal"}
      style={
        {
          "--reveal-x": x,
          "--reveal-y": y,
          "--reveal-delay": `${delay}s`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
