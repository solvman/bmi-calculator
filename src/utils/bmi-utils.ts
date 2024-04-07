// - Underweight: BMI less than 18.5
// - Healthy weight: BMI 18.5 to 24.9
// - Overweight: BMI 25 to 29.9
// - Obese: BMI 30 or greater

import { System } from "./types";

const UNDERWEIGHT_BMI = 18.5;
const HEALTHY_WEIGHT_BMI = 24.9;
const OVERWEIGHT_BMI = 29.9;
const IMPERIAL_MULTIPLIER = 703;
const METRIC_MULTIPLIER = 100;
const LB_PER_STONE = 14;

function calculateBmi(
  height: number,
  weight: number,
  system: System = "metric",
): number {
  const bmiImperialMultiplier = system === "metric" ? 1 : IMPERIAL_MULTIPLIER;
  const bmiMetricMultiplier = system === "imperial" ? 1 : METRIC_MULTIPLIER;

  if (height === 0 || weight === 0) {
    return 0;
  }

  return (weight / (height / bmiMetricMultiplier) ** 2) * bmiImperialMultiplier;
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

const convertToStonesAndPounds = (weight: number): string => {
  const stones = Math.floor(weight / LB_PER_STONE);
  const pounds = Math.round(weight % LB_PER_STONE);
  return `${stones}st ${pounds}lb`;
};

const getHealthyWeight = (
  height: number,
  system: System = "metric",
): [string, string] => {
  if (system === "metric") {
    const heightSquared = (height / METRIC_MULTIPLIER) ** 2;
    const lowerLimit = UNDERWEIGHT_BMI * heightSquared;
    const upperLimit = HEALTHY_WEIGHT_BMI * heightSquared;
    return [`${lowerLimit.toFixed(1)}kg`, `${upperLimit.toFixed(1)}kg`];
  }
  if (system === "imperial") {
    const heightSquared = height ** 2;
    const lowerLimit = (UNDERWEIGHT_BMI * heightSquared) / IMPERIAL_MULTIPLIER;
    const upperLimit =
      (HEALTHY_WEIGHT_BMI * heightSquared) / IMPERIAL_MULTIPLIER;

    return [
      convertToStonesAndPounds(lowerLimit),
      convertToStonesAndPounds(upperLimit),
    ];
  }

  return ["", ""];
};

export { getCondition, getHealthyWeight, calculateBmi };
