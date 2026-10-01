import { svg } from "@/components/common/svg";
import type { IconProps } from "@/types/common";

const LevelIcon = ({ className, ...props }: IconProps) => (
  <svg {...svg(className)} {...props}>
    <rect x="3" y="14" width="3.4" height="7" rx="1.2" />
    <rect x="10.3" y="9.5" width="3.4" height="11.5" rx="1.2" />
    <rect x="17.6" y="5" width="3.4" height="16" rx="1.2" />
  </svg>
);

const StarIcon = ({ className, ...props }: IconProps) => (
  <svg
    {...svg(className)}
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M12.43 8L10 0L7.57 8H0L6.18 12.41L3.83 20L10 15.31L16.18 20L13.83 12.41L20 8H12.43Z"
      fill="#4B4C53"
    />
  </svg>
);

const StudentsIcon = ({ className, ...props }: IconProps) => (
  <svg {...svg(className)} {...props}>
    <path d="M8.5 11.6a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2ZM16.4 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM8.5 13.4c-3.3 0-6.3 1.7-6.3 3.9V20h12.6v-2.7c0-2.2-3-3.9-6.3-3.9ZM16.4 13.8c-.6 0-1.2.06-1.75.18 1.42.94 2.35 2.24 2.35 3.72V20H22v-2.4c0-2.05-2.7-3.8-5.6-3.8Z" />
  </svg>
);

const ShareIcon = ({ className, ...props }: IconProps) => (
  <svg {...svg(className)} {...props}>
    <path d="M14 3.2c0-.9 1.08-1.33 1.71-.67l5.98 5.98a.9.9 0 0 1 0 1.27l-5.98 5.98c-.63.66-1.71.23-1.71-.67v-2.66c-4.5 0-7.86 1.32-10.24 4.2-.36.44-1.06.13-.97-.45C4.02 11.9 8.1 8.9 14 8.5V3.2Z" />
  </svg>
);

export const PlayIcon = ({ className, ...props }: IconProps) => (
  <svg {...svg(className)} {...props}>
    <path d="M7.6 4.35c0-1.13 1.24-1.83 2.2-1.25l11.06 6.65a1.45 1.45 0 0 1 0 2.5L9.8 20.9a1.45 1.45 0 0 1-2.2-1.25V4.35Z" />
  </svg>
);

export const CheckCircleIcon = ({ className, ...props }: IconProps) => (
  <svg {...svg(className)} {...props}>
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1.6 14.4-4-4 1.7-1.7 2.3 2.3 5.5-5.5 1.7 1.7-7.2 7.2Z" />
  </svg>
);

const ResourcesIcon = ({ className, ...props }: IconProps) => (
  <svg {...svg(className)} {...props}>
    <path d="M3.5 5.5A2.5 2.5 0 0 1 6 3h3.2c.7 0 1.36.33 1.78.9L12.3 5.5H18a2.5 2.5 0 0 1 2.5 2.5v8.5A2.5 2.5 0 0 1 18 19H6a2.5 2.5 0 0 1-2.5-2.5v-11Zm8.7 6.2a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06L13 13.56V17a.75.75 0 0 1-1.5 0v-3.44l-1.2.3a.75.75 0 0 1-.36-1.46l3-3Z" />
  </svg>
);

const VideoIcon = ({ className, ...props }: IconProps) => (
  <svg {...svg(className)} {...props}>
    <path d="M3.5 6.5A2.5 2.5 0 0 1 6 4h6.5A2.5 2.5 0 0 1 15 6.5v11a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 17.5v-11ZM16.6 9.4l3.2-2.16A.9.9 0 0 1 21.2 8v8a.9.9 0 0 1-1.4.76l-3.2-2.16v-5.2Z" />
  </svg>
);

const CertificateIcon = ({ className, ...props }: IconProps) => (
  <svg {...svg(className)} {...props}>
    <path d="M12 2.5 3.5 6v6.4c0 4.3 3.6 7.9 8.5 9.1 4.9-1.2 8.5-4.8 8.5-9.1V6L12 2.5Zm-1.4 12.9-3-3 1.4-1.4 1.6 1.6 4.3-4.3 1.4 1.4-5.7 5.7Z" />
  </svg>
);

const ConsultationIcon = ({ className, ...props }: IconProps) => (
  <svg {...svg(className)} {...props}>
    <path d="M12 3c5 0 9 3.4 9 7.6 0 4.2-4 7.6-9 7.6-.98 0-1.92-.13-2.8-.37L4.2 19.7a.7.7 0 0 1-.98-.83l.66-2.7C2.62 14.98 3 12.86 3 10.6 3 6.4 7 3 12 3Zm-3.7 7.2a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Zm3.7 0a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Zm3.7 0a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z" />
  </svg>
);

export const metaIcons = {
  level: LevelIcon,
  rating: StarIcon,
  students: StudentsIcon,
  share: ShareIcon,
  resources: ResourcesIcon,
  videos: VideoIcon,
  certificate: CertificateIcon,
  consultation: ConsultationIcon,
};
