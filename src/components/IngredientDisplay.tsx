import { Ingredient } from "@/types/ingredient";
import { getBasePath } from "@/utils/basePath";

interface IngredientViewerProps {
    ingredient: Ingredient;
}

const IngredientBox: React.FC<IngredientViewerProps> = ({ ingredient }) => {
    const magnitudeIconPath = `${getBasePath()}/images/magnitudeIcon.png`;
    const durationIconPath = `${getBasePath()}/images/durationIcon.png`;
    const valueIconPath = `${getBasePath()}/images/valueIcon.png`;

    return (
        <div className="p-4 border rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">{ingredient.name}</h2>

            <div className="space-y-4">
                {ingredient.effects.map((effect, index) => {
                    return (
                        <div
                            key={index}
                            className={`p-4 rounded-lg ${effect.effect.isPos ? 'bg-green-700' : 'bg-red-700'}`}
                        >
                            <div className="space-x-4">
                                {/* Effect Name */}
                                <h3 className="text-lg font-semibold inline">{effect.effect.name}</h3>

                                {/* Magnitude Multiplier */}
                                {effect.magnitudeMult !== 1 && (
                                    <span className="inline space-x-2">
                                        <img src={magnitudeIconPath} alt="Magnitude Icon" className="w-6 h-6 inline" />
                                        <span className="text-white inline">x{effect.magnitudeMult}</span>
                                    </span>
                                )}

                                {/* Duration Multiplier */}
                                {effect.durationMult !== 1 && (
                                    <span className="inline space-x-2">
                                        <img src={durationIconPath} alt="Duration Icon" className="w-6 h-6 inline" />
                                        <span className="text-white inline">x{effect.durationMult}</span>
                                    </span>
                                )}

                                {/* Value Multiplier */}
                                {effect.valueMult !== 1 && (
                                    <span className="inline space-x-2">
                                        <img src={valueIconPath} alt="Value Icon" className="w-6 h-6 inline" />
                                        <span className="text-white inline">x{effect.valueMult}</span>
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