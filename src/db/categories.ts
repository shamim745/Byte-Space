import { FEATURED, moreSkillCategories, skillCategories } from "@/db/courses";
import { slugify } from "@/utils/slug";

export const categories = [...skillCategories, ...moreSkillCategories].filter(
  (category) => category !== FEATURED,
);

export const categorySlugs = categories.map((category) => slugify(category));
