import { Effect } from "@/types/effect";
import EffectDisplay from "./EffectDisplay";

interface EffectDisplayComponentProps {
  effects: Effect[];
}

const EffectsBlock: React.FC<EffectDisplayComponentProps> = ({ effects }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col gap-4">
        {effects.map((effect, index) => (
          <EffectDisplay key={index} effect={effect} />
        ))}
      </div>
    </div>
  );
};

export default EffectsBlock;