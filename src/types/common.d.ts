import type { ReactNode } from "react";
import type { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

export type Stat = {
  value: string;
  label: string;
};

export type DropdownItem = {
  value: string;
  label: string;
  hint?: string;
};

export type DropdownProps = {
  label: string;
  items: DropdownItem[];
  value: string;
  defaultValue: string;
  onChange: (value: string) => void;
  icon?: ReactNode;
  trailingIcon?: ReactNode;
  pillClassName?: string;
  align?: "left" | "right";
  direction?: "down" | "up";
  portal?: boolean;
  ariaLabel?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};
