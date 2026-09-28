"use client";

import useParallax from "@/hooks/useParallax";
import Link from "next/link";
import { useRef } from "react";

const numberGradient =
  "linear-gradient(180deg, #D4FB20 0%, rgba(212, 251, 32, 0.96) 25%, rgba(212, 251, 32, 0.81) 50.5%, rgba(212, 251, 32, 0.61) 68%, rgba(212, 251, 32, 0) 100%)";

const NotFoundHero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useParallax(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#003BE2] px-4 pt-[104px] pb-[64px] sm:pt-[132px] lg:px-0 lg:pt-[160px] lg:pb-[125px]"
    >
      <h1
        data-parallax="35%"
        className="mb-[-0.248em] bg-clip-text text-center font-display text-[132px] font-semibold leading-none tracking-[-0.01em] text-transparent will-change-transform sm:text-[260px] lg:text-[480px]"
        style={{ backgroundImage: numberGradient }}
      >
        404
      </h1>

      <div
        aria-hidden="true"
        className="design-grid pointer-events-none absolute inset-0"
      />

      <div className="relative flex flex-col items-center gap-6 text-center lg:gap-8">
        <h2 className="max-w-[935px] font-display text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-white sm:text-[48px] lg:text-[72px] lg:leading-[86.4px]">
          The page you are looking for doesn’t exist
        </h2>

        <p className="max-w-[560px] text-[16px] leading-[1.6] text-[#E5E6E9] lg:text-[18px] lg:leading-[28.8px]">
          Try to use a correct url or go back to homepage to start again
        </p>

        <Link
          href="/"
          className="rounded-[24px] bg-[#D4FB20] px-6 py-3 text-[16px] font-medium leading-[21.6px] text-ink transition-transform duration-300 hover:-translate-y-0.5 lg:text-[18px]"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFoundHero;
