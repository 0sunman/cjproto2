import { atom } from "recoil"

export interface ICategory{
    id:string,
    name:string,
    parent:string,
    engName:string,
    imgUrl:string
}
/*

    background-image: url(/new/kuk.png);
    background-repeat: no-repeat;
    background-size: 60%;
    background-position: center;

*/
export const CATEGORY_NAME:any = {
    "ALL":"10000000",
    "RECIPE":"10010000",
    "HMR":"10020000",
    "VEGETABLE":"10030000",
    "SAUCE":"10040000",
}
export const categoryState = atom<ICategory[]>({
    key:"categoryState",
    default:[{
        id:"10010000",
        name:"최저가도전",
        engName:"MIN",
        parent:"10000000",
        imgUrl:"/new/minimum.png"
    },{
        id:"10020000",
        name:"메인요리",
        engName:"MAIN",
        parent:"10000000",
        imgUrl:"/new/pona.png"
    },{
        id:"10030000",
        name:"국·반찬",
        engName:"KUK",
        parent:"10000000",
        imgUrl:"/new/kuk.png"
    },{
        id:"10040000",
        name:"치즈·델리",
        engName:"BREAD",
        parent:"10000000",
        imgUrl:"/new/bread.png"
    }]
})

