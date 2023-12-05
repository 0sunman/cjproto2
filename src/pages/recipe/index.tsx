import { useRecipeLayout } from "@/component/recipe";
import { useProducts } from "@/hook/productHook";
import { useRecipe } from "@/hook/recipeHook";
import { IProductType } from "@/state/product";
import { IRecipe } from "@/state/recipe";

import styled from '@emotion/styled'
import { useRouter } from "next/router";


export default function Recipe(){
    const {RecipeWrapper, Header,RecipeMainImage,RecipeTagVideo, RecipeTag,RecipeTagTitle,RecipeTagImages,RecipeTagImage, RecipeComment,RecipeCommentHeart,RecipeComments,RecipeDate,RecipeButtons} = useRecipeLayout();
    const router = useRouter()
    const {recipe} = useRecipe();
    const {getProductWithProductId} = useProducts();
    const getProduct = getProductWithProductId;
    return (<RecipeWrapper>
        <ul>
            {recipe.recipes.map((innerRecipe:IRecipe, idx:number)=>{
                if(innerRecipe.id === 1 || innerRecipe.id === 2){
                    return (<li key={idx}>
                        <Header>
                            <img src={innerRecipe.companyImageURL}/>
                            <span>{innerRecipe.name}</span>
                            <span className="material-symbols-outlined">
                                more_horiz
                            </span>
                        </Header>
                        <div className="skeleton-item" style={{overflow:"hidden",height:"500px",minHeight:"100%", display:"flex", alignItems:"center", justifyContent:"center"}}>
                            {getProduct(innerRecipe.productId) !== undefined && 
                            getProduct(innerRecipe.productId).videos !== undefined && 
                            getProduct(innerRecipe.productId).videos?.length !== undefined && 
                            getProduct(innerRecipe.productId).videos!.length > 0 && 
                            <video style={{width:"100%"}} onClick={()=>{
                                router.push(`/product/${innerRecipe.productId}`);
                            }} src={"/mov/"+getProduct(innerRecipe.productId)!.videos![
                                Math.floor(getProduct(innerRecipe.productId)!.videos!.length * Math.random())
                            ]} muted autoPlay playsInline loop/>}
        
                            {
                            getProduct(innerRecipe.productId) !== undefined && 
                            getProduct(innerRecipe.productId).videos === undefined &&                     
                            <RecipeMainImage src={innerRecipe.imgUrl} onClick={()=>{
                                router.push(`/product/${innerRecipe.productId}`);
                            }}/>
                            }
        
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
                                좋아요 {100}+
                            </RecipeCommentHeart>
                            <RecipeComments onClick={()=>{router.push(`/comment/${innerRecipe.productId}`)}}>
                                댓글 {100}+ 모두보기
                            </RecipeComments>
                            <RecipeDate>
                                10월 22일
                            </RecipeDate>
                        </RecipeComment>
        
                    </li>)
                }else{
                    return (<></>)
                }
                })}
        </ul>
    </RecipeWrapper>)
}