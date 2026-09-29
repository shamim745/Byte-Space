"use client";

import CourseCard from "@/components/common/CourseCard";
import type { CourseGridProps } from "@/types/course";

const CourseGrid = ({ courses }: CourseGridProps) => {
  if (courses.length === 0) {
    return (
      <div className="flex w-full items-center justify-center py-20 text-center text-ink/60">
        <p className="text-lg font-display">No courses found.</p>
      </div>
    );
  }

  return (
    <ul
      className="grid gap-6 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      role="list"
      aria-label="Courses"
    >
      {courses.map((course) => (
        <li key={course.id}>
          <CourseCard course={course} />
        </li>
      ))}
    </ul>
  );
};

export default CourseGrid;