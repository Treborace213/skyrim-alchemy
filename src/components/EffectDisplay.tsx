import { Effect } from "@/types/effect";

interface EffectViewerProps {
    effect: Effect;
}

interface PropertyDisplayProps {
    descriptionText: string;
    valueText: any;
}

const PropertyDisplay: React.FC<PropertyDisplayProps> = ({ descriptionText, valueText }) => {
    return (
        <p className="bg-[rgba(64,64,64,0.3)] rounded-lg px-4"> {descriptionText}
            <span className="font-semibold"> {valueText} </span>
        </p>
    );
}

const EffectDisplay: React.FC<EffectViewerProps> = ({ effect }) => {
    return (
        <div className={`p-4 rounded-lg ${effect.isPos ? "bg-pos" : "bg-neg"}`}>
            <h3 className="text-xl font-semibold">{effect.name}</h3>

            <p className="text-white mt-2">{effect.description}</p>
            <hr className="m-2" />
            <div className="grid grid-cols-2 gap-2 p-2">
                <PropertyDisplay descriptionText="Base Cost:" valueText={effect.baseCost} />
                <PropertyDisplay descriptionText="Base Magnitude:" valueText={effect.baseMag} />
                <PropertyDisplay descriptionText="Base Duration:" valueText={effect.baseDur} />
                <PropertyDisplay descriptionText="Cost at 100:" valueText={effect.costAt100} />
            </div>
        </div>
    );
};

export default EffectDisplay;