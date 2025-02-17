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
  let particles: Particle[];

  const render = () => {
    if (!ctx) return;
    if (!canvasRef.current) return;

    // Clear with alpha for trails
    ctx.fillStyle = "rgb(43, 43, 43)";
    ctx.fillRect(
      0,
      0,
      parseInt(canvasRef.current!.style.width),
      parseInt(canvasRef.current!.style.height)
    );

    // Update and draw particles
    particles.forEach((particle) => {
      particle.update();
      particle.draw(ctx);
    });

    requestAnimationFrame(render);
  };

  useEffect(() => {
    particles = Array.from(
      { length: PARTICLE_COUNT },
      () =>
        new Particle(
          window.innerWidth,
          window.innerHeight,
          fire_colors[Math.floor(Math.random() * fire_colors.length - 1)]
        )
    );

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

    return () => console.log("unmount");
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed bottom-0 -z-10 h-screen w-screen"
    ></canvas>
  );
}
