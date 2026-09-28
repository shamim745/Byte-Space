"use client";

import { useMemo, useState } from "react";
import { courses, FEATURED } from "@/db/courses";
import Banner from "@/components/pages/courses/Banner";
import CategoryTabs from "@/components/pages/courses/CategoryTabs";
import FilterBar from "@/components/pages/courses/FilterBar";
import Pagination from "@/components/pages/courses/Pagination";
import CourseGrid from "@/components/pages/courses/CourseGrid";
import type { CourseListProps } from "@/types/course";

const PAGE_SIZE = 18;

const CourseList = ({ initialQuery = "" }: CourseListProps) => {
  const [search, setSearch] = useState(initialQuery);
  const [category, setCategory] = useState(FEATURED);
  const [page, setPage] = useState(1);
  const [prevQuery, setPrevQuery] = useState(initialQuery);

  if (prevQuery !== initialQuery) {
    setPrevQuery(initialQuery);
    setSearch(initialQuery);
    setPage(1);
  }

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return courses.filter((course) => {
      const byCat = category === FEATURED || course.category === category;
      const bySearch = !q || course.title.toLowerCase().includes(q);
      return byCat && bySearch;
    });
  }, [search, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const visibleCourses = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const handleCategoryChange = (cat: string) => {
    setCategory(cat);
    setPage(1);
  };

  const handlePageChange = (p: number) => {
    setPage(Math.max(1, Math.min(p, totalPages)));
  };

  return (
    <>
      <Banner search={search} onSearchChange={handleSearchChange} />

      <div className="container px-4 pb-[72px] xl:px-0">
        <div className="pt-[72px]">
          <FilterBar />
        </div>

        <div className="mt-8">
          <CategoryTabs active={category} onChange={handleCategoryChange} />
        </div>

        <div className="mt-[77px]">
          <h2 className="sr-only">Course results</h2>
          <CourseGrid courses={visibleCourses} />
        </div>

        <div className="mt-[72px] flex justify-center">
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
