import { useCategory } from "@/hook/categoryHook";
import { useMiniCart } from "@/hook/miniCartHook";
import { useProducts } from "@/hook/productHook";
import { useRecipe } from "@/hook/recipeHook";
import { useCurrentUser } from "@/hook/userHook";
import useUtilHook from "@/hook/utilHook";
import { CATEGORY_NAME, ICategory } from "@/state/category";
import { IProductType } from "@/state/product";
import { IRecipe } from "@/state/recipe";

import styled from '@emotion/styled'
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";

const CategoryWrapper = styled.div`margin-top:44px;display:flex; flex-direction:column; width:100%;`;
const CategoryTabs = styled.div` background-color:#f8f8f8; overflow-x: scroll;
overflow-y: hidden;
white-space: nowrap;`;
const CategoryTab = styled.div`display:inline-flex;width:22%;justify-content:center;align-items:center;height:44px; font-size:12px;
&.active{ font-weight:bold; font-size:14px; color:var(--TRYEAT-Orange)}
`;
const CategoryItemList = styled.div`display:flex;flex-direction:row;flex-wrap:wrap;overflow:hidden;`
const ProductItem = styled.div`display:inline-flex;width:50%;justify-content:center; align-items:center;flex-direction:column;
 margin-bottom:20px;

 > div.image{width:calc(100% - 2px); height:calc(100% - 2px)}
 button{width:100%;border:1px solid #c8c8c8; background:white;height:40px; font-size:11px; margin-top:2px;line-height:11px;}
 button>span{font-size:11px}
 > div {width:100%;padding:5px 0px;}
 > div > p:nth-child(1){display:block;text-align:left;width:100%;padding-left:2px;font-size:12px;height:16px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
 > div > span:nth-child(2){display:block; padding-left:2px; font-size:12px; text-decoration:line-through}
 > div > p> span:nth-child(1){padding-left:2px; font-size:14px; font-weight:bold;padding-right:5px; color:red;}
 > div > p> span:nth-child(2){font-size:14px; font-weight:bold;padding-right:20px;}
 `
export default function Category(){
    const router = useRouter()
    const {products, setProducts, getProductWithProductId,getProductPriceWithProductId, getProductSalePriceWithProductId, getSaleRate} = useProducts();
    const {category, setCategory} = useCategory();
    const {printPrice} = useUtilHook();
    const getProduct = getProductWithProductId;
    const {currentUser, setCurrentUser} = useCurrentUser();
    const {miniCart, setMiniCart, addProductCartDirect} = useMiniCart();
    let productLength = 0;
    
    const changeProduct = (productId:number) => {
      setCurrentUser({...currentUser, productId:productId,})
      router.push(`/product/${productId}`);
    }
    useEffect(()=>{
      setMiniCart({...miniCart, isButtonShow:false})
    },[]);
    const CategoryId = router.query.id;
    useEffect(()=>{
        console.log(CategoryId)
    },[router])

    return (<CategoryWrapper>
        <CategoryTabs>
            {category.map((category:ICategory, idx:number)=>{
                return <CategoryTab key={idx} className={category.engName === router.query.id ? "active":""} onClick={()=>{ router.push(`/category/${category.engName}`)}}>{category.name}</CategoryTab>
            })}
        </CategoryTabs>
        <CategoryItemList>
                {products.map((product:IProductType, idx:number)=>{
                    const price = getProductPriceWithProductId(product.id);
                    const salePrice = getProductSalePriceWithProductId(product.id);
                    const saleRate = getSaleRate(price!,salePrice!);
                    if(typeof CategoryId === "string" && (CategoryId === "ALL" || product.category === CATEGORY_NAME[CategoryId] || (CategoryId == "MIN" && product.isSale === true))){
                        productLength++
                    }
                    return (typeof CategoryId === "string" && (CategoryId === "ALL" || product.category === CATEGORY_NAME[CategoryId] || (CategoryId == "MIN" && product.isSale === true)) && <ProductItem key={idx}>
                        <div className="skeleton-item image" style={{"overflow":"hidden","display":"flex","alignItems":"center","justifyContent":"center","width":"calc(100% - 2px)","height":"200px","borderRadius":"5px"}}>
                            <img src={product.imgUrl} onClick={()=>{changeProduct(product.id)}} style={{width:"110%",height:"auto"}}/>
                        </div>
                        <button onClick={()=>{addProductCartDirect(product.id)}} style={{"borderRadius":"5px"}}>
                            <span className="material-symbols-outlined">
                shopping_cart
              </span> 담기</button>
                        <div>
                            <p>{product.name}</p>
                            <span>{printPrice(price!)}원</span>
                            <p>
                                <span>{(saleRate)}%</span>
                                <span>{printPrice(salePrice!)} 원</span>
                            </p>

                        </div>
                        
                        </ProductItem>)
                })}

                { productLength === 0 && <div style={{width:"100%", height:"75vh", display:"flex", alignItems:"center", justifyContent:"center"}}>
                좋은 상품으로 다시 찾아 뵐게요! 😀
                </div>}
        </CategoryItemList>
    </CategoryWrapper>)
}