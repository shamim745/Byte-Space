"use client";

import Dropdown from "@/components/common/Dropdown";
import { ChevronDownIcon, SearchIcon } from "@/components/common/Icons";
import { courses } from "@/db/courses";
import useParallax from "@/hooks/useParallax";
import { useRouter } from "next/navigation";
import { useRef } from "react";

type BannerProps = {
  search?: string;
  onSearchChange?: (value: string) => void;
};

const COURSE_ITEMS = courses.map((course) => ({
  value: String(course.id),
  label: course.title,
  hint: `by ${course.author} · $${course.price}`,
}));

const COURSES_PILL =
  "flex h-12 items-center lg:w-auto w-full justify-center gap-2 rounded-[24px] bg-accent px-6 py-3 text-[18px] font-medium leading-[21.6px] text-ink transition-opacity hover:opacity-90";

const Banner = ({ search, onSearchChange }: BannerProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const router = useRouter();
  useParallax(sectionRef);

  const handleCourseSelect = () => {
    router.push("/course-details");
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[300px] overflow-hidden bg-[#003be2] lg:min-h-[360px]"
    >
      <div
        aria-hidden
        data-parallax={160}
        className="design-grid pointer-events-none absolute left-0 right-0 top-[-200px] bottom-[-200px] will-change-transform"
      />

      <div
        data-parallax={-30}
        className="relative w-full will-change-transform"
      >
        <div
          data-reveal
          className="mx-auto flex w-full max-w-[624px] flex-col items-center px-4 pt-[88px] pb-10 lg:pt-[164px] lg:pb-[69px]"
        >
          <h1 className="text-center font-display text-[28px] font-semibold leading-[33.6px] text-[#f5f5f6] lg:text-[36px] lg:leading-[43.2px]">
            Find Your Next Course
          </h1>

          <form
            onSubmit={(event) => event.preventDefault()}
            className="mt-8 flex w-full flex-col items-stretch gap-4 sm:flex-row sm:items-start"
          >
            <label className="flex h-[52px] flex-1 items-center gap-2 rounded-[24px] bg-white px-6 py-3">
              <span className="sr-only">Search courses</span>
              <SearchIcon className="h-6 w-6 shrink-0 text-[#82868e]" />
              <input
                type="search"
                name="search"
                value={search}
                onChange={(event) => onSearchChange?.(event.target.value)}
                placeholder="Search"
                className="min-w-0 flex-1 bg-transparent text-[18px] leading-[28.8px] text-ink outline-none placeholder:text-[#82868e]"
              />
            </label>

            <Dropdown
              label="Courses"
              ariaLabel="All courses"
              trailingIcon={<ChevronDownIcon className="h-6 w-6 shrink-0" />}
              items={COURSE_ITEMS}
              value=""
              defaultValue=""
              pillClassName={COURSES_PILL}
              portal
              onChange={handleCourseSelect}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Banner;
