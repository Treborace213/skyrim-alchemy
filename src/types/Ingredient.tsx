import { IngredientEffect } from "./IngredientEffect";

export type Ingredient = {
    name: string;
    effects: [IngredientEffect, IngredientEffect, IngredientEffect, IngredientEffect];
}