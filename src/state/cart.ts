import { atom, selector } from "recoil"
import { IProductType } from "./product"

export interface ICartProductType extends IProductType{
    isCheck:boolean
}

export interface ICart{
    productList?:ICartProductType[];
}

export const cartState = atom<ICart>({
    key:"cartState",
    default:{
        productList:[]
    }
})

export const getCartProductList = selector({
    key:"cartProductList",
    get:({get})=>(get(cartState).productList)
})