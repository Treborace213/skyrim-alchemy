'use client'

import IngredientsBlock from "@/components/ingredients/IngredientsBlock";
import IngredientSearch from "@/components/search/ingredientSearch";
import { useState } from "react";
import { Ingredient } from "@/types/Ingredient";

export default function IngredientsPage() {
    const [ingredients, setIngredients] = useState<Ingredient[]>([])

    return (
        <div className="w-page-min">
            <IngredientSearch onResultsChange={setIngredients}/>
            <div className="my-2"></div>
            <IngredientsBlock ingredients={ingredients} />
        </div>
    );
}