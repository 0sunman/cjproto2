import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { useEffect } from 'react';

const FooterIcon = styled.div`
  display:inline-flex; flex-direction:column; justify-content:center; align-items:center;
  > span:nth-child(1){width:22px; height:22px;}
  > span:nth-child(2){width:100%; height:10px; text-align:center;font-size:10px;margin-top:4px;}
  .on{color:var(--TRYEAT-Common)}
`

export default function Footer(){
    const router = useRouter();
    useEffect(()=>{
      const scrollWheelEvent = (e:any)=> {
        const direction = e.deltaY > 0 ? "Scroll Down" : "Scroll Up";
        console.log(direction);
      }
      window.addEventListener("scroll", scrollWheelEvent);
      return ()=>{
        window.removeEventListener("scroll",scrollWheelEvent);
      }

    },[])
    return (<div className={`${styles.Footer}`}>
    <FooterIcon>
    <svg stroke="none" style={{marginTop:"0px"}} fill={(router.pathname === "/") ? "var(--TRYEAT-Common)" : ""} onClick={(()=>{ location.href="/"})} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="22px" height="22px"><path d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z"/></svg>

    <span style={{color:(router.pathname === "/") ? "var(--TRYEAT-Common)" : ""}} >홈</span>
      {/* <span className="material-symbols-outlined" onClick={(()=>{ location.href="/"})}>
      home
      </span> */}
    </FooterIcon>
    <FooterIcon>
      {/* <span className="material-symbols-outlined" onClick={(()=>{ router.push("/search")})}>
      search
      </span> */}
<svg style={{marginTop:"-1px"}} stroke={(router.pathname.indexOf("/search") > -1) ? "var(--TRYEAT-Common)" : "none"} fill={(router.pathname.indexOf("/search") > -1) ? "var(--TRYEAT-Common)" : ""} onClick={(()=>{ router.push("/search")})} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20px" height="22px"><path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"/></svg>
    <span style={{color:(router.pathname === "/search") ? "var(--TRYEAT-Common)" : ""}} >찾기</span>
    </FooterIcon>
    <FooterIcon>
    <svg style={{marginTop:"-2px"}} fill="none" stroke={(router.pathname.indexOf("/recipe") > -1) ? "var(--TRYEAT-Common)" : "#000"} onClick={(()=>{ router.push("/recipe")})} width="23px" height="23px" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg" ><path d="M18.2073 13.541C20.1009 13.0536 21.5 11.3347 21.5 9.28903C21.5 6.86437 19.5344 4.89879 17.1098 4.89879C16.7135 4.89879 16.3295 4.95128 15.9644 5.04969C15.2924 3.82794 13.9929 3 12.5 3C11.0071 3 9.7076 3.82793 9.03558 5.04968C8.67045 4.95127 8.28647 4.89878 7.89024 4.89878C5.46558 4.89878 3.5 6.86436 3.5 9.28903C3.5 11.3347 4.89914 13.0536 6.79269 13.541V21H18.2073V13.541Z"></path><line x1="6.75" y1="17" x2="18.25" y2="17"></line></svg>
      {/* <span className="material-symbols-outlined" onClick={(()=>{ router.push("/recipe")})}>
      dining
      </span> */}
          <span style={{color:(router.pathname === "/recipe") ? "var(--TRYEAT-Common)" : ""}} >레시피</span>
    </FooterIcon>
    <FooterIcon>
      <svg style={{marginTop:"0px"}} fill={(router.pathname.indexOf("/category") > -1) ? "var(--TRYEAT-Common)" : ""} onClick={(()=>{ router.push("/category/ALL")})} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="22px" height="22px"><path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"/></svg>
      {/* <span className="material-symbols-outlined" onClick={(()=>{ router.push("/category/ALL")})}>
      menu
      </span> */}
          <span style={{color:router.pathname.indexOf("/category") > -1 ? "var(--TRYEAT-Common)" : ""}} >카테고리</span>
    </FooterIcon>
    <FooterIcon>
    <svg style={{marginTop:"1px"}} onClick={(()=>{ alert("미개발 영역입니다.")})} width="16px" height="20px" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 6A5 5 0 1 1 4 6a5 5 0 0 1 10 0ZM4.39 11.5S6.156 13.316 9 13.316c2.844 0 4.61-1.816 4.61-1.816l.242.234c1.515 1.461 2.66 3.271 3.135 7.253.13 1.09-.705 2.013-1.741 2.013H2.753c-1.036 0-1.87-.923-1.74-2.013.475-3.982.698-5.485 3.21-7.366.064-.048.166-.121.166-.121Z" stroke="#000"></path></svg>
     {/* <span className="material-symbols-outlined" onClick={(()=>{ alert("미개발 영역입니다.")})}>
      account_circle
      </span> */}
          <span>사용자</span>
    </FooterIcon>
  </div>)
}