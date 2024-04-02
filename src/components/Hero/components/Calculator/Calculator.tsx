import { useState } from "react";
import RadioButton from "@/components/common/RadioButton";

import MetricForm from "./components/MetricForm";
import ImperialForm from "./components/ImperialForm";

const systemValues = ["metric", "imperial"] as const;
type System = (typeof systemValues)[number];

function Calculator() {
  const [value, setValue] = useState<System>("metric");

  return (
    <article className="mx-6 -mt-[45%] flex flex-col gap-6 rounded-2xl bg-pureWhite p-6 shadow-card">
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
              onChange={() => setValue(system)}
            />
          ))}
        </ul>
      </fieldset>
      {value === "metric" ? <MetricForm /> : <ImperialForm />}
    </article>
  );
}
export default Calculator;
