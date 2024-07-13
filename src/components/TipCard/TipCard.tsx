import eatingIcon from "../../assets/images/icon-eating.svg";
import { type TTip } from "../../utils/types";

interface TipCardProps {
  card: TTip;
}

function TipCard({ card }: TipCardProps) {
  return (
    <div className="flex flex-col gap-y-6 px-6">
      <img src={eatingIcon} alt="eating icon" className="mb-2 h-16 w-16" />
      <h3 className="text-2xl font-semibold tracking-tighter">
        Healthy eating
      </h3>
      <p className="font-normal leading-6 text-darkElectricBlue">
        Healthy eating promotes weight control, disease prevention, better
        digestion, immunity, mental clarity, and mood.
      </p>
    </div>
  );
}

export default TipCard;
