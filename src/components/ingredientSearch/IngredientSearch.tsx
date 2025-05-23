'use client'

import { useDataManager } from "@/context/DataManagerContext";
import { Ingredient } from "@/types/Ingredient";
import { useEffect, useState } from "react";
import EffectFilter from "./EffectFilter";
import { Effect } from "@/types/Effect";
import Checkbox from "../Checkbox";
import BackToTopButton from "../BackToTopButton";

interface IngredientSearchProps {
    onResultsChange: (results: Ingredient[]) => void;
}

const IngredientSearch: React.FC<IngredientSearchProps> = ({ onResultsChange }) => {
    const [nameInput, setNameInput] = useState("");
    const [selectedEffects, setSelectedEffects] = useState<(Effect | null)[]>([null, null, null, null]);
    const [includeAnniversary, setIncludeAnniversary] = useState(true);
    const dataManager = useDataManager();

    useEffect(() => {
        updateResults()
    }, [dataManager, nameInput, selectedEffects, includeAnniversary])

    const updateResults = () => {
        var results = dataManager.baseIngredients

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
    }

    const updateSelectedEffects = (effectIndex: number, newEffect: Effect | null) => {
        var effectList = [...selectedEffects];
        effectList[effectIndex] = newEffect;
        setSelectedEffects(effectList);
    }

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
            <div className="bg-menu p-2 pb-3.5 m-1 border rounded-lg min-w-75 w-1/3 flex flex-col items-center">
                {selectedEffects.map((_, index) => (
                    <EffectFilter key={index} onSubmit={(newEffect) => updateSelectedEffects(index, newEffect)} />
                ))}
            </div>
        </div>
    );
}

export default IngredientSearch;