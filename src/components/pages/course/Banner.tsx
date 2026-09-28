import { PlayIcon, metaIcons } from "@/components/common/CourseIcons";
import { bannerShapes, courseDetail } from "@/db/course-details";
import Image from "next/image";

const Banner = () => {
  const ShareIcon = metaIcons.share;

  return (
    <section className="relative isolate overflow-hidden bg-[#003BE2]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 design-grid" />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {bannerShapes.map((shape) => (
          <Image
            key={shape.src.src}
            src={shape.src}
            alt=""
            width={shape.width}
            height={shape.height}
            priority
            className={`absolute h-auto ${shape.className}`}
          />
        ))}
      </div>

      <div className="relative z-10 px-4 pb-12 pt-[104px] sm:px-6 sm:pt-[132px] lg:pb-[62px] lg:pt-[172px]">
        <div className="container">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
            <div className="min-w-0 max-w-[769px]">
              <h1 className="font-display text-[26px] font-semibold leading-[1.2] tracking-[-0.36px] text-[#F5F5F6] sm:text-[30px] lg:text-[36px] lg:leading-[43px]">
                {courseDetail.title}
              </h1>

              <p className="mt-2 font-display text-[17px] font-semibold leading-[1.3] tracking-[-0.2px] text-[#F5F5F6] sm:text-[18px] lg:text-[20px] lg:leading-6">
                {courseDetail.subtitle}
              </p>

              <p className="mt-6 text-[16px] font-medium leading-[22px] text-[#F1F4FE] lg:text-[18px]">
                by {courseDetail.author}
              </p>

              <ul className="mt-6 flex flex-wrap gap-3 sm:gap-4">
                {courseDetail.meta.map((item) => {
                  const Icon = metaIcons[item.icon];

                  return (
                    <li
                      key={item.label}
                      id={item.icon === "rating" ? "reviews" : undefined}
                      className="flex h-10 scroll-mt-[104px] items-center gap-2 rounded-[24px] bg-white px-4 backdrop-blur-md sm:px-6 xl:scroll-mt-[144px]"
                    >
                      <Icon className="h-[18px] w-[18px] shrink-0 text-[#003BE2]" />
                      <span className="whitespace-nowrap text-[14px] font-medium text-ink sm:text-[16px]">
                        {item.label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <button
              type="button"
              className="flex h-10 w-fit shrink-0 items-center gap-2 rounded-[24px] bg-[#D4FB20] px-6 text-[16px] font-medium text-ink transition-transform duration-300 hover:-translate-y-0.5"
            >
              <ShareIcon className="h-[18px] w-[18px]" />
              {courseDetail.shareLabel}
            </button>
          </div>

          <div className="group relative mt-8 aspect-[720/479] w-full max-w-[720px] overflow-hidden rounded-[16px] lg:mt-[59px] lg:rounded-[24px]">
            <Image
              src={courseDetail.preview.image}
              alt={courseDetail.preview.alt}
              fill
              sizes="(min-width: 1024px) 720px, 100vw"
              className="object-cover"
            />
            <span className="absolute inset-0 bg-black/10" />

            <button
              type="button"
              aria-label="Play course preview"
              className="absolute left-1/2 top-1/2 grid h-[68px] w-[68px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[18px] border border-[#4F4F4F] bg-[#3D3D3D]/70 backdrop-blur-md transition-transform duration-300 group-hover:scale-105 lg:h-[104px] lg:w-[104px] lg:rounded-[24px]"
            >
              <PlayIcon className="h-6 w-6 text-[#F5F2FF] lg:h-10 lg:w-10" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
