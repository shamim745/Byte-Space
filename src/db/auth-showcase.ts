import type { ShowcaseCourse, ShowcaseShape } from "@/types/auth";

export const showcaseCourses: ShowcaseCourse[] = [
  {
    title: "Build Digital Asset",
    image: "/assets/images/auth/course-build-digital-asset.jpg",
    position: "left-0 top-[274px]",
    speed: 44,
    mouse: 22,
  },
  {
    title: "the Power of Big Data",
    image: "/assets/images/auth/course-power-of-big-data.jpg",
    position: "left-[111px] top-[185px]",
    speed: 30,
    mouse: 16,
  },
];

export const showcaseShapes: ShowcaseShape[] = [
  {
    src: "/assets/images/auth/shape-spiral.png",
    position: "left-[348px] top-[506px] h-[176px] w-[177px]",
    width: 177,
    height: 176,
    speed: 54,
    mouse: 26,
  },
  {
    src: "/assets/images/auth/shape-torus.png",
    position: "left-[29px] top-[200px] h-[147px] w-[148px]",
    width: 148,
    height: 147,
    speed: 26,
    mouse: 14,
  },
  {
    src: "/assets/images/auth/shape-pyramid.png",
    position: "left-[-25px] top-[582px] h-[189px] w-[190px]",
    width: 190,
    height: 189,
    speed: 64,
    mouse: 28,
  },
];
