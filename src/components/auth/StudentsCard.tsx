import type { StudentsCardProps } from "@/types/auth";
import Image from "next/image";
import { StarRoundedIcon } from "./AuthIcons";

const AVATARS = [5, 1, 6, 7, 8, 9, 10].map(
  (n) => `/assets/images/auth/avatar-${n}.png`,
);

const StudentsCard = ({ className = "" }: StudentsCardProps) => (
  <div className={`w-[258px] rounded-[16px] bg-accent p-4 ${className}`}>
    <div>
      <p className="text-[16px] font-medium leading-6 text-ink">
        Happy Students
      </p>
      <p className="flex items-center text-[10px] leading-[15px]">
        <span className="font-bold text-ink">{"4.5 "}</span>
        <span className="text-[#82868e]">(240)</span>
        <StarRoundedIcon className="h-4 w-4 text-[#003be2]" />
      </p>
    </div>

    <div className="mt-2 flex items-center">
      {AVATARS.map((avatar, index) => (
        <Image
          key={avatar}
          src={avatar}
          alt=""
          width={43}
          height={43}
          className={`h-[43px] w-[43px] shrink-0 rounded-full border-2 border-white object-cover ${
            index > 0 ? "-ml-4" : ""
          }`}
        />
      ))}
      <span className="-ml-4 flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-full border-2 border-white bg-ink text-[12px] font-bold leading-[18px] text-[#f5f5f6]">
        2K+
      </span>
    </div>
  </div>
);

export default StudentsCard;
