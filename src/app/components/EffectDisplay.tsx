import React from "react";
import { Effect } from "../types/effect";

interface EffectViewerProps {
    effect: Effect;
}

const EffectDisplay: React.FC<EffectViewerProps> = ({ effect }) => {
    return (
        <div className={`p-4 rounded-lg shadow-lg ${effect.isPos ? 'bg-green-500' : 'bg-red-500'}`}>
            <h3 className="text-xl font-semibold">{effect.name}</h3>

            <p className="text-white mt-2">{effect.description}</p>

            <div className="mt-2 space-y-1">
                <p className="text-white">Base Cost: {effect.baseCost}</p>
                <p className="text-white">Base Magnitude: {effect.baseMag}</p>
                <p className="text-white">Base Duration: {effect.baseDur}</p>
                <p className="text-white">Cost at 100: {effect.costAt100}</p>
            </div>
        </div>
    );
};

export default EffectDisplay;