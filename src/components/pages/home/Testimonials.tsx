"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import TestimonialCard from "@/components/common/TestimonialCard";
import GlowLayer from "@/components/ui/GlowLayer";
import { testimonialGlows, testimonials } from "@/db/testimonials";

const slideClass =
  "w-full shrink-0 snap-start sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-82px)/3)]";

const arrowClass =
  "grid h-10 w-10 place-items-center rounded-full border border-black/15 bg-white text-ink transition hover:border-ink disabled:cursor-not-allowed disabled:opacity-40";

const ChevronIcon = ({ flipped = false }: { flipped?: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={`h-4 w-4 ${flipped ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 5l7 7-7 7" />
  </svg>
);

const Testimonials = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [scrollable, setScrollable] = useState(false);

  const sync = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const slides = Array.from(track.querySelectorAll<HTMLElement>("[data-slide]"));
    const maxScroll = track.scrollWidth - track.clientWidth;
    setScrollable(maxScroll > 4);

    if (!slides.length) return;

    let last = 0;
    slides.forEach((slide, index) => {
      if (slide.offsetLeft <= maxScroll + 4) last = index;
    });
    setMaxIndex(last);

    const nearest = slides.reduce(
      (best, slide, index) =>
        Math.abs(slide.offsetLeft - track.scrollLeft) <
        Math.abs(slides[best].offsetLeft - track.scrollLeft)
          ? index
          : best,
      0,
    );
    setActive(nearest);
  }, []);

  useEffect(() => {
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, [sync]);

  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;

    const target = Math.min(Math.max(index, 0), maxIndex);
    const slide = track.querySelectorAll<HTMLElement>("[data-slide]")[target];
    if (slide) track.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
  };

  const pages = Array.from({ length: maxIndex + 1 }, (_, index) => index);

  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] px-4 pb-14 pt-16 sm:pb-[57px] sm:pt-[74px] lg:px-6">
      <GlowLayer glows={testimonialGlows} />

      <div className="container relative">
        <div
          data-reveal
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-[43px]"
        >
          <h2 className="max-w-[577px] text-[28px] font-semibold leading-[34px] tracking-[-0.44px] text-black sm:text-[44px] sm:leading-[53px]">
            Discover What Our Community Is Saying
          </h2>

          <p className="max-w-[580px] text-lg leading-[29px] text-[#4F4F4F]">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what
            we do. Hear directly from those who have experienced the transformative journey of
            learning and creating on our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div
          ref={trackRef}
          onScroll={sync}
          data-reveal
          style={{ "--reveal-delay": "0.12s" } as React.CSSProperties}
          className="no-scrollbar relative mt-10 flex snap-x snap-mandatory items-start gap-6 overflow-x-auto pb-1 lg:mt-[72px] lg:gap-[41px]"
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} data-slide className={slideClass}>
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        {scrollable && (
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => goTo(active - 1)}
              disabled={active <= 0}
              className={arrowClass}
            >
              <ChevronIcon flipped />
            </button>

            <div className="flex items-center gap-2">
              {pages.map((index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === active}
                  onClick={() => goTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === active ? "w-6 bg-ink" : "w-2 bg-black/20"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => goTo(active + 1)}
              disabled={active >= maxIndex}
              className={arrowClass}
            >
              <ChevronIcon />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
