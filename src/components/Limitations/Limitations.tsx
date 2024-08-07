import { limitationCards } from "@/data/data";
import LimitationCard from "../LimitationCard";

const Limitations = () => {
  return (
    <section className="lg:before:bg-pattern-right relative mb-24 ml-5 mr-7 mt-16 max-w-[1160px] sm:mx-10 sm:my-24 lg:mx-auto lg:before:absolute lg:before:left-[190px] lg:before:top-[200px] lg:before:h-[200px] lg:before:w-[85px] lg:before:bg-cover">
      <div className="mb-14 flex flex-col gap-y-8 text-center lg:text-left">
        <h2 className="text-3xl font-semibold leading-8 tracking-tighter text-gunmetal lg:text-5xl">
          Limitations of BMI
        </h2>
        <p className="text-dark-electric-blueBlue text-base font-normal leading-normal lg:w-[47%] lg:max-w-[564px]">
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </div>
      <div className="flex flex-col gap-y-4 sm:grid sm:grid-cols-4 sm:gap-x-4 sm:gap-y-6 lg:-mt-60 lg:grid-cols-cards lg:justify-end">
        {limitationCards.map((card) => (
          <LimitationCard key={card.id} data={card} />
        ))}
      </div>
    </section>
  );
};
export default Limitations;
