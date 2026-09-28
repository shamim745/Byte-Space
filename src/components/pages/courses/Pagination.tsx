"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@/components/common/Icons";
import type { PaginationProps } from "@/types/course";
import type { ReactNode } from "react";

const STEP_PILL =
  "flex h-12 w-14 items-center justify-center rounded-[24px] border border-[#ced0d3] bg-white transition-opacity hover:opacity-70 disabled:cursor-not-allowed disabled:opacity-100";

const Pagination = ({ current, total, onChange }: PaginationProps): ReactNode => {
  if (total <= 1) return null;

  const numbers = Array.from({ length: total }, (_, i) => i + 1);
  const atStart = current === 1;
  const atEnd = current === total;

  return (
    <nav
      className="flex items-center gap-6"
      aria-label="Pagination"
    >
      <button
        type="button"
        onClick={() => onChange(current - 1)}
        disabled={atStart}
        className={STEP_PILL}
        aria-label="Previous page"
      >
        <ArrowLeftIcon
          className={`h-6 w-6 ${atStart ? "text-[#4b4c53]" : "text-ink"}`}
        />
      </button>

      {numbers.map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          aria-current={n === current ? "page" : undefined}
          className={`flex h-12 items-center justify-center px-0 font-display text-[20px] font-semibold leading-7 transition-opacity hover:opacity-70 ${
            n === current ? "text-[#ced0d3]" : "text-ink"
          }`}
        >
          {n}
        </button>
      ))}

      <button
        type="button"
        onClick={() => onChange(current + 1)}
        disabled={atEnd}
        className={STEP_PILL}
        aria-label="Next page"
      >
        <ArrowRightIcon
          className={`h-6 w-6 ${atEnd ? "text-[#4b4c53]" : "text-ink"}`}
        />
      </button>
    </nav>
  );
};

export default Pagination;
