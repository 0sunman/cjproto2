import { useProducts } from "@/hook/productHook";
import { useRouter } from "next/router";
import styled from '@emotion/styled'
import confetti from 'canvas-confetti';
import { useEffect } from "react";

const CategoryWrapper = styled.div`margin-top:44px;display:flex; flex-direction:column; width:100%; height:calc(100vh - 180px); align-items:center; justify-content:center;`;
export default function CategoryList(){
    const router = useRouter()
    const {getProductWithProductId} = useProducts();
    const getProduct = getProductWithProductId;
    useEffect(()=>{
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        })
        const timer = setInterval(() => confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          }),5000)
          setTimeout(()=>{
            router.push("/");
          },10000)
          return () => {
            clearInterval(timer);
          }
    },[])
    return (<CategoryWrapper>
        <div>주문해주셔서 감사합니다!</div>
    </CategoryWrapper>)
}