import type { FormFieldProps } from "@/types/auth";

const FormField = ({ label, ...input }: FormFieldProps) => (
  <label className="flex flex-col gap-2">
    <span className="text-[14px] font-medium leading-[16.8px] text-ink">
      {label}
    </span>
    <input
      {...input}
      className="h-[52px] rounded-[12px] border border-[#e5e6e8] px-6 text-[18px] leading-[28.8px] text-ink placeholder:text-[#82868e]"
    />
  </label>
);

export default FormField;
