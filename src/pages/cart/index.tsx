import { useCart } from "@/hook/cartHook";
import { useMiniCart } from "@/hook/miniCartHook";
import { useRecipe } from "@/hook/recipeHook";
import { useToast } from "@/hook/toastHook";
import useUtilHook from "@/hook/utilHook";
import { ICartProductType } from "@/state/cart";
import { IIngredient, IProductType } from "@/state/product";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Cart(){
    const router = useRouter();
    const {cart,setCart, removeProduct} = useCart();
    const [cartProductList, setCartProductList] = useState(cart.productList);
    const {openToast} = useToast();
    const {printPrice}=useUtilHook();
    const {miniCart, setMiniCart, addProductCartDirect} = useMiniCart();
    const setIngredientAmount = (product:IProductType, ingredient:IIngredient, delta:number) => {
        if(cartProductList){
            setCartProductList(cartProductList.map(innerProduct=>{
                let tempProduct = {...innerProduct}
                if(innerProduct.id === product.id){
                    tempProduct = {...tempProduct,ingredients:product.ingredients?.map(innerIngredient => {
                        let tempIntegredient = {...innerIngredient}
                        if(innerIngredient.id === ingredient.id){
                            if(delta > 0 || innerIngredient.amount > 0){
                                tempIntegredient = {...tempIntegredient, amount: innerIngredient.amount + delta}
                            }
                        }
                        return tempIntegredient;
                    })}    
                }
                return tempProduct;
            }))
        }
    }
    const calculateTotalPrice = () => {
        return cartProductList?.reduce(
            (pv:any,product:ICartProductType) => {
                let a = product.isCheck ? ((product?.ingredients?.reduce((previousValue:number, ingredient:IIngredient)=>{
                        previousValue = previousValue + ((ingredient.price * (1 - ingredient.saleRate!)) * ingredient.amount)
                        return previousValue;
                    },0) )) : 0;
                let b = pv;
                if(typeof a === "number"){
                    b += a;
                }
                return b
            },0)
    }
    const [TotalPrice, setTotalPrice] = useState(calculateTotalPrice())
    useEffect(()=>{
        setCartProductList(cart.productList)
    },[cart])
    useEffect(()=>{
        setTotalPrice(calculateTotalPrice())
    },[cartProductList])

    return <>
    <div className="cart">
        <ul className="cartList">
            {cartProductList?.map((product:ICartProductType, idx:number)=><li key={idx}>
                <div>
                    <div className="text">
                            <input type="checkbox" checked={product.isCheck} onClick={()=>{
                                setCartProductList(cartProductList.map((cartProduct:ICartProductType)=>{
                                    let temp = {...cartProduct}
                                    if(cartProduct.id === product.id){
                                        temp = {...temp, isCheck:!temp.isCheck};
                                    }
                                    return temp;
                                }))
                            }}/>
                            <span style={{fontSize:"15px"}}>{product.name}</span>
                            <span className="material-symbols-outlined close" onClick={()=>{ 
                                removeProduct(product.cartId);                                
                            }} style={{paddingRight:"15px"}}>
                                close
                            </span>
                        
                    </div>
                    <ul className="main">
                        <li>
                            <div className="image">
                                <img src={product.imgUrl}/>
                            </div>
                            <div className="description">
                                <ul style={{fontSize:"12px"}}>
                                    <li>
                                        <span>금액 : {
                                        product.ingredients && printPrice(product.ingredients?.reduce((previousValue:number, ingredient:IIngredient)=>{
                                            previousValue = previousValue + ((ingredient.price * (1 - ingredient.saleRate!))  * ingredient.amount)
                                            return previousValue;
                                        },0))} 원</span>
                                    </li>
                                    {product.ingredients?.map((ingredient:IIngredient, idx:number)=>(<li key={idx} className="detail">
                                        <span style={{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}>{ingredient.name}</span>
                                        <span className="price">{printPrice((ingredient.price * (1 - ingredient.saleRate!)) )} 원</span>
                                        <div className="amount">
                                            <div>
                                                <button onClick={()=>setIngredientAmount(product,ingredient,-1)}>-</button>
                                                <input type="text" value={ingredient.amount}></input>
                                                <button onClick={()=>setIngredientAmount(product,ingredient,1)}>+</button>
                                            </div>
                                        </div>
                                    </li>))}
                                </ul>
                                
                            </div>
                        </li>
                        <li>

                        </li>
                    </ul>
                </div>
                
                <ul>
                    
                </ul>
            </li>)}
        </ul>
        <div className="buy-button-wrapper" style={{height:"60px"}}>
            <button style={{borderRadius:"5px",height:"45px",fontSize:"12px"}} onClick={()=>{
                if(cartProductList?.length !== undefined && cartProductList?.length === 0){
                    openToast("물건이 아무것도 없어요!")
                }else{
                    setCart({productList:[]});
                    router.push("/order");
                }
            }}><span style={{fontSize:"18px"}}>{printPrice(TotalPrice)}</span> 원 <span style={{fontSize:"18px"}}>구매하기</span></button>
        </div>
    </div>
    </>
}