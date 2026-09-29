"use client";

import { useMemo, useState } from "react";
import { courses } from "@/db/courses";
import Banner from "@/components/pages/courses/Banner";
import CategoryTabs from "@/components/pages/courses/CategoryTabs";
import FilterBar from "@/components/pages/courses/FilterBar";
import Pagination from "@/components/pages/courses/Pagination";
import CourseGrid from "@/components/pages/courses/CourseGrid";
import useCourseFilters from "@/hooks/useCourseFilters";
import { filterCourses } from "@/utils/filter-courses";
import type { CourseListProps } from "@/types/course";

const PAGE_SIZE = 18;

const CourseList = ({ initialQuery = "" }: CourseListProps) => {
  const [search, setSearch] = useState(initialQuery);
  const [page, setPage] = useState(1);
  const [prevQuery, setPrevQuery] = useState(initialQuery);
  const { values, handleChange } = useCourseFilters(() => setPage(1));

  if (prevQuery !== initialQuery) {
    setPrevQuery(initialQuery);
    setSearch(initialQuery);
    setPage(1);
  }

  const filtered = useMemo(
    () => filterCourses(courses, { search, ...values }),
    [search, values],
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const visibleCourses = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const handleCategoryChange = (category: string) => {
    handleChange({ category });
  };

  const handlePageChange = (p: number) => {
    setPage(Math.max(1, Math.min(p, totalPages)));
  };

  return (
    <>
      <Banner search={search} onSearchChange={handleSearchChange} />

      <div className="container px-4 pb-10 xl:px-0 xl:pb-[72px]">
        <div className="pt-10 xl:pt-[72px]">
          <FilterBar values={values} onChange={handleChange} />
        </div>

        <div className="mt-5 xl:mt-8">
          <CategoryTabs
            active={values.category}
            onChange={handleCategoryChange}
          />
        </div>

        <div className="mt-10 xl:mt-[77px]">
          <h2 className="sr-only">Course results</h2>
          <CourseGrid courses={visibleCourses} />
        </div>

        <div className="mt-10 flex justify-center xl:mt-[72px]">
          <Pagination
            current={currentPage}
            total={totalPages}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};

export default CourseList;
