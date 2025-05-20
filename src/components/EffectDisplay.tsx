import { Effect } from "@/types/effect";

interface EffectViewerProps {
    effect: Effect;
}

interface PropertyDisplayProps {
    descriptionText: string;
    valueText: any;
    isPos: boolean
}

const PropertyDisplay: React.FC<PropertyDisplayProps> = ({ descriptionText, valueText, isPos }) => {
    return (
        <p className={`${isPos ? "bg-pos-tint" : "bg-neg-tint"} rounded-lg px-4`}> {descriptionText}
            <span className="font-semibold"> {valueText} </span>
        </p>
    );
}

const EffectDisplay: React.FC<EffectViewerProps> = ({ effect }) => {
    return (
        <div className={`p-4 rounded-lg ${effect.isPos ? "pos" : "neg"}`}>
            <h3 className="text-xl font-semibold">{effect.name}</h3>

            <p className="mt-2">{effect.description}</p>
            <hr className="m-2" />
            <div className="grid grid-cols-2 gap-2 p-2">
                <PropertyDisplay descriptionText="Base Cost:" valueText={effect.baseCost} isPos={effect.isPos} />
                <PropertyDisplay descriptionText="Base Magnitude:" valueText={effect.baseMag} isPos={effect.isPos} />
                <PropertyDisplay descriptionText="Base Duration:" valueText={effect.baseDur} isPos={effect.isPos} />
                <PropertyDisplay descriptionText="Cost at 100:" valueText={effect.costAt100} isPos={effect.isPos} />
            </div>
        </div>
    );
};

export default EffectDisplay;