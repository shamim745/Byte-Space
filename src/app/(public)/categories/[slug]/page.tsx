import CourseGrid from "@/components/pages/courses/CourseGrid";
import { categories, categorySlugs } from "@/db/categories";
import { courses } from "@/db/courses";
import { findSlug } from "@/utils/slug";
import type { Metadata } from "next";
import Link from "next/link";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export const generateStaticParams = () =>
  categorySlugs.map((slug) => ({ slug }));

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = findSlug(categories, slug);

  return category
    ? {
        title: category,
        description: `Browse every ${category} course on ByteSpace.`,
      }
    : {};
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { slug } = await params;
  const category = findSlug(categories, slug);
  const matches = category
    ? courses.filter((course) => course.category === category)
    : [];

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#003BE2] px-4 pb-14 pt-[104px] sm:px-6 sm:pt-[132px] lg:pt-[172px]">
        <div aria-hidden className="design-grid pointer-events-none absolute inset-0" />

        <div className="container relative">
          <h1 className="max-w-[860px] font-display text-[32px] font-semibold leading-[1.15] tracking-[-0.01em] text-white sm:text-[44px] lg:text-[56px]">
            {category ?? "Category"}
          </h1>

          <p className="mt-4 max-w-[760px] text-[16px] leading-[1.6] text-[#E5E6E8] lg:text-[18px] lg:leading-[28.8px]">
            {category
              ? `${matches.length} ${matches.length === 1 ? "course" : "courses"} in this category.`
              : "We do not have courses in this category yet."}
          </p>
        </div>
      </section>

      <section className="px-4 pb-[72px] pt-12 sm:px-6">
        <div className="container">
          {matches.length > 0 ? (
            <CourseGrid courses={matches} />
          ) : (
            <p className="py-10 text-center text-[16px] leading-[25.6px] text-[#4B4C53]">
              Nothing here yet —{" "}
              <Link href="/courses" className="text-[#003be2] underline">
                browse all courses
              </Link>
              .
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default CategoryPage;
