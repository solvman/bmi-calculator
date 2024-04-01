import type { InputHTMLAttributes } from "react";

interface NumberInputProps extends InputHTMLAttributes<HTMLInputElement> {
  unit: string;
}

export const NumberInput = ({ unit, ...rest }: NumberInputProps) => {
  return (
    <div className="relative">
      <input
        className="w-full rounded-xl border-borders px-6 py-5 pr-12 text-2xl font-semibold tracking-tighter"
        type="number"
        min="0"
        {...rest}
      />
      <p className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl font-semibold tracking-tighter text-blue">
        {unit}
      </p>
    </div>
  );
};
