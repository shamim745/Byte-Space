import type { CourseCardProps } from "@/types/course";
import Image from "next/image";
import Link from "next/link";

const AVATARS = [
  "/assets/images/temp/user-1.png",
  "/assets/images/temp/user-2.png",
  "/assets/images/temp/user-3.png",
  "/assets/images/temp/user-1.png",
];

const CARD_SIZES = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";

const StarIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-4 w-4"
    fill="currentColor"
  >
    <path d="M12 2.5l2.9 6.1 6.6.9-4.8 4.5 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5-4.8-4.5 6.6-.9z" />
  </svg>
);

const LevelIcon = () => (
  <svg
    viewBox="0 0 16 16"
    aria-hidden="true"
    className="h-5 w-5"
    fill="currentColor"
  >
    <rect x="1" y="9" width="3" height="6" rx="1" />
    <rect x="6.5" y="5.5" width="3" height="9.5" rx="1" />
    <rect x="12" y="2" width="3" height="13" rx="1" />
  </svg>
);

const TAG = "min-w-0 truncate flex-1 rounded-[24px] bg-[#f6f6f6] px-3 py-1.5 text-center text-xs font-medium leading-[14.4px] text-[#4f4f4f]";

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Link
      href="/course-details"
      className="block min-w-0 rounded-[24px] border border-[#ced0d3] bg-white p-4 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[341/195] overflow-hidden rounded-xl">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes={CARD_SIZES}
          className="object-cover"
        />

        <div className="absolute inset-x-[13px] bottom-[19px] flex justify-between gap-3">
          <span className={TAG}>{course.lessons} Lessons</span>
          <span className={TAG}>{course.duration}</span>
          <span className={TAG}>{course.comments} Comments</span>
        </div>
      </div>

      <div className="px-1 pb-1 pt-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="min-w-0 truncate font-display text-xl font-semibold leading-6 text-black">
            {course.title}
          </h3>
          <span className="flex shrink-0 items-center gap-0 text-[18px] leading-[28.8px] text-[#4f4f4f]">
            {course.rating}
            <span className="text-[#ced0d3]">
              <StarIcon />
            </span>
          </span>
        </div>

        <p className="mt-0 text-xs leading-[19.2px] text-[#4f4f4f]">
          by {course.author}
        </p>

        <div className="mt-4 flex items-center justify-start gap-3">
          <span className="flex items-center gap-1 rounded-[24px] bg-[#f5f5f6] px-3 py-1.5 text-xs font-medium leading-[14.4px] text-[#4b4c53]">
            <LevelIcon />
            {course.level}
          </span>

          <div className="flex items-center">
            {AVATARS.map((avatar, index) => (
              <Image
                key={`${avatar}-${index}`}
                src={avatar}
                alt=""
                width={32}
                height={32}
                className={`h-8 w-8 rounded-full object-cover ${
                  index > 0 ? "-ml-2" : ""
                }`}
              />
            ))}
            <span className="-ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-medium leading-5 text-ink">
              {course.students}+
            </span>
          </div>
        </div>

        <div className="mt-4 flex items-baseline gap-0">
          <span className="font-display text-xl font-semibold leading-6 text-[#003be2]">
            ${course.price}
          </span>
          <span className="text-xs leading-[19.2px] text-[#4f4f4f]">
            /lifetime
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
