import { Effect } from "@/types/Effect";
import PropertyIcon from "./PropertyIcon";
import EffectProperty from "@/enums/EffectProperty";

interface EffectViewerProps {
    effect: Effect;
}

const EffectDisplay: React.FC<EffectViewerProps> = ({ effect }) => {
    return (
        <div className={`px-3 py-2 rounded-lg ${effect.isPos ? "pos" : "neg"}`}>
            <h3 className="font-bold">{effect.name}</h3>
            <p className="my-1">{effect.description}</p>
            <div className={`flex justify-evenly rounded-lg py-0.5
                ${effect.isPos ? "bg-pos-tint" : "bg-neg-tint"}`}
            >
                <PropertyIcon effectProperty={EffectProperty.Value} seperatorText="= " magnitude={effect.baseCost} tooltipText="Base Cost" />
                <PropertyIcon effectProperty={EffectProperty.Magnitude} seperatorText="= " magnitude={effect.baseMag} tooltipText="Base Magnitude" />
                <PropertyIcon effectProperty={EffectProperty.Duration} seperatorText="= " magnitude={effect.baseDur} tooltipText="Base Duration" />
            </div>
        </div>
    );
};

export default EffectDisplay;