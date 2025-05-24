'use client'

import { useDataManager } from "@/context/DataManagerContext";
import { Ingredient } from "@/types/Ingredient";
import { useCallback, useEffect, useState } from "react";
import { Effect } from "@/types/Effect";
import Checkbox from "./Checkbox";
import BackToTopButton from "../ui/BackToTopButton";
import EffectSelector from "./EffectSelectorBlock";

interface IngredientSearchProps {
    onResultsChange: (results: Ingredient[]) => void;
}

const IngredientSearch: React.FC<IngredientSearchProps> = ({ onResultsChange }) => {
    const [nameInput, setNameInput] = useState("");
    const [selectedEffects, setSelectedEffects] = useState<(Effect | null)[]>([null, null, null, null]);
    const [includeAnniversary, setIncludeAnniversary] = useState(true);
    const dataManager = useDataManager();

    const updateResults = useCallback(() => {
        let results = dataManager.baseIngredients

        // Are AE ingredients to be included?
        if (includeAnniversary) {
            results = dataManager.baseIngredients.concat(dataManager.anniversaryIngredients)
            results.sort((a, b) => a.name.localeCompare(b.name));
        }

        // Filter by name
        results = results.filter((e) => e.name.toLowerCase().includes(nameInput.toLowerCase()));

        // Filter by selected effects
        results = results.filter((ingredient) =>
            selectedEffects
                .filter((selectedEffect) => selectedEffect != null)
                .every((selectedEffect) =>
                    ingredient.effects.some((effect: { effect: Effect; }) => effect.effect === selectedEffect)
                )
        );
        onResultsChange(results);
    }, [onResultsChange, dataManager, nameInput, selectedEffects, includeAnniversary]);

    useEffect(() => {
        updateResults();
    }, [updateResults])

    return (
        <div className="flex flex-col items-center">
            <BackToTopButton />
            <div className="flex justify-between w-9/10 mx-1 mb-1">
                <h1 className="text-2xl">Search</h1>
                {/* Include Anniversary Edition */}
                <Checkbox
                    label="Anniversary Edition"
                    checked={includeAnniversary}
                    onChange={setIncludeAnniversary}
                />
            </div>

            {/* Name Search */}
            <input
                placeholder="Filter name"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                className="search-bar w-80"
            />

            {/* Effect Search */}
            <EffectSelector
                size={4}
                onChange={(e) => setSelectedEffects(e)}
            />
        </div>
    );
}

export default IngredientSearch;