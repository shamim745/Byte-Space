import CourseList from "@/components/pages/courses/CourseList";
import type { CoursesPageProps } from "@/types/course";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses",
  description: "Browse and find your next course from top creators.",
};

const CoursesPage = async ({ searchParams }: CoursesPageProps) => {
  const { q } = await searchParams;
  const query = typeof q === "string" ? q : "";

  return <CourseList initialQuery={query} />;
};

export default CoursesPage;
