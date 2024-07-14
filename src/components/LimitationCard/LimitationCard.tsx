import { type TCard } from "@/utils/types";

interface LimitationCardProps {
  data: TCard;
}

function LimitationCard({ data }: LimitationCardProps) {
  return (
    <article className="flex flex-col justify-start gap-y-4 rounded-2xl bg-pureWhite p-6 shadow-card last:col-span-2 last:col-start-2 sm:col-span-2">
      <div className="flex gap-x-4">
        <img src={data.icon} className="h-8 w-8"></img>
        <h3 className="flex-grow text-xl font-semibold tracking-tighter">
          {data.title}
        </h3>
      </div>
      <p className="text-base font-normal leading-normal text-darkElectricBlue">
        {data.content}
      </p>
    </article>
  );
}

export default LimitationCard;
