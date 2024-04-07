import type { InputHTMLAttributes } from "react";

interface NumberInputProps extends InputHTMLAttributes<HTMLInputElement> {
  unit: string;
}

export const NumberInput = ({ unit, ...rest }: NumberInputProps) => {
  return (
    <div className="relative">
      <input
        className="placeholder:text-gunmeta w-full rounded-xl border-borders px-6 py-5 pr-12 text-2xl font-semibold tracking-tighter placeholder:opacity-25"
        type="number"
        min="1"
        placeholder="0"
        pattern="^[1-9]+[0-9]*$"
        {...rest}
      />
      <p className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl font-semibold tracking-tighter text-blue">
        {unit}
      </p>
    </div>
  );
};
