export const Outcomes = () => {
  return (
    <section className="flex flex-col gap-y-6 rounded-2xl bg-gradient-to-r from-blue to-[#587DFF] p-8 text-pureWhite">
      <div>
        <h3 className="mb-2 font-semibold">Your BMI is...</h3>
        <p className="text-5xl font-semibold leading-[1.1] tracking-tighter">
          23.4
        </p>
      </div>
      <p className="leadin text-sm">
        Your BMI suggests you're a healthy weight. Your ideal weight is between{" "}
        <em className="font-bold not-italic">63.3kg - 82.3kg</em>
      </p>
    </section>
  );
};
