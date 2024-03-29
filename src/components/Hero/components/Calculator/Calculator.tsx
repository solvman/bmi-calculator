import RadioButton from "../../../common/RadioButton";

function Calculator() {
  return (
    <form className="mx-6 -mt-[45%] flex flex-col gap-6 rounded-2xl bg-pureWhite p-6 shadow-card">
      <fieldset className="border-red flex flex-col gap-6">
        <legend className="mb-6 text-2xl font-semibold tracking-tighter">
          Enter your details below
        </legend>
        <div className="flex">
          <RadioButton name="system" id="metric" label="Metric" />
          <RadioButton name="system" id="imperial" label="Imperial" />
        </div>
      </fieldset>
    </form>
  );
}
export default Calculator;
