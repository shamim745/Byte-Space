"use client";

import { type RefObject, useEffect } from "react";

type ParallaxOptions = {
  origin?: "top" | "center";
};

const parseSpeed = (raw: string | undefined, height: number) => {
  if (!raw) return 0;
  if (raw.endsWith("%")) return (Number.parseFloat(raw) / 100) * height;
  return Number(raw) || 0;
};

const useParallax = (
  sectionRef: RefObject<HTMLElement | null>,
  options: ParallaxOptions = {},
) => {
  const { origin = "top" } = options;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const layers = Array.from(
      section.querySelectorAll<HTMLElement>("[data-parallax]"),
    );
    if (layers.length === 0) return;

    let raf = 0;

    const update = () => {
      raf = 0;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.bottom < -200 || rect.top > vh + 200) return;

      const raw =
        origin === "center"
          ? (vh / 2 - (rect.top + rect.height / 2)) / vh
          : -rect.top / Math.min(Math.max(rect.height, 1), vh);
      const progress =
        origin === "center" ? raw : Math.min(Math.max(raw, 0), 1);

      for (const layer of layers) {
        const speed = parseSpeed(layer.dataset.parallax, layer.offsetHeight);
        layer.style.transform = `translate3d(0, ${(progress * speed).toFixed(2)}px, 0)`;
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [sectionRef, origin]);
};

export default useParallax;
