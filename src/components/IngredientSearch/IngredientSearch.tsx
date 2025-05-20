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
    const [selectedEffects, setSelectedEffects] = useState<Effect[]>([])
    const { dataManager } = useDataManager();

    useEffect(() => {
        updateResults()
    }, [dataManager, nameInput, selectedEffects])

    const updateResults = () => {
        if (dataManager) {
            var results = dataManager.baseIngredients.concat(dataManager.anniversaryIngredients)

            // Filter by name
            results = results.filter((e) => e.name.toLowerCase().includes(nameInput.toLowerCase()));

            // Filter by selected effects
            results = results.filter((ingredient) => selectedEffects.every((selectedEffect) => ingredient.effects.some((effect) => effect.effect === selectedEffect)))

            onResultsChange(results);
        }
    }

    return (
        <div className="flex flex-col h-screen bg-gray-800 w-200">
            {/* Name Search */}
            <input className="border-2 rounded-md" placeholder="Filter Name" value={nameInput} onChange={(e) => setNameInput(e.target.value)} />

            {/* Effect Search */}
            <EffectFilter onSelectedChange={setSelectedEffects}/>
        </div>
    );
}

export default IngredientSearch;