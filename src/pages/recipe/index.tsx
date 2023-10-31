import { useProducts } from "@/hook/productHook";
import { useRecipe } from "@/hook/recipeHook";
import { IProductType } from "@/state/product";
import { IRecipe } from "@/state/recipe";

import styled from '@emotion/styled'
import { useRouter } from "next/router";

const RecipeWrapper = styled.div`
    margin:44px 0px;
    padding:10px 0px; 
    width:100%;
    > ul { display:flex; flex-direction:column; width:100%;}
`
const Header = styled.div`
    display:flex;
    width:100%; padding-bottom:10px; justify-content:center; align-items:center;
    > img {width:50px; height:50px; border-radius:50%; margin-left:10px;}
    > span:nth-child(2){margin-left:10px;}
    > span:nth-child(3){margin-left:auto; margin-right:10px;}
`
const RecipeMainImage = styled.img`
    width:100%;
`
const RecipeTag = styled.div`
    display:flex; justify-content:center; align-items:center; width:100%; padding:10px 0px; margin-bottom:5px;
    > div:nth-child(1) { width: 20%; padding-left:10px; text-align:center;}
    > div:nth-child(2) { width: 80%; text-align:right; padding-right:10px}
    > div:nth-child(2) > img { width:45px; height:45px; margin-right:5px;}
`
const RecipeTagTitle = styled.div``
const RecipeTagImages = styled.div``
const RecipeTagImage = styled.img``

const RecipeComment = styled.div``
const RecipeCommentHeart = styled.div`font-size:16px; font-weight:bold; padding:5px 10px; padding-bottom:10px;`
const RecipeComments = styled.div`font-size:16px; color:#a8a8a8; padding:0px 10px; padding-bottom:10px;`
const RecipeDate = styled.div`font-size:11px; color:#a8a8a8; padding:0px 10px; padding-bottom:40px;`

const RecipeButtons = styled.div`
    display:flex;
    > span {font-size:32px; padding:5px 10px; padding-top:0px}
    > span:last-child{margin-left:auto;}
`

export default function Recipe(){
    const router = useRouter()
    const {recipe, setRecipe} = useRecipe();
    const {products, setProducts, getProductWithProductId} = useProducts();
    const getProduct = getProductWithProductId;
    return (<RecipeWrapper>
        <ul>
            {recipe.recipes.map((innerRecipe:IRecipe)=>(<li>
                <Header>
                    <img src={innerRecipe.imgUrl}/>
                    <span>{innerRecipe.name}</span>
                    <span className="material-symbols-outlined">
                        more_horiz
                    </span>
                </Header>
                <div>
                    <RecipeMainImage src={innerRecipe.imgUrl}/>
                </div>
                <RecipeTag>
                    <RecipeTagTitle>
                        <span>#태그상품</span>
                    </RecipeTagTitle>
                    <RecipeTagImages>
                    {getProduct(innerRecipe.productId).taggingProduct?.map((productId:number)=>{
                        const product = getProduct(productId);
                        return (<RecipeTagImage src={product.imgUrl}/>)
                    })}
                    </RecipeTagImages>
                </RecipeTag>
                <RecipeButtons>
                    <span className="material-symbols-outlined">
                        favorite
                    </span>
                    <span className="material-symbols-outlined">
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