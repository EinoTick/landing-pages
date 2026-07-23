"use client";

import { useEffect, useState } from "react";

export function MouseSpotlight() {
  const [enabled, setEnabled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointerQuery = window.matchMedia("(pointer: fine)");

    const syncEnabled = () => {
      setEnabled(!motionQuery.matches && finePointerQuery.matches);
    };

    syncEnabled();
    motionQuery.addEventListener("change", syncEnabled);
    finePointerQuery.addEventListener("change", syncEnabled);

    return () => {
      motionQuery.removeEventListener("change", syncEnabled);
      finePointerQuery.removeEventListener("change", syncEnabled);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-50 transition duration-300"
      style={{
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), transparent 40%)`,
      }}
    />
  );
}
