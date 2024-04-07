import { getCondition, getHealthyWeight } from "@/utils/bmi-utils";
import { System } from "@/utils/types";

interface ResultBMIProps {
  bmi: number;
  height: number;
  system: System;
}

export const ResultBMI = ({ bmi, height, system }: ResultBMIProps) => {
  const [lowerLimit, upperLimit] = getHealthyWeight(height, system);

  return (
    <>
      <div>
        <h3 className="mb-2 font-semibold">Your BMI is...</h3>
        <p className="text-5xl font-semibold leading-[1.1] tracking-tighter">
          {bmi.toFixed(1)}
        </p>
      </div>
      <p className="text-sm">
        Your BMI suggests you're {getCondition(bmi)}. Your ideal weight is
        between{" "}
        <strong>
          {lowerLimit} - {upperLimit}
        </strong>
      </p>
    </>
  );
};

export default ResultBMI;
