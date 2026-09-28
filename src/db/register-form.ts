import type { RegisterFormField } from "@/types/auth";

export const fields: RegisterFormField[] = [
  {
    label: "Full Name",
    name: "name",
    type: "text",
    placeholder: "Jamie Davis",
    autoComplete: "name",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "designer@example.com",
    autoComplete: "email",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "********",
    autoComplete: "new-password",
  },
];
