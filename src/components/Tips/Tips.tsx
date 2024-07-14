import TipCard from "../TipCard";
import { tips } from "@/data/data";

const Tips = () => {
  return (
    <section className="flex flex-col gap-y-10 bg-[linear-gradient(290deg,var(--tw-gradient-stops))] from-[#D6E6FE]/25 to-transparent pb-14 md:px-10 md:py-14">
      {tips.map((tip) => (
        <TipCard key={tip.id} data={tip} />
      ))}
    </section>
  );
};
export default Tips;
