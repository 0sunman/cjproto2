import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router';


export default function Footer(){
    const router = useRouter();
    return (<div className={`${styles.Footer}`}>
    <div className='default_icon'>
      <span className="material-symbols-outlined" onClick={(()=>{ location.href="/"})}>
      home
      </span>
    </div>
    <div className='default_icon'>
      <span className="material-symbols-outlined" onClick={(()=>{ router.push("/search")})}>
      search
      </span>
    </div>
    <div className='default_icon'>
      <span className="material-symbols-outlined" onClick={(()=>{ router.push("/recipe")})}>
      dining
      </span>
    </div>
    <div className='default_icon'>
      <span className="material-symbols-outlined" onClick={(()=>{ router.push("/category/ALL")})}>
      menu
      </span>
    </div>
    <div className='default_icon'>
     <span className="material-symbols-outlined" onClick={(()=>{ alert("미개발 영역입니다.")})}>
      account_circle
      </span>
    </div>
  </div>)
}