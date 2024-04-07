// - Underweight: BMI less than 18.5
// - Healthy weight: BMI 18.5 to 24.9
// - Overweight: BMI 25 to 29.9
// - Obese: BMI 30 or greater

const UNDERWEIGHT_BMI = 18.5;
const HEALTHY_WEIGHT_BMI = 24.9;
const OVERWEIGHT_BMI = 29.9;

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
  isMetric: boolean,
): [string, string] => {
  const bmiMultiplier = isMetric ? 1 : 703;
  const lowerLimit = UNDERWEIGHT_BMI * (height / 100) ** 2 * bmiMultiplier;
  const upperLimit = HEALTHY_WEIGHT_BMI * (height / 100) ** 2 * bmiMultiplier;
  return [lowerLimit.toFixed(1), upperLimit.toFixed(1)];
};

export { getCondition, getHealthyWeight };
