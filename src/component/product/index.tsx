import { useCart } from "@/hook/cartHook";
import { useMiniCart } from "@/hook/miniCartHook";
import { useProducts } from "@/hook/productHook";
import useUtilHook from "@/hook/utilHook";
import Image from "next/image";
import { TryEatLoader } from '@/component/Loading';
import { IProductType } from "@/state/product";
import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled/macro";
import { useRouter } from "next/router";

export function Product({product}:{product:IProductType}){
    const {changeProduct,getProductPriceWithProductId, getProductSalePriceWithProductId, getSaleRate} = useProducts();
    const {addProductCartDirect} = useMiniCart();
    const {printPrice} = useUtilHook();
    const [isLoading, setIsLoading] = useState(true);
    const [price, setPrice] = useState(getProductPriceWithProductId(product.id));
    const [salePrice, setSalePrice] = useState(getProductSalePriceWithProductId(product.id));
    const router = useRouter();
    useEffect(()=>{
      setPrice(price !== undefined ? price : 0)
    },[price])
    return  <div className="product" style={{margin:"10px"}}>
    <a onClick={() => changeProduct(product.id)}>  
      <div className={`image skeleton-item ${isLoading?"":"is-done"}`} style={{borderRadius:"5px",position:"relative",overflow:"hidden",height:"200px",display:"flex",alignItems:"center", justifyContent:"center", backgroundColor:"#f2f2f2"}}>
        <div style={{background:"red",zIndex:"10000",fontSize:"10px"}}>쿠폰</div>
        {
          (product.id === 10) ? 
          <video style={{height:"100%",width:"auto"}} onClick={()=>{
            router.push(`/product/10`);
          }} src={"/new/soup/1.mp4"} muted autoPlay playsInline loop/> :
          (product.id === 11) ? 
          <video className="modifyVideo" onClick={()=>{
            router.push(`/product/11`);
          }} src={"/new/ham/1.mp4"} muted autoPlay playsInline loop/>
          : product.imgUrl.indexOf("www.") > 1 ? 
          <img src={product.imgUrl} style={{"width":"150%","height":"auto","zIndex":"10"}} alt={product.description}  onLoad={()=>{setIsLoading(false)}}/>
          :
          <Image src={product.imgUrl} width={1200} height={1670} style={{"width":"150%","height":"auto","zIndex":"10"}} alt={product.description}  onLoad={()=>{setIsLoading(false)}}/>
        }
      </div>
    </a>
      <div className='button' style={{borderRadius:"5px"}}>
      <a onClick={() => addProductCartDirect(product.id)}>  
          <button>
            <span className="material-symbols-outlined">
              shopping_cart
            </span>
            <span>담기</span>
          </button>
      </a>
      </div>
      <div className='description'>
      <a onClick={() => changeProduct(product.id)}>  
      <div className='title'>{product.name}</div>
        <div className='price'>
          <div>{printPrice(price!)}원</div>
          <div>
            <span>{getSaleRate(price!,salePrice!)} %</span>&nbsp;
            <span>{printPrice(salePrice!)}원</span>
          </div>
        </div>
      </a>
      </div>
    </div>
}

