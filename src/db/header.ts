import type { AccountNavItem, NavItem } from "@/types/layout";

export const navLinks: NavItem[] = [
  { label: "Home", href: "/", weight: "font-medium" },
  { label: "Courses", href: "/courses", weight: "font-normal" },
  { label: "Creators", href: "/creator", weight: "font-normal" },
];

export const accountLinks: AccountNavItem[] = [
  { label: "Sign In", href: "/login" },
  { label: "Join Us", href: "/register" },
];
