import type { ReactNode } from "react";

const SectionTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="font-display text-[20px] font-semibold leading-6 tracking-[-0.2px] text-ink">
    {children}
  </h2>
);

export default SectionTitle;
