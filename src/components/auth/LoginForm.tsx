"use client";

import { socials } from "@/db/login-form";
import Image from "next/image";
import Link from "next/link";
import FormField from "./FormField";

const LoginForm = () => (
  <form
    className="flex flex-col pt-7
     pb-8 sm:pt-10 sm:pb-10 
     min-[75rem]:pt-[61px] 
     min-[75rem]:pb-[40px]"
    onSubmit={(event) => event.preventDefault()}
  >
    <div>
      <p className="text-[16px] leading-[25.6px] text-[#003be2] sm:text-[18px] sm:leading-[28.8px]">Sign In</p>
      <h1 className="text-[30px] font-semibold leading-[36px] tracking-[-0.44px] text-ink sm:text-[44px] sm:leading-[52.8px]">
        Welcome Back
      </h1>
    </div>

    <div className="mt-6 flex flex-col gap-5 sm:mt-10 sm:gap-6">
      <FormField
        label="Email"
        type="email"
        name="email"
        autoComplete="email"
        placeholder="designer@example.com"
      />
      <FormField
        label="Password"
        type="password"
        name="password"
        autoComplete="current-password"
        placeholder="********"
      />

      <button
        type="submit"
        className="flex h-[46px] items-center justify-center gap-2 self-end rounded-[24px] bg-accent px-6 text-[18px] font-medium leading-[21.6px] text-ink"
      >
        Sign In
      </button>
    </div>

    <div className="mt-9 flex flex-col gap-6 sm:mt-[73px] sm:gap-10">
      <div className="flex items-center gap-[11px]">
        <span className="h-px max-w-[200px] flex-1 bg-[#d1d1d1]" />
        <span className="text-[18px] leading-[28.8px] text-[#888888]">or</span>
        <span className="h-px max-w-[200px] flex-1 bg-[#d1d1d1]" />
      </div>

      <div className="flex justify-center gap-4">
        {socials.map((social) => (
          <button
            key={social.label}
            type="button"
            aria-label={social.label}
            className="flex h-14 w-14 items-center justify-center rounded-[24px] border border-[#d1d1d1] sm:h-[72px] sm:w-[72px]"
          >
            <Image
              src={social.icon}
              alt=""
              width={33}
              height={33}
              unoptimized
              className="h-[33px] w-[33px]"
            />
          </button>
        ))}
      </div>
    </div>

    <p className="mt-9 flex justify-center gap-1 text-[16px] leading-[25.6px] text-[#888888] sm:mt-[73px]">
      New user?
      <Link href="/register" className="text-[#003be2]">
        Create an account
      </Link>
    </p>
  </form>
);

export default LoginForm;
