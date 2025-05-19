import { IngredientEffect } from "./ingredientEffect";

export type Ingredient = {
    name: string;
    effects: [IngredientEffect, IngredientEffect, IngredientEffect, IngredientEffect];
}