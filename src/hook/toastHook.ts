import { toastState } from "@/state/toast"
import { ReactNode } from "react";
import { useRecoilState } from "recoil"

export const useToast = () => {
    const [toast,setToast] = useRecoilState(toastState);
    const openToast = (message:ReactNode|string)=>{
        if(typeof message === "string"){
            setToast({message, isVisible:true});
        }else{
            setToast({message,isVisible:true});
        }
        setTimeout(()=>{
            offToast();
        },5000)
    }
    const onToast = () => { setToast({...toast, isVisible:true}) }
    const offToast = () => { setToast({...toast, isVisible:false}) }
    return {toast, openToast}
}