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
import { useEffect } from "react";

const CategoryWrapper = styled.div`margin-top:44px;display:flex; flex-direction:column; width:100%;`;
const CategoryTabs = styled.div` background-color:#f8f8f8; overflow-x: scroll;
overflow-y: hidden;
white-space: nowrap;`;
const CategoryTab = styled.div`display:inline-flex;width:22%;justify-content:center;align-items:center;height:44px; font-size:12px;
&.active{ font-weight:bold; font-size:14px;}
&.active:nth-child(1){color:rgb(0, 149, 246);}
&.active:nth-child(2){color:rgb(246, 149, 0);}
&.active:nth-child(3){color:rgb(149, 0, 246);}
&.active:nth-child(4){color:rgb(0, 200, 149);}
&.active:nth-child(5){color:rgb(246, 0, 149);}
&.active:nth-child(6){color:rgb(246, 149, 246);}
&.active:nth-child(7){color:rgb(0, 149, 246);}
&.active:nth-child(8){color:rgb(246, 149, 0);}
&.active:nth-child(9){color:rgb(149, 0, 246);}
&.active:nth-child(10){color:rgb(0, 200, 149);}
&.active:nth-child(11){color:rgb(246, 0, 149);}
&.active:nth-child(12){color:rgb(246, 149, 246);}
`;
const CategoryItemList = styled.div`display:flex;flex-direction:row;flex-wrap:wrap;overflow:hidden;`
const ProductItem = styled.div`display:inline-flex;width:33.33%;justify-content:center; align-items:center;flex-direction:column;
 margin-bottom:20px;

 > img{width:calc(100% - 2px); height:calc(100% - 2px)}
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
    const {products, setProducts, getProductWithProductId} = useProducts();
    const {category, setCategory} = useCategory();
    const {printPrice} = useUtilHook();
    const getProduct = getProductWithProductId;
    const {currentUser, setCurrentUser} = useCurrentUser();
    const {miniCart, setMiniCart, addProductCartDirect} = useMiniCart();
    
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
                    return (typeof CategoryId === "string" && (CategoryId === "ALL" || product.category === CATEGORY_NAME[CategoryId]) && <ProductItem key={idx}>
                        <img src={product.imgUrl} onClick={()=>{changeProduct(product.id)}}/>
                        <button onClick={()=>{addProductCartDirect(product.id)}}><span className="material-symbols-outlined">
                shopping_cart
              </span> 담기</button>
                        <div>
                            <p>{product.name}</p>
                            <span>{printPrice(product.price)}원</span>
                            <p>
                                <span>{(product.saleRate*100)}%</span>
                                <span>{printPrice(product.price * (1 - product.saleRate))} 원</span>
                            </p>

                        </div>
                        
                        </ProductItem>)
                })}
        </CategoryItemList>
    </CategoryWrapper>)
}