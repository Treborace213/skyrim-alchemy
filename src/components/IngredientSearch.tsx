'use client'

import useDataManager from "@/hooks/useDataManager";
import { Ingredient } from "@/types/ingredient";
import { useEffect, useState } from "react";

interface IngredientSearchProps {
    onResultsChange: (results: Ingredient[]) => void;
}

const IngredientSearch: React.FC<IngredientSearchProps> = ({onResultsChange}) => {
    const [input, setInput] = useState("");
    const { dataManager } = useDataManager();

    useEffect(() => {
        updateResults()
    }, [dataManager, input])

    const updateResults = () => {
        if (dataManager) {
            const ingredients = dataManager.baseIngredients.concat(dataManager.anniversaryIngredients)
            const results = ingredients.filter((e) => e.name.toLowerCase().startsWith(input.toLowerCase()));
            onResultsChange(results);
        }
    }

    return (
        <div className="flex flex-col h-screen bg-gray-800">
            <input className="border-2 rounded-md" placeholder="Filter Name" value={input} onChange={(e) => setInput(e.target.value)} />
        </div>
    );
}

export default IngredientSearch;