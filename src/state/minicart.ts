import { atom, selector } from "recoil";
import { userState } from "./user";

export interface IMiniCart{
    url:string;
    isButtonShow:boolean;
    isMenuShow:boolean;
}

export const getMiniCartButtonShow = selector({
    key:"getMiniCartButtonShow",
    get:({get})=>{
        const {isButtonShow}  = get(minicartState);
        const {url} = get(userState);
        if(/* url.indexOf("/product") > -1 ||*/ isButtonShow === true){
            return true;
        }else{
            return false;
        }
    }
})

export const getMiniCartMenuShow = selector({
    key:"getMiniCartMenuShow",
    get:({get})=>{
        const {isMenuShow} = get(minicartState);
        return isMenuShow;
    }
})

export const minicartState = atom({
    key:"miniCartState",
    default:{
        isButtonShow:false,
        isMenuShow:false
    }
})