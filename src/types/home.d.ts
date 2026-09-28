import type { CSSProperties } from "react";

import type { BrandShapeKey } from "@/components/brand/shapes";

export type Glow = {
  size: string;
  left: string;
  top: string;
  background: string;
};

export type Client = {
  id: number;
  name: string;
  logo: string;
};

export type ClientLogoProps = {
  client: Client;
};

export type Testimonial = {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
};

export type TestimonialCardProps = {
  testimonial: Testimonial;
};

export type LearningPath = {
  label: string;
  icon: string;
};

export type CategoryCardProps = {
  label: string;
  icon: string;
};

export type HeroShape = {
  key: BrandShapeKey;
  style: CSSProperties;
};
