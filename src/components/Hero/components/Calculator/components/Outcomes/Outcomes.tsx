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
    <section className="sm:rounded-outcomes bg-outcomes flex flex-col gap-x-4 gap-y-6 rounded-2xl p-8 text-white sm:flex-row sm:items-center">
      {bmi > 0 ? (
        <ResultBMI bmi={bmi} height={height} system={system} />
      ) : (
        <Welcome />
      )}
    </section>
  );
};
