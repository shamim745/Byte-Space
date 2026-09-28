"use client";

import { useEffect, useRef } from "react";

const HOVERABLE =
  'a, button, [role="button"], input, textarea, select, label, [data-cursor="pointer"]';

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    let x = -100;
    let y = -100;
    let rx = -100;
    let ry = -100;
    let visible = false;
    let raf = 0;

    const loop = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      const settled = Math.abs(x - rx) < 0.1 && Math.abs(y - ry) < 0.1;
      if (settled) {
        rx = x;
        ry = y;
        raf = 0;
        ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
        dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        return;
      }
      ring.style.transform = `translate3d(${rx.toFixed(2)}px, ${ry.toFixed(2)}px, 0)`;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (!raf) raf = requestAnimationFrame(loop);
    };

    const onMove = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (!visible) {
        visible = true;
        rx = x;
        ry = y;
        ring.classList.add("is-on");
        dot.classList.add("is-on");
      }
      start();
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const hover = !!target?.closest?.(HOVERABLE);
      ring.classList.toggle("is-hover", hover);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} aria-hidden className="cursor-ring" />
      <div ref={dotRef} aria-hidden className="cursor-dot" />
    </>
  );
}
