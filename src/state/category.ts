import { BreadSVG } from "@/component/SVG/bread"
import { MainSVG } from "@/component/SVG/main"
import { SaleSVG } from "@/component/SVG/sale"
import { SoupSVG } from "@/component/SVG/soup"
import { VegetableSVG } from "@/component/SVG/vegetable"
import { atom } from "recoil"

export interface ICategory{
    id:string,
    name:string,
    parent:string,
    engName:string,
    imgUrl:string,
    svg:Function
}
/*

    background-image: url(/new/kuk.png);
    background-repeat: no-repeat;
    background-size: 60%;
    background-position: center;

*/
export const CATEGORY_NAME:any = {
    "MIN"  :"10010000",
    "MAIN" :"10020000",
    "VEGET":"10030000",
    "KUKBC":"10040000",
    "BREAD":"10050000",
}
export const categoryState = atom<ICategory[]>({
    key:"categoryState",
    default:[{
        id:"10010000",
        name:"최저가도전",
        engName:"MIN",
        parent:"10000000",
        imgUrl:"/category/sale.svg",
        svg:SaleSVG
    },{
        id:"10020000",
        name:"메인요리",
        engName:"MAIN",
        parent:"10000000",
        imgUrl:"/category/main.svg",
        svg:MainSVG
    },{
        id:"10030000",
        name:"채소",
        engName:"VEGET",
        parent:"10000000",
        imgUrl:"/category/vegetable.svg",
        svg:VegetableSVG
    },{
        id:"10040000",
        name:"국·반찬",
        engName:"KUKBC",
        parent:"10000000",
        imgUrl:"/category/soup.svg",
        svg:SoupSVG
    },{
        id:"10050000",
        name:"치즈·델리",
        engName:"BREAD",
        parent:"10000000",
        imgUrl:"/category/bread.svg",
        svg:BreadSVG
    }]
})

