"use client";

import { courses } from "@/db/courses";
import FilterBar from "@/components/pages/courses/FilterBar";
import CourseGrid from "@/components/pages/courses/CourseGrid";
import Banner from "@/components/pages/creator/Banner";

const CREATOR_COURSES = courses
  .filter((course) => course.featured)
  .slice(0, 6)
  .map((course) => ({ ...course, author: "purepearl studio" }));

const CreatorProfile = () => (
  <>
    <Banner />

    <div
      id="creator-courses"
      className="container px-4 pb-[61px] xl:px-0"
    >
      <div className="pt-[62px]">
        <FilterBar />
      </div>

      <div className="mt-10">
        <h2 className="sr-only">Courses by this creator</h2>
        <CourseGrid courses={CREATOR_COURSES} />
      </div>
    </div>
  </>
);

export default CreatorProfile;
