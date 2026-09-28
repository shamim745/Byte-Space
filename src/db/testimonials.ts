import type { Testimonial, Glow } from "@/types/home";
import { glowPaint, glowSize } from "@/db/glows";

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/assets/images/brand/testimonial-1.png",
    quote: `"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."`,
  },
  {
    id: 2,
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/assets/images/brand/testimonial-2.png",
    quote: `"I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."`,
  },
  {
    id: 3,
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/assets/images/brand/testimonial-3.png",
    quote: `"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally."`,
  },
];

export const testimonialGlows: Glow[] = [
  {
    size: glowSize.large,
    left: "97.95%",
    top: "41.8%",
    background: glowPaint.lime40,
  },
  {
    size: glowSize.small,
    left: "50.76%",
    top: "25.3%",
    background: glowPaint.lime60,
  },
  {
    size: glowSize.large,
    left: "8.8%",
    top: "91.5%",
    background: glowPaint.blue24,
  },
];
