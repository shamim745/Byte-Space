import Image from "next/image";
import Link from "next/link";
import type { CategoryCardProps } from "@/types/home";

const CategoryCard = ({ label, icon, href }: CategoryCardProps) => {
  return (
    <Link
      href={href}
      className="flex flex-col items-center gap-3 rounded-2xl border border-black/10 bg-white p-4 text-center transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg sm:p-5"
    >
      <Image src={icon} alt="" width={48} height={48} unoptimized className="h-12 w-12" />
      <span className="text-sm font-semibold text-ink sm:text-base">{label}</span>
    </Link>
  );
};

export default CategoryCard;
