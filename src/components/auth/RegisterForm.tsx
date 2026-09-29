"use client";

import useAuthForm from "@/hooks/useAuthForm";
import { fields } from "@/db/register-form";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "@/utils/validate";
import Link from "next/link";
import FormField from "./FormField";

const RegisterForm = () => {
  const { errors, pending, clearError, handleSubmit } = useAuthForm({
    validate: (data) => ({
      name: validateName(String(data.get("name") ?? "").trim()),
      email: validateEmail(String(data.get("email") ?? "").trim()),
      password: validatePassword(String(data.get("password") ?? "")),
    }),
  });

  return (
    <form
      className="flex flex-col pt-7 pb-8 sm:pt-10 sm:pb-10 min-[75rem]:pt-[61px] min-[75rem]:pb-[51px]"
      onSubmit={handleSubmit}
      noValidate
    >
      <div>
        <p className="text-[16px] leading-[25.6px] text-[#003be2] sm:text-[18px] sm:leading-[28.8px]">
          Create an Account
        </p>
        <h1 className="text-[30px] font-semibold leading-[36px] tracking-[-0.44px] text-ink sm:text-[44px] sm:leading-[52.8px]">
          Welcome to ByteSpace
        </h1>
      </div>

      <div className="mt-6 flex flex-col gap-5 sm:mt-10 sm:gap-6">
        {fields.map((field) => (
          <FormField
            key={field.name}
            {...field}
            error={errors[field.name]}
            onChange={clearError(field.name)}
          />
        ))}

        <button
          type="submit"
          disabled={pending}
          aria-busy={pending}
          className="flex h-[46px] items-center justify-center gap-2 self-end rounded-[24px] bg-accent px-6 text-[18px] font-medium leading-[21.6px] text-ink disabled:opacity-60"
        >
          {pending ? "Creating…" : "Continue"}
        </button>
      </div>

      <p className="mt-10 flex justify-center gap-1 text-[16px] leading-[25.6px] text-[#4b4c53] sm:mt-[122px]">
        Already have an account?
        <Link href="/login" className="text-[#003be2]">
          Login
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
