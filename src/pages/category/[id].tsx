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
import Image from "next/image"
import CategoryProduct from "./categoryProduct";
const CategoryWrapper = styled.div`margin-top:44px;display:flex; flex-direction:column; width:100%;`;
const CategoryTabs = styled.div` background-color:#f8f8f8; overflow-x: scroll;
overflow-y: hidden;
white-space: nowrap;`;
const CategoryTab = styled.div`display:inline-flex;width:22%;justify-content:center;align-items:center;height:44px; font-size:12px;
&.active{ font-weight:bold; font-size:14px; color:var(--TRYEAT-Common)}
`;
const CategoryItemList = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-template-rows:1fr 1fr;
    gap:10px;
    margin:10px;
    `

export default function Category(){
    const router = useRouter()
    const {products, setProducts, getProductWithProductId,getProductPriceWithProductId, getProductSalePriceWithProductId, getSaleRate} = useProducts();
    const {category, setCategory} = useCategory();
    const {printPrice} = useUtilHook();
    const getProduct = getProductWithProductId;
    const {currentUser, setCurrentUser} = useCurrentUser();
    const {miniCart, setMiniCart, addProductCartDirect} = useMiniCart();
    const [productLength, setProductLength] = useState(0);
    const CategoryId = router.query.id;
    setTimeout(()=>{
        setProductLength(products.filter((product:IProductType)=>
            typeof CategoryId === "string" && (CategoryId === "ALL" || product.category === CATEGORY_NAME[CategoryId] || (CategoryId == "MIN" && product.isSale === true))
        ).length)
      },100)

    useEffect(()=>{
      setMiniCart({...miniCart, isButtonShow:false})
      
    },[]);
    useEffect(()=>{
    },[productLength])

    useEffect(() => {
        const handleRouteChange = (url:string, { shallow }:{shallow:boolean}) => {
          const CategoryId = url.split("/")[2]

          setProductLength(products.filter((product:IProductType)=>
            typeof CategoryId === "string" && (CategoryId === "ALL" || product.category === CATEGORY_NAME[CategoryId] || (CategoryId == "MIN" && product.isSale === true))
          ).length)
        }
        
        router.events.on('routeChangeStart', handleRouteChange)
     
        // If the component is unmounted, unsubscribe
        // from the event with the `off` method:
        return () => {
          router.events.off('routeChangeStart', handleRouteChange)
        }
      }, [router])

    return (<CategoryWrapper>
        <CategoryTabs>
            {category.map((category:ICategory, idx:number)=>{
                return <CategoryTab key={idx} className={category.engName === router.query.id ? "active":""} onClick={()=>{ router.push(`/category/${category.engName}`)}}>{category.name}</CategoryTab>
            })}
        </CategoryTabs>
        { productLength > 0 &&<CategoryItemList>
                {products.map((product:IProductType, idx:number)=><CategoryProduct product={product} idx={idx}/>)}

        </CategoryItemList>}

        { productLength === 0 && <div style={{width:"100%", height:"75vh", display:"flex", alignItems:"center", justifyContent:"center"}}>
                좋은 상품으로 다시 찾아 뵐게요! 😀
                </div>}
    </CategoryWrapper>)
}