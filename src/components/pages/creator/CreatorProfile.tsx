"use client";

import { courses } from "@/db/courses";
import FilterBar from "@/components/pages/courses/FilterBar";
import CourseGrid from "@/components/pages/courses/CourseGrid";
import Banner from "@/components/pages/creator/Banner";
import useCourseFilters from "@/hooks/useCourseFilters";
import { filterCourses } from "@/utils/filter-courses";
import { useMemo } from "react";

const CREATOR_COURSES = courses
  .filter((course) => course.featured)
  .slice(0, 6)
  .map((course) => ({ ...course, author: "purepearl studio" }));

const CreatorProfile = () => {
  const { values, handleChange } = useCourseFilters();

  const filtered = useMemo(
    () => filterCourses(CREATOR_COURSES, values),
    [values],
  );

  return (
    <>
      <Banner />

      <div
        id="creator-courses"
        className="container px-4 pb-10 xl:px-0 xl:pb-[61px]"
      >
        <div className="pt-10 xl:pt-[62px]">
          <FilterBar values={values} onChange={handleChange} />
        </div>

        <div className="mt-10">
          <h2 className="sr-only">Courses by this creator</h2>
          <CourseGrid courses={filtered} />
        </div>
      </div>
    </>
  );
};

export default CreatorProfile;
