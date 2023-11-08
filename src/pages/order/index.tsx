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
    const thanks = [()=>{
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          })
    }, ()=>{
        var end = Date.now() + (5 * 1000);

        // go Buckeyes!
        var colors = ['#bb0000', '#ffffff'];
        
        (function frame() {
          confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
          });
          confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
          });
        
          if (Date.now() < end) {
            requestAnimationFrame(frame);
          }
        }());

    },()=>{
        var duration = 15 * 1000;
        var animationEnd = Date.now() + duration;
        var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min:number, max:number) {
        return Math.random() * (max - min) + min;
        }

        var interval:any = setInterval(function() {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        var particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);
    }]
    useEffect(()=>{

        const getRandomIndex = () =>Math.floor(Math.random() * 3);
        thanks[0]();
        const timer = setInterval(thanks[0],5000);
        setTimeout(()=>{
            router.push("/");
        },10000);
          return () => {
            clearInterval(timer);
          }
    },[])
    return (<CategoryWrapper>
        <div>주문해주셔서 감사합니다!</div>
    </CategoryWrapper>)
}