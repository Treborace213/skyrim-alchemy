import { Effect } from "@/types/Effect";
import PropertyIcon from "./PropertyIcon";
import EffectProperty from "@/enums/EffectProperty";
import React from "react";

interface EffectViewerProps {
    effect: Effect;
}

const prettyDescription = (description: string): React.ReactNode => {
    const regex = /(<dur>|<mag>)/g;
    const parts = description.split(regex);

    return (
        <>
            {parts.map((part, index) => {
                switch (part) {
                    case "<dur>":
                        return <PropertyIcon key={index} effectProperty={EffectProperty.Duration} />;
                    case "<mag>":
                        return <PropertyIcon key={index} effectProperty={EffectProperty.Magnitude} />;
                    default:
                        return <React.Fragment key={index}>{part}</React.Fragment>
                }
            })}
        </>
    );
}

const EffectDisplay: React.FC<EffectViewerProps> = ({ effect }) => {
    return (
        <div className={`px-3 py-2 rounded-lg ${effect.isPos ? "pos" : "neg"}`}>
            <h3 className="font-bold">{effect.name}</h3>
            <div className="my-1">{prettyDescription(effect.description)}</div>
            <div className={`flex justify-evenly rounded-lg py-0.5
                ${effect.isPos ? "bg-pos-tint" : "bg-neg-tint"}`}
            >
                <PropertyIcon effectProperty={EffectProperty.Value} separatorText="= " magnitude={effect.baseCost} tooltipText="Base Cost" />
                <PropertyIcon effectProperty={EffectProperty.Magnitude} separatorText="= " magnitude={effect.baseMag} tooltipText="Base Magnitude" />
                <PropertyIcon effectProperty={EffectProperty.Duration} separatorText="= " magnitude={effect.baseDur} tooltipText="Base Duration" />
            </div>
        </div>
    );
};

export default EffectDisplay;