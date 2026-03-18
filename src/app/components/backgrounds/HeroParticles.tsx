"use client";
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
}

const COLORS = [
  "rgba(239,68,68", // red
  "rgba(167,139,250", // violet
  "rgba(6,182,212", // cyan
  "rgba(255,255,255", // white
];

export default function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);
  const mouseRef = useRef({ x: -999, y: -999, moving: false });
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize canvas to match container
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    // Spawn particles at mouse position
    const spawnParticles = (x: number, y: number) => {
      for (let i = 0; i < 5; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2.5 + 0.5;
        const maxLife = Math.random() * 60 + 40;
        particlesRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.5, // slight upward drift
          life: maxLife,
          maxLife,
          size: Math.random() * 2.5 + 0.8,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        });
      }
    };

    // Animation loop
    const animate = () => {
      animFrameRef.current = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Spawn more if mouse moving
      if (mouseRef.current.moving) {
        spawnParticles(mouseRef.current.x, mouseRef.current.y);
      }

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((p) => p.life > 0);

      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.04; // subtle gravity
        p.vx *= 0.98; // friction
        p.life -= 1;

        const alpha = p.life / p.maxLife;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * alpha, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color},${alpha * 0.85})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `${p.color},${alpha * 0.6})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    };
    animate();

    // Mouse events — scoped to the canvas (hero section only)
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        moving: true,
      };

      // Stop spawning shortly after mouse stops
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        mouseRef.current.moving = false;
      }, 80);
    };

    canvas.addEventListener("mousemove", onMouseMove);

    return () => {
      canvas.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animFrameRef.current);
      resizeObserver.disconnect();
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto z-0"
      aria-hidden="true"
    />
  );
}
