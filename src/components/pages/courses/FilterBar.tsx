import {
  CategoryIcon,
  FilterIcon,
  LevelIcon,
  SortIcon,
} from "@/components/common/Icons";
import { filters } from "@/db/filter-bar";
import type { FilterIconKey } from "@/types/course";
import type { ReactNode } from "react";

const filterIcons: Record<FilterIconKey, ReactNode> = {
  filter: <FilterIcon className="h-6 w-6 text-ink" />,
  level: <LevelIcon className="h-6 w-6 text-ink" />,
  category: <CategoryIcon className="h-6 w-6 text-ink" />,
};

const PILL =
  "flex h-12 items-center gap-1 rounded-[24px] border border-[#ced0d3] bg-white px-4 py-3 text-base font-medium leading-[19.2px] text-[#4b4c53]";

const FilterBar = (): ReactNode => (
  <div className="flex flex-wrap items-center justify-between gap-3">
    <div className="flex flex-wrap items-center gap-4">
      {filters.map((filter) => (
        <button key={filter.label} type="button" className={PILL}>
          {filterIcons[filter.icon]}
          {filter.label}
        </button>
      ))}
    </div>

    <button type="button" className={PILL}>
      <SortIcon className="h-6 w-6 text-ink" />
      Most relevant
    </button>
  </div>
);

export default FilterBar;
