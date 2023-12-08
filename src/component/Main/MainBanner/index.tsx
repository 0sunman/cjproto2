import { useRecipeLayout } from "@/component/recipe";
import { useCart } from "@/hook/cartHook";
import { useMiniCart } from "@/hook/miniCartHook";
import { useProducts } from "@/hook/productHook";
import { IRecipe } from "@/state/recipe";
import styled from "@emotion/styled";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

const MainRecipe = styled.div`height:500px;overflow:hidden;width:100%;display:flex;align-items:center;justify-content:center`
const LongButton = styled.div`display:flex; align-items:center;
width:100%;height:55px; background-color:#fff; 
>span:nth-child(1){margin-right:auto;padding-left:20px;font-size:14px}
>span:nth-child(2){margin-left:auto;padding-right:10px;}
&:active{color:#000;background:var(--TRYEAT-Common)}box-shadow: 0px 2px 5px 0px #00000014;

`
const RecipeButton = styled.div`
    width:100px; background:#fff;
    padding:10px 20px 10px; border-radius:30px; font-size:13px;box-shadow: 2px 2px 2px 0px #D9D9D94D;

`

export function MainBanner({innerRecipe}:{innerRecipe:IRecipe}){
    const router = useRouter();
    const {addProductCartDirect} = useMiniCart();
    const {getProductWithProductId} = useProducts();
    const getProduct = getProductWithProductId;
    const [isLoading,setIsLoading] = useState(true);

    const {RecipeWrapper, Header,RecipeMainImage, RecipeTag,RecipeTagTitle,RecipeTagImages,RecipeTagImage, RecipeComment,RecipeCommentHeart,RecipeComments,RecipeDate,RecipeButtons} = useRecipeLayout();
    return <>
        <Header style={{paddingTop:"5px", position:"absolute", top:"10px",color:"white"}}>
            <img src={innerRecipe.companyImageURL}/>
            <span style={{textShadow: "#717171 0px 0px 5px"}}>{innerRecipe.name}</span>
            <span>
                
            </span>
        </Header>
    <MainRecipe>
        <MainRecipe className={`skeleton-item ${isLoading?"":"is-done"}`} style={{width:"100%",height:"700px",overflow:"hidden",display:"flex",alignItems:"center", justifyContent:"center"}} onClick={()=>{
                router.push(`/product/${innerRecipe.productId}`);
        }}>
        {
        innerRecipe.id === 4 ? 
        <Image className="m563p" src={innerRecipe.imgUrl} width={1200} height={1670} style={{"width":"auto","height":"100%"}} alt={innerRecipe.description} onLoad={()=>{setIsLoading(false)}}/>
        :
        innerRecipe.id === 3 ? 
        <Image src={innerRecipe.imgUrl} width={1200} height={1670} style={{"width":"auto","height":"105%"}} alt={innerRecipe.description} onLoad={()=>{setIsLoading(false)}}/>
        :
        innerRecipe.imgUrl.indexOf("www.") > 1 ? 
            <img src={innerRecipe.imgUrl} style={{"width":"100%","height":"auto"}} alt={innerRecipe.description} onLoad={()=>{setIsLoading(false)}}/>
        :
        innerRecipe.id === 1 ? 
        <Image src={innerRecipe.imgUrl} width={1200} height={1670} style={{"width":"100%","height":"auto"}} alt={innerRecipe.description} onLoad={()=>{setIsLoading(false)}}/>
        // <video onPlay={()=>{setIsLoading(false)}} src="./mov/5.mp4" style={{width:"100%",height:"auto"}} muted autoPlay loop playsInline></video> 
        : <Image src={innerRecipe.imgUrl} width={1200} height={1670} style={{"width":"100%","height":"auto"}} alt={innerRecipe.description} onLoad={()=>{setIsLoading(false)}}/>
        }
        </MainRecipe>
    </MainRecipe>
    <LongButton onClick={()=>{ addProductCartDirect(innerRecipe.productId)}}>
    <span>장바구니 바로담기</span>
    <span className="material-symbols-outlined">
        chevron_right
    </span>
    </LongButton>
    <RecipeTag style={{marginBottom:"0px"}}>
        <RecipeTagTitle>
            <RecipeButton>#태그상품</RecipeButton>
        </RecipeTagTitle>
        <RecipeTagImages>
        {getProduct(innerRecipe.productId) && getProduct(innerRecipe.productId).taggingProduct && getProduct(innerRecipe.productId).taggingProduct?.map((productId:number)=>{
            const product = getProduct(productId);
            return (<RecipeTagImage src={product.imgUrl} onClick={()=>{
                router.push(`/product/${productId}`);
            }}/>)
        })}
        </RecipeTagImages>
    </RecipeTag>
    </>
}