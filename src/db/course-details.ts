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
    { label: "Lesson", target: "lessons" },
    { label: "Reviews", target: "reviews" },
  ],
  description:
    "Embark on an enlightening exploration into the world of digital creation with our comprehensive course, \"Build Digital Assets: A Comprehensive Guide.\" This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.\n\nIn the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.\n\nAs you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
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
  lessons: {
    introHeading: "Explore the Modules",
    introText:
      "Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.",
    listHeading: "Lesson List",
    modules: [
      {
        title: "Module 1: Introduction to Digital Assets",
        description:
          "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
      },
      {
        title: "Module 2: Design Principles for Impact",
        description:
          "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
      },
      {
        title: "Module 4: User-Centric Design Strategies",
        description:
          "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
      },
      {
        title: "Module 5: Interactive Media and Engagement",
        description:
          "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
      },
      {
        title: "Module 6: Project Showcase and Critique",
        description:
          "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
      },
      {
        title: "Module 7: Optimizing Digital Assets for Various Platforms",
        description:
          "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
      },
    ],
    contentHeading: "Lesson Content",
    contentText:
      "Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.",
    progressHeading: "Lesson Progress Tracking",
    progressText:
      "Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.",
    progressLabel: "Learning Progress",
    progressValue: 55,
  },
  reviews: {
    heading: "What Learners Are Saying",
    text: "Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.",
    summaryLabel: "Ratings",
    summaryScore: "4.7",
    summaryRows: [
      { percent: 100, count: 720 },
      { percent: 50, count: 120 },
      { percent: 12, count: 21 },
      { percent: 5, count: 12 },
      { percent: 6, count: 16 },
    ],
    listHeading: "Individual Reviews:",
    filters: ["all", "5", "4", "3", "2", "1"],
    items: [
      {
        name: "PurePearl Studio",
        role: "UI/UX Designer",
        avatar: "/assets/images/auth/avatar-1.png",
        ago: "a year ago",
        rating: 5,
        text: '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
      },
      {
        name: "Albert Flores",
        role: "UI/UX Designer",
        avatar: "/assets/images/auth/avatar-3.png",
        ago: "a year ago",
        rating: 5,
        text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
      },
      {
        name: "Cody Fisher",
        role: "UI/UX Designer",
        avatar: "/assets/images/auth/avatar-5.png",
        ago: "a year ago",
        rating: 5,
        text: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
      },
      {
        name: "Brooklyn Simmons",
        role: "UI/UX Designer",
        avatar: "/assets/images/auth/avatar-7.png",
        ago: "a year ago",
        rating: 5,
        text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
      },
    ],
  },
  curriculum: {
    heading: "112 Lessons (24 hours)",
    lessons: [
      {
        no: "01",
        title: "Introduction to Digital Assets",
        duration: "12 mins",
      },
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
