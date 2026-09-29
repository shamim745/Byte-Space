"use client";

import { useState } from "react";
import Image from "next/image";
import { metaIcons } from "@/components/common/CourseIcons";
import SectionTitle from "@/components/ui/SectionTitle";
import { courseDetail } from "@/db/course-details";

const ReviewsSection = () => {
  const { reviews } = courseDetail;
  const StarIcon = metaIcons.rating;
  const [active, setActive] = useState(reviews.filters[0] ?? "all");

  const items =
    active === "all"
      ? reviews.items
      : reviews.items.filter((item) => item.rating === Number(active));

  return (
    <div
      id="reviews"
      className="flex scroll-mt-[104px] flex-col gap-6 xl:scroll-mt-[144px]"
    >
      <div className="flex flex-col gap-6">
        <SectionTitle>{reviews.heading}</SectionTitle>
        <p className="text-[16px] leading-[25.6px] text-[#4B4C53]">
          {reviews.text}
        </p>
      </div>

      <div className="flex flex-col gap-6 rounded-[16px] border border-[#DADCDE] p-6 sm:p-10 sm:flex-row sm:items-center">
        <div className="flex h-[140px] w-[128px] shrink-0 flex-col justify-center gap-2 rounded-[16px] bg-[#D4FB20] text-center">
          <span className="text-[14px] font-medium leading-[16.8px] text-ink">
            {reviews.summaryLabel}
          </span>
          <span className="font-display text-[36px] font-bold leading-[43.2px] tracking-[-0.36px] text-ink">
            {reviews.summaryScore}
          </span>
        </div>

        <ul className="flex min-w-0 flex-1 flex-col gap-5">
          {reviews.summaryRows.map((row) => (
            <li key={row.count} className="flex items-center gap-3 sm:gap-10">
              <span className="h-2 w-[53%] max-w-[260px] shrink overflow-hidden rounded-full bg-[#E5E6E8]">
                <span
                  className="block h-full rounded-full bg-[#D4FB20]"
                  style={{ width: `${row.percent}%` }}
                />
              </span>

              <span className="flex shrink-0 gap-1.5 sm:gap-2.5">
                {[0, 1, 2, 3, 4].map((star) => (
                  <StarIcon key={star} className="h-[18px] w-[18px] text-ink" />
                ))}
              </span>

              <span className="ml-auto shrink-0 text-right text-[16px] leading-[25.6px] text-[#4B4C53]">
                {row.count}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-6">
        <SectionTitle>{reviews.listHeading}</SectionTitle>

        <div className="flex flex-wrap gap-4 sm:gap-5">
          {reviews.filters.map((filter) => {
            const isActive = active === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                aria-pressed={isActive}
                className={`flex h-10 cursor-pointer items-center gap-2 rounded-[24px] px-4 text-[16px] font-medium leading-[19.2px] transition-colors duration-300 sm:px-5 ${
                  isActive
                    ? "bg-[#D4FB20] text-ink"
                    : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#ECECEE]"
                }`}
              >
                {filter !== "all" && <StarIcon className="h-4 w-4 shrink-0" />}
                {filter === "all" ? "All rating" : filter}
              </button>
            );
          })}
        </div>

        <ul className="flex flex-col gap-6">
          {items.map((item) => (
            <li
              key={item.name}
              className="flex flex-col gap-5 rounded-[16px] border border-[#DADCDE] p-6 sm:gap-7 sm:p-10"
            >
              <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                <div className="flex min-w-0 flex-1 items-center gap-3">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={52}
                    height={52}
                    className="h-[52px] w-[52px] shrink-0 rounded-full object-cover"
                  />
                  <div className="min-w-0">
                    <p className="text-[18px] font-bold leading-[21.6px] text-ink">
                      {item.name}
                    </p>
                    <p className="text-[16px] leading-[19.2px] text-[#4B4C53]">
                      {item.role}
                    </p>
                  </div>
                </div>

                <span className="ml-auto shrink-0 text-[14px] leading-[21px] text-[#4B4C53]">
                  {item.ago}
                </span>
              </div>

              <div className="flex gap-1.5 sm:gap-2.5">
                {Array.from({ length: item.rating }).map((_, star) => (
                  <StarIcon key={star} className="h-[18px] w-[18px] text-ink" />
                ))}
              </div>

              <p className="text-[16px] leading-[25.6px] text-[#4B4C53]">
                {item.text}
              </p>
            </li>
          ))}
        </ul>

        {items.length === 0 && (
          <p className="text-[16px] leading-[25.6px] text-[#4B4C53]">
            No reviews for this rating yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default ReviewsSection;
