"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // --- Mouse tracking ---
    const onMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      // Dot: instant
      gsap.to(dot, { x, y, duration: 0.05, ease: "power4.out" });

      // Ring: smooth lag
      gsap.to(ring, { x, y, duration: 0.2, ease: "power3.out" });

      // Spawn a trail dot
      spawnTrail(x, y);
    };

    // --- Trail system ---
    const spawnTrail = (x: number, y: number) => {
      const trail = document.createElement("div");
      trail.style.cssText = `
        position: fixed;
        top: 0; left: 0;
        width: 5px; height: 5px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(239,68,68,0.8), rgba(167,139,250,0.4));
        pointer-events: none;
        z-index: 99990;
        transform: translate(${x - 2.5}px, ${y - 2.5}px);
        box-shadow: 0 0 6px 2px rgba(239,68,68,0.3);
      `;
      document.body.appendChild(trail);

      gsap.to(trail, {
        opacity: 0,
        scale: 0,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => trail.remove(),
      });
    };

    // --- Hover expand on interactive elements ---
    const onEnter = () => {
      gsap.to(ring, {
        scale: 2.2,
        borderColor: "rgba(239,68,68,0.8)",
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(dot, { scale: 0, duration: 0.2 });
    };

    const onLeave = () => {
      gsap.to(ring, {
        scale: 1,
        borderColor: "rgba(239,68,68,0.5)",
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(dot, { scale: 1, duration: 0.2 });
    };

    const bindLinks = () => {
      document
        .querySelectorAll("a, button, [role='button'], input, textarea")
        .forEach((el) => {
          el.addEventListener("mouseenter", onEnter);
          el.addEventListener("mouseleave", onLeave);
        });
    };

    const unbindLinks = () => {
      document
        .querySelectorAll("a, button, [role='button'], input, textarea")
        .forEach((el) => {
          el.removeEventListener("mouseenter", onEnter);
          el.removeEventListener("mouseleave", onLeave);
        });
    };

    bindLinks();

    // Re-bind when DOM changes (for dynamically rendered items)
    const observer = new MutationObserver(bindLinks);
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      unbindLinks();
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Inner dot — mix-blend-mode inverts colors for visibility on any background */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[99999] pointer-events-none mix-blend-difference will-change-transform"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div className="w-3 h-3 rounded-full bg-white" />
      </div>

      {/* Outer ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[99999] pointer-events-none will-change-transform"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div
          className="w-9 h-9 rounded-full border border-red-500/50"
          style={{
            boxShadow:
              "0 0 12px rgba(239,68,68,0.25), inset 0 0 8px rgba(239,68,68,0.05)",
          }}
        />
      </div>
    </>
  );
}
