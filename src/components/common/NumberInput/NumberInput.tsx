import type { InputHTMLAttributes } from "react";

interface NumberInputProps extends InputHTMLAttributes<HTMLInputElement> {
  unit: string;
}

export const NumberInput = ({ unit, ...rest }: NumberInputProps) => {
  return (
    <div className="relative">
      <input
        className="w-full cursor-pointer rounded-xl border-borders px-6 py-5 pr-12 text-2xl font-semibold tracking-tighter placeholder:text-gunmetal placeholder:opacity-25 hover:border-blue"
        type="number"
        min="1"
        placeholder="0"
        {...rest}
      />
      <p className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl font-semibold tracking-tighter text-blue">
        {unit}
      </p>
    </div>
  );
};
