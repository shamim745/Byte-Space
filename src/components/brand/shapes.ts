import ctaLimeCone from "../../../public/assets/images/brand/cta-lime-cone.png";
import ctaLimeSpiral from "../../../public/assets/images/brand/cta-lime-spiral.png";
import ctaLimeTopLeft from "../../../public/assets/images/brand/cta-lime-top-left.png";
import ctaLimeTorus from "../../../public/assets/images/brand/cta-lime-torus.png";
import ctaWhiteCone from "../../../public/assets/images/brand/cta-white-cone.png";
import ctaWhiteCylinder from "../../../public/assets/images/brand/cta-white-cylinder.png";
import ctaWhiteSpiral from "../../../public/assets/images/brand/cta-white-spiral.png";
import heroConeWhite from "../../../public/assets/images/brand/hero-cone-white.png";
import heroCylinderLime from "../../../public/assets/images/brand/hero-cylinder-lime.png";
import heroSpiralWhite from "../../../public/assets/images/brand/hero-spiral-white.png";
import heroTorusWhite from "../../../public/assets/images/brand/hero-torus-white.png";
import type { StaticImageData } from "next/image";

export type BrandShape = {
  src: StaticImageData;
  width: number;
  height: number;
};

export const brandShapes = {
  limeCone: { src: ctaLimeCone, width: 570, height: 567 },
  limeSpiral: { src: ctaLimeSpiral, width: 1000, height: 995 },
  limeTopLeft: { src: ctaLimeTopLeft, width: 1166, height: 1161 },
  limeTorus: { src: ctaLimeTorus, width: 1037, height: 1032 },
  whiteCone: { src: ctaWhiteCone, width: 570, height: 567 },
  whiteCylinder: { src: ctaWhiteCylinder, width: 1122, height: 1116 },
  whiteSpiral: { src: ctaWhiteSpiral, width: 530, height: 528 },
} as const satisfies Record<string, BrandShape>;

export type BrandShapeKey = keyof typeof brandShapes;

export const heroShapes = {
  topLeftLime: { src: ctaLimeTopLeft, width: 1166, height: 1161 },
  cylinderLime: { src: heroCylinderLime, width: 1122, height: 1116 },
  coneWhite: { src: heroConeWhite, width: 570, height: 567 },
  spiralSmallWhite: { src: ctaWhiteSpiral, width: 530, height: 528 },
  torusWhite: { src: heroTorusWhite, width: 1037, height: 1032 },
  spiralLargeWhite: { src: heroSpiralWhite, width: 1000, height: 995 },
} as const satisfies Record<string, BrandShape>;

export type HeroShapeKey = keyof typeof heroShapes;
