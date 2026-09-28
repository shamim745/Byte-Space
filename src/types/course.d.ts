import type { BrandShape } from "@/components/brand/shapes";

export type Course = {
  id: number;
  title: string;
  category: string;
  image: string;
  author: string;
  rating: number;
  lessons: number;
  duration: string;
  comments: number;
  level: string;
  students: number;
  price: number;
  featured?: boolean;
};

export type CourseMetaIcon =
  | "level"
  | "rating"
  | "students"
  | "share"
  | "resources"
  | "videos"
  | "certificate"
  | "consultation";

export type CourseMeta = {
  icon: CourseMetaIcon;
  label: string;
};

export type CourseLesson = {
  no: string;
  title: string;
  duration: string;
};

export type CourseDetail = {
  title: string;
  subtitle: string;
  author: string;
  preview: { image: string; alt: string };
  meta: CourseMeta[];
  shareLabel: string;
  tabs: { label: string; target: string }[];
  description: string;
  sneakPeaks: { image: string; alt: string }[];
  keyPoints: string[];
  curriculum: {
    heading: string;
    lessons: CourseLesson[];
    moreLabel: string;
  };
  pitch: string;
  price: { amount: string; period: string };
  cta: string;
  includes: { icon: CourseMetaIcon; label: string }[];
  creator: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
    cta: string;
  };
};

export type BannerShape = BrandShape & {
  className: string;
};

export type CourseCardProps = {
  course: Course;
};

export type CourseGridProps = {
  courses: Course[];
};

export type CourseListProps = {
  initialQuery?: string;
};

export type CoursesPageProps = {
  searchParams: Promise<{ q?: string | string[] | undefined }>;
};

export type CourseTabsProps = {
  tabs: { label: string; target: string }[];
};

export type CategoryTabsProps = {
  active: string;
  onChange: (category: string) => void;
};

export type FilterIconKey = "filter" | "level" | "category";

export type FilterItem = {
  label: string;
  icon: FilterIconKey;
};

export type PaginationProps = {
  current: number;
  total: number;
  onChange: (page: number) => void;
};
