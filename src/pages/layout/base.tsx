
import styles from '@/styles/Home.module.css'


export default function BaseLayout({children}:any){
    return(<>
        <div className={`${styles.Header}`}>
            <div>
                <span>EAZY</span>
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
        
        <div className={`${styles.Footer}`}>
          <div className='default_icon'>
            <span className="material-symbols-outlined">
            home
            </span>
          </div>
          <div className='default_icon'>
            <span className="material-symbols-outlined">
            menu
            </span>
          </div>
          <div className='default_icon'>
            <span className="material-symbols-outlined">
            search
            </span>
          </div>
          <div className='default_icon'>
           <span className="material-symbols-outlined">
            account_circle
            </span>
          </div>
        </div>
    </>)
}