import { Effect } from "./effect";
import { Ingredient } from "./ingredient"

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

export class DataManager {
    effects: Effect[] = [];
    baseIngredients: Ingredient[] = [];
    anniversaryIngredients: Ingredient[] = [];

    private async loadEffects(): Promise<void> {
        try {
            const filePath = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/data/effects.json`;
            const response = await fetch(filePath);
            if (!response.ok) throw new Error(`Network response was not ok for path: ${filePath} (Status: ${response.status})`);
            const json = await response.json();

            this.effects = json.map((item: JsonEffect) => ({
                name: item.Effect,
                isPos: item.IsPos,
                description: item.Description,
                baseCost: item["Base Cost"],
                baseMag: item["Base Mag"],
                baseDur: item["Base Dur"],
                costAt100: item.CostAt100
            }));
        } catch (error) {
            console.error("Error loading effects:", error);
        }
    }

    private async getIngredients(filePath: string): Promise<Ingredient[]> {
        try {
            const response = await fetch(filePath);
            if (!response.ok) throw new Error(`Network response was not ok for path: ${filePath} (Status: ${response.status})`);
            const json = await response.json();

            return json.map((item: JsonIngredient) => ({
                name: item.name,
                effects: item.effects.map((effect: JsonIngredientEffect) => ({
                    effect: this.effects.find((e: Effect) => e.name === effect.name),
                    magnitudeMult: effect.magnitude,
                    durationMult: effect.duration,
                    valueMult: effect.value
                }))
            }));
        } catch (error) {
            console.error("Error loading ingredients:", error);
            return [];
        }
    }

    private async loadBaseIngredients() {
        this.baseIngredients = await this.getIngredients(`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/data/legendaryAndSpecialEdition.json`)
    }

    private async loadAnniversaryIngredients() {
        this.anniversaryIngredients = await this.getIngredients(`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/data/anniversaryEdition.json`);
    }

    async loadData() {
        await this.loadEffects();
        await this.loadBaseIngredients();
        await this.loadAnniversaryIngredients();
    }
}

export const dataManager = new DataManager();