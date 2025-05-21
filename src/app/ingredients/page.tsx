'use client'

import useDataManager from "@/hooks/useDataManager";
import IngredientsBlock from "@/components/IngredientsBlock";
import IngredientSearch from "@/components/ingredientSearch/IngredientSearch";
import { useState } from "react";
import { Ingredient } from "@/types/ingredient";

export default function IngredientsPage() {
    const [ingredients, setIngredients] = useState<Ingredient[]>([])
    const { dataManager } = useDataManager();

    if (!dataManager) return <div>Loading...</div>

    return (
        <div>
            <IngredientSearch onResultsChange={setIngredients}/>
            <div className="my-2"></div>
            <IngredientsBlock ingredients={ingredients} />
        </div>
    );
}