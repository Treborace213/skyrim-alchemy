import { Effect } from "@/types/Effect";
import EffectDisplay from "./EffectDisplay";
import BackToTopButton from "../ui/BackToTopButton";

interface EffectDisplayComponentProps {
  effects: Effect[];
}

const EffectsBlock: React.FC<EffectDisplayComponentProps> = ({ effects }) => {
  return (
    <div className="w-full flex justify-center">
      <BackToTopButton />
      <div className="flex flex-col gap-2">
        {effects.map((effect, index) => (
          <EffectDisplay key={index} effect={effect} />
        ))}
      </div>
    </div>
  );
};

export default EffectsBlock;