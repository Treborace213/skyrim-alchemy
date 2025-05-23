import { Effect } from "@/types/Effect";
import PropertyIcon from "../ui/PropertyIcon";
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
            <div>{prettyDescription(effect.description)}</div>
            <div className={"mt-1 flex justify-evenly rounded-lg py-0.5 bg-darken-25"}
            >
                <div><PropertyIcon effectProperty={EffectProperty.Value} tooltipText="Base Cost" /> = {effect.baseCost}</div>
                <div><PropertyIcon effectProperty={EffectProperty.Magnitude} tooltipText="Base Magnitude" /> = {effect.baseMag}</div>
                <div><PropertyIcon effectProperty={EffectProperty.Duration} tooltipText="Base Duration" /> = {effect.baseDur}</div>
            </div>
        </div>
    );
};

export default EffectDisplay;