import { type TCard } from "../../utils/types";

interface TipCardProps {
  data: TCard;
}

function TipCard({ data }: TipCardProps) {
  return (
    <div className="flex flex-col gap-y-6 px-6">
      <img src={data.icon} alt="eating icon" className="mb-2 h-16 w-16" />
      <h3 className="text-2xl font-semibold tracking-tighter">{data.title}</h3>
      <p className="font-normal leading-6 text-darkElectricBlue">
        {data.content}
      </p>
    </div>
  );
}

export default TipCard;
