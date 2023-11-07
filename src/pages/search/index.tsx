import { useProducts } from "@/hook/productHook";
import { IProductType } from "@/state/product";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { MutableRefObject, RefObject, useEffect, useRef, useState } from "react";

const SearchWrapper = styled.div`margin-top:44px;display:flex; flex-direction:column; width:100%;
`;
const SearchInput = styled.div`position: fixed; top: 43px; width: 100%; background-color: white;
display:flex; justify-content:center; align-items:center; flex-direction:column;
> input{width:96%;border:0px;background-color:rgb(239, 239, 239);height:38px;border-radius:8px;margin:5px 0px; font-size:16px; padding-left:10px;}
`
const Cover = styled.div`position:absolute; display:flex;width:99%;border:0px;background-color:#c8c8c8;height:40px;border-radius:8px;margin:5px 0px;
   align-items:center;
   > span:nth-child(1){padding:0px 10px; font-size:20px;}
   > span:nth-child(2){font-size:16px;}
`
const SearchCover = styled.div`position:fixed; left:0; top:91px; width:100%; background:#ffffff; height:calc(100% - 88px);opacity:0;`
const SearchResult1 = styled.div`display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:100px 100px 100px;
padding-top:55px; padding-bottom: 44px;margin: 0px !important;
gap:1px;
> div{width:100%;height:100px;background-size:cover;background-position-x:50%;background-position-y:50%;}
> div:nth-child(01){grid-column:1/2;grid-row:1/3;height:200px;}
> div:nth-child(08){grid-column:3/4;grid-row:3/5;height:200px;}
> div:nth-child(11){grid-column:1/2;grid-row:5/7;height:200px;}
> div:nth-child(18){grid-column:3/4;grid-row:7/9;height:200px;}
> div:nth-child(21){grid-column:1/2;grid-row:9/11;height:200px;}
> div:nth-child(28){grid-column:3/4;grid-row:11/13;height:200px;}
> div:nth-child(31){grid-column:1/2;grid-row:13/15;height:200px;}
> div:nth-child(38){grid-column:3/4;grid-row:15/17;height:200px;}
`
const ResultElement = styled.div``

const Ad = [
    {url:"/product/1" , mov : "d_all_1.mp4"},
    {url:"/product/1" , mov : "d_six_1.mp4"},
    {url:"/product/1" , mov : "d_six_2.mp4"},
    {url:"/product/1" , mov : "d_six_3.mp4"},
    {url:"/product/1" , mov : "d_six_4.mp4"},
    {url:"/product/1" , mov : "d_six_5.mp4"},
    {url:"/product/1" , mov : "d_six_6.mp4"},
    {url:"/product/1" , mov : "d_six_7.mp4"},
    {url:"/product/2" , mov : "d_egg_1.mp4"},
    {url:"/product/2" , mov : "d_egg_2.mp4"},
    {url:"/product/2" , mov : "d_egg_3.mp4"},
];
    const Same:number[] = [];
    let Cnt = 0;
    let isAd = false;
    let isRun = false;
    const limit = 10;
    let AdIndex = Math.floor(Ad.length * Math.random())

    for(let i=0;i<5;i++){
        isRun = false;
        Cnt = 0;
        while(isRun === false && Cnt < limit){
            if(!isRun){
                AdIndex = Math.floor(Ad.length * Math.random())
            }
            for(let i=0;i<Same.length;i++){
                if(Same[i] === AdIndex){
                    isRun = false;
                    i = Same.length+1;
                }else{
                    isRun = true;
                }
            }
            if(!isRun){
                AdIndex = Math.floor(Ad.length * Math.random())
            }else{
                isRun = true;
            }
            Cnt++;
        }
        Same.push(AdIndex)
    }
    console.log(Same);
export default function Search(){
    // let 
    const router = useRouter();
    const [query, setQuery]= useState("");
    const [isCover,setCover] = useState(false)
    const [keyword,setKeyword] = useState("")
    const {products,changeProduct} = useProducts();
    const inputBox = useRef<HTMLInputElement>(null);
    const count = useRef<number>(-1);
    useEffect(()=>{
        console.log("query : "+query)
    },[query])

    useEffect(()=>{
        const debounce = setTimeout(()=>{
            return setQuery(keyword);
        },1000)
        return ()=>clearTimeout(debounce);
    },[keyword])
    useEffect(()=>{
        count.current = 0;
    },[])
    count.current = 0;
    return <SearchWrapper>
        <SearchInput>
            <Cover style={{display:isCover?"none":"flex"}} onClick={()=>{
                    inputBox.current?.focus();
                setCover(true);
                return false;
            }}>
                <span className="material-symbols-outlined">
                    search
                </span>
                <span>검색</span>
            
            </Cover>
            <input ref={inputBox} value={keyword} className="Search" type="text" placeholder={`검색`} onChange={(e)=>{setKeyword(e.target.value)}}/>
        </SearchInput>
        <div>
            <SearchCover style={{display:isCover?"block":"none"}} onClick={()=>{
                setCover(false);
            }} onMouseDown={()=>{setCover(true)}}
            >

            </SearchCover>
            <SearchResult1>
                {products.map((product:IProductType, index:number)=>{
                    
                    switch(index){
                        case 0:
                        case 7:
                        case 10:
                        case 17:
                            isAd=true;
                            count.current++;
                            break;
                        default:
                            isAd=false;
                    }
                    if(isAd) return (
                        <ResultElement style={{overflow:"hidden",display:"flex",alignItems:"center",justifyItems:"center"}} onClick={()=>{ router.push(Ad[Same[count.current]].url) }}>
                            <video src={"/mov/"+Ad[Same[count.current]].mov} style={{width:"100%"}} muted autoPlay playsInline loop/>
                        </ResultElement>
                    )
                    if(keyword === ""){
                        return (<ResultElement style={{backgroundImage:`url(${product.imgUrl})`}} onClick={()=>{ changeProduct(product.id) }}></ResultElement>)
                    }
                    if(typeof keyword === "string" && product.name.indexOf(keyword) > -1){
                        return (<ResultElement style={{backgroundImage:`url(${product.imgUrl})`}}></ResultElement>)
                    }else{
                        return ""
                    }
                })}
            </SearchResult1>
        </div>
    </SearchWrapper>
}