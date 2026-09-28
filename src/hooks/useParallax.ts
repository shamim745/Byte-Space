"use client";

import { type RefObject, useEffect } from "react";

type ParallaxOptions = {
  origin?: "top" | "center";
  /** Drift each layer towards the pointer inside the section (fine pointers only). */
  mouse?: boolean;
};

type Layer = {
  el: HTMLElement;
  /** px the layer travels over the section's scroll progress */
  speed: number;
  /** px the layer travels at full pointer deflection */
  drift: number;
};

const parseSpeed = (raw: string | undefined, height: number) => {
  if (!raw) return 0;
  if (raw.endsWith("%")) return (Number.parseFloat(raw) / 100) * height;
  return Number(raw) || 0;
};

const EASE = 0.085;

const useParallax = (
  sectionRef: RefObject<HTMLElement | null>,
  options: ParallaxOptions = {},
) => {
  const { origin = "top", mouse = false } = options;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const layers: Layer[] = Array.from(
      section.querySelectorAll<HTMLElement>("[data-parallax]"),
    ).map((el) => ({
      el,
      speed: parseSpeed(el.dataset.parallax, el.offsetHeight),
      drift: mouse ? Number(el.dataset.mouse) || 0 : 0,
    }));
    if (layers.length === 0) return;

    const trackPointer =
      mouse && window.matchMedia("(pointer: fine)").matches;

    let progress = 0;
    // pointer deflection, -1..1 on each axis
    let targetX = 0;
    let targetY = 0;
    let easedX = 0;
    let easedY = 0;
    let raf = 0;

    const measure = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.bottom < -200 || rect.top > vh + 200) return false;

      const raw =
        origin === "center"
          ? (vh / 2 - (rect.top + rect.height / 2)) / vh
          : -rect.top / Math.min(Math.max(rect.height, 1), vh);
      progress =
        origin === "center" ? raw : Math.min(Math.max(raw, 0), 1);
      return true;
    };

    const render = () => {
      for (const layer of layers) {
        const x = easedX * layer.drift;
        const y = progress * layer.speed + easedY * layer.drift;
        layer.el.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`;
      }
    };

    const tick = () => {
      raf = 0;
      const dx = targetX - easedX;
      const dy = targetY - easedY;
      if (Math.abs(dx) < 0.0015 && Math.abs(dy) < 0.0015) {
        easedX = targetX;
        easedY = targetY;
        render();
        return;
      }
      easedX += dx * EASE;
      easedY += dy * EASE;
      render();
      raf = requestAnimationFrame(tick);
    };

    const settle = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      if (measure()) render();
    };

    const onMove = (event: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      targetX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      targetY = ((event.clientY - rect.top) / rect.height) * 2 - 1;
      settle();
    };

    const onLeave = () => {
      targetX = 0;
      targetY = 0;
      settle();
    };

    measure();
    render();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    if (trackPointer) {
      section.addEventListener("pointermove", onMove, { passive: true });
      section.addEventListener("pointerleave", onLeave);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (trackPointer) {
        section.removeEventListener("pointermove", onMove);
        section.removeEventListener("pointerleave", onLeave);
      }
      if (raf) cancelAnimationFrame(raf);
    };
  }, [sectionRef, origin, mouse]);
};

export default useParallax;
