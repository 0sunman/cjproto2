import { compareProductState, ICompareProduct, IIngredient } from "@/state/product";
import { useRecoilState } from "recoil"
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import useUtilHook from "@/hook/utilHook";
const MinicartIngredient = styled.li`
margin:0 auto;
`
const MiniCartLeftArea = styled.div`
    display:flex; flex-wrap:wrap; flex-direction:row; align-items:center; justify-content:center;
        > div:nth-child(1){
            width:30%; overflow:hidden;
            > img{width:100%;}
        }
        > div:nth-child(2){ 
            width:70%; 
            > div:first-child{padding:5px 20px;}
            > div:nth-child(3) > span{display:inline-flex;flex-direction:row;align-items:center;justify-content:start}
            > div{padding-left:20px;}
            .addNumber{
                padding:10px 20px 0px;
                button{height:35px; width:35px; border:0;}
                input{height:35px; padding:0; margin:0; border:0; text-align:center; width:35px;}
            }
            .compare{
                padding:2px 20px;
                >span{
                    display:inline-flex;
                   align-items:center;
                }
            }
        }
    max-width:450px;
    margin-bottom:30px;
}`

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
            const realPrice = Ingredient.price - (Ingredient.saleRate ? Ingredient.price  * Ingredient.saleRate : 0)
            setCompareRate(Math.floor(100 - ((realPrice / compare.data[randomCompany]) * 100)))
        }else{
            setCompareRate(0);
        }
    },[compare])
    return <MinicartIngredient>
        <MiniCartLeftArea>
            <div>
                <img src={Ingredient.imgUrl}></img>
            </div>
            <div>
                <div style={{fontSize:"12px"}}>{Ingredient.name} </div>
                {compare && <div className="compare" style={{margin:"0px",fontSize:"10px"}}>
                        <HighLightRed>
                            {companyLogo(companyMark)} 
                            <span style={{paddingLeft:"5px"}}> {printPrice(comparePrice)}원 대비 </span>
                            <span style={{color:"red",fontSize:"13px",padding:"0px 1px 0px 3px"}}>{(compareRate)}</span>
                            <span> % 저렴 </span>
                        </HighLightRed>
                    </div>}

                    <div>
                    {printPrice(Ingredient.price * (1 - (Ingredient.saleRate !== undefined ? Ingredient.saleRate : 0)))}
                    <span style={{fontSize:"11px"}}>원</span> 
                    <span style={{fontSize:"11px",textDecoration:"line-through",color:"#a8a8a8", paddingLeft:"5px"}}>{printPrice(Ingredient.price)}원</span>
                </div>
                    <div className="addNumber">
                        <button onClick={() => minusIngredient(index)}>-</button>
                        <input type="text" value={Ingredient.amount}/>
                        <button onClick={() => plusIngredient(index)}>+</button>
                    </div>
            </div>
            
            
        </MiniCartLeftArea>
        </MinicartIngredient>
}