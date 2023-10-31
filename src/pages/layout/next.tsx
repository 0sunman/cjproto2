import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { MiniCart } from '@/component/minicart';
import { productListState } from '@/state/product';
import { useMiniCart } from '@/hook/miniCartHook';
import Toast from '@/component/toast';
import { useCart } from '@/hook/cartHook';

export default function NextLayout({children}:any){
    const router = useRouter();
    const {cart} = useCart();
    const [products, setProducts] = useRecoilState(productListState);
    const {miniCart, setMiniCart} = useMiniCart();

    useEffect(()=>{
      return () => {
          setMiniCart({...miniCart, isMenuShow:false, isButtonShow:false});
      }
    },[])
    
    return (<>
        <div className={`${styles.Header}`}>
          
          <div className='default_icon'>
            <span className="material-symbols-outlined" onClick={()=>{
                  router.back();
                }}>
            arrow_back_ios
            </span>
          </div>
          <div className='title'>
            장바구니
          </div>
          <div className='default_icon cart-icon'>
            <span className="material-symbols-outlined" onClick={(()=>{ router.push("/cart")})}>
            shopping_cart
            </span>
            <span>
              {cart.productList?.length}
            </span>
          </div>
        </div>

        {children}

        <MiniCart></MiniCart>
        <Toast key={1}></Toast>

    </>)
}