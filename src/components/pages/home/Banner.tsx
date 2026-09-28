"use client";

import Image from "next/image";
import { heroShapes, type HeroShapeKey } from "@/components/brand/shapes";
import useParallax from "@/hooks/useParallax";
import { useRef } from "react";

/**
 * Home hero — geometry taken 1:1 from Figma "Hero_Frame" (1:1695), a 1440 x 1024
 * frame. Every number is expressed in design pixels relative to that frame and
 * multiplied by `--u` (see .hero-art in globals.css), so the artwork stays
 * pixel-identical between 1920px and 1024px and scales down below that.
 *
 * `scroll` is how far a layer lags behind the section as it scrolls past
 * (px over the full hero) and `mouse` how far it drifts at full pointer
 * deflection — deeper layers lag more and move less with the pointer.
 */
const DESIGN_CENTER = 720;

/** Distance from the bottom of the 1024px design frame. */
const FRAME_HEIGHT = 1024;

type Shape = {
  key: HeroShapeKey;
  x: number;
  y: number;
  size: number;
  rotate?: number;
  scroll: number;
  mouse: number;
  /** 'left' / 'right' when the artwork bleeds past the 1440 frame edge, so it
      stays cropped by the viewport exactly like Figma crops it. */
  anchor?: "left" | "right";
};

const shapes: Shape[] = [
  { key: "topLeftLime", x: -121.6, y: 221, size: 386.8, anchor: "left", scroll: 52, mouse: 14 },
  { key: "cylinderLime", x: 1227.1, y: 220.2, size: 371.8, anchor: "right", scroll: 52, mouse: 14 },
  { key: "coneWhite", x: 1104, y: 463.6, size: 188.9, scroll: 44, mouse: 20 },
  { key: "spiralSmallWhite", x: 183.8, y: 477, size: 175.8, rotate: 180, scroll: 40, mouse: 28 },
  { key: "torusWhite", x: 14.4, y: 681.3, size: 343.7, scroll: 48, mouse: 24 },
  { key: "spiralLargeWhite", x: 1123.9, y: 672, size: 331.5, anchor: "right", scroll: 40, mouse: 28 },
];

const shapeVars = ({ x, y, size, anchor }: Shape) => {
  const u = " * var(--u, 1px)";
  const horizontal =
    anchor === "left"
      ? { left: `calc(${x}${u})` }
      : anchor === "right"
        ? { right: `calc(${1440 - x - size}${u})` }
        : { left: `calc(50% + ${x - DESIGN_CENTER}${u})` };
  return {
    ...horizontal,
    "--t": y,
    "--b": FRAME_HEIGHT - (y + size),
    "--s": size,
  } as unknown as React.CSSProperties;
};

/** Floating cards — [x, y] in design px from the top-left of the frame. */
const cardAt = (x: number, y: number) => {
  const delta = x - 720;
  const operator = delta < 0 ? "-" : "+";
  return {
    left: `calc(50% ${operator} ${Math.abs(delta)}px)`,
    top: y + "px",
  } as React.CSSProperties;
};

/** Layered drop shadow from Figma node 1:1796 (the hero photo). */
const imageShadow = [
  "drop-shadow(16.9px 24.2px 24px rgba(0,0,0,0.09))",
  "drop-shadow(51px 72.9px 72px rgba(0,0,0,0.13))",
].join(" ");

const avatars = Array.from(
  { length: 7 },
  (_, i) => `/assets/images/auth/avatar-${i + 1}.png`,
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 shrink-0" aria-hidden="true">
    <circle cx="11" cy="11" r="7" stroke="#82868E" strokeWidth="2" />
    <path d="M20 20l-4-4" stroke="#82868E" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 16 16" className="h-4 w-4 shrink-0" aria-hidden="true">
    <path
      d="M8 0l2.35 4.76L15.5 5.5l-3.75 3.66.89 5.16L8 11.8l-4.64 2.52.89-5.16L.5 5.5l5.15-.74L8 0z"
      fill="#D4FB20"
    />
  </svg>
);

