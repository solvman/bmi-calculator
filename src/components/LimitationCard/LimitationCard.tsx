import { type TCard } from "@/utils/types";

interface LimitationCardProps {
  data: TCard;
}

function LimitationCard({ data }: LimitationCardProps) {
  return (
    <article className="relative flex flex-col justify-start gap-y-4 rounded-2xl bg-white p-6 shadow-card sm:col-span-2 sm:last:col-span-2 sm:last:col-start-2 lg:col-span-1 lg:first:col-start-2 lg:first:-translate-x-40 lg:last:col-span-1 lg:last:-translate-x-48 lg:[&:nth-last-child(2)]:-translate-x-48">
      <div className="flex gap-x-4">
        <img src={data.icon} className="h-8 w-8"></img>
        <h3 className="flex-grow text-xl font-semibold tracking-tighter text-gunmetal">
          {data.title}
        </h3>
      </div>
      <p className="text-dark-electric-blueBlue text-base font-normal leading-normal">
        {data.content}
      </p>
    </article>
  );
}

export default LimitationCard;
