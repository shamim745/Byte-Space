"use client";

import { metaIcons } from "@/components/common/CourseIcons";
import SectionTitle from "@/components/ui/SectionTitle";
import { useCart } from "@/context/cart";
import { courseDetail } from "@/db/course-details";
import Image from "next/image";
import Link from "next/link";

const ENROLL_ID = "course-details";

const EnrollCard = () => {
  const { curriculum, pitch, price, cta, includes, creator } = courseDetail;
  const { addItem, items, open } = useCart();
  const inCart = items.some((item) => item.id === ENROLL_ID);

  const handleEnroll = () => {
    addItem({
      id: ENROLL_ID,
      title: courseDetail.title,
      image: courseDetail.preview.image,
      price: Number(price.amount.replace(/[^0-9.]/g, "")) || 0,
      author: courseDetail.author,
    });
    open();
  };

  return (
    <div className="rounded-[24px] border border-[#CED0D3] bg-white p-6 sm:p-10">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <SectionTitle>{curriculum.heading}</SectionTitle>

          <ul className="flex flex-col gap-3">
            {curriculum.lessons.map((lesson) => (
              <li
                key={lesson.no}
                className="flex items-start justify-between gap-3"
              >
                <span className="flex min-w-0 gap-2">
                  <span className="shrink-0 text-[16px] font-medium leading-[19.2px] text-ink">
                    {lesson.no}
                  </span>
                  <span className="min-w-0 text-[16px] font-medium leading-[19.2px] text-ink">
                    {lesson.title}
                  </span>
                </span>
                <span className="shrink-0 text-[16px] leading-[25.6px] text-[#003BE2]">
                  {lesson.duration}
                </span>
              </li>
            ))}
            <li className="text-[16px] leading-[25.6px] text-[#4B4C53]">
              {curriculum.moreLabel}
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-[16px] leading-[25.6px] text-[#4B4C53]">{pitch}</p>

          <p className="flex items-baseline gap-1">
            <span className="font-display text-[36px] font-semibold leading-[43.2px] tracking-[-0.36px] text-[#003BE2]">
              {price.amount}
            </span>
            <span className="text-[16px] leading-[25.6px] text-[#4B4C53]">
              {price.period}
            </span>
          </p>

          <button
            type="button"
            onClick={handleEnroll}
            className="flex h-[46px] w-full cursor-pointer items-center justify-center rounded-[24px] bg-[#D4FB20] text-[18px] font-medium leading-[21.6px] text-ink transition-transform duration-300 hover:-translate-y-0.5"
          >
            {inCart ? "In Cart — View Cart" : cta}
          </button>
        </div>

        <SectionTitle>This course include</SectionTitle>

        <ul className="flex flex-col gap-3">
          {includes.map((item) => {
            const Icon = metaIcons[item.icon];

            return (
              <li
                key={item.label}
                className="flex items-center gap-2 text-[16px] leading-[25.6px] text-[#4B4C53]"
              >
                <span className="grid h-6 w-6 shrink-0 place-items-center">
                  <Icon className="h-[22px] w-[22px] text-[#003BE2]" />
                </span>
                {item.label}
              </li>
            );
          })}
        </ul>

        <div className="h-px w-full bg-[#D1D1D1]" />

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <Image
              src={creator.avatar}
              alt={creator.name}
              width={52}
              height={52}
              className="h-[52px] w-[52px] shrink-0 rounded-full object-cover"
            />
            <div className="min-w-0">
              <p className="text-[18px] font-medium leading-[21.6px] text-ink">
                {creator.name}
              </p>
              <p className="text-[16px] leading-[25.6px] text-[#4B4C53]">
                {creator.role}
              </p>
            </div>
          </div>

          <p className="text-[16px] leading-[25.6px] text-[#4B4C53]">
            {creator.bio}
          </p>

          <Link
            href="/creator"
            className="w-fit cursor-pointer rounded-[24px] border border-[#CED0D3] px-4 py-2 text-[16px] font-medium leading-[19.2px] text-[#4B4C53] transition-colors duration-300 hover:border-[#4B4C53]"
          >
            {creator.cta}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EnrollCard;
