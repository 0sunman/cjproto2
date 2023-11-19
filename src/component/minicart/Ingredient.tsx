import { compareProductState, ICompareProduct, IIngredient } from "@/state/product";
import { useRecoilState } from "recoil"
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import useUtilHook from "@/hook/utilHook";

const MiniCartLeftArea = styled.div`display: flex; flex-direction: column; justify-content: center; align-items: baseline !important;
> div:nth-child(1){padding-bottom: 8px;}
> div:nth-child(2){font-size: 15px;}`

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
export function MiniIngredient({Ingredient,index,plusIngredient,minusIngredient}:{Ingredient:IIngredient,index:number,plusIngredient:Function,minusIngredient:Function}){
    const {printPrice} = useUtilHook();
    const [ingredient,setIngredient] = useState<IIngredient>(Ingredient);
    const [compareProduct,setcompareProduct] = useRecoilState<ICompareProduct[]>(compareProductState);
    const [compare, setCompare] = useState<ICompareProduct | null>(null);
    const [compareRate,setCompareRate] = useState(0);
    const [isCompare,setIsCompare] = useState(false);
    const [random, setRandom] = useState(0)
    const [randomCompany, setRandomCompany] = useState<"n"|"c"|"k">(random === 2 ? "n" : random == 1 ? "c" : "k")
    useEffect(()=>{
        console.log("compareProduct : "+compareProduct);
        setCompare(compareProduct && 
            compareProduct.filter((ele:ICompareProduct)=> {
                return Ingredient.name.indexOf(ele.name)>-1
            }).length > 0 ?
            compareProduct.filter((ele:ICompareProduct)=> Ingredient.name.indexOf(ele.name)>-1)[0]
            : null)
    })
    useEffect(()=>{
        console.log("compare : "+compare + " | "+ Ingredient.name)
        if(compare !== null){
            if(Ingredient)
            setIsCompare(true);
        }    
    },[compare]);
    useEffect(()=>{
        setRandom(Math.floor(Math.random() * 3));
    },[isCompare])
    useEffect(()=>{
        if(compare !== null){
        setRandomCompany(random === 2 ? "n" : random == 1 ? "c" : "k")
        }
    },[random])
    useEffect(()=>{
        if(compare !== null){
        setCompareRate(Math.floor(100 - (Ingredient.price / compare.data[randomCompany]) * 100))
        }
    },[randomCompany]);
    return <li>
        <MiniCartLeftArea>
        <div style={{fontSize:"12px"}}>{Ingredient.name} </div>
        <div>
            {printPrice(Ingredient.price * (1 - (Ingredient.saleRate !== undefined ? Ingredient.saleRate : 0)))}
            <span style={{fontSize:"11px"}}>원</span> 
            <span style={{fontSize:"11px",textDecoration:"line-through",color:"#a8a8a8", paddingLeft:"5px"}}>{printPrice(Ingredient.price)}원</span>
            {compare !== null && isCompare && <div style={{margin:"0px", fontSize:"10px","display":"flex",alignItems:"center",paddingTop:"10px" }}>
                 <div style={{display:"flex",alignItems:"center"}}>
                    {companyLogo(randomCompany)} 
                    <span style={{paddingLeft:"5px"}}> {printPrice(compare.data[randomCompany])}원 대비 </span>
                    <span style={{color:"red",fontSize:"13px",padding:"0px 1px 0px 3px"}}>{(compareRate)}</span>
                    <span> % 저렴 </span>
                </div>
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