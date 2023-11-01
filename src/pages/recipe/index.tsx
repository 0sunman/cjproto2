import { useRecipeLayout } from "@/component/recipe";
import { useProducts } from "@/hook/productHook";
import { useRecipe } from "@/hook/recipeHook";
import { IProductType } from "@/state/product";
import { IRecipe } from "@/state/recipe";

import styled from '@emotion/styled'
import { useRouter } from "next/router";


export default function Recipe(){
    const {RecipeWrapper, Header,RecipeMainImage, RecipeTag,RecipeTagTitle,RecipeTagImages,RecipeTagImage, RecipeComment,RecipeCommentHeart,RecipeComments,RecipeDate,RecipeButtons} = useRecipeLayout();
    const router = useRouter()
    const {recipe} = useRecipe();
    const {getProductWithProductId} = useProducts();
    const getProduct = getProductWithProductId;
    return (<RecipeWrapper>
        <ul>
            {recipe.recipes.map((innerRecipe:IRecipe, idx:number)=>(<li key={idx}>
                <Header>
                    <img src={innerRecipe.companyImageURL}/>
                    <span>{innerRecipe.name}</span>
                    <span className="material-symbols-outlined">
                        more_horiz
                    </span>
                </Header>
                <div>
                    <RecipeMainImage src={innerRecipe.imgUrl} onClick={()=>{
                            router.push(`/product/${innerRecipe.productId}`);
                    }}/>
                </div>
                <RecipeTag>
                    <RecipeTagTitle>
                        <span>#태그상품</span>
                    </RecipeTagTitle>
                    <RecipeTagImages>
                    {getProduct(innerRecipe.productId).taggingProduct?.map((productId:number, idx:number)=>{
                        const product = getProduct(productId);
                        return (<RecipeTagImage key={idx} src={product.imgUrl} onClick={()=>{
                            router.push(`/product/${productId}`);
                        }}/>)
                    })}
                    </RecipeTagImages>
                </RecipeTag>
                <RecipeButtons>
                    <span className="material-symbols-outlined">
                        favorite
                    </span>
                    <span className="material-symbols-outlined" onClick={()=>{router.push(`/comment/${innerRecipe.productId}`)}}>
                        mode_comment
                    </span>
                    <span className="material-symbols-outlined">
                        share
                    </span>
                </RecipeButtons>
                <RecipeComment>
                    <RecipeCommentHeart>
                        좋아요 {999}만개
                    </RecipeCommentHeart>
                    <RecipeComments onClick={()=>{router.push(`/comment/${innerRecipe.productId}`)}}>
                        댓글 {1}만개 모두보기
                    </RecipeComments>
                    <RecipeDate>
                        10월 22일
                    </RecipeDate>
                </RecipeComment>

            </li>))}
        </ul>
    </RecipeWrapper>)
}