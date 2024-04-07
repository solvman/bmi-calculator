// - Underweight: BMI less than 18.5
// - Healthy weight: BMI 18.5 to 24.9
// - Overweight: BMI 25 to 29.9
// - Obese: BMI 30 or greater

import { System } from "./types";

const UNDERWEIGHT_BMI = 18.5;
const HEALTHY_WEIGHT_BMI = 24.9;
const OVERWEIGHT_BMI = 29.9;

function calculateBmi(
  height: number,
  weight: number,
  system: System = "metric",
): number {
  const bmiMultiplier = system === "metric" ? 1 : 703;

  if (height === 0 || weight === 0) {
    return 0;
  }

  return parseFloat(
    ((weight / (height / 100) ** 2) * bmiMultiplier).toFixed(1),
  );
}

function getCondition(bmi: number): string {
  if (bmi < UNDERWEIGHT_BMI) {
    return "underweight";
  } else if (bmi >= UNDERWEIGHT_BMI && bmi <= HEALTHY_WEIGHT_BMI) {
    return "a healthy weight";
  } else if (bmi > HEALTHY_WEIGHT_BMI && bmi <= OVERWEIGHT_BMI) {
    return "overweight";
  } else {
    return "obese";
  }
}

const getHealthyWeight = (
  height: number,
  system: System = "metric",
): [string, string] => {
  if (system === "metric") {
    const lowerLimit = UNDERWEIGHT_BMI * (height / 100) ** 2;
    const upperLimit = HEALTHY_WEIGHT_BMI * (height / 100) ** 2;
    return [`${lowerLimit.toFixed(1)}kg`, `${upperLimit.toFixed(1)}kg`];
  }
  if (system === "imperial") {
    const lowerLimit = UNDERWEIGHT_BMI * height ** 2;
    const upperLimit = HEALTHY_WEIGHT_BMI * height ** 2;
    return [lowerLimit.toFixed(1), upperLimit.toFixed(1)];
  }

  return ["", ""];
};

export { getCondition, getHealthyWeight, calculateBmi };
