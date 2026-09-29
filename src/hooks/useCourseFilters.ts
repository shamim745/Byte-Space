"use client";

import { FEATURED } from "@/db/courses";
import type { FilterValues } from "@/types/course";
import { useCallback, useState } from "react";

const INITIAL_FILTERS: FilterValues = {
  featured: "all",
  level: "all",
  category: FEATURED,
  sort: "relevant",
};

const useCourseFilters = (onFilterChange?: () => void) => {
  const [values, setValues] = useState<FilterValues>(INITIAL_FILTERS);

  const handleChange = useCallback(
    (patch: Partial<FilterValues>) => {
      setValues((current) => ({ ...current, ...patch }));
      onFilterChange?.();
    },
    [onFilterChange],
  );

  return { values, handleChange };
};

export default useCourseFilters;
