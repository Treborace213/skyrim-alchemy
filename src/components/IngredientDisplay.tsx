import { Ingredient } from "@/types/ingredient";
import { getBasePath } from "@/utils/basePath";
import ModifierIcon from "./ModifierIcon";

interface IngredientViewerProps {
    ingredient: Ingredient;
}

const IngredientBox: React.FC<IngredientViewerProps> = ({ ingredient }) => {
    const magnitudeIconPath = `${getBasePath()}/images/magnitudeIcon.png`;
    const durationIconPath = `${getBasePath()}/images/durationIcon.png`;
    const valueIconPath = `${getBasePath()}/images/valueIcon.png`;

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
                                        <ModifierIcon iconPath={magnitudeIconPath} label="Magnitude" multiplier={effect.magnitudeMult} />
                                    )}
                                    {effect.durationMult !== 1 && (
                                        <ModifierIcon iconPath={durationIconPath} label="Duration" multiplier={effect.durationMult} />
                                    )}
                                    {effect.valueMult !== 1 && (
                                        <ModifierIcon iconPath={valueIconPath} label="Value" multiplier={effect.valueMult} />
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