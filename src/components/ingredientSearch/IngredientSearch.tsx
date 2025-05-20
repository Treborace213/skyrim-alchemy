'use client'

import useDataManager from "@/hooks/useDataManager";
import { Ingredient } from "@/types/ingredient";
import { useEffect, useState } from "react";
import EffectFilter from "./EffectFilter";
import { Effect } from "@/types/effect";

interface IngredientSearchProps {
    onResultsChange: (results: Ingredient[]) => void;
}

const IngredientSearch: React.FC<IngredientSearchProps> = ({ onResultsChange }) => {
    const [nameInput, setNameInput] = useState("");
    const [selectedEffects, setSelectedEffects] = useState<Effect[]>([]);
    const [includeAnniversary, setIncludeAnniversary] = useState(true);
    const { dataManager } = useDataManager();

    useEffect(() => {
        updateResults()
    }, [dataManager, nameInput, selectedEffects, includeAnniversary])

    const updateResults = () => {
        if (dataManager) {
            var results = dataManager.baseIngredients

            // Are AE ingredients to be included?
            if (includeAnniversary) {
                results = dataManager.baseIngredients.concat(dataManager.anniversaryIngredients)
            }

            // Filter by name
            results = results.filter((e) => e.name.toLowerCase().includes(nameInput.toLowerCase()));

            // Filter by selected effects
            results = results.filter((ingredient) => selectedEffects.every((selectedEffect) => ingredient.effects.some((effect) => effect.effect === selectedEffect)))

            onResultsChange(results);
        }
    }

    return (
        <div
            className="flex flex-col bg-menu w-200 sticky overflow-y-auto"
            style={{ top: `var(--navbar-height)`, height: 'calc(100vh - var(--navbar-height))' }}
        >
            <div className="flex">
                {/* Name Search */}
                <input className="border-2 rounded-md flex-grow" placeholder="Filter Name" value={nameInput} onChange={(e) => setNameInput(e.target.value)} />

                {/* Include Anniversary Edition */}
                <input type="checkbox" checked={includeAnniversary} onChange={(e) => setIncludeAnniversary(e.target.checked)} /><span>Anniversary Edition</span>
            </div>

            {/* Effect Search */}
            <EffectFilter onSelectedChange={setSelectedEffects} />
        </div>
    );
}

export default IngredientSearch;