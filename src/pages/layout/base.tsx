import { MiniCart } from '@/component/minicart'
import Toast from '@/component/toast';
import { useCart } from '@/hook/cartHook';
import { useProducts } from '@/hook/productHook'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'

export default function BaseLayout({children}:any){
  const router = useRouter();
  const {cart} = useCart();
    return(<>
        <div className={`${styles.Header}`}>
            <div>
                <span>TRYEAT</span>
            </div>
            <div className='default_icon cart-icon'>
              <span className="material-symbols-outlined"  onClick={(()=>{ router.push("/cart")})}>
                shopping_cart
              </span>
              <span>
                {cart.productList?.length}
              </span>
            </div>
        </div>

        {children}
        
        <div className={`${styles.Footer}`}>
          <div className='default_icon'>
            <span className="material-symbols-outlined" onClick={(()=>{ location.href="/"})}>
            home
            </span>
          </div>
          <div className='default_icon'>
            <span className="material-symbols-outlined" onClick={(()=>{ alert("미개발 영역입니다.")})}>
            menu
            </span>
          </div>
          <div className='default_icon'>
            <span className="material-symbols-outlined" onClick={(()=>{ alert("미개발 영역입니다.")})}>
            search
            </span>
          </div>
          <div className='default_icon'>
           <span className="material-symbols-outlined" onClick={(()=>{ alert("미개발 영역입니다.")})}>
            account_circle
            </span>
          </div>
        </div>
        <MiniCart></MiniCart>
        <Toast key={1}></Toast>
    </>)
}