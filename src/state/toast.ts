import { ReactNode } from "react";
import { atom } from "recoil";

export interface IToast{
    isVisible:boolean;
    message:string|ReactNode;
}

export const toastState = atom<IToast>({
    key:"Toast",
    default:{
        isVisible:false,
        message:"TRYEAT"
    }
})