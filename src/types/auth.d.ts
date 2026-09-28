import type { InputHTMLAttributes, ReactNode } from "react";

export type AuthShellProps = {
  showcase: ReactNode;
  form: ReactNode;
};

export type AuthShowcaseProps = {
  title: string;
  description: string;
};

export type ShowcaseCourse = {
  title: string;
  image: string;
  position: string;
  /** px the card lags behind the section as it scrolls */
  speed: number;
  /** px the card drifts at full pointer deflection */
  mouse: number;
};

export type ShowcaseShape = {
  src: string;
  position: string;
  width: number;
  height: number;
  speed: number;
  mouse: number;
};

export type FormFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export type SocialLink = {
  label: string;
  icon: string;
};

export type RegisterFormField = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  autoComplete: string;
};

export type ShowcaseCourseCardProps = {
  title: string;
  image: string;
};

export type StudentsCardProps = {
  className?: string;
};

export type IconProps = {
  className?: string;
};
