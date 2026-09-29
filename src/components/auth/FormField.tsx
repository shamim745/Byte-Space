import type { FormFieldProps } from "@/types/auth";

const FormField = ({ label, error, ...input }: FormFieldProps) => (
  <label className="flex flex-col gap-2">
    <span className="text-[14px] font-medium leading-[16.8px] text-ink">
      {label}
    </span>
    <input
      {...input}
      aria-invalid={error ? true : undefined}
      className={`h-[52px] rounded-[12px] border px-6 text-[18px] leading-[28.8px] text-ink placeholder:text-[#82868e] ${
        error ? "border-[#dc2626]" : "border-[#e5e6e8]"
      }`}
    />
    {error && (
      <span className="text-[13px] leading-[16px] text-[#dc2626]" role="alert">
        {error}
      </span>
    )}
  </label>
);

export default FormField;
