import { useCategory } from "@/hook/categoryHook";
import { useMiniCart } from "@/hook/miniCartHook";
import { useProducts } from "@/hook/productHook";
import { useCurrentUser } from "@/hook/userHook";
import useUtilHook from "@/hook/utilHook";
import { CATEGORY_NAME } from "@/state/category";
import { IProductType } from "@/state/product";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import styled from "@emotion/styled";

const CategoryProduct = ({product, idx}:{product:IProductType,idx:number}) =>{
    const router = useRouter()
    const {products, setProducts, getProductWithProductId,getProductPriceWithProductId, getProductSalePriceWithProductId, getSaleRate} = useProducts();
    const {category, setCategory} = useCategory();
    const {printPrice} = useUtilHook();
    const getProduct = getProductWithProductId;
    const {currentUser, setCurrentUser} = useCurrentUser();
    const {miniCart, setMiniCart, addProductCartDirect} = useMiniCart();
    
    const price = getProductPriceWithProductId(product.id);
    const salePrice = getProductSalePriceWithProductId(product.id);
    const saleRate = getSaleRate(price!,salePrice!);
    let productLength = 0;
    const ProductItem = styled.div`display:inline-flex;justify-content:center; align-items:center;flex-direction:column;
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


    const CategoryId = router.query.id;
    const [width,setWidth] = useState<number>(0);
    const [height,setHeight] = useState<number>(0);
    const [targetWidth,setTargetWidth] = useState<string>("120%");
    const [targetHeight,setTargetHeight] = useState<string>("auto");
    useEffect(()=>{
        console.log(CategoryId)
    },[router])

    useEffect(()=>{
        if(width > height){
            setTargetWidth("auto");
            setTargetHeight("120%");
        }
        if(width == height){
            setTargetWidth("120%");
            setTargetHeight("120%");
        }
    },[width,height])

    const changeProduct = (productId:number) => {
        setCurrentUser({...currentUser, productId:productId,})
        router.push(`/product/${productId}`);
      }

    if(typeof CategoryId === "string" && (CategoryId === "ALL" || product.category === CATEGORY_NAME[CategoryId] || (CategoryId == "MIN" && product.isSale === true))){
        productLength++
    }
    const test = ["auto","110%"]
    return (typeof CategoryId === "string" && (CategoryId === "ALL" || product.category === CATEGORY_NAME[CategoryId] || (CategoryId == "MIN" && product.isSale === true)) && <ProductItem key={idx}>
        <div className="skeleton-item image" 
        style={{"overflow":"hidden","display":"flex","alignItems":"center","justifyContent":"center","width":"calc(100% - 2px)","height":"180px","borderRadius":"5px",
                "backgroundImage":`url(${product.imgUrl})`,"backgroundRepeat":"no-repeat","backgroundSize":"cover","backgroundPositionY":"30%"
        }} onClick={()=>{changeProduct(product.id)}} >
            {/* <Image src={product.imgUrl} width={960} height={1180} onLoad={(e) => {
                let img:any = e.target;
                setWidth(img.width);
                setHeight(img.width);
            }} onClick={()=>{changeProduct(product.id)}} style={{"width":targetWidth,"height":targetHeight}} alt="test"/> */}
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
}

export default CategoryProduct