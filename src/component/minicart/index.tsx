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
import styled from "@emotion/styled";


const MiniCartHRBar = styled.hr`width: 80%;margin: 20px auto;border-top: 1px solid rgba(200, 200, 200,.5);`
const MiniCartBigText = styled.p`font-weight: bold;font-size: 15px;padding-bottom: 10px;display: inline-block;display:block; `
const MiniCartHeader = styled.div`
display:flex; flex-direction:column; width:100%; align-items:center;justify-content:center; 
> div:nth-child(1){display:flex;width:75%;}
> div:nth-child(1) > div:nth-child(1){width:35%;display:flex;align-items:center;justify-content:start;}
> div:nth-child(1) > div:nth-child(1) .imgArea{width:75px;height:75px; display:flex; overflow:hidden; align-items:center; justify-content:center; border-radius:10px;}
> div:nth-child(1) > div:nth-child(2){width:65%;display:flex;align-items:center;justify-content:start;}
`;
const MiniCartTextBlock = styled.div`width: 80%;margin: 25px auto 20px auto;border: 1px solid rgb(200, 200, 200);padding: 10px;line-height: 19px;font-size: 13px;border-radius: 10px;text-align:center;width: 70%;`;
const MiniCartHeaderBottom = styled.div``;
const HighLightRed= styled.span`box-shadow: inset 0 -10px 0 #ffdce0; `
const HighLightGreen= styled.span`box-shadow: inset 0 -10px 0 #bfffa1; `
const HighLightBlue= styled.span`box-shadow: inset 0 -10px 0 #a8c7d6; `
const HighLightYellow= styled.span`box-shadow: inset 0 -10px 0 #fff5b1; `

const MiniCartLeftArea = styled.div`display: flex; flex-direction: column; justify-content: center; align-items: baseline !important;
> div:nth-child(1){padding-bottom: 8px;}
> div:nth-child(2){font-size: 15px;}`

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
        // setMiniCart({...miniCart})
    },[])


    const [currentIngredients, setCurrentIngredients] = useState(currentProduct?.ingredients);
    const [sum, setSum] = useState(0);
    const product = currentProduct
    const plusIngredient = (index:number) =>{
        if(currentIngredients !== undefined){
            setCurrentIngredients(currentIngredients.map((ele,idx)=>{
                if(idx === index){
                    return {...ele, amount:ele.amount+1}
                }
                return ele;
            }))
            if(10*Math.random() > 4){
                openToast(`<div> 
                    <p style="display:block;padding-bottom:15px;">[ ${product?.name} ]</p>
                    <span style="background-color:rgba(255,255,224,.9); color:black; line-height:21px; padding:0px 3px">3일 전에</span> 구매하셨는데,<br/>
                    재구매 하시겠습니까?"
                </div>`)
                
            }

        }
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
        

    useEffect(()=>{
        setCurrentIngredients(currentProduct?.ingredients)
    },[currentProduct])
    useEffect(()=>{
        if(typeof currentProduct?.saleRate === "number"){

            const sumIngredient = currentIngredients?.reduce((a:number, v:IIngredient)=>{
                a += (v.price * (1 - (v.saleRate !== undefined ? v.saleRate : 0))) * v.amount;
                return a;
            },0);
            if(typeof sumIngredient === "number"){
                setSum(sumIngredient);
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
                <MiniCartHeader>
                    <div>
                        <div>
                            <div className="imgArea skeleton-item">
                                <img src={product?.imgUrl} style={{width:"100%"}}/>
                            </div>
                        </div>
                        <div>{product?.name} 재료 담기</div>
                    </div>
                </MiniCartHeader>
                <div className='mini-cart-scroll'>
                        <MiniCartHRBar/>
                        <MiniCartTextBlock>
                            <MiniCartBigText><HighLightRed>"야채 값이 왜 이렇게 저렴한가요?"</HighLightRed></MiniCartBigText>
                                TRYEAT에서는 <HighLightGreen>맛과 품질은 우수</HighLightGreen>하지만<br/>
                                모양이 예쁘지 않아 버려지는 <HighLightYellow>못난이 농산물</HighLightYellow>을<br/>
                                이용해 <HighLightBlue>지구를 살리는 데에 동참</HighLightBlue>합니다.<br/>
                        </MiniCartTextBlock>
                    <ul>
                        {currentIngredients?.map((ingredient:IIngredient,index:number) => {
                            return <li key={index}>
                                <MiniCartLeftArea>
                                <div style={{fontSize:"12px"}}>{ingredient.name} </div>
                                <div>{printPrice(ingredient.price * (1 - (ingredient.saleRate !== undefined ? ingredient.saleRate : 0)))}<span style={{fontSize:"11px"}}>원</span> <span style={{fontSize:"11px",textDecoration:"line-through",color:"#a8a8a8", paddingLeft:"5px"}}>{printPrice(ingredient.price)}원</span></div>
                                
                                </MiniCartLeftArea>
                                <div>
                                    <button onClick={() => minusIngredient(index)}>-</button>
                                    <input type="text" value={ingredient.amount}/>
                                    <button onClick={() => plusIngredient(index)}>+</button>
                                </div>
                                </li>
                        })}
                        
                    </ul>

                    <MiniCartTextBlock style={{margin:"0 auto", marginBottom:"60px", textAlign:"center"}}>
                        <HighLightYellow>버려지는 농산물이 없도록</HighLightYellow><br/>
                        냉장고에 있는 <HighLightRed>식자재는 제외</HighLightRed>해주세요!
                    </MiniCartTextBlock>
                </div>
            </div>
                        
            <div className={` ${styles.Footer2} buy`} style={{display: isShowButton ? "flex" : "none"}}>
                <button onClick={()=>{setMiniCartMenu(true)}} style={{display:`${isShowMiniCart ? "none" : "block"}`}}>구매하기</button>
                <button onClick={()=>{
                            if(router.route.indexOf("/product")>-1){
                                setMiniCart({...miniCart, isMenuShow:false, isButtonShow:true});
                            }else{
                                setMiniCart({...miniCart, isMenuShow:false, isButtonShow:false});
                            }
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