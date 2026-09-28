import { brandShapes } from "@/components/brand/shapes";
import type { BannerShape, CourseDetail } from "@/types/course";

const PITCH =
  "Ready to Dive In? Enroll Now and Start Building Your Digital Future!";

export const courseDetail: CourseDetail = {
  title: "Build Digital Asset: A Comprehensive Guide",
  subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
  author: "purepearl studio",
  preview: {
    image: "/assets/images/temp/product-1.jpg",
    alt: "Preview of the Build Digital Asset course",
  },
  meta: [
    { icon: "level", label: "Intermediate" },
    { icon: "rating", label: "4.8 (172 reviews)" },
    { icon: "students", label: "199 Students" },
  ],
  shareLabel: "Share",
  tabs: [
    { label: "About", target: "about" },
    { label: "Lessons", target: "lessons" },
    { label: "Reviews", target: "reviews" },
  ],
  description:
    'Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.\n\nIn the initial modules, you\'ll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.\n\nAs you progress through the course, you\'ll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.',
  sneakPeaks: [
    {
      image: "/assets/images/temp/product-2.jpg",
      alt: "Course sneak peek: design workspace",
    },
    {
      image: "/assets/images/temp/product-3.jpg",
      alt: "Course sneak peek: creative session",
    },
    {
      image: "/assets/images/temp/product-4.jpg",
      alt: "Course sneak peek: asset planning",
    },
    {
      image: "/assets/images/temp/product-5.jpg",
      alt: "Course sneak peek: finished digital asset",
    },
  ],
  keyPoints: [
    "Foundational Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio",
  ],
  curriculum: {
    heading: "112 Lessons (24 hours)",
    lessons: [
      { no: "01", title: "Introduction to Digital Assets", duration: "12 mins" },
      { no: "02", title: "Design Principles for Impacts", duration: "21 mins" },
      {
        no: "03",
        title: "Advanced Techniques in Digital Creation",
        duration: "16 mins",
      },
    ],
    moreLabel: "99 more videos",
  },
  pitch: PITCH,
  price: { amount: "$25", period: "/lifetime" },
  cta: "Enroll Now",
  includes: [
    { icon: "resources", label: "Learning Resources" },
    { icon: "videos", label: "Quality Lesson Videos" },
    { icon: "certificate", label: "Certificate of Completion" },
    { icon: "consultation", label: "Private Consultation" },
  ],
  creator: {
    name: "PurePearl Studio",
    role: "Professional Creator",
    avatar: "/assets/images/auth/avatar-1.png",
    bio: PITCH,
    cta: "See Full Profile",
  },
};

export const bannerShapes: BannerShape[] = [
  {
    ...brandShapes.whiteSpiral,
    className:
      "left-[-6%] top-[16%] w-[19%] max-w-[332px] min-w-[130px] xl:block hidden",
  },
  {
    ...brandShapes.limeTorus,
    className:
      "right-[6%] top-[15%] w-[13%] max-w-[222px] min-w-[96px] lg:block hidden",
  },
  {
    ...brandShapes.limeCone,
    className:
      "left-[1%] bottom-[14%] w-[11%] max-w-[188px] min-w-[88px] md:block hidden",
  },
  {
    ...brandShapes.whiteCylinder,
    className:
      "right-[-6%] bottom-[5%] w-[21%] max-w-[357px] min-w-[150px] lg:block hidden",
  },
];
