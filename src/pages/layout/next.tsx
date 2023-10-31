import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { MiniCart } from '@/component/minicart';
import { IProductType, productListState } from '@/state/product';
import { useMiniCart } from '@/hook/miniCartHook';
import Toast from '@/component/toast';
import { useCart } from '@/hook/cartHook';
import { useCurrentUser } from '@/hook/userHook';
import { useProducts } from '@/hook/productHook';

export default function NextLayout({children}:any){
    const router = useRouter();
    const {cart} = useCart();
    const {currentUser, setCurrentUser, setProductId, setRecipeId, setIngredientId} = useCurrentUser();
    const {currentProduct} = useProducts();
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
            {
              router.route.indexOf("/cart") > -1 ? "장바구니" :
              router.route.indexOf("/recipe") > -1 ? "레시피" :
              router.route.indexOf("/product") > -1 ? currentProduct.filter((ele:IProductType)=>ele.id === currentUser.productId ? true : false)[0].name:
              router.route.indexOf("/comment") > -1 ? "리뷰보기" : ""
            }
            
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