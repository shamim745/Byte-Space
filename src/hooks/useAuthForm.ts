"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState, type ChangeEvent, type FormEvent } from "react";

export type FormErrors = Record<string, string | undefined>;

type UseAuthFormOptions = {
  validate: (data: FormData) => FormErrors;
  successPath?: string;
};

const compact = (errors: FormErrors): FormErrors =>
  Object.fromEntries(Object.entries(errors).filter(([, message]) => message));

const useAuthForm = ({ validate, successPath = "/" }: UseAuthFormOptions) => {
  const router = useRouter();
  const [errors, setErrors] = useState<FormErrors>({});
  const [pending, setPending] = useState(false);

  const clearError = useCallback(
    (name: string) => (event: ChangeEvent<HTMLInputElement>) => {
      if (errors[name] && event.target.value) {
        setErrors((current) => ({ ...current, [name]: undefined }));
      }
    },
    [errors],
  );

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const next = compact(validate(new FormData(event.currentTarget)));
      setErrors(next);
      if (Object.keys(next).length > 0) return;

      setPending(true);
      await new Promise((resolve) => setTimeout(resolve, 700));
      router.push(successPath);
    },
    [validate, router, successPath],
  );

  return { errors, pending, clearError, handleSubmit };
};

export default useAuthForm;
