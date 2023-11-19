import { compareProductState, ICompareProduct, IIngredient } from "@/state/product";
import { useRecoilState } from "recoil"
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import useUtilHook from "@/hook/utilHook";

const MiniCartLeftArea = styled.div`display: flex; flex-direction: column; justify-content: center; align-items: baseline !important;
> div:nth-child(1){padding-bottom: 8px;}
> div:nth-child(2){font-size: 15px;}`

const HighLightRed= styled.span`box-shadow: inset 0 -10px 0 #ffdce0; `
const HighLightGreen= styled.span`box-shadow: inset 0 -10px 0 #bfffa1; `
const HighLightBlue= styled.span`box-shadow: inset 0 -10px 0 #a8c7d6; `
const HighLightYellow= styled.span`box-shadow: inset 0 -10px 0 #fff5b1; `

function companyLogo(n:string){
    let company = "/images/";
    switch(n){
        case "n":
            company = company.concat("nsa.png")
            break;
        case "k":
            company = company.concat("ksa.jpg")
            break;
        case "c":
            company = company.concat("csa.png")
            break;
    }

    return <img src={company} style={{paddingLeft:"2px", width:"17px",height:"17px",borderRadius:"50%"}}/>
}
export function MiniIngredient({Ingredient,index,plusIngredient,minusIngredient,compareProduct}:{Ingredient:IIngredient,index:number,plusIngredient:Function,minusIngredient:Function,compareProduct:ICompareProduct[]}){
    const {printPrice} = useUtilHook();

    const [compare,setCompare] = useState<ICompareProduct|null>(null);
    const [compareRate,setCompareRate] = useState<number>(0);
    const [comparePrice,setComparePrice] = useState<number>(0);
    const [companyMark,setCompanyMark] = useState<"n"|"c"|"k">("n");
    const random = Math.floor(Math.random() * 3)
    const randomCompany = random === 2 ? "n" : random == 1 ? "c" : "k"
    
    useEffect(()=>{
        const temp = compareProduct.filter((ele:ICompareProduct)=> Ingredient.name.indexOf(ele.name)>-1);
        if(temp.length >= 1){
            setCompare(temp[0]);
        }else{
            setCompare(null);
        }
    },[Ingredient]);
    useEffect(()=>{
        if(compare !== null){
            setCompanyMark(randomCompany);
            setComparePrice(compare.data[randomCompany]);
            setCompareRate(Math.floor(100 - ((Ingredient.price / compare.data[randomCompany]) * 100)))
        }else{
            setCompareRate(0);
        }
    },[compare])
    return <li>
        <MiniCartLeftArea>
        <div style={{fontSize:"12px"}}>{Ingredient.name} </div>
        <div>
            {printPrice(Ingredient.price * (1 - (Ingredient.saleRate !== undefined ? Ingredient.saleRate : 0)))}
            <span style={{fontSize:"11px"}}>원</span> 
            <span style={{fontSize:"11px",textDecoration:"line-through",color:"#a8a8a8", paddingLeft:"5px"}}>{printPrice(Ingredient.price)}원</span>
            {compare && <div style={{margin:"0px", fontSize:"10px","display":"flex",alignItems:"center",paddingTop:"10px" }}>
                 <HighLightYellow style={{display:"flex",alignItems:"center"}}>
                    {companyLogo(companyMark)} 
                    <span style={{paddingLeft:"5px"}}> {printPrice(comparePrice)}원 대비 </span>
                    <span style={{color:"red",fontSize:"13px",padding:"0px 1px 0px 3px"}}>{(compareRate)}</span>
                    <span> % 저렴 </span>
                </HighLightYellow>
            </div>}
            </div>
        </MiniCartLeftArea>
        <div>
            <button onClick={() => minusIngredient(index)}>-</button>
            <input type="text" value={Ingredient.amount}/>
            <button onClick={() => plusIngredient(index)}>+</button>
        </div>
        </li>
}