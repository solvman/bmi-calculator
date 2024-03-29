type RadioButtonProps = {
  name: string;
  id: string;
  label: string;
};

function RadioButton({ name, id, label }: RadioButtonProps) {
  return (
    <p className="flex w-1/2 items-center gap-[18px]">
      <input
        className="h-[31px] w-[31px] stroke-slate-400"
        type="radio"
        name={name}
        id={id}
        value={id}
      />
      <label htmlFor={id} className="text-base font-semibold leading-6">
        {label}
      </label>
    </p>
  );
}
export default RadioButton;
