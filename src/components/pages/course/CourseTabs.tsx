"use client";

import { useState } from "react";
import type { CourseTabsProps } from "@/types/course";

const CourseTabs = ({ tabs }: CourseTabsProps) => {
  const [active, setActive] = useState(tabs[0]?.target ?? "");

  const handleClick = (target: string) => {
    setActive(target);
    document
      .getElementById(target)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="flex flex-wrap gap-3 sm:gap-4" aria-label="Course sections">
      {tabs.map((tab) => {
        const isActive = active === tab.target;

        return (
          <button
            key={tab.target}
            type="button"
            onClick={() => handleClick(tab.target)}
            aria-current={isActive ? "true" : undefined}
            className={`cursor-pointer rounded-[24px] px-4 py-3 text-[16px] font-medium leading-[19.2px] transition-colors duration-300 ${
              isActive
                ? "bg-[#D4FB20] text-ink"
                : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#ECECEE]"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
};

export default CourseTabs;
