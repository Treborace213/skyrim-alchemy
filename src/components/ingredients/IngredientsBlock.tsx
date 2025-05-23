import { Ingredient } from "@/types/Ingredient";
import IngredientBox from "./IngredientDisplay";

interface IngredientDisplayComponentProps {
  ingredients: Ingredient[];
}

const IngredientsBlock: React.FC<IngredientDisplayComponentProps> = ({ ingredients }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col gap-1">
        {ingredients.map((ingredient, index) => (
          <IngredientBox key={index} ingredient={ingredient} />
        ))}
      </div>
    </div>
  );
};

export default IngredientsBlock;