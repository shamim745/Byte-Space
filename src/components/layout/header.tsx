"use client";

import { useEffect, useState } from "react";

import { CloseIcon, MenuIcon, ShoppingBagIcon } from "@/components/common/Icons";
import { accountLinks, navLinks } from "@/db/header";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || menuOpen;
  const tone = solid ? "text-ink" : "text-[#f5f5f6]";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-[72px] transition-colors duration-300 lg:h-[120px] ${
        solid ? "bg-white shadow-[0_4px_24px_rgba(36,37,40,0.08)]" : "bg-transparent"
      }`}
    >
      <div className="container flex h-full items-center justify-between px-4 xl:px-0">
        <Link
          href="/"
          aria-label="ByteSpace home"
          className="shrink-0 lg:mt-[35px] lg:self-start"
        >
          <Image
            src={
              solid
                ? "/assets/images/brand/logo.svg"
                : "/assets/images/brand/logo-light.svg"
            }
            alt="ByteSpace"
            width={171}
            height={37}
            unoptimized
            className="h-[30px] w-auto lg:h-[37px]"
          />
        </Link>

        <nav className={`hidden items-center gap-6 lg:flex lg:items-start ${tone}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base leading-[25.6px] transition-opacity hover:opacity-70 ${link.weight} ${
                link.href === "/" ? "lg:leading-[19.2px]" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={`flex items-center gap-4 sm:gap-6 ${tone}`}>
          {accountLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hidden text-base font-normal leading-6 transition-opacity hover:opacity-70 sm:block"
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            aria-label="Cart"
            className="transition-opacity hover:opacity-70"
          >
            <ShoppingBagIcon className="h-6 w-6" />
          </button>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className="transition-opacity hover:opacity-70 lg:hidden"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="absolute inset-x-0 top-full flex flex-col gap-4 border-t border-black/10 bg-white px-4 py-6 shadow-lg lg:hidden">
          {[...navLinks, ...accountLinks].map((link) => (
            <Link
              key={`${link.href}-${link.label}`}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-base text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
