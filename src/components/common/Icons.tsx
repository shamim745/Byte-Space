import { svg } from "@/components/common/svg";
import type { IconProps } from "@/types/common";

export const SearchIcon = ({ className, ...props }: IconProps) => (
  <svg {...svg(className)} {...props}>
    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
  </svg>
);

export const ChevronDownIcon = ({ className, ...props }: IconProps) => (
  <svg {...svg(className)} {...props}>
    <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
  </svg>
);

export const FilterIcon = ({ className, ...props }: IconProps) => (
  <svg {...svg(className)} {...props}>
    <path d="M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61z" />
  </svg>
);

export const LevelIcon = ({ className, ...props }: IconProps) => (
  <svg {...svg(className)} {...props}>
    <path d="M17 4h3v16h-3V4zM5 14h3v6H5v-6zm6-4h3v10h-3V10z" />
  </svg>
);

export const CategoryIcon = ({ className, ...props }: IconProps) => (
  <svg {...svg(className)} {...props}>
    <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" />
  </svg>
);

export const SortIcon = ({ className, ...props }: IconProps) => (
  <svg {...svg(className)} {...props}>
    <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" />
  </svg>
);

export const ArrowLeftIcon = ({ className, ...props }: IconProps) => (
  <svg {...svg(className)} {...props}>
    <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
  </svg>
);

export const ArrowRightIcon = ({ className, ...props }: IconProps) => (
  <svg {...svg(className)} {...props}>
    <path d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z" />
  </svg>
);

export const ShoppingBagIcon = ({ className, ...props }: IconProps) => (
  <svg {...svg(className)} {...props}>
    <path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2z" />
  </svg>
);

export const MenuIcon = ({ className, ...props }: IconProps) => (
  <svg {...svg(className)} {...props}>
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
);

export const CloseIcon = ({ className, ...props }: IconProps) => (
  <svg {...svg(className)} {...props}>
    <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
);

