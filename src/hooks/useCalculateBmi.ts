import { calculateBmi, IN_PER_FOOT, LB_PER_STONE } from "@/utils/bmi-utils";
import type { System } from "@/utils/types";
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
    height = +values.heightFt * IN_PER_FOOT + +values.heightIn;
    weight = +values.weightSt * LB_PER_STONE + +values.weightLb;
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
