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
  <svg {...svg(className)} {...props} viewBox="0 0 16 16" fill="none">
    <path
      d="M2.9616 2H12.9616L7.9516 8.3L2.9616 2ZM0.211604 1.61C2.2316 4.2 5.9616 9 5.9616 9V15C5.9616 15.55 6.4116 16 6.9616 16H8.9616C9.5116 16 9.9616 15.55 9.9616 15V9C9.9616 9 13.6816 4.2 15.7016 1.61C16.2116 0.95 15.7416 0 14.9116 0L1.0016 0C0.171604 0 -0.298396 0.95 0.211604 1.61Z"
      fill="#242528"
    />
  </svg>
);

export const LevelIcon = ({ className, ...props }: IconProps) => (
  <svg {...svg(className)} {...props} viewBox="0 0 15 16" fill="none">
    <path
      d="M12 0L15 0V16H12V0ZM0 10H3V16H0L0 10ZM6 5H9V16H6V5Z"
      fill="#242528"
    />
  </svg>
);

export const CategoryIcon = ({ className, ...props }: IconProps) => (
  <svg {...svg(className)} {...props} viewBox="0 0 19 20" fill="none">
    <path
      d="M9 0L3.5 9H14.5L9 0ZM9 3.84L10.93 7H7.06L9 3.84ZM14.5 11C12.01 11 10 13.01 10 15.5C10 17.99 12.01 20 14.5 20C16.99 20 19 17.99 19 15.5C19 13.01 16.99 11 14.5 11ZM14.5 18C13.12 18 12 16.88 12 15.5C12 14.12 13.12 13 14.5 13C15.88 13 17 14.12 17 15.5C17 16.88 15.88 18 14.5 18ZM0 19.5H8V11.5H0L0 19.5ZM2 13.5H6V17.5H2V13.5Z"
      fill="#242528"
    />
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
