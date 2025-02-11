"use client";
import { useRef, useEffect } from "react";
import Particle from "@/lib/particle";

export default function ParticleEmitter() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  let ctx: CanvasRenderingContext2D;

  const fire_colors = [
    "#ffffff", // White hot
    "#ffde5c", // Yellow
    "#ff8c1a", // Orange
    "#ff4d00", // Orange-red
    "#ff1a1a", // Red
    "#cc0000", // Dark red
    "#661a00", // Deep ember
  ];

  // Create particle pool
  const PARTICLE_COUNT = 500;
  const particles = Array.from(
    { length: PARTICLE_COUNT },
    () =>
      new Particle(
        window.innerWidth,
        window.innerHeight,
        fire_colors[Math.floor(Math.random() * fire_colors.length - 1)]
      )
  );

  const render = () => {
    if (!ctx) return;
    if (!canvasRef) return;

    // Clear with alpha for trails
    ctx.fillStyle = "rgba(186, 186, 186, 0.6)";
    ctx.fillRect(
      0,
      0,
      parseInt(canvasRef.current!.style.width),
      parseInt(canvasRef.current!.style.height)
    );

    // Update and draw particles
    particles.forEach((particle) => {
      particle.update();

      // Batch drawing using single path
      ctx.fillStyle = particle.color;

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(render);
  };

  useEffect(() => {
    if (canvasRef.current) {
      ctx = canvasRef.current.getContext("2d") as CanvasRenderingContext2D;
      const parent = canvasRef.current.parentElement!;
      // // Get the device pixel ratio
      const dpr = window.devicePixelRatio || 1;

      canvasRef.current.width = parent?.clientWidth * dpr;
      canvasRef.current.height = parent?.clientHeight * dpr;

      canvasRef.current.style.width = `${parent.clientWidth}px`;
      canvasRef.current.style.height = `${parent.clientHeight}px`;
      if (ctx) {
        ctx.scale(dpr, dpr);
        render();
      }
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed bottom-0 -z-10 h-screen w-screen"
    ></canvas>
  );
}
