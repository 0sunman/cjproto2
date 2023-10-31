import { toastState } from "@/state/toast"
import { useRecoilState } from "recoil"

export const useToast = () => {
    const [toast,useToast] = useRecoilState(toastState);
    const openToast = (message:string)=>{
        useToast({message, isVisible:true});
        setTimeout(()=>{
            offToast();
        },5000)
    }
    const onToast = () => { useToast({...toast, isVisible:true}) }
    const offToast = () => { useToast({...toast, isVisible:false}) }
    return {toast, openToast}
}