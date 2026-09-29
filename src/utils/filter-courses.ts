import { FEATURED } from "@/db/courses";
import type { Course } from "@/types/course";

export type CourseFilterOptions = {
  search?: string;
  category?: string;
  level?: string;
  featured?: string;
  sort?: string;
};

export const filterCourses = (
  list: Course[],
  options: CourseFilterOptions = {},
) => {
  const {
    search = "",
    category = FEATURED,
    level = "all",
    featured = "all",
    sort = "relevant",
  } = options;

  const q = search.trim().toLowerCase();
  const result = list.filter((course) => {
    const byCat = category === FEATURED || course.category === category;
    const bySearch = !q || course.title.toLowerCase().includes(q);
    const byLevel = level === "all" || course.level === level;
    const byFeatured = featured !== "featured" || course.featured;
    return byCat && bySearch && byLevel && byFeatured;
  });

  switch (sort) {
    case "rating":
      return [...result].sort((a, b) => b.rating - a.rating);
    case "students":
      return [...result].sort((a, b) => b.students - a.students);
    case "price-asc":
      return [...result].sort((a, b) => a.price - b.price);
    case "price-desc":
      return [...result].sort((a, b) => b.price - a.price);
    default:
      return result;
  }
};
