import { metaIcons } from "@/components/common/CourseIcons";
import SectionTitle from "@/components/ui/SectionTitle";
import { courseDetail } from "@/db/course-details";

const LessonsSection = () => {
  const { lessons } = courseDetail;
  const VideoIcon = metaIcons.videos;

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
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[14px] bg-[#D4FB20]">
                <VideoIcon className="h-6 w-6 text-ink" />
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

        <div className="flex w-full flex-col gap-3 rounded-[16px] border border-[#DADCDE] p-6">
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
