import Image from "next/image";
import { Story } from "@/types";

type Props = {
  story: Story;
};

const StoryCard = ({ story }: Props) => {
  return (
    <div className="soft-card flex flex-col overflow-hidden rounded-2xl border border-emerald-100 bg-white">
      <div className="relative h-44 w-full">
        <Image
          src={story.image}
          alt={story.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="space-y-2 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
          {story.date}
        </p>
        <h3 className="text-lg font-semibold text-emerald-950">{story.title}</h3>
        <p className="text-sm text-emerald-800/80">{story.excerpt}</p>
      </div>
    </div>
  );
};

export default StoryCard;
