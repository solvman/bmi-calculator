export const ResultBMI = () => {
  return (
    <>
      <div>
        <h3 className="mb-2 font-semibold">Your BMI is...</h3>
        <p className="text-5xl font-semibold leading-[1.1] tracking-tighter">
          23.4
        </p>
      </div>
      <p className="text-sm">
        Your BMI suggests you're a healthy weight. Your ideal weight is between{" "}
        <strong>63.3kg - 82.3kg</strong>
      </p>
    </>
  );
};

export default ResultBMI;
