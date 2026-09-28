import SectionTitle from "@/components/ui/SectionTitle";
import { infoPages, infoSlugs } from "@/db/pages";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type InfoPageProps = {
  params: Promise<{ info: string }>;
};

export const generateStaticParams = () => infoSlugs.map((info) => ({ info }));

export async function generateMetadata({
  params,
}: InfoPageProps): Promise<Metadata> {
  const { info } = await params;
  const page = infoPages.find((entry) => entry.slug === info);

  return page ? { title: page.title, description: page.description } : {};
}

const InfoPage = async ({ params }: InfoPageProps) => {
  const { info } = await params;
  const page = infoPages.find((entry) => entry.slug === info);

  if (!page) notFound();

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#003BE2] px-4 pb-14 pt-[104px] sm:px-6 sm:pt-[132px] lg:pt-[172px]">
        <div aria-hidden className="design-grid pointer-events-none absolute inset-0" />

        <div className="container relative">
          <h1 className="max-w-[860px] font-display text-[32px] font-semibold leading-[1.15] tracking-[-0.01em] text-white sm:text-[44px] lg:text-[56px]">
            {page.title}
          </h1>

          <p className="mt-4 max-w-[760px] text-[16px] leading-[1.6] text-[#E5E6E8] lg:text-[18px] lg:leading-[28.8px]">
            {page.intro}
          </p>
        </div>
      </section>

      <section className="px-4 pb-[72px] pt-12 sm:px-6 sm:pt-16">
        <div className="mx-auto w-full max-w-[820px]">
          {page.sections.map((section) => (
            <div key={section.heading} className="mb-10 last:mb-0">
              <SectionTitle>{section.heading}</SectionTitle>

              {section.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-4 text-[16px] leading-[25.6px] text-[#4B4C53]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default InfoPage;
