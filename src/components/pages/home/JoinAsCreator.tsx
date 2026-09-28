"use client";

import useParallax from "@/hooks/useParallax";
import { creatorShapes } from "@/db/join-as-creator";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const JoinAsCreator = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useParallax(sectionRef, { origin: "center", mouse: true });

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex items-center overflow-hidden bg-[#003BE2] px-4 py-14 sm:px-6 sm:py-16 md:min-h-[488px] md:py-0"
    >
      <div aria-hidden className="design-grid pointer-events-none absolute inset-0" />

      <div aria-hidden className="pointer-events-none absolute inset-0">
        {creatorShapes.map((shape) => (
          <Image
            key={shape.src}
            src={shape.src}
            alt=""
            width={shape.width}
            height={shape.height}
            sizes={shape.sizes}
            className="absolute h-auto will-change-transform"
            style={shape.style}
            data-parallax={shape.speed}
            data-mouse={shape.mouse}
          />
        ))}
      </div>

      <div
        data-reveal
        className="relative z-10 mx-auto flex w-full max-w-[964px] flex-col items-center gap-10 text-center"
      >
        <h2 className="max-w-[710px] text-[28px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#F5F5F6] sm:text-[36px] lg:text-[44px]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>

        <p className="text-base font-normal leading-[1.6] text-[#F5F5F6] lg:text-[18px] lg:leading-[28.8px]">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <Link
          href="/become-a-creator"
          className="rounded-3xl bg-[#D4FB20] px-6 py-3 text-lg font-medium leading-[22px] text-[#242528] transition hover:brightness-95"
        >
          Join as Creator
        </Link>
      </div>
    </section>
  );
};

export default JoinAsCreator;
