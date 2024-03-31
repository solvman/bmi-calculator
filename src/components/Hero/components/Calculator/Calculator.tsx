import { useState } from "react";
import RadioButton from "../../../common/RadioButton";

const systemValues = ["metric", "imperial"] as const;
type TSytstem = (typeof systemValues)[number];

function Calculator() {
  const [value, setValue] = useState<TSytstem>("metric");

  return (
    <form className="mx-6 -mt-[45%] flex flex-col gap-6 rounded-2xl bg-pureWhite p-6 shadow-card">
      <fieldset className="border-red flex flex-col gap-6">
        <legend className="mb-6 text-2xl font-semibold tracking-tighter">
          Enter your details below
        </legend>
        <ul className="flex">
          {systemValues.map((system) => (
            <RadioButton
              key={system}
              name="system"
              id={system}
              label={system}
              checked={value === system}
              onClick={() => setValue(system)}
            />
          ))}
        </ul>
      </fieldset>
      <p className="text-2xl">{value}</p>
    </form>
  );
}
export default Calculator;
