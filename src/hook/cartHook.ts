import { ICartProductType, cartState } from "@/state/cart"
import { IProductType } from "@/state/product";
import { useRecoilState } from "recoil"

export const useCart = () => {
    const [cart, setCart] = useRecoilState(cartState);
    const {productList} = cart;
    const addProductToCart = (product:IProductType) =>{
        if(productList !== undefined){
            const temp = productList.map((ele)=>{ // Cart 형식으로 변환
                return {...ele, isCheck:true};
            })
            setCart({...cart, productList:[...temp,{...product,isCheck:true}]});
        }
    }
    const removeProduct = (id:number, callback?:Function) => {
        const [REMOVE, CONTINUE] = [false, true];
        if(callback !== undefined){
            if(productList !== undefined){
                callback({...cart, 
                    productList:productList.filter((ele)=>(
                        ele.id === id ? REMOVE : CONTINUE
                    ))
                })
            }
        }
        if(productList !== undefined){
            setCart({...cart, 
                productList:productList.filter((ele)=>(
                    ele.id === id ? REMOVE : CONTINUE
                ))
            })
        }
    }
    const modifyProduct = (id:number, property:Partial<IProductType>) => {
        if(productList !== undefined){
            setCart({...cart, 
                productList:productList.map((ele)=>(
                    ele.id === id ? {...ele, property} : {...ele}
                ))
            })
        }
    }
    const replaceProduct = (id:number, product:ICartProductType) => {
        if(productList !== undefined){
            setCart({...cart, 
                productList:productList.map((ele)=>(
                    ele.id === id ? {...product} : {...ele}
                ))
            })
        }
    }
    return {cart,useCart,addProductToCart,removeProduct,modifyProduct, replaceProduct}
}