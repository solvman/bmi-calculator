import { calculateBmi } from "@/utils/bmi-utils";
import { System } from "@/utils/types";
import { useState } from "react";

export const useCalculateBmi = (system: System) => {
  let height = 0;
  let weight = 0;

  const defaultValues =
    system === "metric"
      ? { height: "", weight: "" }
      : { heightFt: "", heightIn: "", weightSt: "", weightLb: "" };

  const [values, setValues] = useState(defaultValues);

  if (system === "metric" && values.height && values.weight) {
    height = +values.height;
    weight = +values.weight;
  } else if (
    system === "imperial" &&
    values.heightFt &&
    values.heightIn &&
    values.weightSt &&
    values.weightLb
  ) {
    height = +values.heightFt * 12 + +values.heightIn;
    weight = +values.weightSt * 14 + +values.weightLb;
  }

  const bmi = calculateBmi(height, weight, system);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return { values, onChange, bmi, height };
};
