import { useProducts } from "@/hook/productHook";
import { useRecipe } from "@/hook/recipeHook";
import { IProductType } from "@/state/product";
import { IRecipe } from "@/state/recipe";

export default function Recipe(){
    const {recipe, setRecipe} = useRecipe();
    const {products, setProducts, getProductWithProductId} = useProducts();
    const getProduct = getProductWithProductId;
    return (<div className="recipeWrapper">
        <ul>
            {recipe.recipes.map((innerRecipe:IRecipe)=><li className="recipe">
                <div style={{backgroundSize:"cover",backgroundImage:`url(${innerRecipe.imgUrl})`,backgroundPosition:"50 50",height:"250px"}}>

                </div>
                <div className="taggingProducts">
                    <div>
                        <span>태그상품</span>
                    </div>
                    <div>
                {getProduct(innerRecipe.productId).taggingProduct?.map((productId:number)=>{
                    const product = getProduct(productId);
                    return (<img src={product.imgUrl}/>)
                })}</div>
                </div>
            </li>)}
        </ul>
    </div>)
}