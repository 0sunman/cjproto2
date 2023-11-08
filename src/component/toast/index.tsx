import { useToast } from "@/hook/toastHook";
import styled from "@emotion/styled";
import { ReactNode, useEffect, useState } from "react";


const ToastText = styled.p`text-align:center`

export default function Toast({children}:any){
    const {toast} = useToast();
    // if(typeof toast.message === "string"){
    //     return (<div className="toast" style={{display:toast.isVisible ? "flex" : "none" }}>
    //     <ToastText>
    //         {toast.message}
    //     </ToastText>
    //     </div>)

    // }else{
        
        return (<div className="toast" style={{display:toast.isVisible ? "flex" : "none" }}>
            <ToastText dangerouslySetInnerHTML={{__html:toast.message!}}>
            </ToastText>
        </div>)

    // }
} 