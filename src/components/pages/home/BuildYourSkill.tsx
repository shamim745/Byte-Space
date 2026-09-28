"use client";

import CourseCard from "@/components/common/CourseCard";
import { courses, FEATURED, moreSkillCategories, skillCategories } from "@/db/courses";
import { useState } from "react";

const BuildYourSkill = () => {
  const [activeCategory, setActiveCategory] = useState(FEATURED);
  const [showAllCategories, setShowAllCategories] = useState(false);

  const categories = showAllCategories
    ? [...skillCategories, ...moreSkillCategories]
    : skillCategories;

  const visibleCourses =
    activeCategory === FEATURED
      ? courses.filter((item) => item.featured)
      : courses.filter((item) => item.category === activeCategory);

  return (
    <section className="px-4 md:pt-[72px] sm:pt-[45px] pt-[30px] lg:px-6">
      <div className="container">
        <div data-reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-[44px]">
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-black/60 sm:text-[18px] font-regular">
            At Bytespace Courses, we bring you closer to life-changing learning. Explore a
            variety of courses across different fields, from technology to the arts, and make a
            difference in your career and life.
          </p>
        </div>

        <div
          data-reveal
          style={{ "--reveal-delay": "0.1s" } as React.CSSProperties}
          className="md:mt-[42px] max-w-[1086px] w-full mx-auto sm:mt-[30px] mt-[20px] flex flex-wrap justify-center gap-2 sm:gap-3"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full cursor-pointer bg-[#F5F5F6] border px-3 py-1.5 text-xs font-medium
                 transition sm:px-4 border-none sm:py-2 sm:text-sm ${
                activeCategory === category
                  ? "bg-accent text-[#242528]"
                  : "bg-[#F5F5F6] hover:border-accent hover:bg-accent hover:text-[#242528] text-[#4B4C53]"
              }`}
            >
              {category}
            </button>
          ))}

          <button
            type="button"
            onClick={() => setShowAllCategories((value) => !value)}
            className="rounded-full cursor-pointer bg-white px-3 py-1.5 text-xs font-semibold text-[#003BE2] "
          >
            {showAllCategories ? "− Less" : "+ More"}
          </button>
        </div>

        {visibleCourses.length > 0 ? (
          <div
            data-reveal
            style={{ "--reveal-delay": "0.18s" } as React.CSSProperties}
            className="md:mt-[72px] sm:mt-[45px] mt-[30px] grid md:gap-[35px] sm:gap-[25px] gap-[20px] text-left sm:grid-cols-2 lg:grid-cols-3"
          >
            {visibleCourses.map((item) => (
              <CourseCard key={item.id} course={item} />
            ))}
          </div>
        ) : (
          <p className="mx-auto mt-10 max-w-md rounded-2xl border border-dashed border-black/15 px-6 py-10 text-center text-sm text-black/50">
            No courses in this category yet — new classes are added every week.
          </p>
        )}
      </div>
    </section>
  );
};

export default BuildYourSkill;
