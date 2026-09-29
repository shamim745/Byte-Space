const emailPattern = /^\S+@\S+\.\S+$/;

type FieldError = string | undefined;

export const required = (value: string, message: string): FieldError =>
  value ? undefined : message;

export const validateEmail = (value: string): FieldError => {
  if (!value) return "Email is required.";
  if (!emailPattern.test(value)) return "Enter a valid email address.";
  return undefined;
};

export const validatePassword = (value: string): FieldError => {
  if (!value) return "Password is required.";
  if (value.length < 8) return "Password must be at least 8 characters.";
  return undefined;
};

export const validateName = (value: string): FieldError =>
  required(value, "Full name is required.") ??
  (value.length < 2 ? "Please enter your full name." : undefined);
