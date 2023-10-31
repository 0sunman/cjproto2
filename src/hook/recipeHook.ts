import { productListState } from "@/state/product";
import { getRecipeWithProductId, recipeState } from "@/state/recipe"
import { useRecoilState, useRecoilValue } from "recoil"

export const useRecipe = () => {
    const [recipe, setRecipe] = useRecoilState(recipeState);
    const getRecipe = useRecoilValue(getRecipeWithProductId);
    const [products, setProducts] = useRecoilState(productListState);

   

    return {recipe, setRecipe}
}