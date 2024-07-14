import TipCard from "../TipCard";
import { tips } from "@/data/data";

const Tips = () => {
  return (
    <section className="from-[rgba(214, 230, 254, 1)] flex flex-col gap-y-10 bg-[linear-gradient(290deg,var(--tw-gradient-stops))] to-transparent pb-14">
      {tips.map((tip) => (
        <TipCard key={tip.id} data={tip} />
      ))}
    </section>
  );
};
export default Tips;
