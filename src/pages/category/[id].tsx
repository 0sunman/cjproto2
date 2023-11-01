import { useProducts } from "@/hook/productHook";
import { useRecipe } from "@/hook/recipeHook";
import { IProductType } from "@/state/product";
import { IRecipe } from "@/state/recipe";

import styled from '@emotion/styled'
import { useRouter } from "next/router";

export default function Category(){
    const router = useRouter()
    const {recipe, setRecipe} = useRecipe();
    const {products, setProducts, getProductWithProductId} = useProducts();
    const getProduct = getProductWithProductId;
    return (<>카테고리</>)
}