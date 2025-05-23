import { Ingredient } from "@/types/Ingredient";
import PropertyIcon from "../ui/PropertyIcon";
import EffectProperty from "@/enums/EffectProperty";

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
                                <div className="space-x-2">
                                    {effect.magnitudeMult !== 1 && (
                                        <span>
                                            <PropertyIcon effectProperty={EffectProperty.Magnitude} tooltipText="Magnitude Multiplier" />
                                            &thinsp;x{effect.magnitudeMult}
                                        </span>
                                    )}
                                    {effect.durationMult !== 1 && (
                                        <span>
                                            <PropertyIcon effectProperty={EffectProperty.Duration} tooltipText="Duration Multiplier" />
                                            &thinsp;x{effect.durationMult}
                                        </span>
                                    )}
                                    {effect.valueMult !== 1 && (
                                        <span>
                                            <PropertyIcon effectProperty={EffectProperty.Value} tooltipText="Value Multiplier" />
                                            &thinsp;x{effect.valueMult}
                                        </span>
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