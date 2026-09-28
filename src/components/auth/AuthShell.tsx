import type { AuthShellProps } from "@/types/auth";
import Image from "next/image";
import Link from "next/link";

const CONTAINER = "container px-6 min-[75rem]:px-0";

const AuthShell = ({ showcase, form }: AuthShellProps) => (
  <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#003be2]">
    <div
      aria-hidden
      className="design-grid pointer-events-none absolute inset-0"
    />

    <header
      className={`${CONTAINER} relative flex h-[76px] items-start pt-6 sm:h-[120px] sm:pt-[35px]`}
    >
      <Link href="/" aria-label="ByteSpace home">
        <Image
          src="/assets/images/auth/logo-mark.svg"
          alt="ByteSpace"
          width={29}
          height={32}
          unoptimized
          className="h-[31.5px] w-[28.875px]"
        />
      </Link>
    </header>

    <main className={`${CONTAINER} relative pb-8 sm:pb-16 min-[75rem]:pb-[120px]`}>
      <div className="flex flex-col items-center gap-6 min-[75rem]:flex-row min-[75rem]:items-start min-[75rem]:gap-[135px] sm:gap-10">
        {showcase}
        <div
          data-reveal
          style={{ "--reveal-delay": "0.15s" } as React.CSSProperties}
          className="w-full max-w-[579px] rounded-[24px] bg-white px-6 sm:px-[63px] min-[75rem]:w-[579px] min-[75rem]:shrink-0"
        >
          {form}
        </div>
      </div>
    </main>
  </div>
);

export default AuthShell;
