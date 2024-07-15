import { type TCard } from "../../utils/types";

interface TipCardProps {
  data: TCard;
}

function TipCard({ data }: TipCardProps) {
  return (
    <div className="flex flex-col gap-y-6 px-6 md:m-0 md:flex-row md:items-center md:gap-x-10 lg:flex-col lg:items-start lg:gap-x-10">
      <img
        src={data.icon}
        alt="eating icon"
        className="mb-2 h-16 w-16 md:m-0"
      />
      <div className="md:flex md:flex-col md:gap-y-6">
        <h3 className="text-2xl font-semibold tracking-tighter text-gunmetal">
          {data.title}
        </h3>
        <p className="text-dark-electric-blueBlue font-normal leading-6">
          {data.content}
        </p>
      </div>
    </div>
  );
}

export default TipCard;
