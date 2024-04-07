import { getCondition, getHealthyWeight } from "@/utils/bmi-utils";

interface ResultBMIProps {
  bmi: number;
  height: string;
  system: string;
}

export const ResultBMI = ({ bmi, height, system }: ResultBMIProps) => {
  const [lowerLimit, upperLimit] = getHealthyWeight(
    +height,
    system === "metric",
  );

  const unit = system === "metric" ? "kg" : "lbs";

  return (
    <>
      <div>
        <h3 className="mb-2 font-semibold">Your BMI is...</h3>
        <p className="text-5xl font-semibold leading-[1.1] tracking-tighter">
          {bmi}
        </p>
      </div>
      <p className="text-sm">
        Your BMI suggests you're {getCondition(bmi)}. Your ideal weight is
        between{" "}
        <strong>
          {lowerLimit}
          {unit} - {upperLimit}
          {unit}
        </strong>
      </p>
    </>
  );
};

export default ResultBMI;
