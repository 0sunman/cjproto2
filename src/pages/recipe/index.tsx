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
                            <svg clip-rule="evenodd" fill-rule="evenodd" fill="none" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px"><path d="m12 16.495c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25zm0-6.75c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25zm0-6.75c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25z"/></svg>
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/></svg>
                            <svg onClick={()=>{router.push(`/comment/${innerRecipe.productId}`)}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill-rule="evenodd" clip-rule="evenodd"><path d="M20 15c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m-3 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m-3 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m5.415 4.946c-1 .256-1.989.482-3.324.482-3.465 0-7.091-2.065-7.091-5.423 0-3.128 3.14-5.672 7-5.672 3.844 0 7 2.542 7 5.672 0 1.591-.646 2.527-1.481 3.527l.839 2.686-2.943-1.272zm-13.373-3.375l-4.389 1.896 1.256-4.012c-1.121-1.341-1.909-2.665-1.909-4.699 0-4.277 4.262-7.756 9.5-7.756 5.018 0 9.128 3.194 9.467 7.222-1.19-.566-2.551-.889-3.967-.889-4.199 0-8 2.797-8 6.672 0 .712.147 1.4.411 2.049-.953-.126-1.546-.272-2.369-.483m17.958-1.566c0-2.172-1.199-4.015-3.002-5.21l.002-.039c0-5.086-4.988-8.756-10.5-8.756-5.546 0-10.5 3.698-10.5 8.756 0 1.794.646 3.556 1.791 4.922l-1.744 5.572 6.078-2.625c.982.253 1.932.407 2.85.489 1.317 1.953 3.876 3.314 7.116 3.314 1.019 0 2.105-.135 3.242-.428l4.631 2-1.328-4.245c.871-1.042 1.364-2.384 1.364-3.75"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill-rule="evenodd" clip-rule="evenodd"><path d="M16.272 5.451c-.176-.45-.272-.939-.272-1.451 0-2.208 1.792-4 4-4s4 1.792 4 4-1.792 4-4 4c-1.339 0-2.525-.659-3.251-1.67l-7.131 3.751c.246.591.382 1.239.382 1.919 0 .681-.136 1.33-.384 1.922l7.131 3.751c.726-1.013 1.913-1.673 3.253-1.673 2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4c0-.51.096-.999.27-1.447l-7.129-3.751c-.9 1.326-2.419 2.198-4.141 2.198-2.76 0-5-2.24-5-5s2.24-5 5-5c1.723 0 3.243.873 4.143 2.201l7.129-3.75zm3.728 11.549c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm-15-9c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm15-7c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3z"/></svg>
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