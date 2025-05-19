'use client'

import IngredientsBlock from "../components/IngredientsBlock";
import EffectsBlock from "../components/EffectsBlock";
import useDataManager from "@/hooks/useDataManager";

export default function Home() {
  const { dataManager } = useDataManager();

  if (!dataManager) {
    return <div>Loading...</div>
  }

  const combinedIngredients = [...dataManager.baseIngredients, ...dataManager.anniversaryIngredients];

  return (
    <div>
      <h1 className="text-4xl font-bold">Effects</h1>
      <EffectsBlock effects={dataManager.effects} />
      <h1 className="text-4xl font-bold">Ingredients</h1>
      <IngredientsBlock ingredients={combinedIngredients} />
    </div>
  );
}