"use client";

import { useState } from "react";
import { CheckCircleIcon } from "@/components/common/CourseIcons";
import SectionTitle from "@/components/ui/SectionTitle";
import { courseDetail } from "@/db/course-details";
import Image from "next/image";
import CourseTabs from "./CourseTabs";
import LessonsSection from "./LessonsSection";
import ReviewsSection from "./ReviewsSection";

const CourseOverview = () => {
  const [active, setActive] = useState(courseDetail.tabs[0]?.target ?? "");

  return (
    <div className="flex flex-col gap-10">
      <CourseTabs tabs={courseDetail.tabs} active={active} onChange={setActive} />

      {active === "about" && (
        <div
          id="about"
          className="flex scroll-mt-[104px] flex-col gap-6 xl:scroll-mt-[144px]"
        >
          <SectionTitle>Description</SectionTitle>

          <p className="whitespace-pre-line text-[16px] leading-[25.6px] text-[#4B4C53]">
            {courseDetail.description}
          </p>

          <SectionTitle>Sneak Peak</SectionTitle>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-[19px]">
            {courseDetail.sneakPeaks.map((peak) => (
              <div
                key={peak.image}
                className="relative aspect-[167/125] overflow-hidden rounded-[16px]"
              >
                <Image
                  src={peak.image}
                  alt={peak.alt}
                  fill
                  sizes="(min-width: 1024px) 180px, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <SectionTitle>Key Points</SectionTitle>

          <ul className="flex flex-col gap-3">
            {courseDetail.keyPoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 text-[16px] leading-[25.6px] text-[#4B4C53]"
              >
                <span className="grid h-6 w-6 shrink-0 place-items-center">
                  <CheckCircleIcon className="h-5 w-5 text-[#003BE2]" />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      )}

      {active === "lessons" && <LessonsSection />}

      {active === "reviews" && <ReviewsSection />}
    </div>
  );
};

export default CourseOverview;
