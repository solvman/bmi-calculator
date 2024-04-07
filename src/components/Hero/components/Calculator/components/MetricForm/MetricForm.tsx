import NumberInput from "@/components/common/NumberInput";
import Outcomes from "../Outcomes";
import { useCalculateBmi } from "@/hooks/useCalculateBmi";

export const MetricForm = () => {
  const { values, onChange, bmi, height } = useCalculateBmi("metric");

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
            value={values.height}
            onChange={onChange}
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
            value={values.weight}
            onChange={onChange}
          />
        </div>
      </form>
      <Outcomes bmi={bmi} height={height} system={"metric"} />
    </>
  );
};
