import { Ingredient } from "@/types/ingredient";
import ModifierIcon from "./ModifierIcon";
import EffectProperty from "@/Enums/EffectProperty";

interface IngredientViewerProps {
    ingredient: Ingredient;
}

const IngredientBox: React.FC<IngredientViewerProps> = ({ ingredient }) => {
    return (
        /*
        When changing the width styles, check the ingredient 'Thorn Hook' 
        as that has the longest effect name + modifiers
        */
        <div className="p-1 w-page-min">
            <h2 className="font-bold mb-2">{ingredient.name}</h2>

            <div className="grid gap-1">
                {ingredient.effects.map((effect, index) => {
                    return (
                        <div
                            key={index}
                            className={`px-2 py-1 rounded-lg ${effect.effect.isPos ? 'pos' : 'neg'}`}
                        >
                            <div className="flex justify-between">
                                <h3>{effect.effect.name}</h3>
                                <div className="space-x-1">
                                    {effect.magnitudeMult !== 1 && (
                                        <ModifierIcon effectProperty={EffectProperty.Magnitude} magnitude={effect.magnitudeMult} tooltipText="Magnitude Multiplier" />
                                    )}
                                    {effect.durationMult !== 1 && (
                                        <ModifierIcon effectProperty={EffectProperty.Duration} magnitude={effect.durationMult} tooltipText="Duration Multiplier" />
                                    )}
                                    {effect.valueMult !== 1 && (
                                        <ModifierIcon  effectProperty={EffectProperty.Value} magnitude={effect.valueMult} tooltipText="Value Multiplier" />
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default IngredientBox;