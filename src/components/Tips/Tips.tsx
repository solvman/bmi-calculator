import TipCard from "../TipCard";
import { tips } from "@/data/data";

const Tips = () => {
  return (
    <section className="bg-tips mx-auto  max-w-[1392px]  xl:rounded-[35px]">
      <div className="mx-auto flex max-w-[1160px] flex-col gap-y-10 pb-14 md:px-10 md:py-14 lg:flex-row lg:gap-x-10 lg:px-0">
        {tips.map((tip) => (
          <TipCard key={tip.id} data={tip} />
        ))}
      </div>
    </section>
  );
};
export default Tips;
