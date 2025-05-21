import { Effect } from "@/types/effect";
import { Ingredient } from "@/types/ingredient";
import { IngredientEffect } from "@/types/ingredientEffect";
import { getBasePath } from "@/utils/basePath";

// Paths to the Json Files
const effectJsonPath = `${getBasePath()}/data/effects.json`;
const baseIngredientsPath = `${getBasePath()}/data/legendaryAndSpecialEdition.json`;
const anniversaryIngredientsPath = `${getBasePath()}/data/anniversaryEdition.json`


// Interfaces for mapping.
interface JsonEffect {
    Effect: string;
    IsPos: boolean;
    Description: string;
    "Base Cost": number;
    "Base Mag": number;
    "Base Dur": number;
    CostAt100: number;
}

interface JsonIngredientEffect {
    name: string;
    magnitude: number;
    duration: number;
    value: number;
}

interface JsonIngredient {
    name: string;
    effects: JsonIngredientEffect[];
}


// Main Class
export class DataManager {
    private _effects: Effect[] = [];
    private _baseIngredients: Ingredient[] = [];
    private _anniversaryIngredients: Ingredient[] = [];
    private _loaded: boolean = false;

    get effects() {
        return this._effects;
    }

    get baseIngredients() {
        return this._baseIngredients;
    }

    get anniversaryIngredients() {
        return this._anniversaryIngredients;
    }

    get loaded() {
        return this._loaded;
    }

    private async fetchAndMapData<T>(filePath: string, mapFn: (item: any) => T): Promise<T[]> {
        try {
            const response = await fetch(filePath);
            if (!response.ok) {
                throw new Error(`Network response was not ok for path: ${filePath} (Status: ${response.status})`);
            }
            const json = await response.json();
            return json.map(mapFn);
        } catch (error) {
            console.error(`Error loading data from ${filePath}:`, error);
            return [];
        }
    }

    private async getEffects(filePath: string): Promise<Effect[]> {
        const effects = await this.fetchAndMapData(filePath, (item: JsonEffect) => ({
            name: item.Effect,
            isPos: item.IsPos,
            description: item.Description,
            baseCost: item["Base Cost"],
            baseMag: item["Base Mag"],
            baseDur: item["Base Dur"],
            costAt100: item.CostAt100
        }));

        return effects;
    }

    private async getIngredients(filePath: string): Promise<Ingredient[]> {
        const ingredients = await this.fetchAndMapData(filePath, (item: JsonIngredient) => ({
            name: item.name,
            effects: item.effects.map((effect: JsonIngredientEffect) => ({
                effect: this._effects.find((e: Effect) => e.name === effect.name),
                magnitudeMult: effect.magnitude,
                durationMult: effect.duration,
                valueMult: effect.value
            })) as [IngredientEffect, IngredientEffect, IngredientEffect, IngredientEffect]
        }));

        return ingredients;
    }

    async loadData() {
        this._effects = await this.getEffects(effectJsonPath);
        
        this._baseIngredients = await this.getIngredients(baseIngredientsPath);
        this._anniversaryIngredients = await this.getIngredients(anniversaryIngredientsPath);

        this._loaded = true;
    }
}

export const dataManager = new DataManager();