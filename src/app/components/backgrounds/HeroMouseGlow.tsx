"use client";
import { useState } from "react";

export default function HeroMouseGlow() {
  const [pos, setPos] = useState({ x: -999, y: -999 });
  const [active, setActive] = useState(false);

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-auto z-0"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        setActive(true);
      }}
      onMouseLeave={() => setActive(false)}
    >
      {/* Layer 1 — large soft aurora (slowest, biggest) */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 700,
          height: 700,
          left: pos.x - 350,
          top: pos.y - 350,
          background:
            "radial-gradient(circle, rgba(124,58,237,0.18) 0%, rgba(239,68,68,0.08) 45%, transparent 70%)",
          filter: "blur(60px)",
          opacity: active ? 1 : 0,
          transition:
            "left 0.55s ease-out, top 0.55s ease-out, opacity 0.4s ease",
        }}
      />

      {/* Layer 2 — medium glow (medium lag) */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 380,
          height: 380,
          left: pos.x - 190,
          top: pos.y - 190,
          background:
            "radial-gradient(circle, rgba(239,68,68,0.22) 0%, rgba(167,139,250,0.12) 50%, transparent 70%)",
          filter: "blur(35px)",
          opacity: active ? 1 : 0,
          transition:
            "left 0.25s ease-out, top 0.25s ease-out, opacity 0.4s ease",
        }}
      />

      {/* Layer 3 — sharp core (fast, tight) */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 120,
          height: 120,
          left: pos.x - 60,
          top: pos.y - 60,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(239,68,68,0.25) 40%, transparent 70%)",
          filter: "blur(12px)",
          opacity: active ? 1 : 0,
          transition:
            "left 0.06s ease-out, top 0.06s ease-out, opacity 0.4s ease",
        }}
      />

      {/* Layer 4 — cyan accent trail (medium-slow) */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 250,
          height: 250,
          left: pos.x - 125,
          top: pos.y - 125,
          background:
            "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)",
          filter: "blur(25px)",
          opacity: active ? 0.7 : 0,
          transition:
            "left 0.38s ease-out, top 0.38s ease-out, opacity 0.4s ease",
        }}
      />
    </div>
  );
}
