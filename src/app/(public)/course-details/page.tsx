import Banner from "@/components/pages/course/Banner";
import CourseOverview from "@/components/pages/course/CourseOverview";
import EnrollCard from "@/components/pages/course/EnrollCard";
import { courseDetail } from "@/db/course-details";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: courseDetail.title,
  description: courseDetail.subtitle,
};

export default function CourseDetailsPage() {
  return (
    <>
      <Banner />

      <section className="px-4 pt-8 pb-10 sm:px-6 sm:pt-10 sm:pb-[72px] xl:pt-0">
        <div className="container relative flex flex-col-reverse gap-10 xl:-mt-[541px] xl:flex-row xl:items-start xl:justify-between xl:gap-6 xl:pointer-events-none">
          <div className="xl:mt-[541px] xl:w-[725px] xl:shrink-0 xl:pt-[62px] xl:pointer-events-auto">
            <CourseOverview />
          </div>

          <aside className="xl:sticky xl:top-[140px] xl:z-20 xl:w-[412px] xl:shrink-0 xl:pointer-events-auto">
            <EnrollCard />
          </aside>
        </div>
      </section>
    </>
  );
}
