import { Ingredient } from "../types/ingredient";

interface IngredientViewerProps {
    ingredient: Ingredient;
}

const IngredientBox: React.FC<IngredientViewerProps> = ({ ingredient }) => {
    return (
        <div className="p-4 border rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">{ingredient.name}</h2>

            <div className="space-y-4">
                {ingredient.effects.map((effect, index) => {
                    return (
                        <div
                            key={index}
                            className={`p-4 rounded-lg ${
                                effect.effect.isPos ? 'bg-green-500' : 'bg-red-500'
                            }`}
                        >
                            <h3 className="text-lg font-semibold">{effect.effect.name}</h3>

                            <div className="flex space-x-4 mt-2">
                                {effect.magnitudeMult !== 1 && (
                                    <span className="text-white">
                                        Magnitude Multiplier: {effect.magnitudeMult}
                                    </span>
                                )}
                                {effect.durationMult !== 1 && (
                                    <span className="text-white">
                                        Duration Multiplier: {effect.durationMult}
                                    </span>
                                )}
                                {effect.valueMult !== 1 && (
                                    <span className="text-white">
                                        Value Multiplier: {effect.valueMult}
                                    </span>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default IngredientBox;