import { useProducts } from "@/hook/productHook";
import { useEffect } from "react";

export function Common(){
    const {products, setProducts} = useProducts();
    useEffect(()=>{
        
    },[])
    return <></>
}