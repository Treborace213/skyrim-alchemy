'use client'

import { useEffect, useState } from "react";
import { DataManager, dataManager } from "./types/dataManager";
import IngredientsBlock from "./components/IngredientsBlock";
import EffectsBlock from "./components/EffectsBlock";

export default function Home() {
  const [data, setData] = useState<DataManager | null>(null);

  useEffect(() => {
    async function fetchEffects() {
      await dataManager.loadData();
      setData(dataManager);
    }
    fetchEffects();
  }, []);

  if (!data) {
    return <div>Loading...</div>; // Show loading until data is fetched
  }

  const combinedIngredients = [...data.baseIngredients, ...data.anniversaryIngredients];

  return (
    <div>
      <h1 className="text-4xl font-bold">Effects</h1>
      <EffectsBlock effects={data.effects} />
      <h1 className="text-4xl font-bold">Ingredients</h1>
      <IngredientsBlock ingredients={combinedIngredients} />
      </div>
  );
}