const Banner = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useParallax(sectionRef, { mouse: true });

  return (
    <section
      ref={sectionRef}
      className="hero-art relative isolate overflow-hidden bg-[#003BE2] lg:h-[1024px]"
    >
      <div aria-hidden className="hero-grid pointer-events-none absolute inset-y-0 left-[calc(50%_-_3600px)] w-[7200px]" />

      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="hero-ring" data-parallax={64} data-mouse={6} />
        {shapes.map((shape) => {
          const { src, width, height } = heroShapes[shape.key];
          const { scroll, mouse } = shape;
          return (
            <div
              key={shape.key}
              className="hero-shape"
              style={shapeVars(shape)}
              data-parallax={scroll}
              data-mouse={mouse}
            >
              <Image
                src={src}
                alt=""
                width={width}
                height={height}
                className="hero-shape-art select-none"
                style={
                  shape.rotate
                    ? ({ "--r": `${shape.rotate}deg` } as React.CSSProperties)
                    : undefined
                }
              />
            </div>
          );
        })}
      </div>

      <div className="relative z-10 px-4 pt-[100px] sm:px-6 lg:pt-[169px]">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <div className="flex flex-col items-center gap-6 lg:gap-8">
              <h1 className="max-w-[935px] font-display text-[32px] font-semibold leading-[1.15] tracking-[-0.01em] text-white sm:text-[48px] md:text-[56px] lg:w-[935px] lg:text-[72px] lg:leading-[86.4px]">
                Get Access to Hundreds
                <br className="hidden md:inline" />
                <span className="md:hidden"> </span>
                Courses Available
              </h1>
              <p className="max-w-[819px] text-[16px] leading-[1.6] text-[#E5E6E8] lg:text-[18px] lg:leading-[28.8px]">
                Unlock your creativity, gain valuable knowledge, and grow your
                business with our wide range of courses.
              </p>
            </div>

            <form
              className="mt-8 flex w-full max-w-[581px] flex-col gap-4 sm:mt-[60px] sm:flex-row sm:items-start"
              role="search"
              action="/courses"
            >
              <div className="flex h-[52px] w-full min-w-0 items-center gap-2 rounded-[24px] bg-white px-6 sm:flex-1">
                <SearchIcon />
                <input
                  type="search"
                  name="q"
                  placeholder="Course, topic, creator"
                  className="w-full min-w-0 bg-transparent text-[16px] leading-[28.8px] text-[#242528] outline-none placeholder:text-[#82868E] lg:text-[18px]"
                />
              </div>
              <button
                type="submit"
                className="h-[46px] shrink-0 rounded-[24px] bg-[#D4FB20] px-6 text-[18px] font-medium leading-[21.6px] text-[#242528] transition hover:brightness-95 sm:w-[104px]"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>

      <div
        className="relative z-10 mx-auto mt-8 aspect-[578/541] w-full max-w-[578px] will-change-transform lg:absolute lg:aspect-auto lg:left-[calc(50%_-_289px)] lg:top-[512px] lg:mt-0 lg:h-[541px] lg:w-[578px] lg:max-w-none"
        data-parallax={24}
        data-mouse={8}
      >
        <Image
          src="/assets/images/brand/hero-student.png"
          alt="Student exploring ByteSpace courses"
          fill
          sizes="(max-width: 1023px) 100vw, 578px"
          className="object-cover object-center"
          style={{ filter: imageShadow }}
          priority
        />
      </div>

      <div
        className="absolute hidden h-[70px] w-[208px] flex-col justify-center rounded-2xl bg-white p-4 z-10 will-change-transform lg:flex"
        style={cardAt(404, 639)}
        data-parallax={12}
        data-mouse={14}
      >
        <p className="text-[16px] font-medium leading-[19.2px] text-[#242528]">UI/UX Design</p>
        <div className="flex items-center gap-2 text-[12px] leading-[19.2px] text-[#82868E]">
          <span>200 Courses</span>
          <span className="text-[10px] leading-[15px]">•</span>
          <span>1000+ Students</span>
        </div>
      </div>

      <div
        className="absolute hidden h-[131px] w-[232px] flex-col gap-2 rounded-2xl bg-white p-4 z-10 will-change-transform lg:flex"
        style={cardAt(842, 651)}
        data-parallax={12}
        data-mouse={14}
      >
        <p className="text-[14px] font-medium leading-[16.8px] text-[#242528]">
          Learning Progress
        </p>
        <p className="font-display text-[48px] font-semibold leading-[57.6px] tracking-[-0.48px] text-[#242528]">
          55%
        </p>
        <div className="h-2 w-full rounded-full bg-[#F6F6F6]">
          <div className="h-2 w-[56%] rounded-full bg-[#D4FB20]" />
        </div>
      </div>

      <div
        className="absolute hidden h-[121px] w-[258px] flex-col gap-2 rounded-2xl bg-white p-4 z-10 will-change-transform lg:flex"
        style={cardAt(328, 837)}
        data-parallax={12}
        data-mouse={14}
      >
        <div>
          <p className="text-[16px] font-medium leading-[19.2px] text-[#242528]">
            Happy Students
          </p>
          <div className="flex items-center">
            <span className="text-[12px] leading-[19.2px] text-[#82868E]">4.5 (240)</span>
            <StarIcon />
          </div>
        </div>
        <div className="flex w-[232px] items-center">
          {avatars.map((avatar, i) => (
            <Image
              key={avatar}
              src={avatar}
              alt=""
              width={43}
              height={43}
              className={`h-[43px] w-[43px] rounded-full border-2 border-white object-cover ${i === 0 ? "" : "-ml-4"}`}
            />
          ))}
          <div className="-ml-4 flex h-[43px] w-[43px] items-center justify-center rounded-full border-2 border-white bg-[#D4FB20] text-[12px] font-bold leading-[18px] text-[#242528]">
            2K+
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
