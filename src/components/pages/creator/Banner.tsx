"use client";

import type { Stat } from "@/types/common";
import useParallax from "@/hooks/useParallax";
import Image from "next/image";
import { useRef } from "react";

const AVATAR = "/assets/images/temp/creator-avatar.png";

const Stat = ({ value, label }: Stat) => (
  <span className="flex items-center gap-2 rounded-[24px] bg-white px-6 py-3 text-[18px] font-medium leading-[21.6px]">
    <span className="text-[#003be2]">{value}</span>
    <span className="text-ink">{label}</span>
  </span>
);

const Banner = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useParallax(sectionRef);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#003be2]">
      <div
        aria-hidden
        data-parallax={200}
        className="design-grid pointer-events-none absolute left-0 right-0 top-[-260px] bottom-[-260px] will-change-transform"
      />

      <div
        data-parallax={-40}
        className="relative w-full will-change-transform"
      >
        <div
          data-reveal
          className="container px-4 pt-[120px] pb-[56px] sm:pt-[152px] lg:pt-[172px] lg:pb-[82px] xl:px-0"
        >
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-6">
          <Image
            src={AVATAR}
            alt="PurePearl Studio"
            width={96}
            height={96}
            className="h-16 w-16 shrink-0 rounded-[24px] object-cover sm:h-24 sm:w-24"
          />

          <div className="flex min-w-0 flex-col gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="font-display text-[28px] font-semibold leading-[33.6px] tracking-[-0.36px] text-[#f5f5f6] lg:text-[36px] lg:leading-[43.2px]">
                PurePearl Studio
              </h1>
              <span className="rounded-[24px] bg-accent px-6 py-2 text-base font-medium leading-[19.2px] text-ink">
                Creator
              </span>
            </div>

            <p className="text-[18px] leading-[28.8px] text-[#f5f5f6]">
              Passionate UI/UX, Web designer
            </p>
          </div>
        </div>

        <p className="mt-8 max-w-[1197px] text-[18px] leading-[28.8px] text-[#f5f5f6] lg:mt-10">
          Welcome to the creative world of [Creator&apos;s Name]. Here, you&apos;ll
          discover the passion, expertise, and inspiration that drive my creative
          journey. Let&apos;s explore and learn together!
          <br className="hidden sm:block" /> Dive into my creative portfolio,
          showcasing a glimpse of my artistic endeavors. From digital designs to
          multimedia projects, each piece tells a unique story. Explore the world
          of creativity with me.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:mt-10">
          <div className="flex flex-wrap items-center gap-4">
            <Stat value="3" label="Products" />
            <Stat value="12" label="Followers" />
          </div>

          <button
            type="button"
            className="w-fit rounded-[24px] bg-accent px-6 py-3 text-[18px] font-medium leading-[21.6px] text-[#040819] transition-opacity hover:opacity-90"
          >
            Follow
          </button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
