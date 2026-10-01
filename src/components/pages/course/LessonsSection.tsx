import SectionTitle from "@/components/ui/SectionTitle";
import { courseDetail } from "@/db/course-details";

const LessonsSection = () => {
  const { lessons } = courseDetail;

  return (
    <div
      id="lessons"
      className="flex scroll-mt-[104px] flex-col gap-6 xl:scroll-mt-[144px]"
    >
      <div className="flex flex-col gap-6">
        <SectionTitle>{lessons.introHeading}</SectionTitle>
        <p className="text-[16px] leading-[25.6px] text-[#4B4C53]">
          {lessons.introText}
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <SectionTitle>{lessons.listHeading}</SectionTitle>

        <ul className="flex flex-col gap-6">
          {lessons.modules.map((module) => (
            <li key={module.title} className="flex gap-4">
              <span className="grid sm:h-[72px] sm:w-[72px] h-12 w-12 shrink-0 place-items-center rounded-[14px] bg-[#D4FB20]">
                <svg
                  className="sm:h-[20px] sm:w-[30px] w-[25px] text-ink"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="20"
                  viewBox="0 0 30 20"
                  fill="none"
                >
                  <path
                    d="M20 3.33333V16.6667H3.33333V3.33333H20ZM21.6667 0L1.66667 0C0.75 0 0 0.75 0 1.66667L0 18.3333C0 19.25 0.75 20 1.66667 20H21.6667C22.5833 20 23.3333 19.25 23.3333 18.3333V12.5L30 19.1667V0.833333L23.3333 7.5V1.66667C23.3333 0.75 22.5833 0 21.6667 0Z"
                    fill="#242528"
                  />
                </svg>
              </span>

              <div className="flex min-w-0 flex-col">
                <p className="text-[16px] font-bold leading-[25.6px] text-ink">
                  {module.title}
                </p>
                <p className="text-[16px] leading-[25.6px] text-[#4B4C53]">
                  {module.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-6">
        <SectionTitle>{lessons.contentHeading}</SectionTitle>
        <p className="text-[16px] leading-[25.6px] text-[#4B4C53]">
          {lessons.contentText}
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <SectionTitle>{lessons.progressHeading}</SectionTitle>
        <p className="text-[16px] leading-[25.6px] text-[#4B4C53]">
          {lessons.progressText}
        </p>

        <div className="flex w-full flex-col gap-2 rounded-[16px] border border-[#DADCDE] p-4">
          <p className="text-[16px] font-bold leading-[25.6px] text-ink">
            {lessons.progressLabel}
          </p>

          <p className="font-display text-[32px] font-bold leading-[38.4px] tracking-[-0.36px] text-ink">
            {lessons.progressValue}%
          </p>

          <div className="h-2.5 w-full overflow-hidden rounded-full bg-[#E5E6E8]">
            <div
              className="h-full rounded-full bg-[#D4FB20]"
              style={{ width: `${lessons.progressValue}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonsSection;
