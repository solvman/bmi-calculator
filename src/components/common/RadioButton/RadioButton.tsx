import type { InputHTMLAttributes } from "react";

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  id: string;
  label: string;
}

function RadioButton({ name, id, label, ...rest }: RadioButtonProps) {
  return (
    <li className="flex w-1/2 items-center gap-[18px]">
      <input
        className="h-[31px] w-[31px] border border-borders text-blue/15 transition-all checked:border-none checked:border-white hover:border-blue focus:ring-white"
        type="radio"
        name={name}
        id={id}
        value={id}
        {...rest}
      />
      <label
        htmlFor={id}
        className="text-base font-semibold capitalize leading-6"
      >
        {label}
      </label>
    </li>
  );
}
export default RadioButton;
