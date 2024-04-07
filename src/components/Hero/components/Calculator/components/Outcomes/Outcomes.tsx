import ResultBMI from "./components/ResultBMI";
import Welcome from "./components/Welcome";

interface OutcomesProps {
  bmi: number;
}

export const Outcomes = ({ bmi = 0 }: OutcomesProps) => {
  return (
    <section className="flex flex-col gap-y-6 rounded-2xl bg-gradient-to-r from-blue to-[#587DFF] p-8 text-pureWhite">
      {bmi > 0 ? <ResultBMI /> : <Welcome />}
    </section>
  );
};
