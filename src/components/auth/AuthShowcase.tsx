import { showcaseCourses, showcaseShapes } from "@/db/auth-showcase";
import type { AuthShowcaseProps } from "@/types/auth";
import Image from "next/image";
import ShowcaseCourseCard from "./ShowcaseCourseCard";
import StudentsCard from "./StudentsCard";

const AuthShowcase = ({ title, description }: AuthShowcaseProps) => (
  <div className="relative w-full min-[75rem]:h-[770px] min-[75rem]:w-[484px] min-[75rem]:shrink-0">
    <div data-reveal className="max-w-[475px]">
      <h2 className="text-[20px] font-semibold leading-6 tracking-[-0.2px] text-[#f5f5f6]">
        {title}
      </h2>
      <p className="mt-3 text-[15px] leading-[24px] text-[#f5f5f6] sm:mt-4 sm:text-[18px] sm:leading-[28.8px]">
        {description}
      </p>
    </div>

    <div
      aria-hidden
      data-reveal
      style={{ "--reveal-delay": "0.25s" } as React.CSSProperties}
      className="absolute inset-0 hidden min-[75rem]:block"
    >
      {showcaseCourses.map((course) => (
        <div key={course.title} className={`absolute ${course.position}`}>
          <ShowcaseCourseCard title={course.title} image={course.image} />
        </div>
      ))}

      <StudentsCard className="absolute left-[226px] top-[620px]" />

      {showcaseShapes.map((shape) => (
        <Image
          key={shape.src}
          src={shape.src}
          alt=""
          width={shape.width}
          height={shape.height}
          className={`absolute ${shape.position}`}
        />
      ))}
    </div>
  </div>
);

export default AuthShowcase;
