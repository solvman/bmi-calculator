import NumberInput from "@/components/common/NumberInput";

export const MetricForm = () => {
  return (
    <fieldset className="flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-2">
        <label
          htmlFor="height"
          className="text-sm font-normal leading-normal text-darkElectricBlue"
        >
          Height
        </label>
        <NumberInput unit="cm" type="number" id="height" />
      </div>
      <div className="flex flex-col gap-y-2">
        <label
          htmlFor="weight"
          className="text-sm font-normal leading-normal text-darkElectricBlue"
        >
          Weight
        </label>
        <NumberInput unit="kg" type="number" id="weight" />
      </div>
    </fieldset>
  );
};
