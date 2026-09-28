"use client";

import { FEATURED } from "@/db/courses";
import type { CategoryTabsProps } from "@/types/course";
import type { ReactNode } from "react";

const TABS = [
  FEATURED,
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

const CategoryTabs = ({ active, onChange }: CategoryTabsProps): ReactNode => (
  <div className="flex items-center gap-4 overflow-x-auto no-scrollbar xl:justify-between xl:overflow-visible">
    {TABS.map((tab) => {
      const isActive = tab === active;
      return (
        <button
          key={tab}
          type="button"
          onClick={() => onChange(tab)}
          aria-pressed={isActive}
          className={`flex h-[43px] shrink-0 items-center whitespace-nowrap rounded-[24px] px-4 py-3 text-base font-medium leading-[19.2px] transition-colors ${
            isActive
              ? "bg-accent text-ink"
              : "bg-[#f5f5f6] text-[#4b4c53] hover:bg-[#ececec]"
          }`}
        >
          {tab}
        </button>
      );
    })}
  </div>
);

export default CategoryTabs;
