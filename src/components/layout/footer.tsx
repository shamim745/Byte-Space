import { legalLinks, linkColumns } from "@/db/footer";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-[2px] border-[#CED0D3] bg-white lg:px-[24px] px-[16px]">
      <div className="container md:pt-[71px] sm:pt-[50px] pt-[35px] md:pb-[130px] 
      sm:pb-[90px] pb-[50px]">
        <div className="grid gap-y-12 lg:grid-cols-2">
          <div className="max-w-[520px]">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/images/brand/logo.svg"
                alt="ByteSpace"
                width={171}
                height={37}
                unoptimized
                className="h-9 w-auto"
              />
            </Link>

            <p className="mt-6 text-sm leading-6 text-[#242528]">
              Stay Up to date with our latest features and releases by joining our
              newsletter.
            </p>

            <form className="md:mt-[45px] sm:mt-[35px] mt-[25px] flex sm:flex-row flex-col  items-center gap-4">
              <label htmlFor="footer-email" className="sr-only">
                Enter your email
              </label>
              <input
                id="footer-email"
                type="email"
                name="email"
                placeholder="Enter your email"
                className="h-12 w-full sm:max-w-[375px] rounded-full border border-black/15 bg-transparent px-6 text-sm text-black placeholder:text-black/50 focus:border-black/40 focus:outline-none"
              />
              <button
                type="submit"
                className="h-12 block w-full sm:w-auto shrink-0 cursor-pointer 
                rounded-full bg-[#D4FB20] px-8 text-sm font-bold 
                text-black transition-opacity hover:opacity-90"
              >
                Search
              </button>
            </form>

            <p className="mt-6 text-[13px] leading-6 text-black/60">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:mt-[60px] lg:gap-x-16">
            {linkColumns.map((column, index) => (
              <ul key={index} className="space-y-[16px]">
                {column.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#242528] transition-colors hover:text-black"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

      <div className="container flex flex-col items-center justify-between 
       gap-4 border-t border-black/10 sm:pb-[48px] py-[22px] sm:pt-[22px] sm:flex-row sm:items-center">
        <p className="text-[13px] text-black/70">
          @ 2023 ByteSpace. All rights reserved.
        </p>

        <nav className="flex flex-wrap items-center sm:justify-start justify-center md:gap-8 sm:gap-6 gap-4">
          {legalLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[13px] text-black/70 transition-colors hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
