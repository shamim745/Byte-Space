import { categories } from "@/db/categories";
import { slugify } from "@/utils/slug";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Categories",
  description: "Browse ByteSpace courses by category.",
};

const CategoriesPage = () => (
  <>
    <section className="relative isolate overflow-hidden bg-[#003BE2] px-4 pb-10 pt-20 sm:px-6 sm:pb-14 sm:pt-[132px] lg:pt-[172px]">
      <div aria-hidden className="design-grid pointer-events-none absolute inset-0" />

      <div className="container relative">
        <h1 className="max-w-[860px] font-display text-[32px] font-semibold leading-[1.15] tracking-[-0.01em] text-white sm:text-[44px] lg:text-[56px]">
          Categories
        </h1>

        <p className="mt-4 max-w-[760px] text-[16px] leading-[1.6] text-[#E5E6E8] lg:text-[18px] lg:leading-[28.8px]">
          Pick a topic and see every course we have on it.
        </p>
      </div>
    </section>

    <section className="px-4 pb-10 pt-10 sm:px-6 sm:pb-[72px] sm:pt-12">
      <ul className="container flex flex-wrap gap-3 sm:gap-4">
        {categories.map((category) => (
          <li key={category}>
            <Link
              href={`/categories/${slugify(category)}`}
              className="flex h-[43px] items-center whitespace-nowrap rounded-[24px] bg-[#f5f5f6] px-4 py-3 text-base font-medium leading-[19.2px] text-[#4b4c53] transition-colors hover:bg-[#ececec]"
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  </>
);

export default CategoriesPage;
