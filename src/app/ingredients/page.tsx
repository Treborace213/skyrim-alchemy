'use client'

import useDataManager from "@/hooks/useDataManager";
import IngredientsBlock from "@/components/IngredientsBlock";

export default function IngredientsPage() {
    const { dataManager } = useDataManager();

    if (!dataManager) return <div>Loading...</div>

    const combinedIngredients = [...dataManager.baseIngredients, ...dataManager.anniversaryIngredients];

    return (
        <IngredientsBlock ingredients={combinedIngredients} />
    );
}