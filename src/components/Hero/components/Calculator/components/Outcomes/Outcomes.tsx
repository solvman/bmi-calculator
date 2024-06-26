import ResultBMI from "./components/ResultBMI";
import Welcome from "./components/Welcome";
import type { System } from "@/utils/types";

interface OutcomesProps {
  bmi: number;
  height: number;
  system: System;
}

export const Outcomes = ({ bmi = 0, height, system }: OutcomesProps) => {
  return (
    <section className="flex flex-col gap-y-6 rounded-2xl bg-gradient-to-r from-blue to-[#587DFF] p-8 text-pureWhite">
      {bmi > 0 ? (
        <ResultBMI bmi={bmi} height={height} system={system} />
      ) : (
        <Welcome />
      )}
    </section>
  );
};
