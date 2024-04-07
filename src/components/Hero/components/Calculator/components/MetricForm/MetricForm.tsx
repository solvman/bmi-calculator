import NumberInput from "@/components/common/NumberInput";
import Outcomes from "../Outcomes";
import { useState } from "react";

export const MetricForm = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const calulateBMI = () => {
    if (+height > 0 && +weight > 0) {
      return parseFloat((+weight / (+height / 100) ** 2).toFixed(1));
    }
    return 0;
  };

  const bmi = calulateBMI();

  console.log({ bmi });

  return (
    <>
      <form className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-2">
          <label
            htmlFor="height"
            className="text-sm font-normal leading-normal text-darkElectricBlue"
          >
            Height
          </label>
          <NumberInput
            unit="cm"
            name="height"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label
            htmlFor="weight"
            className="text-sm font-normal leading-normal text-darkElectricBlue"
          >
            Weight
          </label>
          <NumberInput
            unit="kg"
            name="weight"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
      </form>
      <Outcomes bmi={bmi} height={height} system={"metric"} />
    </>
  );
};
