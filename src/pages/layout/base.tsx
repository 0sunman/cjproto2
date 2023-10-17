
import styles from '@/styles/Home.module.css'


export default function BaseLayout({children}:any){
    return(<>
        <div className={`${styles.Header}`}>
            <div>
                <span>EAZY</span>
            </div>
            <div className='default_icon'>
              <span className="material-symbols-outlined" onClick={(()=>{ alert("미개발 영역입니다.")})}>
                shopping_cart
              </span>
            </div>
            <div>
                
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
    </>)
}