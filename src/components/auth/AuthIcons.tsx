import type { IconProps } from "@/types/auth";

export const StarIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    fill="currentColor"
    className={className}
  >
    <path
      transform="translate(2 2)"
      d="M12.43 8L10 0L7.57 8L0 8L6.18 12.41L3.83 20L10 15.31L16.18 20L13.83 12.41L20 8L12.43 8Z"
    />
  </svg>
);

export const StarRoundedIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 16 16"
    aria-hidden="true"
    fill="currentColor"
    className={className}
  >
    <path d="M7.52482 1.45123C7.67519 0.992014 8.32481 0.992015 8.47518 1.45123L9.69317 5.17111C9.76032 5.37617 9.95144 5.51503 10.1672 5.51552L14.0814 5.5244C14.5646 5.5255 14.7654 6.14333 14.3751 6.42824L11.2137 8.73613C11.0394 8.86335 10.9664 9.08803 11.0326 9.2934L12.2337 13.0188C12.382 13.4787 11.8564 13.8605 11.4648 13.5774L8.29297 11.2838C8.11812 11.1574 7.88188 11.1574 7.70703 11.2838L4.53516 13.5774C4.14359 13.8605 3.61803 13.4787 3.7663 13.0188L4.96741 9.2934C5.03363 9.08803 4.96062 8.86335 4.78634 8.73613L1.62491 6.42824C1.23464 6.14333 1.43538 5.5255 1.91859 5.5244L5.83278 5.51552C6.04856 5.51503 6.23968 5.37617 6.30683 5.17111L7.52482 1.45123Z" />
  </svg>
);

export const LevelIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 20 20"
    aria-hidden="true"
    fill="currentColor"
    className={className}
  >
    <path
      transform="translate(3.75 3.3333)"
      d="M10 0L12.5 0L12.5 13.3333L10 13.3333L10 0ZM0 8.33333L2.5 8.33333L2.5 13.3333L0 13.3333L0 8.33333ZM5 4.16667L7.5 4.16667L7.5 13.3333L5 13.3333L5 4.16667Z"
    />
  </svg>
);
