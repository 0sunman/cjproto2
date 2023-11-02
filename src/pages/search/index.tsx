import { useProducts } from "@/hook/productHook";
import { IProductType } from "@/state/product";
import styled from "@emotion/styled";
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


export default function Search(){
    // let 
    const [query, setQuery]= useState("");
    const [isCover,setCover] = useState(false)
    const [keyword,setKeyword] = useState("")
    const {products,changeProduct} = useProducts();
    const inputBox = useRef<HTMLInputElement>(null);
    
    useEffect(()=>{
        console.log("query : "+query)
    },[query])

    useEffect(()=>{
        const debounce = setTimeout(()=>{
            return setQuery(keyword);
        },1000)
        return ()=>clearTimeout(debounce);
    },[keyword])

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
                {products.map((product:IProductType)=>{
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