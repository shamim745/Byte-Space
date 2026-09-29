"use client";

import {
  CategoryIcon,
  FilterIcon,
  LevelIcon,
  SortIcon,
} from "@/components/common/Icons";
import Dropdown, { DEFAULT_PILL } from "@/components/common/Dropdown";
import { FEATURED } from "@/db/courses";
import { categories } from "@/db/categories";
import { filters } from "@/db/filter-bar";
import { useState } from "react";
import type { FilterBarProps, FilterIconKey } from "@/types/course";
import type { DropdownItem } from "@/types/common";
import type { ReactNode } from "react";

const filterIcons: Record<FilterIconKey, ReactNode> = {
  filter: <FilterIcon className="h-6 w-6 text-ink" />,
  level: <LevelIcon className="h-6 w-6 text-ink" />,
  category: <CategoryIcon className="h-6 w-6 text-ink" />,
};

const [featuredFilter, levelFilter, categoryFilter] = filters;

const PILL = `${DEFAULT_PILL} w-full lg:w-auto`;

const FILTER_ITEMS: DropdownItem[] = [
  { value: "all", label: "All courses" },
  { value: "featured", label: "Featured only" },
];

const LEVEL_ITEMS: DropdownItem[] = [
  { value: "all", label: "All levels" },
  { value: "Beginner", label: "Beginner" },
  { value: "Intermediate", label: "Intermediate" },
  { value: "Advanced", label: "Advanced" },
];

const CATEGORY_ITEMS: DropdownItem[] = [
  { value: FEATURED, label: FEATURED },
  ...categories.map((category) => ({ value: category, label: category })),
];

const SORT_ITEMS: DropdownItem[] = [
  { value: "relevant", label: "Most relevant" },
  { value: "rating", label: "Top rated" },
  { value: "students", label: "Most students" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
];

// menu max height (280) + top gap (8) + slack so open menus never cover
// the buttons below them on mobile; hidden on lg+ where menus overlay
const PUSH_HEIGHT = 296;

type FilterId = "featured" | "level" | "category" | "sort";

const FilterBar = ({ values, onChange }: FilterBarProps): ReactNode => {
  const [openId, setOpenId] = useState<FilterId | null>(null);

  const control = (id: FilterId) => ({
    open: openId === id,
    onOpenChange: (isOpen: boolean) => setOpenId(isOpen ? id : null),
  });

  const rowTopOpen = openId === "featured" || openId === "level";
  const rowBottomOpen = openId === "category" || openId === "sort";

  return (
    <div>
      <div className="grid grid-cols-2 items-center gap-2 lg:flex lg:flex-wrap lg:justify-between lg:gap-4">
        <div className="contents lg:flex lg:flex-wrap lg:items-center lg:gap-4">
          <Dropdown
            label={featuredFilter.label}
            icon={filterIcons[featuredFilter.icon]}
            items={FILTER_ITEMS}
            value={values.featured}
            defaultValue="all"
            pillClassName={PILL}
            onChange={(value) => onChange({ featured: value })}
            {...control("featured")}
          />
          <Dropdown
            label={levelFilter.label}
            icon={filterIcons[levelFilter.icon]}
            items={LEVEL_ITEMS}
            value={values.level}
            defaultValue="all"
            pillClassName={PILL}
            onChange={(value) => onChange({ level: value })}
            {...control("level")}
          />
        </div>

        {rowTopOpen && (
          <div
            aria-hidden
            className="col-span-2 lg:hidden"
            style={{ height: PUSH_HEIGHT }}
          />
        )}

        <Dropdown
          label={categoryFilter.label}
          icon={filterIcons[categoryFilter.icon]}
          items={CATEGORY_ITEMS}
          value={values.category}
          defaultValue={FEATURED}
          pillClassName={PILL}
          onChange={(value) => onChange({ category: value })}
          {...control("category")}
        />

        <div className="lg:ml-auto">
          <Dropdown
            label="Most relevant"
            icon={<SortIcon className="h-6 w-6 text-ink" />}
            items={SORT_ITEMS}
            value={values.sort}
            defaultValue="relevant"
            align="right"
            pillClassName={PILL}
            onChange={(value) => onChange({ sort: value })}
            {...control("sort")}
          />
        </div>
      </div>

      {rowBottomOpen && (
        <div
          aria-hidden
          className="lg:hidden"
          style={{ height: PUSH_HEIGHT }}
        />
      )}
    </div>
  );
};

export default FilterBar;
