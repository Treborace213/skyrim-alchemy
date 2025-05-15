import React from "react";
import { Ingredient } from "../types/ingredient";
import IngredientBox from "./IngredientDisplay";

interface IngredientDisplayComponentProps {
  ingredients: Ingredient[];
}

const IngredientsBlock: React.FC<IngredientDisplayComponentProps> = ({ ingredients }) => {
  return (
    <div className="grid gap-4">
      {ingredients.map((ingredient, index) => (
        <IngredientBox key={index} ingredient={ingredient} />
      ))}
    </div>
  );
};

export default IngredientsBlock;