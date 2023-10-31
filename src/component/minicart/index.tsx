import { useProducts } from "@/hook/productHook";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styles from '@/styles/Home.module.css'
import { useRouter } from "next/router";
import { IIngredient, IProductType, getProduct } from "@/state/product";
import { useMiniCart } from "@/hook/miniCartHook";
import { useCurrentUser } from "@/hook/userHook";
import { useCart } from "@/hook/cartHook";
import useUtilHook from "@/hook/utilHook";
import { useToast } from "@/hook/toastHook";




export function MiniCart(){
    const router = useRouter();
    const {printPrice} = useUtilHook();
    const {products, setProducts} = useProducts();
    //index
    const currentProduct = useRecoilValue(getProduct);
    const {miniCart, setMiniCart,isMiniCartButtonShow, isMiniCartMenuShow,setMiniCartMenu,setMiniCartButton} = useMiniCart();
    const {addProductToCart}= useCart();
    const {setCurrentUrl} = useCurrentUser();
    const isShowButton = isMiniCartButtonShow;
    const isShowMiniCart = isMiniCartMenuShow;
    const {openToast} = useToast();

    useEffect(()=>{
        setCurrentUrl();
        setMiniCart({...miniCart})
        return () => {
            setMiniCart({...miniCart, isMenuShow:false, isButtonShow:false});
        }
    },[])

    const [currentIngredients, setCurrentIngredients] = useState(currentProduct?.ingredients);
    const [sum, setSum] = useState(0);
    const plusIngredient = (index:number) =>{
        if(currentIngredients !== undefined)
            setCurrentIngredients(currentIngredients.map((ele,idx)=>{
                if(idx === index){
                    return {...ele, amount:ele.amount+1}
                }
                return ele;
            }))
    }

    const minusIngredient = (index:number) =>{
        if(currentIngredients !== undefined)
            setCurrentIngredients(currentIngredients.map((ele,idx)=>{
                if(idx === index){
                    return {...ele, amount:ele.amount-1}
                }
                return ele;
            }))
    }
        
    const product = currentProduct

    useEffect(()=>{
        setCurrentIngredients(currentProduct?.ingredients)
    },[currentProduct])
    useEffect(()=>{
        if(typeof currentProduct?.saleRate === "number"){

            const sumIngredient = currentIngredients?.reduce((a:number, v:IIngredient)=>{
                a += v.price * v.amount;
                return a;
            },0);
            if(typeof sumIngredient === "number"){
                setSum(sumIngredient* (1 - currentProduct?.saleRate));
            }
        }
    },[currentIngredients])
    
    return <>
        <div className={`dimmed ${isShowMiniCart ? "on" : ""}`}></div>
            <div className={`Ingredients ${isShowMiniCart ? "on" : ""}`} >
                <div className='header'>
                    <ul>
                        <li style={{justifyContent:"end"}}>
                            <span className="material-symbols-outlined" onClick={()=>{setMiniCart({...miniCart, isMenuShow:false, isButtonShow:false});}} style={{paddingRight:"15px"}}>
                            close
                            </span>
                        </li>
                    </ul>
                </div>
                <div className='mini-cart-scroll'>
                    <ul>
                        {currentIngredients?.map((ingredient:IIngredient,index:number) => {
                            return <li>
                                <div>
                                {ingredient.name} 
                                </div>
                                <div>
                                    <button onClick={() => minusIngredient(index)}>-</button>
                                    <input type="text" value={ingredient.amount}/>
                                    <button onClick={() => plusIngredient(index)}>+</button>
                                </div>
                                </li>
                        })}
                        
                    </ul>
                </div>
            </div>
                        
            <div className={` ${styles.Footer2} buy`} style={{display: isShowButton ? "flex" : "none"}}>
                <button onClick={()=>{setMiniCartMenu(true)}} style={{display:`${isShowMiniCart ? "none" : "block"}`}}>구매하기</button>
                <button onClick={()=>{
                            setMiniCart({...miniCart, isMenuShow:false, isButtonShow:false});
                            if(currentProduct){
                                addProductToCart({...currentProduct, ingredients:currentIngredients})
                                openToast("장바구니에 담겼습니다!");
                            }
                        }} 
                        style={{display:`${isShowMiniCart ? "block" : "none"}`}}>
                {printPrice(sum)} 원 구매하기
                </button>
            </div>
        </>
}