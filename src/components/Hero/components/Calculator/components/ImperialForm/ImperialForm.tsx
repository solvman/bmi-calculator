import type { System } from "@/utils/types";

import NumberInput from "@/components/common/NumberInput";
import { useCalculateBmi } from "@/hooks/useCalculateBmi";

import Outcomes from "../Outcomes";

export const ImperialForm = () => {
  const system: System = "imperial";

  const { values, onChange, bmi, height } = useCalculateBmi(system);

  return (
    <>
      <form className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-2">
          <label
            htmlFor="heightFt"
            className="text-sm font-normal leading-normal text-darkElectricBlue"
          >
            Height
          </label>
          <div className="flex gap-4">
            <NumberInput
              unit="ft"
              name="heightFt"
              id="heightFt"
              value={values.heightFt}
              onChange={onChange}
            />
            <NumberInput
              unit="in"
              name="heightIn"
              id="heightIn"
              // max={IN_PER_FOOT - 1}
              value={values.heightIn}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <label
            htmlFor="weightSt"
            className="text-sm font-normal leading-normal text-darkElectricBlue"
          >
            Weight
          </label>
          <div className="flex gap-4">
            <NumberInput
              unit="st"
              name="weightSt"
              id="weightSt"
              value={values.weightSt}
              onChange={onChange}
            />
            <NumberInput
              unit="lb"
              name="weightLb"
              id="weightLb"
              value={values.weightLb}
              onChange={onChange}
            />
          </div>
        </div>
      </form>
      <Outcomes bmi={bmi} height={height} system={system} />
    </>
  );
};
