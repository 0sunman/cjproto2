import { useToast } from "@/hook/toastHook";
import { ReactNode, useEffect, useState } from "react";


export default function Toast({children}:any){
    const {toast} = useToast();
    return (<div className="toast" style={{display:toast.isVisible ? "flex" : "none" }}>
            <p>
                {toast.message}
            </p>
    </div>)
} 