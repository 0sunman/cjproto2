
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil';
import { productState } from '../../../public/state';

export default function NextLayout({children}:any){
    const router = useRouter();
    const [products, setProducts] = useRecoilState(productState);
    return(<>
        <div className={`${styles.Header}`}>
          
        <div className='default_icon'>
            <span className="material-symbols-outlined" onClick={()=>{
                  router.back();
                }}>
            arrow_back_ios
            </span>
          </div>
          <div className='default_icon'>
            <span className="material-symbols-outlined">
            shopping_cart
            </span>
          </div>
            <div>
                
            </div>
        </div>

        {children}
        
        <div className={`${styles.Footer2} buy`}>
            <button onClick={()=>{setProducts({...products,option:true})}} style={{display:`${products.option ? "none" : "block"}`}}>구매하기</button>
            <button onClick={()=>{setProducts({...products,option:true})}} style={{display:`${products.option ? "block" : "none"}`}}>
              [total_price] 원 구매하기
            </button>
        </div>
    </>)
}