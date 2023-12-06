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
import Footer from '@/component/Footer';

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
          
          <div className='default_icon back_icon'>
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
              router.route.indexOf("/category") > -1 ? "카테고리" :
              router.route.indexOf("/comment") > -1 ? "리뷰보기" :
              router.route.indexOf("/order") > -1 ? "주문" :
              router.route.indexOf("/search") > -1 ? "검색" : ""
            }
            
          </div>
          <div className='default_icon cart-icon'>
          <svg onClick={(()=>{ router.push("/cart")})} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000"><path d="M9.00909 12.8752V5.62506C9.00909 3.62299 10.572 2 12.5 2C14.428 2 15.9909 3.62299 15.9909 5.62506V12.8752"></path><path d="M4.5 21.3749H20.5L19.396 9.1875H5.60403L4.5 21.3749Z"></path></svg>
            {/* <span className="material-symbols-outlined" onClick={(()=>{ router.push("/cart")})}>
            shopping_cart
            </span> */}
            <span>
              {cart.productList?.length}
            </span>
          </div>
        </div>

        {children}
        {!(router.route.indexOf("product") > -1 || router.route.indexOf("cart") > -1 ) && <Footer/>}
        <MiniCart></MiniCart>
        <Toast key={1}></Toast>

    </>)
}