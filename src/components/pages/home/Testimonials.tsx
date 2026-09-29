"use client";

import { useEffect, useRef, useState } from "react";
import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide, type SwiperClass } from "swiper/react";
import "swiper/css";
import TestimonialCard from "@/components/common/TestimonialCard";
import GlowLayer from "@/components/ui/GlowLayer";
import { testimonialGlows, testimonials } from "@/db/testimonials";

const slides = [...testimonials, ...testimonials];
const pageCount = testimonials.length;

const arrowClass =
  "grid h-10 w-10 place-items-center rounded-full border border-black/15 bg-white text-ink transition hover:border-ink";

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
  const swiperRef = useRef<SwiperClass | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      swiperRef.current?.autoplay.stop();
    }
  }, []);

  const goTo = (index: number) => {
    swiperRef.current?.slideToLoop(index);
  };

  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] px-4 pb-10 pt-10 sm:pb-[57px] sm:pt-[74px] lg:px-6">
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
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div
          data-reveal
          style={{ "--reveal-delay": "0.12s" } as React.CSSProperties}
          className="relative mt-10 lg:mt-[72px]"
        >
          <Swiper
            modules={[A11y, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 41 },
            }}
            loop
            speed={700}
            grabCursor
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => setActive(swiper.realIndex % pageCount)}
          >
            {slides.map((testimonial, index) => (
              <SwiperSlide key={`${testimonial.id}-${index}`}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => swiperRef.current?.slidePrev()}
              className={arrowClass}
            >
              <ChevronIcon flipped />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: pageCount }, (_, index) => (
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
              onClick={() => swiperRef.current?.slideNext()}
              className={arrowClass}
            >
              <ChevronIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
