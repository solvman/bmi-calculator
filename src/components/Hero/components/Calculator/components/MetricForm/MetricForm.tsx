import NumberInput from "@/components/common/NumberInput";
import Outcomes from "../Outcomes";
import { useCalculateBmi } from "@/hooks/useCalculateBmi";
import { System } from "@/utils/types";

export const MetricForm = () => {
  const system: System = "metric";

  const { values, onChange, bmi, height } = useCalculateBmi(system);

  return (
    <>
      <form className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-4">
        <div className="flex flex-1 flex-col gap-y-2">
          <label
            htmlFor="height"
            className="text-dark-electric-blueBlue text-sm font-normal leading-normal"
          >
            Height
          </label>
          <NumberInput
            unit="cm"
            name="height"
            id="height"
            value={values.height}
            onChange={onChange}
          />
        </div>
        <div className="flex flex-1 flex-col gap-y-2">
          <label
            htmlFor="weight"
            className="text-dark-electric-blueBlue text-sm font-normal leading-normal"
          >
            Weight
          </label>
          <NumberInput
            unit="kg"
            name="weight"
            id="weight"
            value={values.weight}
            onChange={onChange}
          />
        </div>
      </form>
      <Outcomes bmi={bmi} height={height} system={system} />
    </>
  );
};
