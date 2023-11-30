import { ICartProductType, cartState } from "@/state/cart"
import { IIngredient, IProductType } from "@/state/product";
import { useRecoilState } from "recoil"
import uuid from 'react-uuid';

export const useCart = () => {
    const [cart, setCart] = useRecoilState(cartState);
    const {productList} = cart;
    const addProductToCart = (product:IProductType,cartId:string) =>{
        if(productList !== undefined){
            const temp = productList.map((ele)=>{ // Cart 형식으로 변환
                return {...ele, isCheck:true};
            })
            setCart({...cart, productList:[...temp,{...product,isCheck:true,cartId}]});
        }
    }
    const removeProduct = (id:string, callback?:Function) => {
        const [REMOVE, CONTINUE] = [false, true];
        if(callback !== undefined){
            if(productList !== undefined){
                callback({...cart, 
                    productList:productList.filter((ele)=>(
                        ele.cartId === id ? REMOVE : CONTINUE
                    ))
                })
            }
        }
        if(productList !== undefined){
            setCart({...cart, 
                productList:productList.filter((ele)=>(
                    ele.cartId === id ? REMOVE : CONTINUE
                ))
            })
        }
    }
    const modifyProduct = (cartId:string, property:IProductType) => {
        if(productList !== undefined){

            setCart({...cart, 
                productList:productList.map((ele)=>(
                    ele.cartId === cartId ? {...ele, ...property} : {...ele}
                ))
            })
        }
    }
    // const modifyIngredient = (cartId:string,productId:number,property:string,value:any) => {
    //     if(productList !== undefined){
    //         setCart({...cart,
    //             productList:productList?.map((ele)=>{
    //                 const tempProduct = {...ele}
    //                 if(ele.cartId === cartId){
    //                     if(ele.ingredients){
    //                         tempProduct.ingredients = ele.ingredients.map(ingredient=>{
    //                             let temp = {...ingredient}
    //                             if(ingredient.id === productId){
    //                                 temp = {...ingredient,[property]:value}
    //                             }
    //                             return temp;
    //                         })
    //                     }
    //                 }
    //                 return tempProduct
    //             })
    //         })
    //     }
    // }
    const replaceProduct = (id:number, product:ICartProductType) => {
        if(productList !== undefined){
            setCart({...cart, 
                productList:productList.map((ele)=>(
                    ele.id === id ? {...product} : {...ele}
                ))
            })
        }
    }
    return {cart,setCart,addProductToCart,removeProduct,modifyProduct, replaceProduct}
}