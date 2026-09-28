import type { ShowcaseCourseCardProps } from "@/types/auth";
import Image from "next/image";
import { LevelIcon, StarIcon } from "./AuthIcons";

const AVATARS = [1, 2, 3, 4].map((n) => `/assets/images/auth/avatar-${n}.png`);
const TAGS = ["17 Lessons", "2 hours 16 mins", "59 Comments"];

const ShowcaseCourseCard = ({ title, image }: ShowcaseCourseCardProps) => (
  <article className="h-[384px] w-[373px] overflow-hidden rounded-[24px] border border-[#ced0d3] bg-white p-4">
    <div className="relative h-[195px] overflow-hidden rounded-xl">
      <Image
        src={image}
        alt={title}
        width={341}
        height={195}
        sizes="373px"
        className="h-full w-full object-cover"
      />
      <div className="absolute bottom-[13px] left-3 flex gap-3">
        {TAGS.map((tag) => (
          <span
            key={tag}
            className="rounded-[24px] bg-[#f6f6f6]/60 px-3 py-1.5 text-[12px] font-medium leading-5 text-[#4f4f4f] backdrop-blur-[8px]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    <div className="mt-[21px]">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="text-[20px] font-semibold leading-7 tracking-[-0.2px] text-black">
            {title}
          </h3>
          <p className="text-[12px] leading-5 text-[#4f4f4f]">
            {"by "}
            <span className="text-[#003be2]">purepearl studio</span>
          </p>
        </div>
        <span className="flex shrink-0 items-center text-[18px] font-medium leading-7 text-[#4f4f4f]">
          {"4.5 "}
          <StarIcon className="h-6 w-6 text-accent" />
        </span>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <span className="flex items-center gap-1 rounded-[24px] bg-[#f5f5f6] px-3 py-1.5 text-[12px] font-medium leading-5 text-[#4b4c53]">
          <LevelIcon className="h-5 w-5" />
          Beginner
        </span>
        <div className="flex items-center">
          {AVATARS.map((avatar, index) => (
            <Image
              key={avatar}
              src={avatar}
              alt=""
              width={32}
              height={32}
              className={`h-8 w-8 rounded-full object-cover ${
                index > 0 ? "-ml-2" : ""
              }`}
            />
          ))}
          <span className="-ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-black text-[12px] font-medium leading-5 text-white">
            26+
          </span>
        </div>
      </div>

      <div className="mt-4 flex items-baseline">
        <span className="font-display text-[20px] font-semibold leading-6 text-[#003be2]">
          $25
        </span>
        <span className="text-[12px] leading-5 text-[#4f4f4f]">/lifetime</span>
      </div>
    </div>
  </article>
);

export default ShowcaseCourseCard;
