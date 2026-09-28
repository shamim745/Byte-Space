import type { Stat } from "@/types/common";
import type { Glow } from "@/types/home";
import { glowPaint, glowSize } from "@/db/glows";

export const growthStats: Stat[] = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export const growthFeatures = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export const growthGlows: Glow[] = [
  {
    size: glowSize.large,
    left: "28.92%",
    top: "7.02%",
    background: glowPaint.lime40,
  },
  {
    size: glowSize.large,
    left: "95.8%",
    top: "7.57%",
    background: glowPaint.blue8,
  },
  {
    size: glowSize.large,
    left: "4.2%",
    top: "51.47%",
    background: glowPaint.blue16,
  },
  {
    size: glowSize.large,
    left: "89.62%",
    top: "92.91%",
    background: glowPaint.blue24,
  },
  {
    size: glowSize.small,
    left: "3.4%",
    top: "87.81%",
    background: glowPaint.lime60,
  },
];
